import React from 'react'
import "./3D_Style.css";

export default function Text3D() {
    return (
        <div className="h-10 xl:h-14">
            <div className="test text-xl md:text-4xl xl:text-7xl">
                Hey! I am Mizanur Hasan
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="squiggly-0">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
                        <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                    </filter>
                    <filter id="squiggly-1">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                    </filter>

                    <filter id="squiggly-2">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                    </filter>
                    <filter id="squiggly-3">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                    </filter>

                    <filter id="squiggly-4">
                        <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}
