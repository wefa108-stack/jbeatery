export default function AboutPage() {
  return (
    <main className="bg-aru-page w-full min-h-screen flex flex-col items-center px-6 pt-40 pb-20">
      <h1 className="text-aru-primary text-3xl md:text-5xl uppercase tracking-widest text-center mb-16">
        About
      </h1>
      <div className="max-w-aru w-full space-y-12 text-center">
        <p className="font-mono text-aru-dark leading-loose">
          JBeatery is born from a fascination with fire and native ingredients. 
          We believe in cooking that is honest, precise, and deeply connected to the land.
        </p>
      </div>
    </main>
  );
}
