import Footer from "./footer";
import Nav from "./nav";

const changelogEntries = [
  {
    version: "Planr V1.3",
    label: "Template change.",
  },
  {
    version: "Planr V1.2",
    label: "Template change.",
  },
  {
    version: "Planr V1.1",
    label: "Template change.",
  },
  {
    version: "Planr V1",
    label: "Template change.",
  },
];

function ChangelogCard({ version, label }: { version: string; label: string }) {
  return (
    <div className="w-full flex flex-col mb-16">
      {/* Version Label */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-white">{version}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>

      {/* Content Card */}
      <div className="w-full rounded-2xl bg-[#1a1b22] border border-white/10 flex max-md:flex-col overflow-hidden min-h-[220px]">
        <div className="flex flex-col justify-center px-10 max-md:px-6 py-10 max-md:py-6 w-1/2 max-md:w-full">
          <div className="text-[#FF4C00] text-3xl max-md:text-2xl mb-4 font-bold">✳</div>
          <h2 className="text-2xl max-md:text-xl font-bold text-white leading-snug mb-1">
            Effortless Project <br /> Management for{" "}
            <span className="text-[#FF4C00] italic">Digital Agencies</span>
          </h2>
          <p className="text-xs text-gray-400 mt-3">
            Planr is your all-in-one project management tool.
          </p>
        </div>

        <div className="w-1/2 max-md:w-full min-h-[160px] relative bg-[#14151A] flex items-center justify-center overflow-hidden">
          {/* Simulated dashboard UI */}
          <div className="w-full h-full p-4 flex flex-col gap-2 opacity-80">
            <div className="flex gap-2 mb-2">
              <div className="w-20 h-5 bg-[#FF4C00]/30 rounded" />
              <div className="w-16 h-5 bg-white/10 rounded" />
            </div>
            <div className="flex gap-2 flex-1">
              {/* Sidebar */}
              <div className="w-1/4 flex flex-col gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-3 bg-white/10 rounded w-full" />
                ))}
              </div>
              {/* Main content */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="h-4 bg-white/10 rounded w-3/4" />
                <div className="h-4 bg-white/10 rounded w-full" />
                <div className="h-4 bg-[#FF4C00]/20 rounded w-1/2" />
                <div className="flex gap-2 mt-2">
                  <div className="h-16 flex-1 bg-white/5 rounded" />
                  <div className="h-16 flex-1 bg-white/5 rounded" />
                </div>
                <div className="h-3 bg-white/10 rounded w-full" />
                <div className="h-3 bg-white/10 rounded w-2/3" />
              </div>
            </div>
          </div>
          {/* Red/orange gradient overlay on right edge */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#FF4C00]/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export default function Changelog() {
  return (
    <div className="w-full max-w-[1440px] m-auto">
      <Nav />
      <div className="p-16 max-lg:p-8 max-md:p-4 flex max-md:flex-col gap-8">
        <div className="w-64 max-md:w-full shrink-0 pr-8 max-md:pr-0 pt-2">
          <h1 className="text-3xl max-md:text-2xl font-bold text-white mb-3">Changelog</h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            A changelog is a document or file that records and maintains a history of changes made to a software, application, or website.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1">
          {changelogEntries.map((entry) => (
            <ChangelogCard key={entry.version} {...entry} />
          ))}
        </div>
      </div>

      <div className="px-16 max-lg:px-8 max-md:px-4 pb-16">
        <div className="w-full h-[520px] max-md:h-auto max-md:min-h-[400px] mt-4 mb-10 rounded-[16px] flex max-md:flex-col bg-[#14151A] border border-[#FFFFFF14]">
          <div className="w-1/2 max-md:w-full h-full max-md:min-h-[220px] rounded-l-[16px] max-md:rounded-b-none max-md:rounded-t-[16px] overflow-hidden">
            <img
              src="/images/dashboard2.png"
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 max-md:w-full h-full rounded-r-[16px] max-md:rounded-t-none max-md:rounded-b-[16px] gap-3 px-10 max-md:px-6 py-6">
            <h2 className="w-[375px] max-w-full text-4xl max-md:text-2xl text-white">
              Ready to transform your{" "}
              <span className="text-[#FF4C00]">Project Management?</span>
            </h2>
            <h3 className="w-[473px] max-w-full max-md:text-base font-light text-lg text-white">
              Join the growing community of digital agencies revolutionizing their workflows with our powerful, AI-driven tool.
            </h3>
            <h3 className="w-[473px] max-w-full font-thin text-sm text-gray-400">
              Experience the benefits firsthand with our free Starter plan. Upgrade anytime to access advanced features and premium support tailored to your team's needs.
            </h3>
            <button className="px-4 py-2 bg-[#FF4C00] flex mt-5 gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] mb-16 text-white text-sm">
              Start Your Free Trial
              <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}