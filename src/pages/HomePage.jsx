import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const HomePage = () => {
    const titleRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        
        const chars = titleRef.current.children;
        
        tl.fromTo(chars, 
            { y: 100, opacity: 0, filter: 'blur(20px)', rotateX: -45 }, 
            { y: 0, opacity: 1, filter: 'blur(0px)', rotateX: 0, duration: 1.5, stagger: 0.1, ease: 'power4.out' }
        )
        .fromTo(linksRef.current.children, 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }, 
            "-=0.5"
        );
    }, []);

    return (
        <div className="h-screen w-full bg-[#0a0a0a] relative flex flex-col items-center justify-center overflow-hidden">
            
            {/* Elegant Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#151515] to-[#050505] pointer-events-none"></div>
            
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] pointer-events-none"></div>

            {/* Ambient Spotlights */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50 animate-pulse-slow"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1a1a1a] rounded-full blur-[150px] pointer-events-none opacity-80"></div>

            <div className="z-10 text-center space-y-16 relative">
                
                {/* Brand Title - Editorial Style */}
                <div className="relative">
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                         <div className="h-8 w-[1px] bg-[#d4af37]/40"></div>
                         <div className="text-[10px] font-minimal tracking-[0.4em] text-[#d4af37]/60 uppercase">Est. 2026</div>
                    </div>
                    <h1 className="text-8xl md:text-[10rem] font-luxury italic text-white/90 leading-none mix-blend-overlay opacity-90 drop-shadow-2xl overflow-hidden flex justify-center">
                        <span ref={titleRef} className="flex">
                            {"Velvet".split("").map((char, index) => (
                                <span key={index} className="inline-block transform origin-bottom">{char}</span>
                            ))}
                        </span>
                    </h1>
                    <div className="absolute -bottom-8 right-0 flex items-center gap-4">
                        <div className="h-[1px] w-12 bg-[#d4af37]/40"></div>
                        <div className="text-3xl font-luxury text-[#d4af37]">Spirits</div>
                    </div>
                </div>

            </div>

            {/* Navigation Line - Minimalist */}
            <div ref={linksRef} className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-8 z-20">
                <Link to="/whisky" className="flex flex-col items-center gap-4 group cursor-pointer">
                    <span className="font-minimal text-[10px] tracking-widest text-white/50 group-hover:text-[#d4af37] transition-colors rotate-90 origin-center translate-x-2">WHISKY</span>
                    <div className="w-[1px] h-24 bg-white/20 group-hover:bg-[#d4af37] group-hover:h-32 transition-all duration-500"></div>
                </Link>
            </div>

            {/* Bottom Discovery Indicator */}
            <div className="absolute bottom-12 flex flex-col items-center gap-2 z-20 opacity-60 animate-bounce">
                <span className="font-minimal text-[8px] tracking-[0.3em] text-white uppercase">Discover</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white to-transparent"></div>
            </div>

            {/* Footer Signature */}
            <div className="absolute bottom-12 left-12 font-luxury text-white/20 italic tracking-widest text-sm">
                Curated for the connoisseur.
            </div>
        </div>
    );
};

export default HomePage;
