import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo([line1Ref.current, line2Ref.current], 
      { y: 100, opacity: 0, skewY: 10 },
      { y: 0, opacity: 1, skewY: 0, duration: 1.2, ease: 'power4.out', stagger: 0.2, delay: 0.5 }
    )
    .fromTo(subRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      "-=0.5"
    );
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-premium-dark pointer-events-none z-10" />
      
      <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tight leading-tight z-0">
        <div className="overflow-hidden">
          <div ref={line1Ref} className="text-premium-light">Distilled</div>
        </div>
        <div className="overflow-hidden">
          <div ref={line2Ref} className="text-premium-gold">Perfection.</div>
        </div>
      </h1>

      <div ref={subRef} className="mt-8 text-sm md:text-lg font-light tracking-widest text-white/60 uppercase z-20">
        Taste the Legacy
      </div>
      
      <div className="absolute bottom-10 left-1/2 min-1/2 w-[1px] h-24 bg-white/20 overflow-hidden">
        <div className="w-full h-full bg-white animate-scroll-down"></div>
      </div>
    </section>
  );
};

export default Hero;
