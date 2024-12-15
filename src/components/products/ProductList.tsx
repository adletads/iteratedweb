import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
  category: string;
}

export function ProductList({ products, category }: ProductListProps) {
  const filteredProducts = products.filter(product => product.category === category);
  
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}