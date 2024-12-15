import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { ProductImage } from './ProductImage';
import { ProductFeatures } from './ProductFeatures';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <ProductImage
        id={product.id}
        image={product.image}
        name={product.name}
        category={product.category}
      />
      <div className="p-6">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <ProductFeatures features={product.features} limit={3} />
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-600 font-semibold">{product.price}</span>
          <Link
            to={`/products/${product.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}