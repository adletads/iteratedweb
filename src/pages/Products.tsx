import { products } from '../data/products';
import { ProductList } from '../components/products/ProductList';
import { PageHeader } from '../components/shared/PageHeader';
import { SEOHead } from '../components/SEOHead';

export function Products() {
  const categories = Array.from(new Set(products.map(product => product.category)));
  const productKeywords = products.map(p => p.keywords).join(', ');

  return (
    <>
      <SEOHead
        title="LED Sign Boards & Custom Business Cards | Adlet Products"
        description="Discover Adlet's premium LED sign boards, custom NFC visiting cards, and innovative advertising solutions. High-quality LED displays and business cards for modern businesses in Kerala."
        path="/products"
        keywords={productKeywords}
      />
      <div className="bg-gradient-light bg-pattern py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageHeader 
            title="Our Products"
            description="Innovative LED sign boards and custom business card solutions for your business"
          />

          <div className="mt-16">
            {categories.map((category) => (
              <ProductList 
                key={category}
                category={category}
                products={products}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}