// A consistent header component for all pages
interface PageHeaderProps {
  // The main title of the page
  title: string;
  // Optional subtitle or description
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}