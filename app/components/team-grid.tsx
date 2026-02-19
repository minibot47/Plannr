"use client";

// Reusable team member card type - pass your own data
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  profileUrl?: string;
}

// LinkedIn icon
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// X (Twitter) icon
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Globe icon
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

// External link arrow icon
function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  const linkSize = "w-9 h-9";
  const iconSize = "w-4 h-4";

  return (
    <article className="group rounded-xl bg-[#14151A] border border-[#FFFFFF14] overflow-hidden flex flex-col hover:border-[#FFFFFF28] transition-colors">
      {/* Portrait */}
      <div className="aspect-square w-full overflow-hidden rounded-t-xl">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-white">{member.name}</h3>
        <p className="text-sm text-[#E7E7E7]/80 mt-0.5">{member.role}</p>
        <p className="text-sm text-[#E7E7E7]/70 font-thin mt-3 leading-relaxed line-clamp-3">
          {member.description}
        </p>

        {/* Icons row */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-2">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkSize} flex items-center justify-center rounded-lg bg-[#FFFFFF14] text-[#E7E7E7] hover:bg-[#FFFFFF24] hover:text-white transition-colors`}
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon className={iconSize} />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkSize} flex items-center justify-center rounded-lg bg-[#FFFFFF14] text-[#E7E7E7] hover:bg-[#FFFFFF24] hover:text-white transition-colors`}
                aria-label={`${member.name} on X`}
              >
                <TwitterIcon className={iconSize} />
              </a>
            )}
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkSize} flex items-center justify-center rounded-lg bg-[#FFFFFF14] text-[#E7E7E7] hover:bg-[#FFFFFF24] hover:text-white transition-colors`}
                aria-label={`${member.name} website`}
              >
                <GlobeIcon className={iconSize} />
              </a>
            )}
          </div>
          {member.profileUrl && (
            <a
              href={member.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkSize} flex items-center justify-center rounded-lg bg-[#FFFFFF14] text-[#E7E7E7] hover:bg-[#FF4C00] hover:text-white transition-colors`}
              aria-label={`View ${member.name} profile`}
            >
              <ExternalLinkIcon className={iconSize} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

interface TeamGridProps {
  members: TeamMember[];
  className?: string;
}

export default function TeamGrid({ members, className = "" }: TeamGridProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {members.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
}
