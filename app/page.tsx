
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
      <div className="relative z-10 w-full flex flex-col gap-2 items-center px-4 max-md:px-4 max-lg:px-6">
      <Nav/>
      <div className="flex flex-col items-center max-w-[1440px] w-full">
        {/* TOP banner */}
        <div className="rounded-xl bg-[#FDB99C33] w-fit max-w-full flex flex-wrap gap-2 max-lg:gap-3 px-1 py-0.5 pr-3 items-center justify-center mt-[80px] max-md:mt-10 max-lg:mt-14 mb-[40px] max-md:mb-6">
          <button className="px-3 py-0 rounded-xl bg-[#FF4C00] text-white">
            <h3 className="text-sm font-thin">Update</h3>
          </button>
          <h3 className="text-white text-sm max-md:text-xs">See what's new in Grauberg</h3>
          <img src="/images/arrow.png" alt="Arrow" className="w-[11px] h-[11px]"/>
        </div>

        {/* Top Info */}
        <div className="flex flex-col gap-5 items-center px-2 max-md:px-0">
          <h2 className="text-8xl max-lg:text-5xl max-md:text-3xl text-center text-white max-w-[700px]">Effortless Project Management for <span className="text-[#FF4C00]">Digital Agencies</span></h2>
          <h3 className="font-thin text-xl max-lg:text-lg max-md:text-base max-w-[588px] text-center" >Streamline your projects, maximize efficiency, and elevate your business with our cutting-edge project management tool designed for the real estate industry.</h3>
        </div>

        {/* Active users */}
        <div className="flex items-center justify-center gap-3 mt-[40px] max-md:mt-6 mb-[40px] max-md:mb-6" >
          <img src="/images/users.png" alt="users" className="w-[128px] h-[32px] max-md:w-24 max-md:h-6"/>
          <h3 className="max-md:text-sm">2000+ Active Users</h3>
        </div>

        {/* Start trial Button */}
        <button className="px-4 py-2 bg-[#FF4C00] flex gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] mb-16 max-md:mb-10">
          Start Your Free Trial
          <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]"/>
        </button>

        {/* Dashboard image */}
        <div className="w-[972px] max-lg:w-full max-lg:max-w-[972px] max-lg:px-4 h-[558px] max-md:h-auto max-md:aspect-video rounded-[16px] mb-16 max-md:mb-10">
          <img src="/images/dashboard.png" alt="Dashboardimg" className="w-full h-full object-contain"/>
        </div>

        <h3 className="font-thin text-xl max-md:text-base mb-20 max-md:mb-10 mt-10 max-md:mt-6">Trusted by Leading Digital Agencies</h3>

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
        <div className="w-[80%] max-lg:w-[95%] max-md:w-full max-md:px-4 h-[580px] max-lg:h-auto max-lg:min-h-[480px] max-md:min-h-[400px] mb-10 rounded-[16px] flex max-lg:flex-col bg-[#14151A] border border-[#FFFFFF14]">
          <div className="w-1/2 max-lg:w-full h-full max-lg:min-h-[280px] max-md:min-h-[200px] rounded-l-[16px] max-lg:rounded-b-none max-lg:rounded-t-[16px] overflow-hidden">
            <img src="/images/dashboard2.png" alt="IMage" className="w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 max-lg:w-full h-full rounded-r-[16px] max-lg:rounded-t-none max-lg:rounded-b-[16px] gap-8 max-md:gap-4 px-10 max-md:px-6 py-6">
            {/* TOP banner */}
            <div className="rounded-xl bg-[#FDB99C33] w-fit flex gap-2 px-3 py-0.5  items-center justify-center ">
              <h3 className="text-white text-sm font-thin">See what's new in Grauberg</h3>
            </div>
            <h2 className="w-[375px] max-w-full text-2xl max-md:text-xl">Seamless & Collaborative Canvas Board</h2>
            <h3 className="w-[473px] max-w-full font-thin text-sm">Experience the ultimate in project visualization and team collaboration. Our intuitive canvas board makes it easy to map out tasks, track progress, and ensure everyone is on the same page. With real-time updates and drag-and-drop functionality, your team can work together effortlessly, no matter where they are.</h3>
            {/* Start trial Button */}
            <button className="px-4 py-2 bg-[#FF4C00] flex gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] mb-16 max-lg:mb-0">
              Start Your Free Trial
              <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]"/>
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="w-[75%] max-lg:w-[90%] max-md:w-full max-md:px-4 h-fit flex max-lg:flex-col gap-5 mb-20 max-md:mb-12">
          <div className="w-1/3 max-lg:w-full flex flex-col gap-3">
            <h2 className="text-xl max-md:text-lg">Real-Time Collaboration</h2>
            <h3 className="text-lg font-thin max-lg:w-full w-[340px] max-md:text-base">Stay connected with your team at all times. Our canvas board updates in real-time, allowing for instant feedback and seamless teamwork, reducing delays and miscommunications.</h3>
          </div>
          <div className="w-1/3 max-lg:w-full flex flex-col gap-3">
            <h2 className="text-xl max-md:text-lg">Customizable Workflows</h2>
            <h3 className="text-lg font-thin max-lg:w-full w-[340px] max-md:text-base">Tailor the canvas board to fit your unique project needs. Customize task categories, set priorities, and create templates that streamline your processes and keep your projects on track.</h3>
          </div>
          <div className="w-1/3 max-lg:w-full flex flex-col gap-3">
            <h2 className="text-xl max-md:text-lg">Visual Task Management</h2>
            <h3 className="text-lg font-thin max-lg:w-full w-[340px] max-md:text-base">Easily visualize your project’s progress with our intuitive interface. The drag-and-drop functionality and clear task assignments ensure everyone knows what needs to be done and when, leading to increased efficiency and clarity.</h3>
          </div>
        </div>

        {/* Clients */}
        <Clients/>

        {/* Potential */}
        <Potential/>

        {/* AGENCY */}
        <div className="mt-10 w-full px-2 max-md:px-0">
          <div className="flex flex-col gap-5 items-center mb-20 max-md:mb-10">
            <h2 className="text-5xl max-lg:text-4xl max-md:text-2xl text-center text-white max-w-[522px]">
            Choose the perfect plan for<span className="text-[#FF4C00]"> Your Agency</span>
            </h2>
            <h3 className="font-thin text-lg max-md:text-base text-[#E7E7E7] max-w-[522px] text-center">
            Flexible pricing options to meet the needs of every team, from startups to large agencies.
            </h3>
          </div>
          <Pricing />
        </div>

        {/* FREqnetly asked questions */}
        <Questions/>

        {/* CARD */}
        <div className="w-[80%] max-lg:w-[95%] max-md:w-full max-md:px-4 h-[520px] max-lg:h-auto max-lg:min-h-[420px] max-md:min-h-[360px] mt-20 max-md:mt-12 mb-10 rounded-[16px] flex max-lg:flex-col bg-[#14151A] border border-[#FFFFFF14]">
            <div className="w-1/2 max-lg:w-full h-full max-lg:min-h-[240px] max-md:min-h-[180px] rounded-l-[16px] max-lg:rounded-b-none max-lg:rounded-t-[16px] overflow-hidden">
                <img src="/images/dashboard2.png" alt="IMage" className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col items-start justify-center w-1/2 max-lg:w-full h-full rounded-r-[16px] max-lg:rounded-t-none max-lg:rounded-b-[16px] gap-3 px-10 max-md:px-6 py-6">
                <h2 className="w-[375px] max-w-full text-4xl max-lg:text-3xl max-md:text-2xl">Ready to transform your <span className="text-[#FF4C00]">Project Management?</span></h2>
                <h3 className="w-[473px] max-w-full font-light text-lg max-md:text-base">Join the growing community of digital agencies revolutionizing their workflows with our powerful, AI-driven tool.</h3>
                <h3 className="w-[473px] max-w-full font-thin text-sm">Experience the benefits firsthand with our free Starter plan. Upgrade anytime to access advanced features and premium support tailored to your team’s needs.</h3>
                {/* Start trial Button */}
                <button className="px-4 py-2 bg-[#FF4C00] flex mt-5 gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] mb-16 max-lg:mb-0">
                Start Your Free Trial
                <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]"/>
                </button>
            </div>
        </div>

        {/* FOOTER */}
        <Footer/>


      </div>
      </div>
    </main>
  );
}
