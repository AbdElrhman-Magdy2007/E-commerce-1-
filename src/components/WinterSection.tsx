
const WinterSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-wider">
            FULL WINTERS
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Essential winter wear designed for comfort and style in the coldest months
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Showcase */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Winter Hoodie"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Winter Sneakers"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold">WINTER ESSENTIALS</h3>
                <p className="text-gray-300 text-sm">
                  Complete your winter look with our curated accessories
                </p>
                <button className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-100 transition-colors duration-200 self-start">
                  SHOP WINTER
                </button>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">YOUR COLLECTION</h3>
              <h4 className="text-xl text-gray-300 mb-6">WINTER IS COMING</h4>
              <p className="text-gray-300 leading-relaxed mb-8">
                Prepare for the season with our premium winter collection. Each piece is carefully crafted 
                to provide maximum warmth without compromising on style. From our signature hoodies to 
                essential accessories, we have everything you need to stay comfortable and fashionable 
                throughout the winter months.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="border border-gray-700 p-6 rounded-lg">
                <h4 className="text-2xl font-bold mb-2">50+</h4>
                <p className="text-gray-300 text-sm">Winter Styles</p>
              </div>
              <div className="border border-gray-700 p-6 rounded-lg">
                <h4 className="text-2xl font-bold mb-2">100%</h4>
                <p className="text-gray-300 text-sm">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterSection;
