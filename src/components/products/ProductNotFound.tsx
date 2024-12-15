import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ProductNotFound() {
  return (
    <div className="min-h-screen bg-gradient-light bg-pattern py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <Link to="/products" className="text-blue-600 hover:text-blue-700 mt-4 inline-flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          Back to Products
        </Link>
      </div>
    </div>
  );
}