export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}


const DEFAULT_VALUES: CoreValue[] = [
  {
    id: "1",
    title: "Obsess over customer experience",
    description:
      "Our platform enables real-time collaboration, ensuring that your team stays connected and coordinated, no matter where they are.",
    icon: "/images/Frame.png",
  },
  {
    id: "2",
    title: "Move with heartfelt urgency",
    description:
      "Gain insights with our robust analytics dashboard. Track key metrics, monitor progress, and make data-driven decisions to enhance project outcomes.",
    icon: "/images/Frame2.png",
  },
  {
    id: "3",
    title: "Say the hard thing with care",
    description:
      "Keep track of time spent on tasks to improve efficiency and optimize resource allocation, ensuring every project stays on schedule and within budget.",
    icon: "/images/Frame4.png",
  },
  {
    id: "4",
    title: "Make your mark",
    description:
      "Easily visualize your project's progress with our intuitive interface. Drag-and-drop functionality and clear task assignments enhance clarity and efficiency.",
    icon: "/images/Frame5.png",
  },
];

function ValueCard({ value }: { value: CoreValue }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-shrink-0">
        <img
          src={value.icon}
          alt={value.title}
          className="h-10 w-10 object-contain"
        />
      </div>
      <h4 className="text-lg font-semibold text-white">{value.title}</h4>
      <p className="text-sm text-[#A0A0A0] leading-relaxed">{value.description}</p>
    </div>
  );
}

interface CoreValuesProps {
  values?: CoreValue[];
  className?: string;
}

export default function CoreValues({ values = DEFAULT_VALUES, className = "" }: CoreValuesProps) {
  return (
    <section
      className={`w-full   bg-[#141416] px-16 py-16 ${className}`}
    >
      <div className="mx-auto flex max-w-[1440px]  flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left column */}
        <div className="flex w-full flex-col gap-4 lg:w-[38%]">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            The <span className="text-[#FF4C00]">Core Values</span>
            <br />
            behind
            <br />
            our work
          </h2>
          <p className="max-w-[90%] text-sm font-thin text-white lg:max-w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique.
          </p>
        </div>

        {/* Right column - 2x2 grid */}
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:w-[62%]">
          {values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
