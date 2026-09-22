import { useState } from 'react';
import regeneratedLogo from '../assets/images/regenerated_image_1790083904321.png';
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
    return regeneratedLogo;
  });

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
        onError={() => {
          if (logoSrc !== '/assets/q-cubic-logo.svg') {
            setLogoSrc('/assets/q-cubic-logo.svg');
          }
        }}
      />
    </div>
  );
}
