
const HighlightedStyles = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* 01 Sweatshirt */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Premium Sweatshirt"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              
              {/* Number Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-white text-black px-4 py-2 font-bold text-lg">
                  01
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-2">SWEATSHIRT</h3>
                <p className="text-sm opacity-90 max-w-xs">
                  Premium comfort meets minimalist design in our signature collection
                </p>
              </div>
            </div>
          </div>

          {/* 02 Athletic */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Athletic Hoodie"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
              
              {/* Number Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-white text-black px-4 py-2 font-bold text-lg">
                  02
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-bold mb-2">ATHLETIC</h3>
                <p className="text-sm opacity-90 max-w-xs">
                  Performance meets street style in our athletic collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedStyles;
