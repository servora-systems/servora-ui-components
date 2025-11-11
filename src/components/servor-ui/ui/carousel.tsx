"use client";

import * as React from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

interface CarouselContextValue {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  totalItems: number;
  goToNext: () => void;
  goToPrevious: () => void;
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel components must be used within a Carousel");
  }
  return context;
};

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number;
  onIndexChange?: (index: number) => void;
  children: React.ReactNode;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ index: controlledIndex, onIndexChange, className, children, ...props }, ref) => {
    const [internalIndex, setInternalIndex] = React.useState(0);
    const [totalItems, setTotalItems] = React.useState(0);

    const isControlled = controlledIndex !== undefined;
    const currentIndex = isControlled ? controlledIndex : internalIndex;

    const setCurrentIndex = React.useCallback(
      (newIndex: number) => {
        if (!isControlled) {
          setInternalIndex(newIndex);
        }
        onIndexChange?.(newIndex);
      },
      [isControlled, onIndexChange]
    );

    const goToNext = React.useCallback(() => {
      const nextIndex = (currentIndex + 1) % totalItems;
      setCurrentIndex(nextIndex);
    }, [currentIndex, totalItems, setCurrentIndex]);

    const goToPrevious = React.useCallback(() => {
      const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
      setCurrentIndex(prevIndex);
    }, [currentIndex, totalItems, setCurrentIndex]);

    const contextValue = React.useMemo<CarouselContextValue>(
      () => ({
        currentIndex,
        setCurrentIndex,
        totalItems,
        goToNext,
        goToPrevious,
      }),
      [currentIndex, setCurrentIndex, totalItems, goToNext, goToPrevious]
    );

    return (
      <CarouselContext.Provider value={contextValue}>
        <div ref={ref} className={cn("relative", className)} {...props}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === CarouselContent) {
              return React.cloneElement(child as React.ReactElement<any>, {
                onItemsChange: setTotalItems,
              });
            }
            return child;
          })}
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = "Carousel";

export interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  onItemsChange?: (count: number) => void;
}

export const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, children, onItemsChange, ...props }, ref) => {
    const { currentIndex } = useCarousel();
    const itemsRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (onItemsChange) {
        const itemCount = React.Children.toArray(children).filter(
          (child) => React.isValidElement(child) && child.type === CarouselItem
        ).length;
        onItemsChange(itemCount);
      }
    }, [children, onItemsChange]);

    React.useEffect(() => {
      const updateTransform = () => {
        if (!itemsRef.current) return;
        
        const items = itemsRef.current;
        const children = Array.from(items.children) as HTMLElement[];
        if (children.length === 0) return;

        // Calculate scroll position based on current index
        const gap = parseInt(getComputedStyle(items).gap) || 0;
        let translateX = 0;
        
        for (let i = 0; i < currentIndex && i < children.length; i++) {
          const child = children[i];
          const width = child.offsetWidth;
          translateX += width;
          // Add gap after each item except the last one
          if (i < currentIndex - 1) {
            translateX += gap;
          }
        }

        items.style.transform = `translateX(-${translateX}px)`;
      };

      // Use requestAnimationFrame to ensure layout is complete
      const rafId = requestAnimationFrame(() => {
        updateTransform();
      });

      // Also update on resize
      const resizeObserver = new ResizeObserver(updateTransform);
      if (itemsRef.current) {
        resizeObserver.observe(itemsRef.current);
      }

      return () => {
        cancelAnimationFrame(rafId);
        resizeObserver.disconnect();
      };
    }, [currentIndex, children]);

    return (
      <div
        ref={ref}
        className={cn("overflow-hidden", className)}
        {...props}
      >
        <div
          ref={itemsRef}
          className="flex transition-transform duration-300 ease-in-out"
        >
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child) && child.type === CarouselItem) {
              return (
                <div key={index} className="flex-shrink-0">
                  {child}
                </div>
              );
            }
            return child;
          })}
        </div>
      </div>
    );
  }
);

CarouselContent.displayName = "CarouselContent";

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full", className)}
        {...props}
      />
    );
  }
);

CarouselItem.displayName = "CarouselItem";

export interface CarouselNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  showPrevious?: boolean;
  showNext?: boolean;
}

export const CarouselNavigation = React.forwardRef<HTMLDivElement, CarouselNavigationProps>(
  ({ className, showPrevious = true, showNext = true, ...props }, ref) => {
    const { goToPrevious, goToNext } = useCarousel();

    return (
      <div ref={ref} className={cn("absolute inset-0 pointer-events-none", className)} {...props}>
        {showPrevious && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-auto">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="bg-white/80 hover:bg-white h-8 w-8"
              aria-label="Previous slide"
            >
              ←
            </Button>
          </div>
        )}
        {showNext && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-auto">
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="bg-white/80 hover:bg-white h-8 w-8"
              aria-label="Next slide"
            >
              →
            </Button>
          </div>
        )}
      </div>
    );
  }
);

CarouselNavigation.displayName = "CarouselNavigation";

