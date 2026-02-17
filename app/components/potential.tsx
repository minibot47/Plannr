export default function Potential() {
  const features = [
    {
      title: "Seamless Collaboration",
      description:
        "Our platform enables real-time collaboration, ensuring that your team stays connected and coordinated, no matter where they are.",
      icon: (<img src="/images/Frame1.png" alt="logo" className="w-[56px] h-[56px]"/>
      ),
    },
    {
      title: "Customizable Workflows",
      description:
        "Tailor the canvas board to fit your unique project needs. Customize task categories, set priorities, and create templates that streamline your processes.",
        icon: (<img src="/images/Frame2.png" alt="logo" className="w-[56px] h-[56px]"/>
        ),
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain insights with our robust analytics dashboard. Track key metrics, monitor progress, and make data-driven decisions to enhance outcomes.",
      icon: (<img src="/images/Frame.png" alt="logo" className="w-[56px] h-[56px]"/>
      ),
    },
    {
      title: "Time Tracking",
      description:
        "Keep track of time spent on tasks to improve efficiency and optimize resource allocation, ensuring every project stays on schedule.",
        icon: (<img src="/images/Frame3.png" alt="logo" className="w-[56px] h-[56px]"/>
        ),
    },
    {
      title: "Automated Notifications",
      description:
        "Stay on top of deadlines with automated reminders and notifications, reducing missed tasks and ensuring timely completion.",
        icon: (<img src="/images/Frame4.png" alt="logo" className="w-[56px] h-[56px]"/>
        ),
    },
    {
      title: "Visual Task Management",
      description:
        "Easily visualize project progress with drag-and-drop functionality and clear assignments that enhance clarity and efficiency.",
        icon: (<img src="/images/Frame5.png" alt="logo" className="w-[56px] h-[56px]"/>
        ),
    },
  ];

  return (
    <section className="w-full flex flex-col items-center mb-20">
      {/* TOP banner */}
      <div className="rounded-xl bg-[#FDB99C33] w-fit flex gap-2 px-3 py-0.5 items-center justify-center mt-[60px] mb-[60px] m-auto">
        <h3 className="text-white text-sm font-thin">See what's new in Grauberg</h3>
      </div>

      {/* Top Info */}
      <div className="flex flex-col gap-5 items-center mb-20">
        <h2 className="text-5xl text-center text-white max-w-[586px]">
          Unleash the full potential of <span className="text-[#FF4C00]"> Your Projects</span>
        </h2>
        <h3 className="font-thin text-lg text-[#E7E7E7] max-w-[518px] text-center">
          Discover the powerful features that make our project management tool indispensable for digital
          agencies.
        </h3>
      </div>

      {/* Grid */}
      <div className="w-[80%] max-w-[1440px] px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-24">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-3">
              <div className="text-[#FF4C00] mb-2">{f.icon}</div>
              <h3 className="text-white text-xl font-medium">{f.title}</h3>
              <p className="text-[#E7E7E7]/70 text-thin leading-relaxed max-w-[360px]">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}