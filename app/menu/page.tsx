export default function MenuPage() {
  return (
    <main className="bg-aru-page w-full min-h-screen flex flex-col items-center px-6 pt-40 pb-20">
      <h1 className="text-aru-primary text-3xl md:text-5xl uppercase tracking-widest text-center mb-16">
        Menu
      </h1>
      <div className="max-w-aru w-full space-y-12 text-center">
        <p className="font-mono text-aru-dark leading-loose">
          Our menu celebrates the purity of fire, smoke, and native ingredients. 
          Expect seasonal changes and robust flavours.
        </p>
        {/* Placeholder for menu items */}
        <div className="border-t border-aru-brown/20 pt-8 mt-12">
          <p className="font-mono text-sm opacity-50">Menu details coming soon.</p>
        </div>
      </div>
    </main>
  );
}
