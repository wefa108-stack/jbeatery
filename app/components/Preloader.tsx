export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-aru-page animate-preloader-exit pointer-events-none">
      <h1 className="text-aru-primary font-light text-[10vw] md:text-[7rem] uppercase tracking-[0.2em] md:tracking-[0.25em] whitespace-nowrap opacity-0 animate-fade-in">
        JBeatery
      </h1>
    </div>
  );
}
