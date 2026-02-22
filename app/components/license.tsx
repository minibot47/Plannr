import Footer from "./footer";
import Nav from "./nav";

// Licenses Section Component
function LicensesSection() {
  return (
    <div className="w-full text-white mb-12 px-4 max-md:px-4">
      <div className="mb-8">
        <h1 className="text-3xl max-md:text-2xl font-semibold mb-2">Licenses</h1>
        <p className="text-xs text-gray-400 mb-3">Last edit: Jul 5, 2023</p>
        <p className="text-sm text-gray-300 max-w-sm">
          All images used in this template are licensed for personal and commercial use.
          If you'd like to use a specific asset, please check the links below.
        </p>
      </div>

      {/* Photography */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-1">Photography</h2>
        <p className="text-sm text-gray-400 mb-3">
          All images used in this template are licensed for free to use and commercial use.
          If you'd like to use Specific images, you can visit the licensed and download the images for free at{" "}
          <a href="https://unsplash.com" className="text-orange-500 hover:underline" target="_blank" rel="noreferrer">
            Unsplash
          </a>
          .
        </p>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#14151A]">
          <div className="bg-[#1a1b22] p-4 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-[#14151A] rounded-md px-3 py-1 text-xs text-gray-400 text-center max-w-xs mx-auto">
              unsplash.com
            </div>
          </div>
          <div className="p-6 flex gap-4">
            <div className="flex-1">
              <div className="text-2xl font-bold text-white mb-1">Unsplash</div>
              <p className="text-xs text-gray-400 mb-4">The internet's source of freely-usable images.</p>
              <div className="grid grid-cols-3 gap-2">
                {["bg-gray-600", "bg-gray-700", "bg-gray-500"].map((bg, i) => (
                  <div key={i} className={`${bg} rounded-lg h-20`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-1">Typography</h2>
        <p className="text-sm text-gray-400 mb-3">
          This template uses Inter and Playfair Display, are 100% free from{" "}
          <a href="https://fonts.google.com" className="text-orange-500 hover:underline" target="_blank" rel="noreferrer">
            Google Fonts
          </a>
          .
        </p>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#14151A]">
          <div className="bg-[#1a1b22] p-4 flex items-center gap-2 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-[#14151A] rounded-md px-3 py-1 text-xs text-gray-400 text-center max-w-xs mx-auto">
              fonts.google.com
            </div>
          </div>
          <div className="p-6 bg-[#0d0d0d]">
            <div className="flex gap-4 mb-4 overflow-x-auto pb-2">
              {["Inter", "Roboto", "Open Sans", "Montserrat", "Lato", "Poppins"].map((font) => (
                <span key={font} className="text-xs text-gray-400 whitespace-nowrap border-b border-orange-500 pb-1">
                  {font}
                </span>
              ))}
            </div>
            <p className="text-base text-white mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
              Everyone has the right to freedom of thought, conscience and religion; this ri...
            </p>
            <p className="text-xs text-gray-500">
              Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief...
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom...
            </p>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-1">Icons</h2>
        <p className="text-sm text-gray-400 mb-3">
          This template uses 100% free icons from{" "}
          <a href="https://phosphoricons.com" className="text-orange-500 hover:underline" target="_blank" rel="noreferrer">
            Phosphor Icons
          </a>
          .
        </p>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#f5f5f5]">
          <div className="bg-white p-4 flex items-center gap-2 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-500 text-center max-w-xs mx-auto">
              phosphoricons.com
            </div>
          </div>
          <div className="p-6 bg-white">
            <div className="grid grid-cols-10 gap-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-400 rounded-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo Images */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-1">Logo Images</h2>
        <p className="text-sm text-gray-400 mb-3">
          This template uses 100% free logo images from{" "}
          <a href="https://worldvectorlogo.com" className="text-orange-500 hover:underline" target="_blank" rel="noreferrer">
            Worldvectorlogo
          </a>
          .
        </p>
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white">
          <div className="bg-white p-4 flex items-center gap-2 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-500 text-center max-w-xs mx-auto">
              worldvectorlogo.com
            </div>
          </div>
          <div className="p-8 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">The internet's source<br />of free logos.</div>
            <p className="text-gray-500 text-sm mb-4">Showcase and download</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm mb-6 hover:bg-blue-700 transition-colors">
              Explore logos
            </button>
            <div className="flex justify-center gap-6 flex-wrap">
              {["Shopify", "Tailwind", "GitHub", "Stripe", "Ararat"].map((logo) => (
                <div key={logo} className="flex items-center gap-1">
                  <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                  <span className="text-xs text-gray-600">{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function License() {
  return (
    <div className="w-full max-w-[1440px] m-auto">
      <Nav />
      <div className="p-16 flex flex-col items-center">
        {/* LICENSES SECTION */}
        <LicensesSection />

        {/* CARD */}
        <div className="w-full h-[520px] mt-20 mb-10 rounded-[16px] flex bg-[#14151A] border-[1px] border-[#FFFFFF14]">
          <div className="w-1/2 h-full rounded-l-[16px]">
            <img src="/images/dashboard2.png" alt="IMage" className="w-full h-full rounded-l-[16px]" />
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 h-full rounded-r-[16px] gap-3 px-10">
            <h2 className="w-[375px] text-4xl">
              Ready to transform your{" "}
              <span className="text-[#FF4C00]">Project Management?</span>
            </h2>
            <h3 className="w-[473px] font-light text-lg">
              Join the growing community of digital agencies revolutionizing their workflows with our powerful, AI-driven tool.
            </h3>
            <h3 className="w-[473px] font-thin text-sm">
              Experience the benefits firsthand with our free Starter plan. Upgrade anytime to access advanced features and premium support tailored to your team's needs.
            </h3>
            <button className="px-4 py-2 bg-[#FF4C00] flex mt-5 gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] mb-16">
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