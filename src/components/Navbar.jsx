import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = ({ cartCount, onOpenCart }) => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full p-10 flex justify-between items-start z-50 pointer-events-auto mix-blend-difference text-[#e5e5e5]">
      
      {/* Brand - Top Left */}
      <Link to="/" className="group">
        <div className="font-luxury text-2xl italic tracking-wide group-hover:text-[#d4af37] transition-colors duration-500">Velvet Spirits.</div>
        <div className="h-[1px] w-0 bg-[#d4af37] group-hover:w-full transition-all duration-700 ease-out"></div>
      </Link>
    </nav>
  );
};

export default Navbar;
