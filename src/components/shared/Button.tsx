// A reusable button component that can be used throughout the application
interface ButtonProps {
  // The text to display inside the button
  children: React.ReactNode;
  // The function to call when the button is clicked
  onClick?: () => void;
  // The type of button (submit, button, reset)
  type?: 'button' | 'submit' | 'reset';
  // Additional CSS classes
  className?: string;
}

export function Button({ 
  children, 
  onClick, 
  type = 'button',
  className = ''
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-blue-600 
        text-white 
        px-4 
        py-2 
        rounded-md 
        hover:bg-blue-700 
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
}