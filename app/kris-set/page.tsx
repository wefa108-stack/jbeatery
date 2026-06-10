export default function SetMenuPage() {
  return (
    <main className="bg-aru-page w-full min-h-screen flex flex-col items-center px-6 pt-40 pb-20">
      <h1 className="text-aru-primary font-light text-4xl md:text-6xl uppercase tracking-[0.15em] text-center mb-16">
        Set Menu
      </h1>
      <div className="max-w-aru w-full space-y-12 text-center">
        <p className="font-mono font-light text-[#5a483e] text-[12px] md:text-[14px] leading-[2.5] tracking-[0.05em] max-w-md mx-auto opacity-90">
          Experience our curated set menu, designed to showcase the finest seasonal ingredients and the transformative power of our wood-fired kitchen.
        </p>
        <p className="font-mono font-light text-[#5a483e] text-[12px] md:text-[14px] leading-[2.5] tracking-[0.05em] max-w-md mx-auto opacity-90">
          Tasting Menu - $165 per person<br />
          Wine Pairing - $95 per person
        </p>
      </div>
    </main>
  );
}
