import React, { useRef, useEffect, useState } from "react";
import { LineChartComponent } from "./line-chart-component";

export function ChartContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    const observer = new ResizeObserver(() => {
      updateDimensions();
    });

    const currentRef = containerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <div ref={containerRef} className="w-full h-full">
      <LineChartComponent width={dimensions.width} height={dimensions.height} />
    </div>
  );
}
