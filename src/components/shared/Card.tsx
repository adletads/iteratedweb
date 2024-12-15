// A reusable card component for consistent styling across the application
interface CardProps {
  // The content to display inside the card
  children: React.ReactNode;
  // Additional CSS classes
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-gray-50 
      rounded-lg 
      overflow-hidden 
      shadow-lg
      ${className}
    `}>
      {children}
    </div>
  );
}