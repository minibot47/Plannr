import Link from "next/link"


export default function Nav() {
    return (
        <nav className="flex px-16 py-3 max-w-[1440px] w-full justify-between text-white ">
            <div className="flex gap-7  w-fit items-center">
                <Link href="/" className="flex items-center justify-center gap-2 mr-6">
                    <img src="/images/logo.png" alt="LOGO" className="w-[23px] h-[20px]"/>
                    <h3 className="text-2xl font-thin italic">Plannr</h3>
                </Link>
                <Link href="/About">
                    <h3 className="text-sm font-thin">About Us</h3>
                </Link>
                <Link href="/Price">
                    <h3 className="text-sm font-thin">Pricing</h3>
                </Link>
                <Link href="/">
                    <h3 className="text-sm font-thin">Blogs</h3>
                </Link>
                <Link href="/">
                    <select className="bg-transparent border-none text-sm font-thin">
                        <option>Pages</option>
                        <option>Pages</option>
                        <option>Pages</option>
                        <option>Pages</option>
                    </select>
                </Link>
            </div>
            <div>
                <button className="px-4 py-2 bg-[#FF4C00] flex gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D]">
                    Get in touch
                    <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]"/>
                </button>
            </div>
        </nav>
    )
}