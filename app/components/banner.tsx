'use client';

import { useState } from 'react';

export default function Banner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="w-full bg-[#FF4C00] text-white max-w-[1440px] m-auto">
            <div className="flex items-center justify-between gap-3 px-8 max-md:px-4 py-3">
                {/* Text */}
                <div className="min-w-0 flex-1">
                    <h3 className="font-semibold max-md:text-sm leading-snug">
                        Plannr is now in public beta
                    </h3>
                    <h4 className="text-sm max-md:text-xs text-white/80 mt-0.5 max-md:hidden">
                        Manage projects, track progress, and collaborate with your team, all in one place.
                    </h4>
                </div>

                {/* Actions */}
                <div className="flex gap-3 items-center shrink-0">
                    <a
                        href="https://www.linkedin.com/in/toludairo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-white text-[#FF4C00] text-sm font-semibold rounded-[10px] hover:bg-orange-50 transition-colors whitespace-nowrap"
                    >
                        Get in touch
                    </a>
                    <button
                        onClick={() => setIsVisible(false)}
                        aria-label="Dismiss banner"
                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-3.5 h-3.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile-only subtext row */}
            <p className="hidden max-md:block text-xs text-white/80 px-4 pb-3 -mt-1">
                Manage projects, track progress, and collaborate — all in one place.
            </p>
        </div>
    );
}