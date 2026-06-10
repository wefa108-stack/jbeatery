export default function ReservationsPage() {
  return (
    <main className="bg-aru-page w-full min-h-screen flex flex-col items-center px-6 pt-40 pb-20">
      <h1 className="text-aru-primary font-light text-4xl md:text-6xl uppercase tracking-[0.15em] text-center mb-16">
        Reservations
      </h1>
      <div className="max-w-aru w-full space-y-12 text-center">
        <p className="font-mono font-light text-[#5a483e] text-[12px] md:text-[14px] leading-[2.5] tracking-[0.05em] max-w-md mx-auto opacity-90">
          Join us for an unforgettable wood-fired dining experience.
        </p>
        <div className="pt-8">
          <a 
            href="https://resy.com/cities/melbourne/aru-restaurant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-4 font-mono font-light text-[11px] md:text-[12px] uppercase tracking-[0.15em] bg-clip-padding text-aru-primary border border-aru-primary hover:bg-aru-primary hover:text-aru-back hover:border-aru-back transition-colors duration-300 inline-block cursor-pointer"
          >
            Book via Resy
          </a>
        </div>
      </div>
    </main>
  );
}
