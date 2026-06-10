export default function ContactPage() {
  return (
    <main className="bg-aru-page w-full min-h-screen flex flex-col items-center px-6 pt-40 pb-20">
      <h1 className="text-aru-primary text-3xl md:text-5xl uppercase tracking-widest text-center mb-16">
        Contact Us
      </h1>
      <div className="max-w-aru w-full space-y-12 text-center">
        <p className="font-mono text-aru-dark leading-loose">
          123 Culinary Lane, Gastronomy District<br/>
          hello@jbeatery.com<br/>
          +61 123 456 789
        </p>
      </div>
    </main>
  );
}
