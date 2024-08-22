import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { WidthProvider } from "react-grid-layout";
import { ChartContainer } from "../charts-components/container-chart";
import { data, productSales, salesData } from "@/mockdata";

const ResponsiveGridLayout = WidthProvider(GridLayout);

export function GridLayoutComponent() {
  const layout = [
    { i: "0", x: 0, y: 0, w: 3, h: 2 },
    { i: "1", x: 3, y: 0, w: 4, h: 2 },
    { i: "2", x: 0, y: 0, w: 4, h: 2 },
    { i: "3", x: 8, y: 0, w: 5, h: 4 },
  ];
  const layout2 = [
    { i: "0", x: 0, y: 0, w: 3, h: 2 },
    { i: "1", x: 3, y: 0, w: 4, h: 2 },
    { i: "2", x: 0, y: 0, w: 4, h: 2 },
    { i: "3", x: 4, y: 0, w: 5, h: 2 },
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      isBounded={true}
      compactType={null}
      margin={[10, 10]}
      containerPadding={[20, 20]}
    >
      <div
        key={0}
        className="bg-white flex justify-center items-center pr-4 py-4 border border-black"
      >
        <ChartContainer type={"line"} data={data} />
      </div>
      <div
        key={1}
        className="bg-white flex justify-center items-center pr-4 py-4 border border-black"
      >
        <ChartContainer type={"area"} data={productSales} />
      </div>
      <div
        key={2}
        className="bg-white flex justify-center items-center pr-4 py-4 border border-black"
      >
        <ChartContainer type={"bar"} data={salesData} />
      </div>
      <div
        key={3}
        className="bg-white flex justify-center items-center pr-4 py-4 border border-black"
      >
        <ChartContainer type={"pie"} data={salesData} />
      </div>
    </ResponsiveGridLayout>
  );
}
