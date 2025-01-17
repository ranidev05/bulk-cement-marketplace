import { useEffect, useState } from 'react';

const bannerMessages = [
  "Best Quality Cement Products",
  "Bulk Orders Available",
  "Pan India Delivery",
  "Multiple Cement Brands"
];

export const Banner = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % bannerMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-white py-4 overflow-hidden">
      <div className="banner-slide">
        <h2 className="text-2xl font-bold text-center">
          {bannerMessages[currentMessage]}
        </h2>
      </div>
    </div>
  );
};