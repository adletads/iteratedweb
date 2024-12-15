import { Link } from 'react-router-dom';
import { BlogPost } from '../../types';
import { formatDate } from '../../utils/formatters';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span>{formatDate(post.date)}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}