
const OurCollection = () => {
  const filters = ['ALL', 'T-SHIRTS', 'HOODIES', 'CREWNECK', 'FULLWEAR', 'WINTERWEAR'];
  
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "Essential Hoodie",
      price: "$89"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "Vintage Crew",
      price: "$75"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "Urban Zip-Up",
      price: "$95"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "Classic Black",
      price: "$82"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "Graphic Print",
      price: "$92"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      title: "Oversized Fit",
      price: "$88"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 tracking-wider">
            OUR COLLECTION
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated pieces that blend contemporary design with timeless comfort
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-black border-b-2 border-transparent hover:border-black transition-all duration-200"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-white mb-4">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-black mb-2">{product.title}</h3>
                <p className="text-gray-600 font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCollection;
