import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Main Content Area with Massive Whitespace */}
      <main className="bg-aru-page w-full flex flex-col items-center relative z-10">
        
        {/* Intro Section */}
        <section className="flex flex-col justify-center items-center min-h-[90vh] w-full px-6 py-32 max-w-aru mx-auto text-center gap-12">
          <h2 className="text-aru-primary font-light text-2xl md:text-4xl uppercase tracking-[0.15em] leading-[1.6] max-w-lg">
            A Wood-Fired <br/> Culinary Journey
          </h2>
          <p className="font-mono font-light text-[#5a483e] text-[12px] md:text-[14px] leading-[2.5] tracking-[0.05em] max-w-md opacity-90">
            Where native ingredients and bold flavours meet the intense, transformative heat of the wood-fired hearth. Our menu reflects the seasons, crafted with precision and an unwavering commitment to quality.
          </p>
        </section>

        {/* Private Dining Section */}
        <section className="flex flex-col justify-center items-center min-h-[90vh] w-full px-6 py-32 max-w-fuller mx-auto text-center gap-12 border-t border-aru-brown/20">
          <h2 className="text-aru-primary font-light text-2xl md:text-4xl uppercase tracking-[0.15em] leading-[1.6]">
            Private Dining
          </h2>
          <p className="font-mono font-light text-[#5a483e] text-[12px] md:text-[14px] leading-[2.5] tracking-[0.05em] max-w-md opacity-90">
            An intimate space for gatherings, celebrations, and exclusive experiences.
          </p>
          <button className="mt-8 px-12 py-3 font-mono font-light text-[10px] md:text-[11px] uppercase tracking-[0.15em] bg-clip-padding text-aru-primary border border-aru-primary hover:bg-aru-primary hover:text-aru-back hover:border-aru-back transition-colors duration-300">
            Enquire Now
          </button>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="w-full bg-aru-dark text-aru-page py-32 px-6 md:px-10 flex flex-col items-center text-center relative z-10">
        <h3 className="font-light text-2xl uppercase tracking-[0.2em] mb-8 text-aru-brown">JBeatery</h3>
        <p className="font-mono font-light text-[11px] tracking-[0.1em] opacity-60">123 Culinary Lane, Gastronomy District</p>
        <p className="font-mono font-light text-[11px] tracking-[0.1em] opacity-60 mt-4">hello@jbeatery.com</p>
      </footer>
    </>
  );
}
