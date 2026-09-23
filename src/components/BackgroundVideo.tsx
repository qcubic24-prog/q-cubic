import { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 97;

function getFrameUrl(index: number): string {
  const num = String(index + 1).padStart(3, '0');
  return `/banner-frames/frame_${num}.webp`;
}

export default function BackgroundVideo() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const isLoadedRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));

  // Animation progress: 0 to 1
  const targetProgressRef = useRef<number>(0.5);
  const currentProgressRef = useRef<number>(0.5);
  const lastDrawnFrameRef = useRef<number>(-1);

  // Gesture tracking
  const prevXRef = useRef<number | null>(null);
  const lastActiveTimestampRef = useRef<number>(performance.now());
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // High-DPI canvas resize handling
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      lastDrawnFrameRef.current = -1; // Invalidate to redraw immediately
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let isCancelled = false;

    const renderCurrentFrame = (img: HTMLImageElement) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      // Positioning coordinates:
      // Desktop (>= 1024px): 70% X, 50% Y (places character on the right, text on the left)
      // Mobile & Tablet (< 1024px): 50% X, 36% Y (places character in upper portion, text at bottom)
      const isDesktop = w >= 1024;
      const focalX = isDesktop ? 0.70 : 0.50;
      const focalY = isDesktop ? 0.50 : 0.36;

      const naturalW = img.naturalWidth || 1280;
      const naturalH = img.naturalHeight || 724;
      const imgAspect = naturalW / naturalH;
      const canvasAspect = w / h;

      let drawW: number;
      let drawH: number;

      if (canvasAspect > imgAspect) {
        drawW = w;
        drawH = w / imgAspect;
      } else {
        drawH = h;
        drawW = h * imgAspect;
      }

      const drawX = (w - drawW) * focalX;
      const drawY = (h - drawH) * focalY;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
    };

    // Helper to find closest loaded frame
    const getBestAvailableImage = (targetIndex: number): HTMLImageElement | null => {
      if (isLoadedRef.current[targetIndex] && imagesRef.current[targetIndex]) {
        return imagesRef.current[targetIndex];
      }
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const left = targetIndex - offset;
        const right = targetIndex + offset;
        if (left >= 0 && isLoadedRef.current[left] && imagesRef.current[left]) {
          return imagesRef.current[left];
        }
        if (right < TOTAL_FRAMES && isLoadedRef.current[right] && imagesRef.current[right]) {
          return imagesRef.current[right];
        }
      }
      return imagesRef.current[0];
    };

    // Load initial first frame immediately for instant first-paint
    const firstImg = new Image();
    firstImg.decoding = 'async';
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[0] = firstImg;
      isLoadedRef.current[0] = true;
      renderCurrentFrame(firstImg);
    };

    // Preload all remaining frames in chunks to prevent network blocking
    const preloadAll = async () => {
      const priorityIndices: number[] = [];
      // Step 1: Every 4th frame for instant turnaround responsiveness
      for (let i = 0; i < TOTAL_FRAMES; i += 4) {
        if (i !== 0) priorityIndices.push(i);
      }
      // Step 2: Remaining frames
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (!priorityIndices.includes(i) && i !== 0) {
          priorityIndices.push(i);
        }
      }

      const batchSize = 8;
      for (let i = 0; i < priorityIndices.length; i += batchSize) {
        if (isCancelled) break;
        const batch = priorityIndices.slice(i, i + batchSize);
        await Promise.all(
          batch.map((idx) => {
            return new Promise<void>((resolve) => {
              const img = new Image();
              img.decoding = 'async';
              img.src = getFrameUrl(idx);
              img.onload = () => {
                if (!isCancelled) {
                  imagesRef.current[idx] = img;
                  isLoadedRef.current[idx] = true;
                }
                resolve();
              };
              img.onerror = () => resolve();
            });
          })
        );
      }
    };

    preloadAll();

    // 60 / 120 fps Animation Loop
    const loop = (time: number) => {
      // Gentle subtle breathing micro-sway when user has been idle for 3+ seconds
      const timeSinceActive = time - lastActiveTimestampRef.current;
      if (timeSinceActive > 3000) {
        const idleWave = Math.sin(time * 0.001) * 0.02;
        targetProgressRef.current = Math.min(1, Math.max(0, 0.5 + idleWave));
      }

      const target = targetProgressRef.current;
      const current = currentProgressRef.current;
      const diff = target - current;

      // Snappy and ultra-responsive damping (0.32 gives instant tracking with fluid momentum)
      if (Math.abs(diff) > 0.001) {
        currentProgressRef.current = current + diff * 0.32;
      } else {
        currentProgressRef.current = target;
      }

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1)))
      );

      if (frameIndex !== lastDrawnFrameRef.current) {
        const img = getBestAvailableImage(frameIndex);
        if (img) {
          renderCurrentFrame(img);
          lastDrawnFrameRef.current = frameIndex;
        }
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    // Instant cursor & gesture interaction
    const onPointerMove = (clientX: number) => {
      lastActiveTimestampRef.current = performance.now();

      if (prevXRef.current === null) {
        prevXRef.current = clientX;
        return;
      }

      const deltaX = clientX - prevXRef.current;
      prevXRef.current = clientX;

      // Both delta shake and absolute coordinate mapping:
      // Moving or shaking the cursor moves the character immediately with 0 delay!
      const normalizedX = Math.min(1, Math.max(0, clientX / window.innerWidth));
      const deltaInfluence = (deltaX / window.innerWidth) * 2.5;

      const nextTarget = Math.min(
        1,
        Math.max(0, targetProgressRef.current + deltaInfluence * 0.75 + (normalizedX - targetProgressRef.current) * 0.15)
      );

      targetProgressRef.current = nextTarget;
    };

    const handleMouseMove = (e: MouseEvent) => {
      onPointerMove(e.clientX);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        prevXRef.current = e.touches[0].clientX;
        lastActiveTimestampRef.current = performance.now();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onPointerMove(e.touches[0].clientX);
      }
    };

    const handlePointerEnd = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerEnd);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handlePointerEnd);
    window.addEventListener('touchcancel', handlePointerEnd);

    return () => {
      isCancelled = true;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handlePointerEnd);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handlePointerEnd);
      window.removeEventListener('touchcancel', handlePointerEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="background-canvas"
      className="fixed inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-500"
    />
  );
}
