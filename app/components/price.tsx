import Pricing from "../components/pricing";
import Nav from "../components/nav";
import Footer from "../components/footer";
import SlidingAnimation from "../components/sliding-animation";
import Potential from "../components/potential";
import Clients from "../components/clients";
import Questions from "../components/questions";

export default function Price(){
    return (
        <div className="flex flex-col items-center">
            <Nav/>
            {/* AGENCY */}
            <div className="mt-16  w-full ">
            {/* Top Info */}
            <div className="flex flex-col gap-4 items-center mb-20">
                <h2 className="text-7xl text-center text-white max-w-[656px]">
                Choose the perfect plan for<span className="text-[#FF4C00]"> Your Agency</span>
                </h2>
                <h3 className="font-light text-lg text-[#E7E7E7] max-w-[522px] text-center">
                Flexible pricing options to meet the needs of every team, from startups to large agencies.
                </h3>

                {/* Active users */}
                <div className="flex items-center justify-center gap-3 mt-5" >
                <img src="/images/users.png" alt="users" className=" w-[128px] h-[32px]"/>
                <h3>2000+ Active Users</h3>
                </div>
            </div>
            <Pricing />
            </div>

            <h3 className="font-thin text-xl mb-20 mt-10">Trusted by Leading Digital Agencies</h3>

            {/* Trusts */}
            <div className="w-full flex flex-col gap-5 text-white mb-10 max-w-[1440px]">
            <SlidingAnimation />
            </div>

            {/* Potential */}
            <Potential/>

            {/* Clients */}
            <Clients/>

            {/* FREqnetly asked questions */}
            <Questions/>

            {/* FOOTER */}
            <Footer/>

        </div>
    )
}