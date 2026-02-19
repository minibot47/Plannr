type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  featured?: boolean;
  perks: string[];
  heightClass?: string;
};

function CheckIcon({ tone }: { tone: "light" | "accent" }) {
  const bg = tone === "accent" ? "bg-[#FF4C00]" : "bg-white";
  const fg = tone === "accent" ? "text-black" : "text-black";

  return (
    <span
      className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${bg} ${fg}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
        <path
          d="M16.25 5.5 8.375 13.375 3.75 8.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  const featured = !!plan.featured;

  return (
    <div
      className={[
        // Different heights like the reference: featured card is taller.
        "relative rounded-[22px] border border-[#FFFFFF14] bg-[#14151A] px-10 pt-10 pb-4 flex flex-col",
        plan.heightClass ?? (featured ? "min-h-[660px]" : "min-h-[600px]"),
        featured
          ? "shadow-[0_0_0_1px_rgba(255,76,0,0.45),_0_30px_90px_rgba(255,76,0,0.08)]"
          : "shadow-[0_24px_80px_rgba(0,0,0,0.35)]",
      ].join(" ")}
    >
      {featured ? (
        <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-[radial-gradient(closest-side_at_50%_0%,rgba(255,76,0,0.18),transparent_70%)]" />
      ) : null}

      <div className="relative flex flex-col flex-1">
        <div className="text-xs tracking-widest text-white/70">{plan.name.toUpperCase()}</div>

        <div className="mt-2 flex items-end gap-2">
          <div className="text-5xl leading-none font-semibold">
            <span className="text-white">$</span>
            <span className="text-white">{plan.price}</span>
          </div>
          <div className="pb-1 text-xs text-white/60">{plan.cadence}</div>
        </div>

        <p className="mt-4 max-w-[340px] text-sm leading-relaxed text-[#E7E7E7]/70">
          {plan.description}
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {plan.perks.map((perk) => (
            <div key={perk} className="flex items-center gap-3 text-sm text-white">
              <CheckIcon tone={featured ? "accent" : "light"} />
              <span className="text-white/90">{perk}</span>
            </div>
          ))}
        </div>

        {/* Push CTA to the bottom (keep it close to the card bottom) */}
        <div className="mt-auto pt-4">
          {featured ? (
            <button className="w-full rounded-xl bg-[#FF4C00] py-3 text-sm font-medium text-white flex items-center justify-center gap-3">
              Start Your Free Trial
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <path
                  d="M4 10h10.5M11 5l4.5 5-4.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : (
            <button className="w-full rounded-xl bg-white py-3 text-sm font-medium text-black">
              Start Your Free Trial
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const plans: Plan[] = [
    {
      name: "Starter",
      price: "Free",
      cadence: "",
      description: "Perfect for individuals and small teams getting started.",
      heightClass: "min-h-[590px]",
      perks: [
        "Unlimited Projects",
        "Basic Task Management",
        "Real-Time Collaboration",
        "Community Support",
      ],
    },
    {
      name: "Teams",
      price: "45",
      cadence: "Per user / Yearly",
      description: "Ideal for growing teams that need more advanced features and support.",
      featured: true,
      heightClass: "min-h-[660px]",
      perks: [
        "Everything in Starter Plan, Plus",
        "Advanced Analytics",
        "Customizable Workflows",
        "Automated Notifications",
        "Priority Support",
      ],
    },
    {
      name: "Business",
      price: "90",
      cadence: "Per user / Yearly",
      description: "Designed for large agencies that require comprehensive tools and premium support.",
      heightClass: "min-h-[620px]",
      perks: [
        "Everything in Teams Plan, plus",
        "Dedicated Account Manager",
        "Third Party Integrations",
        "Enhanced Security",
        "Unlimited Users",
      ],
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 pb-28 pt-5">
      {/* Align bottoms like the reference */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
}

