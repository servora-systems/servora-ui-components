import React, { useState } from "react";
import { Button } from "../button";

const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
];

export function BasicCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="py-8">
      <div className="relative w-full max-w-xs mx-auto">
        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="aspect-square">
            <img
              src={images[currentIndex]}
              alt={`Carousel image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-white/80 hover:bg-white h-8 w-8"
            >
              ←
            </Button>
          </div>

          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white h-8 w-8"
            >
              →
            </Button>
          </div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}