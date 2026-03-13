import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Skincare', href: '#' },
    { name: 'Makeup', href: '#' },
    { name: 'Fragrance', href: '#' },
    { name: 'Best Sellers', href: '#' },
    { name: 'Our Story', href: '#' },
  ];

  return (
    <nav className="relative bg-white border-b border-stone-100 font-sans">
      {/* Top Utility Bar (Optional) */}
      <div className="bg-stone-50 py-2 text-center text-xs tracking-widest uppercase text-stone-600">
        Free shipping on orders over $50
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-serif tracking-tighter cursor-pointer">
              LUMIÈRE <span className="text-[10px] tracking-widest block -mt-1 text-stone-400">BEAUTÉ</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-black transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Icons/Actions */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button className="text-stone-600 hover:text-black hidden sm:block">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="text-stone-600 hover:text-black">
              <User size={20} strokeWidth={1.5} />
            </button>
            <button className="text-stone-600 hover:text-black hidden sm:block">
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <button className="text-stone-600 hover:text-black relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-stone-800 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-white border-t border-stone-100`}
      >
        <div className="px-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-4 text-base font-medium text-stone-700 border-b border-stone-50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex justify-around text-stone-500">
             <Search size={20} />
             <Heart size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;