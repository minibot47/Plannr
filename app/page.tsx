
import Clients from "./components/clients";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Potential from "./components/potential";
import Pricing from "./components/pricing";
import Questions from "./components/questions";
import SlidingAnimation from "./components/sliding-animation";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-2 items-center bg-[#0B0A0E] text-white relative overflow-hidden">
      {/* Subtle orange glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-orange-600/10 to-transparent pointer-events-none"  style={{ background: 'radial-gradient(circle at center, rgba(255, 76, 0, 0.15) 0%, rgba(255, 76, 0, 0.08) 30%, transparent 70%)' }}></div>
      <div className="relative z-10 w-full flex flex-col gap-2 items-center">
      <Nav/>
      <div className="flex flex-col items-center max-w-[1440px] ">
        {/* TOP banner */}
        <div className="rounded-xl bg-[#FDB99C33] w-fit flex gap-3 px-1 py-0.5 pr-3 items-center justify-center mt-[80px] mb-[40px]">
          <button className="px-3 py-0 rounded-xl bg-[#FF4C00] text-white">
            <h3 className="text-sm font-thin">Update</h3>
          </button>
          <h3 className="text-white">See what's new in Grauberg</h3>
          <img src="/images/arrow.png" alt="Arrow" className="w-[11px] h-[11px]"/>
        </div>

        {/* Top Info */}
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-8xl text-center text-white max-w-[700px]">Effortless Project Management for <span className="text-[#FF4C00]">Digital Agencies</span></h2>
          <h3 className="font-thin text-xl max-w-[588px] text-center" >Streamline your projects, maximize efficiency, and elevate your business with our cutting-edge project management tool designed for the real estate industry.</h3>
        </div>

        {/* Active users */}
        <div className="flex items-center justify-center gap-3 mt-[40px] mb-[40px]" >
          <img src="/images/users.png" alt="users" className=" w-[128px] h-[32px]"/>
          <h3>2000+ Active Users</h3>
        </div>

        {/* Start trial Button */}
        <button className="px-4 py-2 bg-[#FF4C00] flex gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] mb-16">
          Start Your Free Trial
          <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]"/>
        </button>

        {/* Dashboard image */}
        <div className=" w-[972px] h-[558px] rounded-[16px] mb-16" >
          <img src="/images/dashboard.png" alt="Dashboardimg" className="w-full h-full "/>
        </div>

        <h3 className="font-thin text-xl mb-20 mt-10">Trusted by Leading Digital Agencies</h3>

        {/* Trusts */}
        <div className="w-full flex flex-col gap-5 text-white mb-10">
          <SlidingAnimation />
        </div>

        {/* TOP banner */}
        <div className="rounded-xl bg-[#FDB99C33] w-fit flex gap-2 px-3 py-0.5  items-center justify-center mt-[60px] mb-[30px]">
          <h3 className="text-white text-sm font-thin">See what's new in Grauberg</h3>
        </div>

        {/* Top Info */}
        <div className="flex flex-col gap-5 items-center mb-10">
          <h2 className="text-5xl text-center text-white max-w-[470px]">Revolutionize your <span className="text-[#FF4C00]">Project Management</span></h2>
          <h3 className="font-thin text-xl text-[#E7E7E7] max-w-[470px] text-center" >Unlock seamless collaboration and unparalleled efficiency with our intuitive canvas board.</h3>
        </div>

        {/* CARD */}
        <div className="w-[80%] h-[580px]  mb-10 rounded-[16px] flex bg-[#14151A] border-[1px] border-[#FFFFFF14]">
          <div className="w-1/2 h-full rounded-l-[16px]">
            <img src="/images/dashboard2.png" alt="IMage" className="w-full h-full rounded-l-[16px]"/>
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 h-full rounded-r-[16px] gap-8 px-10">
            {/* TOP banner */}
            <div className="rounded-xl bg-[#FDB99C33] w-fit flex gap-2 px-3 py-0.5  items-center justify-center ">
              <h3 className="text-white text-sm font-thin">See what's new in Grauberg</h3>
            </div>
            <h2 className="w-[375px] text-2xl">Seamless & Collaborative Canvas Board</h2>
            <h3 className="w-[473px] font-thin text-sm">Experience the ultimate in project visualization and team collaboration. Our intuitive canvas board makes it easy to map out tasks, track progress, and ensure everyone is on the same page. With real-time updates and drag-and-drop functionality, your team can work together effortlessly, no matter where they are.</h3>
            {/* Start trial Button */}
            <button className="px-4 py-2 bg-[#FF4C00] flex gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] mb-16">
              Start Your Free Trial
              <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]"/>
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="w-[75%] h-fit  flex gap-5 mb-20">
          <div className="w-1/3 flex flex-col gap-3">
            <h2 className="text-xl">Real-Time Collaboration</h2>
            <h3 className="text-lg font-thin w-[340px]">Stay connected with your team at all times. Our canvas board updates in real-time, allowing for instant feedback and seamless teamwork, reducing delays and miscommunications.</h3>
          </div>
          <div className="w-1/3 flex flex-col gap-3">
            <h2 className="text-xl">Customizable Workflows</h2>
            <h3 className="text-lg font-thin w-[340px] ">Tailor the canvas board to fit your unique project needs. Customize task categories, set priorities, and create templates that streamline your processes and keep your projects on track.</h3>
          </div>
          <div className="w-1/3 flex flex-col gap-3">
            <h2 className="text-xl">Visual Task Management</h2>
            <h3 className="text-lg font-thin w-[340px]">Easily visualize your project’s progress with our intuitive interface. The drag-and-drop functionality and clear task assignments ensure everyone knows what needs to be done and when, leading to increased efficiency and clarity.</h3>
          </div>
        </div>

        {/* Clients */}
        <Clients/>

        {/* Potential */}
        <Potential/>

        {/* AGENCY */}
        <div className="mt-10  w-full ">
          {/* Top Info */}
          <div className="flex flex-col gap-5 items-center mb-20">
            <h2 className="text-5xl text-center text-white max-w-[522px]">
            Choose the perfect plan for<span className="text-[#FF4C00]"> Your Agency</span>
            </h2>
            <h3 className="font-thin text-lg text-[#E7E7E7] max-w-[522px] text-center">
            Flexible pricing options to meet the needs of every team, from startups to large agencies.
            </h3>
          </div>
          <Pricing />
        </div>

        {/* FREqnetly asked questions */}
        <Questions/>

        {/* FOOTER */}
        <Footer/>


      </div>
      </div>
    </main>
  );
}
