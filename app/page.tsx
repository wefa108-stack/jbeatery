import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#f3ece6] text-[#231916] overflow-x-hidden">
      {/* Hero Section (Warm Cream Beige Background with Direct Bottom Gradient Dissolve) */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* About & Footer Sections (Soft Light Cream Background #f8f2e9) */}
      <div className="relative z-10 w-full bg-[#f8f2e9] text-[#231916]">
        
        {/* About Section Content - Huiwen Mingcho Font */}
        <main id="about-section" className="relative z-10 w-full flex flex-col items-center pt-20 pb-20 md:pt-36 md:pb-32">
          <section className="flex flex-col justify-center items-center w-full px-6 md:px-12 max-w-3xl mx-auto text-center gap-12">
            
            {/* Header (No line divider) */}
            <div className="space-y-3 flex flex-col items-center">
              <h2 className="font-huiwen text-[#231916] font-normal text-3xl md:text-5xl uppercase tracking-[0.2em] leading-tight">
                About JBE
              </h2>
            </div>

            {/* Copy Paragraphs - Huiwen Mingcho Font (.font-huiwen) */}
            <div className="font-huiwen font-normal text-lg md:text-2xl text-[#3b2e28] leading-[2.2] md:leading-[2.5] tracking-[0.03em] space-y-8 md:space-y-12">
              <p>
                Located in the West Village, JBE brings together seasonal ingredients, thoughtful cooking, and genuine hospitality.
              </p>
              <p>
                Our menu combines French technique with the flavors and traditions of Asia. We create dishes that feel familiar yet distinctive—thoughtfully prepared, well-balanced, and made to be shared.
              </p>
              <p>
                From the first welcome to the last bite, every detail is considered with care. We hope each visit feels relaxed, memorable, and worth returning to.
              </p>
            </div>

            {/* Sign-off - Huiwen Mingcho Font (.font-huiwen) */}
            <div className="pt-6 md:pt-10 font-huiwen text-base md:text-xl text-[#3b2e28] tracking-[0.12em] space-y-2">
              <p className="font-normal">With warmth,</p>
              <p className="font-normal uppercase tracking-[0.25em] text-[#231916] text-sm md:text-base">from JBE.</p>
            </div>

            {/* Instagram Button */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/jbeaterynyc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#8c674b] hover:text-[#231916] bg-[#8c674b]/10 hover:bg-[#8c674b]/20 border border-[#8c674b]/30 transition-all duration-300 px-6 py-2.5 rounded-full shadow-xs hover:shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Follow @jbeaterynyc</span>
              </a>
            </div>

          </section>
        </main>
        
        {/* Clean Minimalist Footer with JBE SVG Logo */}
        <footer className="relative z-10 w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center text-center">
          <div className="flex flex-col items-center">
            {/* Footer SVG Logo */}
            <div className="w-20 h-20 md:w-28 md:h-28 mb-6 opacity-90">
              <Image
                src="/JBE-logo-darkbrown.svg"
                alt="JBE Logo"
                width={112}
                height={112}
                className="w-full h-full object-contain drop-shadow-xs"
              />
            </div>
            
            {/* Footer Address */}
            <div className="font-mono font-light text-[11px] md:text-xs tracking-[0.2em] text-[#3b2e28]/80 uppercase space-y-1 mb-6">
              <p>51 W 8th St</p>
              <p>west village . nyc</p>
            </div>

            {/* Footer Instagram Link */}
            <a
              href="https://www.instagram.com/jbeaterynyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8c674b] hover:text-[#231916] transition-colors opacity-90 hover:opacity-100"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            <p className="font-mono font-light text-[10px] tracking-[0.15em] text-[#3b2e28]/50 mt-8">
              &copy; {new Date().getFullYear()} JBE. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
