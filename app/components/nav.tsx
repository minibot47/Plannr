"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Nav() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDropdownNavigation = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value) {
            router.push(value);
            e.target.value = "";
        }
    };

    return (
        <nav className="flex items-center justify-between gap-4 px-6 max-md:px-4 py-3 max-lg:px-8 max-w-[1440px] w-full text-white relative">
            {/* Left: Logo + Desktop Links */}
            <div className="flex gap-4 w-fit items-center">
                <Link href="/" className="flex items-center justify-center gap-2 mr-6">
                    <img src="/images/logo.png" alt="LOGO" className="w-[23px] h-[20px]" />
                    <h3 className="text-2xl font-thin italic">Plannr</h3>
                </Link>

                {/* Desktop links - hidden on mobile */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/About">
                        <h3 className="text-sm font-thin hover:text-gray-300 transition-colors">About Us</h3>
                    </Link>
                    <Link href="/Price">
                        <h3 className="text-sm font-thin hover:text-gray-300 transition-colors">Pricing</h3>
                    </Link>
                    <Link href="/Signup">
                        <h3 className="text-sm font-thin hover:text-gray-300 transition-colors">Signup</h3>
                    </Link>

                    <select
                        onChange={handleDropdownNavigation}
                        className="bg-transparent border-none text-sm font-thin w-[60px] outline-none cursor-pointer appearance-none pr-0 bg-no-repeat bg-right hover:text-gray-300 transition-colors"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundSize: "16px",
                        }}
                        defaultValue=""
                    >
                        <option value="" disabled>Pages</option>
                        <option value="/Privacy" className="bg-black text-white">Privacy & Policy</option>
                        <option value="/Terms" className="bg-black text-white">Terms & Conditions</option>
                        <option value="/License" className="bg-black text-white">Licences</option>
                        <option value="/Changelog" className="bg-black text-white">Changelog</option>
                    </select>
                </div>
            </div>

            {/* Right: CTA + Hamburger */}
            <div className="flex items-center gap-4">
                {/* CTA always visible */}
                <button className="px-4 py-2 bg-[#FF4C00] flex gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] hover:bg-[#FF5C10] transition-colors text-sm">
                    Get in touch
                    <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]" />
                </button>

                {/* Hamburger - mobile only */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#14151A] border-t border-white/10 z-50 flex flex-col px-6 py-4 gap-4">
                    <Link href="/About" onClick={() => setMenuOpen(false)}>
                        <p className="text-sm font-thin hover:text-gray-300 transition-colors">About Us</p>
                    </Link>
                    <Link href="/Price" onClick={() => setMenuOpen(false)}>
                        <p className="text-sm font-thin hover:text-gray-300 transition-colors">Pricing</p>
                    </Link>
                    <Link href="/Signup" onClick={() => setMenuOpen(false)}>
                        <p className="text-sm font-thin hover:text-gray-300 transition-colors">Signup</p>
                    </Link>

                    {/* Pages submenu */}
                    <div className="flex flex-col gap-3 border-t border-white/10 pt-4">
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Pages</p>
                        {[
                            { href: "/Privacy", label: "Privacy & Policy" },
                            { href: "/Terms", label: "Terms & Conditions" },
                            { href: "/License", label: "Licences" },
                            { href: "/Changelog", label: "Changelog" },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                            >
                                <p className="text-sm font-thin hover:text-gray-300 transition-colors">{item.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}