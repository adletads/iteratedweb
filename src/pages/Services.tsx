import { services } from '../data/services';
import { BarChart, Palette, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const icons = {
  BarChart,
  Palette,
  Globe
};

export function Services() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive advertising solutions for your business
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <div key={service.id} className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <div className="text-blue-600 mb-4">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}