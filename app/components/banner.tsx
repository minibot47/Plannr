'use client';

import { useState } from 'react';

export default function Banner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return(
        <div className="w-full h-[10%] bg-[#FF4C00] text-white flex items-center justify-between px-16 py-3 max-w-[1440px] m-auto">
            <div>
                <h3>Medium length banner heading goes here</h3>
                <h4 className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            </div>
            <div className="flex gap-4 items-center">
                <button className="px-4 py-2 bg-white text-black rounded-[12px]">Read more</button>
                <img 
                    src="/images/cancel.png" 
                    alt="cancel button" 
                    className="w-[14px] h-[14px] cursor-pointer"
                    onClick={() => setIsVisible(false)}
                />
            </div>
        </div>
    )
}