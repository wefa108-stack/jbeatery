"use client";

import { useRef } from "react";
import Script from "next/script";

// Declare global type for the injected Resy widget script
declare global {
  interface Window {
    resyWidget?: {
      addButton: (element: HTMLElement, config: any) => void;
    };
  }
}

export default function ResyWidget() {
  const hiddenResyContainerRef = useRef<HTMLDivElement>(null);

  // This function is called when the embed.js script has finished loading
  const initResy = () => {
    if (window.resyWidget && hiddenResyContainerRef.current) {
      // Connect the Resy logic to the HIDDEN container instead of our visible button
      window.resyWidget.addButton(hiddenResyContainerRef.current, {
        venueId: process.env.NEXT_PUBLIC_RESY_VENUE_ID || "PLACEHOLDER_VENUE_ID",
        apiKey: process.env.NEXT_PUBLIC_RESY_API_KEY || "PLACEHOLDER_API_KEY",
        replace: false, // DO NOT replace the div, append inside it so it stays hidden
      });
    }
  };

  // Proxy the click from our beautiful button to the ugly hidden Resy button
  const handleCustomButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hiddenResyContainerRef.current) {
      const resyBtn = hiddenResyContainerRef.current.querySelector('button');
      if (resyBtn) {
        e.preventDefault(); // Stop standard link navigation
        resyBtn.click();    // Trigger the Resy Modal
        return;
      }
    }
    // If Resy failed to load, it falls through to the standard <a> tag href navigation
  };

  return (
    <>
      <Script 
        src="https://widgets.resy.com/embed.js" 
        strategy="lazyOnload" 
        onReady={initResy}
      />
      
      {/* Hidden container for Resy to do its ugly DOM manipulation without breaking our UI */}
      <div ref={hiddenResyContainerRef} className="hidden" aria-hidden="true" />
      
      <a
        href={process.env.NEXT_PUBLIC_RESY_FALLBACK_URL || "https://resy.com/"}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCustomButtonClick}
        className="font-mono font-light text-[12px] md:text-[14px] uppercase tracking-[0.08em] text-white mix-blend-difference hover:opacity-60 transition-opacity inline-block cursor-pointer"
      >
        Reservations
      </a>
    </>
  );
}
