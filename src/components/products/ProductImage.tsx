import { Link } from 'react-router-dom';

interface ProductImageProps {
  id: string;
  image: string;
  name: string;
  category: string;
}

export function ProductImage({ id, image, name, category }: ProductImageProps) {
  return (
    <Link to={`/products/${id}`}>
      <img
        src={image}
        alt={`${name} - Adlet ${category}`}
        className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
      />
    </Link>
  );
}