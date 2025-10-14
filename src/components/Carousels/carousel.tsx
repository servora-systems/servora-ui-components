import React, { useState } from "react";
import { Button } from "../button";

const carouselItems = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo/1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
    quote: "Success is not in what you have, but who you are.",
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=600&fit=crop",
    quote: "The best way to predict the future is to create it.",
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    quote: "Don't watch the clock; do what it does. Keep going.",
  },
];

export function CarouselDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative w-full max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
          <div className="relative h-96">
            <img
              src={carouselItems[currentIndex].imageUrl}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <blockquote className="text-white">
                <p className="text-lg md:text-xl font-medium">
                  "{carouselItems[currentIndex].quote}"
                </p>
              </blockquote>
            </div>
          </div>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-white/80 hover:bg-white"
            >
              ←
            </Button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white"
            >
              →
            </Button>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
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