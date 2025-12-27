import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const WhiskyPage = ({ onAddToCart }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Text Reveal
    const tl = gsap.timeline();
    tl.fromTo(textRef.current.children, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.3, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black text-[#f3e5cc]">
        
        {/* Full Screen Background Image */}
        <div className="absolute inset-0 z-0 will-change-transform">
            <img 
                ref={containerRef}
                src="/assets/whisky.jpg"
                alt="Whisky Lounge" 
                className="w-full h-full object-cover opacity-60"
                loading="eager"
                decoding="async"
            />
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>

        {/* Left Side Editorial Note */}
        <div className="absolute top-1/2 -translate-y-1/2 left-12 md:left-24 max-w-xs z-20 text-left pointer-events-none bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10">
             <div className="w-8 h-[1px] bg-[#d4af37] mb-6"></div>
             <p className="font-signature text-4xl text-white leading-tight drop-shadow-md opacity-90" style={{ fontFamily: "'Allura', cursive" }}>
                "Time itself is the essential ingredient."
             </p>
             <p className="font-minimal text-[10px] tracking-[0.3em] text-white/70 mt-4 uppercase">
                EST. 1824 — SCOTLAND
             </p>
        </div>

        {/* Content Overlay - Editorial Style (Strict Right Column) */}
        <div ref={textRef} className="relative z-10 h-full flex flex-col justify-center items-end px-12 md:px-20 w-full will-change-transform">
            
            {/* Constraint container to ensuring no overlap with center-left product */}
            <div className="max-w-[500px] w-full flex flex-col items-end space-y-8 text-right bg-gradient-to-l from-black/80 via-black/40 to-transparent p-8 rounded-xl backdrop-blur-[2px]">
                
                <div className="flex items-center gap-4 flex-row-reverse">
                    <div className="h-[1px] w-12 bg-[#d4af37]"></div>
                    <span className="font-minimal text-[#d4af37] tracking-[0.4em] text-xs uppercase">The Heritage Collection</span>
                </div>

                <h1 className="font-luxury text-6xl md:text-8xl leading-none text-white drop-shadow-2xl">
                    Golden <br/> <i className="text-[#d4af37]">Ember</i>
                </h1>

                <p className="font-luxury text-xl text-white/80 italic leading-relaxed border-r-2 border-[#d4af37] pr-6">
                    "A silence that speaks volumes. Aged 18 years in the heart of the sanctuary."
                </p>

                <div className="flex flex-col gap-1 font-minimal text-[10px] tracking-widest text-white/50 pt-4 items-end">
                    <span>NOTES: OAK • SMOKE • DARK CHOCOLATE</span>
                    <span>ABV: 48.5% • ORIGIN: HIGHLANDS</span>
                </div>

                <div className="pt-8 flex flex-row-reverse items-center gap-8">
                    <span className="font-luxury text-4xl text-[#d4af37]">$4999</span>
                    <button 
                        onClick={onAddToCart}
                        className="px-10 py-4 bg-[#d4af37] text-black font-minimal text-xs font-bold tracking-[0.2em] hover:bg-white transition-colors uppercase"
                    >
                        Add to Collection
                    </button>
                </div>

            </div>
        </div>



    </div>
  );
};

export default WhiskyPage;
