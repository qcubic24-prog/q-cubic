import { useState, useEffect } from 'react';

export default function AboutDiagram() {
  const [imageSrc, setImageSrc] = useState<string>('/assets/q-cubic-diagram.svg');

  useEffect(() => {
    let isMounted = true;

    // Potential paths if user uploaded or placed the image in public
    const candidateUrls = [
      '/Copy of ChatGPT Image Sep 22, 2026, 04_38_17 PM.png',
      '/Copy%20of%20ChatGPT%20Image%20Sep%2022,%202026,%2004_38_17%20PM.png',
      '/assets/Copy of ChatGPT Image Sep 22, 2026, 04_38_17 PM.png',
      '/assets/Copy%20of%20ChatGPT%20Image%20Sep%2022,%202026,%2004_38_17%20PM.png',
      '/about-visual.png',
      '/assets/about-visual.png',
      '/assets/q-cubic-diagram.svg',
    ];

    async function checkSources() {
      for (const url of candidateUrls) {
        if (url === '/assets/q-cubic-diagram.svg') continue;
        const exists = await new Promise<boolean>((resolve) => {
          const img = new Image();
          img.referrerPolicy = 'no-referrer';
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });

        if (exists && isMounted) {
          setImageSrc(url);
          return;
        }
      }
    }

    checkSources();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div
      id="q-cubic-visual"
      className="relative w-full max-w-[420px] aspect-square flex items-center justify-center select-none"
    >
      <img
        id="about-diagram-image"
        src={imageSrc}
        alt="Q-CUBIC Platform: Build, Scale, Connect, Automate"
        className="w-full h-auto object-contain rounded-[32px] drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
        referrerPolicy="no-referrer"
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
