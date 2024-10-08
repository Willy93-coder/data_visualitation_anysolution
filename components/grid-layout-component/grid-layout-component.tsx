import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { WidthProvider } from "react-grid-layout";
import { ChartContainer } from "../charts-components/container-chart";
import { data, productSales, salesData } from "@/mockdata";
import { Skeleton } from "@/components/ui/skeleton";

const ResponsiveGridLayout = WidthProvider(GridLayout);

export function GridLayoutComponent() {
  const defaultLayout = [
    { i: "0", x: 0, y: 0, w: 3, h: 2 },
    { i: "1", x: 3, y: 0, w: 4, h: 2 },
    { i: "2", x: 0, y: 0, w: 4, h: 2 },
    { i: "3", x: 8, y: 0, w: 5, h: 4 },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [layout, setLayout] = useState(() => {
    const savedLayout =
      typeof window !== "undefined" ? localStorage.getItem("layout") : null;
    return savedLayout ? JSON.parse(savedLayout) : defaultLayout;
  });

  useEffect(() => {
    if (layout == null) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    localStorage.setItem("layout", JSON.stringify(layout));
  }, [layout]);

  const onLayoutChange = (newLayout: any) => {
    setLayout(newLayout);
  };

  return (
    <>
      {isLoading ? (
        <div className="space-y-2">
          <div className="flex flex-row space-x-3">
            <Skeleton className="h-[550px] w-[250px] rounded pr-4 py-4 border bg-gray-200" />
            <div className="space-y-2">
              <Skeleton className="h-[271px] w-[250px] rounded pr-4 py-4 border bg-gray-200" />
              <Skeleton className="h-[271px] w-[250px] rounded pr-4 py-4 border bg-gray-200" />
            </div>
            <Skeleton className="h-[550px] w-[250px] rounded pr-4 py-4 border bg-gray-200" />
            <div className="space-y-2">
              <div className="flex flex-row space-x-3">
                <Skeleton className="h-[271px] w-[250px] rounded pr-4 py-4 border bg-gray-200" />
                <Skeleton className="h-[271px] w-[250px] rounded pr-4 py-4 border bg-gray-200" />
              </div>
              <Skeleton className="h-[271px] w-[513px] rounded pr-4 py-4 border bg-gray-200" />
            </div>
          </div>
          <Skeleton className="h-[271px] w-[1298px] rounded pr-4 py-4 border bg-gray-200" />
        </div>
      ) : (
        <ResponsiveGridLayout
          className="layout"
          layout={layout}
          onLayoutChange={onLayoutChange}
          isBounded={true}
          compactType={null}
          margin={[10, 10]}
          containerPadding={[20, 20]}
        >
          <div
            key={0}
            className="bg-white flex justify-center rounded items-center pr-4 py-4 border border-black"
          >
            <ChartContainer type={"line"} data={data} />
          </div>
          <div
            key={1}
            className="bg-white flex justify-center rounded items-center pr-4 py-4 border border-black"
          >
            <ChartContainer type={"area"} data={productSales} />
          </div>
          <div
            key={2}
            className="bg-white flex justify-center rounded items-center pr-4 py-4 border border-black"
          >
            <ChartContainer type={"bar"} data={salesData} />
          </div>
          <div
            key={3}
            className="bg-white flex justify-center rounded items-center pr-4 py-4 border border-black"
          >
            <ChartContainer type={"pie"} data={salesData} />
          </div>
        </ResponsiveGridLayout>
      )}
    </>
  );
}
