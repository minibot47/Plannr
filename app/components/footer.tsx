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
    <footer className="w-full mt-24">
      <div className="w-full bg-[#141416] relative overflow-hidden">
        {/* subtle warm glow like the reference */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side_at_50%_120%,rgba(255,76,0,0.16),transparent_70%)]" />

        <div className="relative w-[80%] max-w-[1400px] mx-auto pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
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
                { label: "Pricing Page", href: "#" },
                { label: "About Page", href: "#" },
                { label: "Signup Page", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Blog Post Page", href: "#" },
              ]}
            />

            <FooterColumn
              title="Other"
              links={[
                { label: "404 Page", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms", href: "#" },
              ]}
            />

            <FooterColumn
              title="Utility"
              links={[
                { label: "Style Guide", href: "#" },
                { label: "Licencing", href: "#" },
                { label: "Change Log", href: "#" },
                { label: "Instructions", href: "#" },
              ]}
            />

            <FooterColumn
              title="Media"
              links={[
                { label: "Facebook", href: "#" },
                { label: "Linkedin", href: "#" },
                { label: "Github", href: "#" },
                { label: "Youtube", href: "#" },
                { label: "Slack", href: "#" },
              ]}
            />
          </div>

          <div className="mt-16 border-t border-white/10" />

          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-white/60 text-xs">© 2024 - Powered by Webflow</div>

            <div className="flex items-center gap-6 text-xs text-white/70">
              <a href="#" className="hover:text-white transition-colors underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors underline underline-offset-4">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors underline underline-offset-4">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}