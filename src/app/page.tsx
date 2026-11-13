import Image from "next/image";

const UPCOMING_SECTIONS = [
  { code: "01", title: "About" },
  { code: "02", title: "Platform" },
  { code: "03", title: "Pipeline" },
  { code: "04", title: "News" },
] as const;

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-white font-sans">
      {/* Brand hairline */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#882694] via-[#B85D66] via-[#DEAC42] to-[#F2CC47]" />

      {/* Ultra-light biotech aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="animate-aura absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-[70%] rounded-full bg-[#882694] opacity-[0.07] blur-3xl" />
        <div className="animate-aura absolute -bottom-48 right-1/2 h-[560px] w-[560px] translate-x-[65%] rounded-full bg-[#F2CC47] opacity-[0.06] blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full">
        <div className="mx-auto flex w-full max-w-[1300px] items-center justify-end px-6 py-6 sm:px-10 sm:py-8">
          <div className="flex items-center gap-2.5">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-[#DEAC42]" />
            <span className="font-display text-xs font-medium uppercase tracking-[0.14em] text-[#070F3A]/80">
              Coming Soon
            </span>
          </div>
        </div>
      </header>

      {/* Hero stage */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-14 sm:px-10 sm:py-20">
        <div className="animate-fade-up flex flex-col items-center text-center">
          <Image
            src="/images/adualys-logo.png"
            alt="Adualys Therapeutics"
            width={401}
            height={147}
            priority
            className="h-auto w-[250px] sm:w-[320px] md:w-[360px]"
          />

          <div className="mt-8 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#882694] via-[#DEAC42] to-[#F2CC47]" />

          <h1 className="mt-8 font-display text-3xl font-medium tracking-[-0.03em] text-[#070F3A] sm:text-5xl">
            Coming Soon
          </h1>

          <p className="mt-5 max-w-md text-base text-[#070F3A]/65 sm:text-lg">
            Our new website is currently under construction.
          </p>
        </div>

        {/* Upcoming sections preview */}
        <section
          aria-label="Upcoming sections"
          className="animate-fade-up-delay mt-14 grid w-full max-w-[1040px] grid-cols-1 gap-4 sm:grid-cols-2 sm:mt-16 lg:grid-cols-4"
        >
          {UPCOMING_SECTIONS.map((section) => (
            <div
              key={section.code}
              className="rounded-[15px] border border-[#070F3A]/10 bg-white/90 px-6 py-5 shadow-[0_6px_28px_-14px_rgba(7,15,58,0.12)]"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#882694] to-[#F2CC47]" />
                <span className="font-display text-xs font-medium tracking-[0.14em] text-[#070F3A]/45">
                  {section.code}
                </span>
              </div>

              <h2 className="mt-4 font-display text-lg font-medium text-[#070F3A]">
                {section.title}
              </h2>

              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[#882694]">
                Coming soon
              </p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full">
        <div className="mx-auto w-full max-w-[1300px] border-t border-[#070F3A]/10 px-6 py-6 sm:px-10">
          <p className="font-sans text-xs tracking-[0.04em] text-[#070F3A]/55">
            © Adualys Therapeutics
          </p>
        </div>
      </footer>
    </div>
  );
}
