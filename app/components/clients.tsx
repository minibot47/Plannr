import type { CSSProperties } from "react";

function TestimonialCard() {
  return (
    <div
      className="rounded-[20px] bg-[#14151A] border border-[#FFFFFF14] p-10"
      style={{ width: 630 }}
    >
      <div className="flex gap-1 text-[#FFB020] text-lg mb-6">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      <p className="text-[#E7E7E7] text-[18px] leading-[1.6]">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
        commodo diam libero vitae erat.”
      </p>

      <div className="mt-10">
        <div className="text-white font-medium">Name Surname</div>
        <div className="text-[#E7E7E7]/70 text-sm">Position, Company name</div>
      </div>
    </div>
  );
}

export default function Clients() {
  // We duplicate these cards to create a truly seamless loop.
  const cards = Array.from({ length: 6 }, () => ({}));

  const marqueeStyle = {
    // These drive the `.plannr-marqueeTrack` math in `globals.css`
    ["--marquee-item-width" as any]: "630px",
    ["--marquee-gap" as any]: "28px",
    ["--marquee-count" as any]: "6",
    ["--marquee-duration" as any]: "40s",
    // Edge fade (works in modern browsers + Safari)
    maskImage:
      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
  } as CSSProperties;

  return (
    <section className="w-full flex flex-col items-center text-white pb-24">
      {/* TOP banner */}
      <div className="rounded-xl bg-[#FDB99C33] w-fit flex gap-2 px-3 py-0.5 items-center justify-center mt-[60px] mb-[60px]">
        <h3 className="text-white text-sm font-thin">Real Feedback from Real Users</h3>
      </div>

      {/* Top Info */}
      <div className="flex flex-col gap-5 items-center mb-20">
        <h2 className="text-5xl text-center text-white max-w-[770px]">
          What<span className="text-[#FF4C00]"> Our Clients</span> Are Saying
        </h2>
        <h3 className="font-thin text-lg text-[#E7E7E7] max-w-[548px] text-center">
          Our clients have experienced remarkable improvements in their project management and overall
          productivity.
        </h3>
      </div>

      {/* Slider */}
      <div
        className="relative w-full max-w-[1400px] overflow-hidden plannr-marquee"
        style={marqueeStyle}
      >
        {/* Visible edge fade even if mask-image is unsupported */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-[#0B0A0E] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-[#0B0A0E] to-transparent z-10" />

        <div className="flex plannr-marqueeTrack">
          {cards.concat(cards).map((_, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
              style={{ width: 630 }}
              aria-hidden={idx >= cards.length}
            >
              <TestimonialCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}