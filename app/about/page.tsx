import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#f3ece6] text-[#231916] w-full min-h-screen flex flex-col items-center px-6 pt-36 pb-20 relative z-10">
      <div className="w-16 h-16 mb-6 relative">
        <Image
          src="/JBE-logo.svg"
          alt="JBE Logo"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-[#231916] font-huiwen font-normal text-3xl md:text-5xl uppercase tracking-[0.2em] text-center mb-16 md:mb-24">
        About JBE
      </h1>
      <div className="max-w-2xl w-full text-center font-huiwen text-lg md:text-2xl text-[#3b2e28] leading-[2.1] space-y-8">
        <p>
          Located in the West Village, JBE brings together seasonal ingredients, thoughtful cooking, and genuine hospitality.
        </p>
        <p>
          Our menu combines French technique with the flavors and traditions of Asia. We create dishes that feel familiar yet distinctive—thoughtfully prepared, well-balanced, and made to be shared.
        </p>
        <p>
          From the first welcome to the last bite, every detail is considered with care. We hope each visit feels relaxed, memorable, and worth returning to.
        </p>
        <div className="pt-8 font-huiwen text-base md:text-xl text-[#3b2e28] tracking-[0.1em] space-y-2 opacity-95 ml-auto w-fit text-left pr-8 sm:pr-16 md:pr-24">
          <p className="font-normal">With warmth,</p>
          <p className="font-medium uppercase tracking-[0.25em] text-[#231916] text-sm md:text-base">from JBE.</p>
        </div>
        <div className="pt-4">
          <a
            href="https://www.instagram.com/jbe.ny?igsh=MXYwYjdnOHFxeTJvbw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#8c674b] hover:text-[#231916] bg-[#8c674b]/10 hover:bg-[#8c674b]/20 border border-[#8c674b]/30 transition-all duration-300 px-6 py-2.5 rounded-full shadow-xs hover:shadow-md"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Follow @jbe.ny</span>
          </a>
        </div>
      </div>
    </main>
  );
}
