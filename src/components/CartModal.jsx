import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CartModal = ({ isOpen, onClose, items = [], onRemove, total = 0 }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [checkoutState, setCheckoutState] = React.useState('idle'); // idle, processing, success

  const handleCheckout = () => {
    setCheckoutState('processing');
    setTimeout(() => {
        setCheckoutState('success');
    }, 2000); // Fake delay
  };

  // Reset state when closed
  useEffect(() => {
    if (!isOpen && checkoutState === 'success') {
        setTimeout(() => setCheckoutState('idle'), 500);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(modalRef.current, { opacity: 1, duration: 0.5, pointerEvents: 'auto' });
      gsap.fromTo(contentRef.current, { x: '100%' }, { x: '0%', duration: 0.8, ease: 'power3.out' });
    } else {
      gsap.to(modalRef.current, { opacity: 0, duration: 0.5, pointerEvents: 'none' });
      gsap.to(contentRef.current, { x: '100%', duration: 0.6, ease: 'power3.in' });
    }
  }, [isOpen]);

  return (
    <div ref={modalRef} className="fixed inset-0 z-[60] bg-black/60 opacity-0 pointer-events-none backdrop-blur-sm flex justify-end">
      <div ref={contentRef} className="w-full md:w-[500px] h-full bg-[#0c0c0c] border-l border-white/5 flex flex-col shadow-2xl relative">
        
        {/* Header */}
        <div className="p-12 border-b border-white/5 flex justify-between items-baseline">
          <h2 className="text-3xl font-luxury italic text-[#e5e5e5]">Your Collection</h2>
          <button onClick={onClose} className="font-minimal text-[10px] tracking-[0.2em] text-[#d4af37] hover:text-white transition-colors uppercase">
            Close
          </button>
        </div>

        {/* Contents */}
        <div className="flex-1 overflow-y-auto p-12 space-y-8">
          {checkoutState === 'idle' && (
              items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/20 space-y-4">
                    <div className="italic font-luxury text-xl">Empty.</div>
                    <p className="font-minimal text-[10px] tracking-widest uppercase">Select a spirit to begin.</p>
                </div>
              ) : (
                items.map((item, index) => (
                  <div key={index} className="flex gap-6 items-center group">
                    <div className="w-16 h-20 bg-white/5 flex items-center justify-center overflow-hidden">
                        {item.image ? (
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-70" />
                        ) : (
                            <div className="font-luxury italic text-white/20 text-xs">Vs.</div>
                        )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-luxury text-xl text-[#f5f5f5]">{item.name}</h3>
                      <p className="font-minimal text-[10px] text-white/40 tracking-widest mt-1">${item.price}</p>
                    </div>
                    
                    <button 
                      onClick={() => onRemove(index)} 
                      className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:bg-white hover:text-black hover:border-white transition-all"
                    >
                      <span className="text-xs">×</span>
                    </button>
                  </div>
                ))
              )
          )}

          {checkoutState === 'processing' && (
              <div className="h-full flex flex-col items-center justify-center space-y-6">
                  <div className="w-12 h-12 border-2 border-white/10 border-t-[#d4af37] rounded-full animate-spin"></div>
                  <p className="font-minimal text-xs tracking-widest text-white/50 uppercase">Processing Order...</p>
              </div>
          )}

          {checkoutState === 'success' && (
              <div className="h-full flex flex-col items-center justify-center space-y-6 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center border border-[#d4af37]/30 text-[#d4af37]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                      <h3 className="font-luxury text-2xl text-[#d4af37] mb-2">Order Confirmed</h3>
                      <p className="font-minimal text-[10px] tracking-widest text-white/50 uppercase">Thank you for your purchase.</p>
                  </div>
                  <div className="pt-8 w-full">
                      <div className="flex justify-between border-b border-white/10 pb-4 mb-4">
                          <span className="font-minimal text-xs text-white/30">ORDER ID</span>
                          <span className="font-minimal text-xs text-white/70">#VS-{Math.floor(Math.random() * 10000)}</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="font-minimal text-xs text-white/30">TOTAL</span>
                          <span className="font-minimal text-xs text-[#d4af37]">${total.toFixed(2)}</span>
                      </div>
                  </div>
              </div>
          )}
        </div>

        {/* Footer */}
        {checkoutState === 'idle' && (
            <div className="p-12 border-t border-white/5 bg-[#111]">
            <div className="flex justify-between items-end mb-8">
                <span className="font-minimal text-[10px] tracking-widest text-white/40 uppercase">Subtotal</span>
                <span className="font-luxury text-4xl text-[#d4af37]">${total.toFixed(2)}</span>
            </div>
            <button 
                onClick={handleCheckout}
                disabled={items.length === 0}
                className="w-full py-5 bg-[#d4af37] text-black font-minimal text-xs font-bold tracking-[0.3em] hover:bg-white transition-all disabled:opacity-20 disabled:cursor-not-allowed uppercase"
            >
                Checkout
            </button>
            </div>
        )}

      </div>
    </div>
  );
};

export default CartModal;
