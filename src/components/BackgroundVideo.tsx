import { useEffect, useRef } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4';
const SENSITIVITY = 0.75;
const DAMPING = 0.14; // Smooth exponential ease-out factor

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef<number>(0);
  const currentLerpTimeRef = useRef<number>(0);
  const prevXRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const velocityRef = useRef<number>(0);
  const lastSeekTimestampRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // High-performance RAF animation loop for silky-smooth 60/120fps video scrubbing
    const loop = (time: number) => {
      const video = videoRef.current;
      if (video && video.duration && !Number.isNaN(video.duration)) {
        // Inertial velocity glide when drag is released
        if (!isDraggingRef.current && Math.abs(velocityRef.current) > 0.0001) {
          targetTimeRef.current = Math.min(
            Math.max(targetTimeRef.current + velocityRef.current, 0),
            video.duration
          );
          velocityRef.current *= 0.88; // Gentle friction decay
        }

        const target = targetTimeRef.current;
        const current = currentLerpTimeRef.current;
        const diff = target - current;

        // Smoothly interpolate towards target
        if (Math.abs(diff) > 0.002) {
          currentLerpTimeRef.current = current + diff * DAMPING;

          // Seek when video is not actively seeking and at least 16ms has elapsed (~60fps ceiling)
          if (!video.seeking && time - lastSeekTimestampRef.current >= 16) {
            lastSeekTimestampRef.current = time;
            const timeToSet = currentLerpTimeRef.current;
            try {
              if ('fastSeek' in video && typeof (video as any).fastSeek === 'function') {
                (video as any).fastSeek(timeToSet);
              } else {
                video.currentTime = timeToSet;
              }
            } catch {
              video.currentTime = timeToSet;
            }
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    const handlePointerDown = (clientX: number) => {
      isDraggingRef.current = true;
      prevXRef.current = clientX;
      velocityRef.current = 0;
    };

    const handlePointerMove = (clientX: number) => {
      const video = videoRef.current;
      if (!video || !video.duration) return;

      if (prevXRef.current === null) {
        prevXRef.current = clientX;
        return;
      }

      const delta = clientX - prevXRef.current;
      prevXRef.current = clientX;

      const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
      velocityRef.current = timeOffset * 0.35; // Capture gesture momentum

      targetTimeRef.current = Math.min(
        Math.max(targetTimeRef.current + timeOffset, 0),
        video.duration
      );
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      prevXRef.current = null;
    };

    const onMouseDown = (e: MouseEvent) => {
      handlePointerDown(e.clientX);
    };

    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX);
    };

    const onMouseUp = () => {
      handlePointerUp();
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerDown(e.touches[0].clientX);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX);
      }
    };

    const onTouchEnd = () => {
      handlePointerUp();
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseleave', onMouseUp);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchcancel', onTouchEnd);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseleave', onMouseUp);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    // If target has progressed while seeking, seamlessly sync to the latest lerp position
    const diff = currentLerpTimeRef.current - video.currentTime;
    if (Math.abs(diff) > 0.03 && !video.seeking) {
      try {
        if ('fastSeek' in video && typeof (video as any).fastSeek === 'function') {
          (video as any).fastSeek(currentLerpTimeRef.current);
        } else {
          video.currentTime = currentLerpTimeRef.current;
        }
      } catch {
        video.currentTime = currentLerpTimeRef.current;
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const initialTime = videoRef.current.currentTime || 0;
      targetTimeRef.current = initialTime;
      currentLerpTimeRef.current = initialTime;
    }
  };

  return (
    <video
      ref={videoRef}
      id="background-video"
      src={VIDEO_URL}
      muted
      playsInline
      preload="auto"
      onSeeked={handleSeeked}
      onLoadedMetadata={handleLoadedMetadata}
      className="fixed inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-700"
      style={{
        objectFit: 'cover',
      }}
    />
  );
}
