import React, { useRef, useEffect, useState } from "react";
import AreaChartComponent from "./area-chart-component";
import BarChartComponent from "./bar-chart-component";
import LineChartComponent from "./line-chart-component";
import PieChartComponent from "./pie-chart-component";

export function ChartContainer({ type }: { type: string }) {
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

  switch (type) {
    case "area":
      return (
        <div ref={containerRef} className="w-full h-full">
          <AreaChartComponent
            width={dimensions.width}
            height={dimensions.height}
          />
        </div>
      );
    case "bar":
      return (
        <div ref={containerRef} className="w-full h-full">
          <BarChartComponent
            width={dimensions.width}
            height={dimensions.height}
          />
        </div>
      );
    case "line":
      return (
        <div ref={containerRef} className="w-full h-full">
          <LineChartComponent
            width={dimensions.width}
            height={dimensions.height}
          />
        </div>
      );
    case "pie":
      return (
        <div ref={containerRef} className="w-full h-full">
          <PieChartComponent
            width={dimensions.width}
            height={dimensions.height}
          />
        </div>
      );
    default:
      return (
        <div ref={containerRef} className="w-full h-full">
          <h1 className={"bg-sky-100 text-red-600"}>NO CHART</h1>
        </div>
      );
  }
}
