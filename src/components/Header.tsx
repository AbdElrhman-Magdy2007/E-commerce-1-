
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'Hoodies', path: '/hoodie' },
    { name: 'T-Shirts', path: '/t-shirts' },
    { name: 'Accessories', path: '/accessories' },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest">
          HOODIE
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-black text-sm font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          <Link to="/cart">
            <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-black" />
          </Link>
          <Link to="/account">
            <User className="w-5 h-5 text-gray-600 hover:text-black" />
          </Link>
          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-gray-700 hover:text-black text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/cart" className="block py-2 text-gray-700 hover:text-black">
            Cart
          </Link>
          <Link to="/account" className="block py-2 text-gray-700 hover:text-black">
            Account
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
