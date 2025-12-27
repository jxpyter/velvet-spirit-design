import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductSection = ({ id, title, description, price, image, align = 'left', onAddToCart }) => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    gsap.fromTo(imgRef.current,
      { scale: 1.2, opacity: 0.8 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      }
    );

    gsap.fromTo(textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      }
    );
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-20 overflow-hidden gap-12 md:gap-24 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Image Container */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] overflow-hidden relative rounded-sm">
        <img 
          ref={imgRef}
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      </div>

      {/* Text Container */}
      <div ref={textRef} className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
        <h2 className="text-4xl md:text-7xl font-serif font-bold text-premium-light leading-none">
          {title}
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
          {description}
        </p>
        <div className="flex items-center gap-6 mt-4">
          <span className="text-2xl text-premium-gold font-mono">{price}</span>
          <button 
            onClick={onAddToCart}
            className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>

    </section>
  );
};

export default ProductSection;
