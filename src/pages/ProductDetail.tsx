import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { SEOHead } from '../components/SEOHead';
import { Button } from '../components/shared/Button';
import { ProductFeatures } from '../components/products/ProductFeatures';
import { ProductNotFound } from '../components/products/ProductNotFound';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <>
      <SEOHead
        title={`${product.name} | Adlet Products`}
        description={product.description}
        path={`/products/${product.id}`}
        keywords={product.keywords}
      />
      <div className="min-h-screen bg-gradient-light bg-pattern py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="text-blue-600 hover:text-blue-700 inline-flex items-center mb-8">
            <ArrowLeft className="mr-2" size={20} />
            Back to Products
          </Link>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-96 lg:h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Features</h2>
                  <ProductFeatures features={product.features} />
                </div>

                <div className="flex items-center justify-between mb-8">
                  <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                </div>

                <Link to="/contact">
                  <Button className="w-full">Contact Us for Pricing</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}