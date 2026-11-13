const UPCOMING_SECTIONS = [
  { code: "01", title: "About" },
  { code: "02", title: "Platform" },
  { code: "03", title: "Pipeline" },
  { code: "04", title: "News" },
] as const;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-[#070F3A] flex flex-col">
      <div className="relative z-10 h-[3px] w-full bg-gradient-to-r from-[#990099] via-[#ED7D31] to-[#FFCC00]" />

      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src="/images/adualys-molecules.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[58%_55%] sm:object-center opacity-85 sm:opacity-75 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/55 to-white/35" />
      </div>

      <header className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-10 pt-7 pb-4 flex items-center justify-end">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#070F3A]/10 bg-white/85 backdrop-blur-sm px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#990099] to-[#FFCC00] animate-pulse-dot" />
          <span className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-[#070F3A]/80">
            Coming Soon
          </span>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-10 py-10 text-center">
        <img
          src="/images/adualys-logo.png"
          alt="Adualys"
          width={2540}
          height={633}
          className="w-[240px] sm:w-[320px] md:w-[380px] h-auto select-none"
        />

        <div className="my-7 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#990099] via-[#ED7D31] to-[#FFCC00]" />

        <h1 className="font-display font-semibold tracking-[-0.03em] text-[#070F3A] text-3xl sm:text-5xl">
          Coming Soon
        </h1>

        <p className="mt-4 text-[#070F3A]/80 text-base sm:text-lg max-w-md">
          Our new website is currently under construction.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1040px]">
          {UPCOMING_SECTIONS.map((section) => (
            <div
              key={section.code}
              className="rounded-[15px] border border-white/90 bg-white/85 backdrop-blur-md px-6 py-5 text-left shadow-[0_12px_36px_-14px_rgba(7,15,58,0.14)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-sm font-semibold text-[#070F3A]/70">
                  {section.code}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#990099] via-[#ED7D31] to-[#FFCC00]" />
              </div>
              <div className="mt-3 font-display font-semibold text-[#070F3A] text-lg">
                {section.title}
              </div>
              <div className="mt-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#990099]">
                Coming soon
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="relative z-10 w-full max-w-[1300px] mx-auto px-6 sm:px-10 py-6 border-t border-[#070F3A]/10 text-center sm:text-left text-xs text-[#070F3A]/70">
        © Adualys
      </footer>
    </div>
  );
}
