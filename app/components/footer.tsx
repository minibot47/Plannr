import Link from "next/link";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-white/60 text-sm">{title}</div>
      <div className="flex flex-col gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-white/80 text-sm hover:text-white transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full mt-24 max-md:mt-12">
      <div className="w-full bg-[#141416] border-t border-[#414141] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side_at_50%_120%,rgba(255,76,0,0.16),transparent_70%)]" />

        <div className="relative w-[80%] max-lg:w-[90%] max-md:w-full max-md:px-6 max-w-[1400px] mx-auto pt-20 max-md:pt-12 pb-10 max-md:pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-md:gap-8 lg:gap-16">
            {/* Brand */}
            <div className="flex flex-col gap-5 lg:col-span-1">
                <Link href="/" className="flex  items-center gap-2 mr-6">
                    <img src="/images/logo.png" alt="LOGO" className="w-[23px] h-[20px]"/>
                    <h3 className="text-2xl font-thin italic">Plannr</h3>
                </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-[260px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <FooterColumn
              title="Pages"
              links={[
                { label: "Home", href: "#" },
                { label: "Pricing Page", href: "/Price" },
                { label: "About Page", href: "/About" },
                { label: "Signup Page", href: "/Signup" },
              ]}
            />

            <FooterColumn
              title="Other"
              links={[
                { label: "404 Page", href: "/not-found" },
                { label: "Privacy Policy", href: "/Privacy" },
                { label: "Terms", href: "/Terms" },
              ]}
            />

            <FooterColumn
              title="Utility"
              links={[
                { label: "Licencing", href: "/License" },
                { label: "Change Log", href: "/Changelog" },
              ]}
            />

            <FooterColumn
              title="Media"
              links={[
                { label: "Twitter", href: "https://x.com/toludairo534" },
                { label: "Contra", href: "https://contra.com/tolu_dairo_z3pu2um3?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=tolu_dairo_z3pu2um3" },
                { label: "Linkedin", href: "https://www.linkedin.com/in/toludairo/" },
                { label: "Github", href: "https://github.com/minibot47" },
              ]}
            />
          </div>

          <div className="mt-16 border-t border-white/10" />

          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-md:gap-3">
            <div className="text-white/60 text-xs max-md:text-[10px]">© 2024 - Powered by Webflow</div>

            <div className="flex flex-wrap items-center gap-4 max-md:gap-3 text-xs max-md:text-[10px] text-white/70">
              <a href="/Privacy" className="hover:text-white transition-colors underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="/Terms" className="hover:text-white transition-colors underline underline-offset-4">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}