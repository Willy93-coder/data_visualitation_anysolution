import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { WidthProvider } from "react-grid-layout";
import { LineChartComponent } from "../charts-components/line-chart-component";

const ResponsiveGridLayout = WidthProvider(GridLayout);

export function GridLayoutComponent() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 1, h: 2 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 },
    { i: "d", x: 3, y: 0, w: 1, h: 2 },
  ];

  return (
    <ResponsiveGridLayout
      className="bg-red-200 border-solid border-2 border-indigo-600"
      layout={layout}
      isBounded={true}
      compactType="vertical"
      margin={[10, 10]}
      containerPadding={[20, 20]}
    >
      {layout.map((panel) => (
        <div key={panel.i} className="bg-white">
          <LineChartComponent />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}
