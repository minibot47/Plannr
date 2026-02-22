import Link from "next/link";
import Nav from "../app/components/nav";
import Footer from "../app/components/footer";

export default function NotFound() {
  return (
    <div className="w-full max-w-[1440px] m-auto">
      <Nav />

      {/* Hero 404 Section */}
      <div className="relative w-full min-h-[500px] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#0d0d0d]">
        {/* Background decorative shape */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] h-[420px] opacity-40 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-b from-[#FF4C00]/60 to-transparent rounded-full blur-3xl" />
        </div>
        {/* Triangular dark shape hint */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-10 w-0 h-0 opacity-30 pointer-events-none"
          style={{
            borderLeft: "120px solid transparent",
            borderRight: "120px solid transparent",
            borderBottom: "360px solid #1a0a00",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4 max-w-xl px-2">
          <h1 className="text-5xl max-md:text-3xl font-bold text-white">Page not found</h1>
          <p className="text-gray-300 font-medium max-md:text-sm text-center">
            We're sorry, but the page you're looking for can't be found.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            There could be a few reasons for this: maybe a broken link, a mistyped URL, or the page is temporarily unavailable. Feel free to hang out here or pick a different destination.
          </p>
          <Link
            href="/"
            className="mt-4 px-6 py-2.5 bg-[#FF4C00] text-white rounded-xl text-sm font-medium hover:opacity-90 transition flex items-center gap-2"
          >
            Go to the Home Page
            <span>→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}