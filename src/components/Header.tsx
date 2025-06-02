
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black tracking-wider">HOODIE</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">MEN</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">WOMEN</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">HOODIE</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">T-SHIRTS</a>
            <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium">ACCESSORIES</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <User className="h-5 w-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <Heart className="h-5 w-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 relative">
              <ShoppingBag className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2">MEN</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2">WOMEN</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2">HOODIE</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2">T-SHIRTS</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2">ACCESSORIES</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
