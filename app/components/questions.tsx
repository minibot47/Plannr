'use client';

import { useMemo, useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

function IconToggle({ open }: { open: boolean }) {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/80">
      {open ? (
        <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
          <path
            d="M6 6l8 8M14 6l-8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
          <path
            d="M10 4v12M4 10h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}

export default function Questions() {
  const items: FaqItem[] = useMemo(
    () => [
      {
        q: "What is included in the free Starter plan?",
        a: "The Starter plan includes unlimited projects, basic task management, real-time collaboration, and access to our community support. It’s perfect for individuals and small teams getting started.",
      },
      {
        q: "Can I upgrade my plan at any time?",
        a: "Yes. You can upgrade your plan at any time from your account settings. Your new plan features will be available immediately after the upgrade is applied.",
      },
      {
        q: "How does the free trial for the Teams plan work?",
        a: "When you sign up for Teams, you get a trial period with access to all Teams features. You can keep the plan, upgrade, or revert before the trial ends.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept major credit cards, including Visa, Mastercard, American Express, and Discover. Payments are processed securely through our payment provider.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. We take data security seriously and use best‑practice measures including encryption, access controls, and regular security reviews.",
      },
      {
        q: "Do you offer support if I need help?",
        a: "Absolutely. Starter includes community support, while Teams and Business include priority support and faster response times.",
      },
      {
        q: "Can I cancel my subscription at any time?",
        a: "Yes. You can cancel anytime from your billing settings, and your subscription will remain active until the end of the current billing period.",
      },
      {
        q: "What integrations do you offer?",
        a: "We integrate with popular tools (e.g. Slack, Google Drive, and more). Business includes full access to all integrations and advanced controls.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-[80%] max-w-[1400px] mx-auto py-24">
      <div className="flex flex-col lg:flex-row gap-14">
        {/* Left title */}
        <div className="flex flex-col gap-5 lg:w-[40%]">
          <h2 className="text-5xl text-start text-white max-w-[522px]">
            Frequently
            <br />
            <span className="text-[#FF4C00]"> Asked Question</span>
          </h2>
          <p className="font-thin text-lg text-[#E7E7E7] max-w-[522px] text-start">
            Find answers to the most common questions about our project management tool.
          </p>
        </div>

        {/* Right accordion */}
        <div
          className="lg:w-[60%] relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="flex flex-col divide-y divide-white/10">
            {items.map((item, idx) => {
              const open = idx === openIndex;
              return (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : idx)}
                  className="w-full text-left py-6 flex items-start justify-between gap-6"
                >
                  <div className="flex-1">
                    <div className="text-white text-[15px] font-medium">{item.q}</div>

                    {/* Smooth expand/collapse */}
                    <div
                      className={[
                        "grid transition-all duration-300 ease-out",
                        open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[#E7E7E7]/70 text-xs leading-relaxed max-w-[560px]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-0.5 shrink-0">
                    <IconToggle open={open} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}