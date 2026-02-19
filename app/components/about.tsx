import Nav from "./nav";
import TeamGrid, { type TeamMember } from "./team-grid";
import CoreValues from "./core-values";
import SlidingAnimation from "../components/sliding-animation";
import Footer from "../components/footer";

const SAMPLE_TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "CEO & Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    website: "https://example.com",
    profileUrl: "#",
  },
  {
    id: "2",
    name: "James Chen",
    role: "Head of Product",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    website: "https://example.com",
    profileUrl: "#",
  },
  {
    id: "3",
    name: "Maria Garcia",
    role: "Lead Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    website: "https://example.com",
    profileUrl: "#",
  },
  {
    id: "4",
    name: "David Park",
    role: "Engineering Lead",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    website: "https://example.com",
    profileUrl: "#",
  },
  {
    id: "5",
    name: "Emily Watson",
    role: "Customer Success",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    website: "https://example.com",
    profileUrl: "#",
  },
  {
    id: "6",
    name: "Alex Rivera",
    role: "Operations Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    website: "https://example.com",
    profileUrl: "#",
  },
];

const OPEN_ROLES = [
  {
    id: "1",
    title: "UI/UX and Product Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At risus consectetur aliquet urna, sit. Justo orci sagittis amet porta.",
  },
  {
    id: "2",
    title: "Facebook Ads Experts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel id ultrices at erat senectus et lobortis.",
  },
  {
    id: "3",
    title: "Lead UI UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo orci sagittis amet porta. Risus vel id ultrices at erat senectus.",
  },
  {
    id: "4",
    title: "Intern Webflow developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo orci sagittis amet porta. Lorem tellus faucibus hendrerit nunc blandit feugiat.",
  },
];

export default function About() {
    return(
        <div className="flex flex-col items-center max-w-[1440px] m-auto   ">
            <Nav/>
            {/* About */}
            <div className="h-[558px] w-full flex items-center mt-16 mb-16 pl-16">
                    <div className="w-1/2 flex flex-col gap-7 ">
                        <h2 className="text-6xl">About Planr</h2>
                        <h3 className="w-[80%] font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</h3>

                        {/* Active users */}
                        <div className="flex items-center justify-start gap-3 " >
                        <img src="/images/users.png" alt="users" className=" w-[128px] h-[32px]"/>
                        <h3>2000+ Active Users</h3>
                        </div>

                        {/* Start trial Button */}
                        <button className="px-4 w-fit py-2 bg-[#FF4C00] flex gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] mb-16">
                        Start Your Free Trial
                        <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]"/>
                        </button>
                    </div>
                    <div className="w-1/2 ">
                        <img src="/images/about1.png" alt="Rightabout" className="w-full h-full "/>
                    </div>
            </div>         

            {/* Hero    */}
            <div className="p-16">
                {/* TOP banner */}
                <div className="rounded-xl bg-[#FDB99C33] w-fit flex  gap-2 px-3 py-0.5  items-center justify-center mt-[60px] mb-[30px]">
                <h3 className="text-white text-sm font-thin">Real Feedback from Real Users</h3>
                </div>

                {/* Top Info */}
                <div className="flex flex-col gap-2 items-start mb-10">
                <h2 className="text-3xl text-start text-white max-w-[470px]">Meet <span className="text-[#FF4C00]">the team</span> behind plannr</h2>
                <h3 className="font-thin text-lg text-[#E7E7E7] max-w-[470px] text-start" >Unlock seamless collaboration and unparalleled efficiency with our intuitive canvas board.</h3>
                </div>

                {/* Grid users */}
                <TeamGrid members={SAMPLE_TEAM} className="mb-16" />

                {/* vision */}
                <div className="flex flex-col items-center justify-center mb-20 mt-20">
                    <div className="rounded-xl bg-[#FDB99C33] w-fit flex  gap-2 px-3 py-0.5  items-center justify-center mt-[60px] mb-[30px]">
                    <h3 className="text-white text-sm font-thin">VISION</h3>
                    </div>
                    <h3 className="w-[904px] text-6xl text-center">Our vision is to build the world’s most <span className="text-[#FF4C00]">powerful no-code Project Management</span> platform for agencies.</h3>
                </div>
            </div>

            {/* core values */}
            <CoreValues className="mt-20 mb-20"/>

            {/* Visionary careers section */}
            <section className="w-full px-16 pb-24 pt-24">
              <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
                {/* Left copy */}
                <div className="w-full lg:w-[38%] flex flex-col gap-6">
                  <h2 className="text-4xl md:text-5xl text-white leading-tight">
                    Join the team of{" "}
                    <span className="text-[#FF4C00]">Visionaries</span>
                  </h2>
                  <p className="text-sm md:text-base text-[#E7E7E7]/80 max-w-[360px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                    mattis condimentum at quam tellus non.
                  </p>
                </div>

                {/* Right roles list */}
                <div className="w-full lg:w-[62%]">
                  <div className="flex flex-col divide-y divide-white/10">
                    {OPEN_ROLES.map((role) => (
                      <div key={role.id} className="py-8 first:pt-0 last:pb-0">
                        <h3 className="text-lg md:text-xl text-white mb-2">
                          {role.title}
                        </h3>
                        <p className="text-sm text-[#E7E7E7]/80 max-w-[640px] mb-6">
                          {role.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium">
                            Apply now
                          </button>
                          <button className="px-5 py-2 rounded-full border border-white/30 text-white text-sm font-medium">
                            View job
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <h3 className="font-thin text-xl mb-20 mt-10">Trusted by Leading Digital Agencies</h3>

            {/* Trusts */}
            <div className="w-full flex flex-col gap-5 text-white mb-10">
            <SlidingAnimation />
            </div>

            {/* CARD */}
            <div className="w-[90%] h-[520px] mt-20 mb-10 rounded-[16px] flex bg-[#14151A] border-[1px] border-[#FFFFFF14]">
            <div className="w-1/2 h-full rounded-l-[16px]">
                <img src="/images/dashboard2.png" alt="IMage" className="w-full h-full rounded-l-[16px]"/>
            </div>
            <div className="flex flex-col items-start justify-center w-1/2 h-full rounded-r-[16px] gap-3 px-10">
                <h2 className="w-[375px] text-4xl">Ready to transform your <span className="text-[#FF4C00]">Project Management?</span></h2>
                <h3 className="w-[473px] font-light text-lg">Join the growing community of digital agencies revolutionizing their workflows with our powerful, AI-driven tool.</h3>
                <h3 className="w-[473px] font-thin text-sm">Experience the benefits firsthand with our free Starter plan. Upgrade anytime to access advanced features and premium support tailored to your team’s needs.</h3>
                {/* Start trial Button */}
                <button className="px-4 py-2 bg-[#FF4C00] flex mt-5 gap-2 items-center rounded-xl shadow-sm shadow-[#14151A0D] mb-16">
                Start Your Free Trial
                <img src="/images/arrow.png" alt="Arrow" className="w-[14px] h-[13px]"/>
                </button>
            </div>
            </div>

            {/* FOOTER */}
            <Footer/>
        </div>
    )
}