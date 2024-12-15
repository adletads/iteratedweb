interface ProductFeaturesProps {
  features: string[];
  limit?: number;
}

export function ProductFeatures({ features, limit }: ProductFeaturesProps) {
  const displayFeatures = limit ? features.slice(0, limit) : features;

  return (
    <div className="space-y-2">
      {displayFeatures.map((feature, index) => (
        <p key={index} className="text-sm text-gray-600 flex items-center">
          <span className="mr-2">•</span>
          {feature}
        </p>
      ))}
    </div>
  );
}