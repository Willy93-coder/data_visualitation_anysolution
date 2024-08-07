import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { WidthProvider } from "react-grid-layout";
import { ChartContainer } from "../charts-components/container-chart";

const ResponsiveGridLayout = WidthProvider(GridLayout);

export function GridLayoutComponent() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 8, h: 3 },
    { i: "b", x: 1, y: 0, w: 8, h: 3 },
    { i: "c", x: 2, y: 0, w: 8, h: 3 },
    { i: "d", x: 3, y: 0, w: 8, h: 3 },
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      isBounded={true}
      compactType={null}
      margin={[10, 10]}
      containerPadding={[20, 20]}
    >
      {layout.map((panel) => (
        <div
          key={panel.i}
          className="bg-white flex justify-center items-center pr-4 py-4 border border-black"
        >
          <ChartContainer type={"line"} />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}
