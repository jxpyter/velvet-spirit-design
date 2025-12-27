import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartModal from './components/CartModal';
import HomePage from './pages/HomePage';
import WhiskyPage from './pages/WhiskyPage';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#d4af37] selection:text-black">
      <Navbar 
        cartCount={cartItems.length} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
        total={cartTotal}
      />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/whisky" element={<WhiskyPage onAddToCart={() => addToCart({ name: "Golden Ember Whisky", price: 4999, image: "/assets/whisky.jpg" })} />} />
      </Routes>

      {/* Luxury Footer (Minimal) */}
      <footer className="fixed bottom-0 w-full py-4 text-center z-50 pointer-events-none">
          <p className="font-minimal text-[10px] tracking-[0.3em] text-white/20 uppercase">Velvet Spirits. © 2026</p>
      </footer>
    </div>
  );
};

export default App;
