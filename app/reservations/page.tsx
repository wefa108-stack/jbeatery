export default function ReservationsPage() {
  return (
    <main className="bg-aru-page w-full min-h-screen flex flex-col items-center px-6 pt-40 pb-20">
      <h1 className="text-aru-primary text-3xl md:text-5xl uppercase tracking-widest text-center mb-16">
        Reservations
      </h1>
      <div className="max-w-aru w-full space-y-12 text-center">
        <p className="font-mono text-aru-dark leading-loose">
          Join us for an unforgettable wood-fired dining experience.
        </p>
        <div className="pt-8">
          <button className="px-12 py-3 font-mono text-center text-sm md:text-base uppercase bg-clip-padding text-aru-primary border border-aru-primary hover:bg-aru-primary hover:text-aru-back hover:border-aru-back transition-colors duration-300">
            Book via Resy
          </button>
        </div>
      </div>
    </main>
  );
}
