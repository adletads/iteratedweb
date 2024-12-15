import { Hero } from '../components/Hero';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export function Home() {
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <>
      <SEOHead
        title="Adlet - Innovative Advertising Solutions"
        description="Transform your business with Adlet's innovative advertising solutions. Discover our LED displays, NFC business cards, and smart analytics for modern marketing needs."
        path="/"
      />
      <div className="bg-gradient-light bg-pattern">
        <Hero />
        
        {/* Featured Products */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Products</h2>
            
            {categories.map((category) => (
              <div key={category} className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {products
                    .filter(product => product.category === category)
                    .map((product) => (
                      <div key={product.id} className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h4 className="text-xl font-bold mb-2">{product.name}</h4>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          <ul className="space-y-2 mb-4">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-center">
                                <span className="mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center justify-between">
                            <span className="text-blue-600 font-semibold">{product.price}</span>
                            <Link
                              to={`/products/${product.id}`}
                              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                            >
                              Learn more
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}