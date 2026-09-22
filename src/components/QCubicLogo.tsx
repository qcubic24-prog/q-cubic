import { useState, useEffect } from 'react';
import { LOGO_CONFIG, formatDriveUrl } from '../config/logoConfig';

interface QCubicLogoProps {
  id?: string;
  className?: string;
  alt?: string;
}

export default function QCubicLogo({
  id = 'qcubic-logo-image',
  className = 'h-11 sm:h-13 md:h-15 w-auto select-none',
  alt = 'Q-CUBIC',
}: QCubicLogoProps) {
  const [logoSrc, setLogoSrc] = useState<string>(() => {
    if (LOGO_CONFIG.imageUrl) {
      return formatDriveUrl(LOGO_CONFIG.imageUrl);
    }
    return '/assets/q-cubic-logo.svg';
  });

  useEffect(() => {
    let isMounted = true;

    // Check if a direct configured URL or a static file in public exists
    const candidateUrls = [
      LOGO_CONFIG.imageUrl ? formatDriveUrl(LOGO_CONFIG.imageUrl) : null,
      '/Untitled design (1).png',
      '/Untitled%20design%20(1).png',
      '/Untitled_design_1.png',
      '/assets/Untitled design (1).png',
      '/assets/Untitled%20design%20(1).png',
      '/assets/Untitled_design_1.png',
      '/logo.png',
      '/assets/logo.png',
      '/IMG_1194.PNG',
      '/assets/IMG_1194.PNG',
    ].filter(Boolean) as string[];

    async function findValidSource() {
      for (const url of candidateUrls) {
        const works = await new Promise<boolean>((resolve) => {
          const testImg = new Image();
          testImg.referrerPolicy = 'no-referrer';
          testImg.onload = () => resolve(true);
          testImg.onerror = () => resolve(false);
          testImg.src = url;
        });

        if (works && isMounted) {
          setLogoSrc(url);
          return;
        }
      }
    }

    findValidSource();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="inline-flex items-center" id={id}>
      <img
        src={logoSrc}
        alt={alt}
        className={`${className} transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]`}
        referrerPolicy="no-referrer"
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
