import { useState, useEffect } from 'react';

export function useTypewriter(
  text: string,
  speed: number = 38,
  startDelay: number = 600
): { displayed: string; done: boolean } {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let intervalId: any = null;
    setDisplayed('');
    setDone(false);

    const timeoutId: any = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          setDone(true);
          if (intervalId !== null) {
            window.clearInterval(intervalId);
          }
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
