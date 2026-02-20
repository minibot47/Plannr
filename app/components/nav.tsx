"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
    const router = useRouter();

    const handleDropdownNavigation = (e) => {
        const value = e.target.value;
        if (value) {
            router.push(value);
            // Reset dropdown to default after navigation
            e.target.value = "";
        }
    };

    return (
        <nav className="flex px-16 py-3 max-w-[1440px] w-full justify-between text-white">
            <div className="flex gap-7 w-fit items-center">
                <Link href="/" className="flex items-center justify-center gap-2 mr-6">
                    <img src="/images/logo.png" alt="LOGO" className="w-[23px] h-[20px]"/>
                    <h3 className="text-2xl font-thin italic">Plannr</h3>
                </Link>
                <Link href="/About">
                    <h3 className="text-sm font-thin hover:text-gray-300 transition-colors">About Us</h3>
                </Link>
                <Link href="/Price">
                    <h3 className="text-sm font-thin hover:text-gray-300 transition-colors">Pricing</h3>
                </Link>
                <Link href="/Signup">
                    <h3 className="text-sm font-thin hover:text-gray-300 transition-colors">Signup</h3>
                </Link>
                
                {/* Fixed Dropdown */}
                <select 
                    onChange={handleDropdownNavigation}
                    className="bg-transparent border-none text-sm font-thin outline-none cursor-pointer appearance-none pr-1 bg-no-repeat bg-right hover:text-gray-300 transition-colors"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundSize: '16px',
                    }}
                    defaultValue=""
                >
                    <option value="" disabled>Pages</option>
                    <option value="/Features" className="bg-black text-white">Privacy Policy</option>
                    <option value="/Blog" className="bg-black text-white">Terms & Conditions</option>
                    <option value="/Contact" className="bg-black text-white">Licenses</option>
                    <option value="/FAQ" className="bg-black text-white">Changelog</option>
                </select>
            </div>
            
            <div>
                <button className="px-4 py-2 bg-[#FF4C00] flex gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] hover:bg-[#FF5C10] transition-colors">
                    Get in touch
                    <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]"/>
                </button>
            </div>
        </nav>
    )
}