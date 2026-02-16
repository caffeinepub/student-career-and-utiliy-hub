import { useEffect, useRef } from 'react';

/**
 * HighPerformanceFormat 728x90 banner component
 * Safely injects the ad script once per mount and cleans up on unmount
 */
export default function HighPerformanceBanner728x90() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptInjectedRef = useRef(false);

  useEffect(() => {
    // Prevent duplicate injection
    if (scriptInjectedRef.current || !containerRef.current) return;

    try {
      // Create the atOptions configuration script
      const configScript = document.createElement('script');
      configScript.type = 'text/javascript';
      configScript.text = `
        atOptions = {
          'key' : 'c9eb741a86b8d1ffcb90cdc69594632f',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;

      // Create the invoke script
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = 'https://www.highperformanceformat.com/c9eb741a86b8d1ffcb90cdc69594632f/invoke.js';
      invokeScript.async = true;

      // Handle script load errors gracefully
      invokeScript.onerror = () => {
        console.warn('HighPerformanceFormat ad script failed to load');
      };

      // Append scripts to container
      containerRef.current.appendChild(configScript);
      containerRef.current.appendChild(invokeScript);

      scriptInjectedRef.current = true;
    } catch (error) {
      console.warn('Error injecting HighPerformanceFormat ad:', error);
    }

    // Cleanup function
    return () => {
      if (containerRef.current) {
        // Remove all script tags and any generated iframes from container
        const scripts = containerRef.current.querySelectorAll('script');
        const iframes = containerRef.current.querySelectorAll('iframe');
        scripts.forEach(script => script.remove());
        iframes.forEach(iframe => iframe.remove());
      }
      scriptInjectedRef.current = false;
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex items-center justify-center min-h-[90px] w-full max-w-full overflow-hidden"
      aria-label="Advertisement"
    />
  );
}
