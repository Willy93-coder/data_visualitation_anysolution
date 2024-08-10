"use client";

import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import CustomTooltip from "../custom-tool-tip/custom-tool-tip";

const salesData = [
  {
    name: "Jan",
    revenue: 4000,
    profit: 2400,
  },
  {
    name: "Feb",
    revenue: 3000,
    profit: 1398,
  },
  {
    name: "Mar",
    revenue: 9800,
    profit: 2000,
  },
  {
    name: "Apr",
    revenue: 3908,
    profit: 2780,
  },
  {
    name: "May",
    revenue: 4800,
    profit: 1890,
  },
  {
    name: "Jun",
    revenue: 3800,
    profit: 2390,
  },
];

type propsChart = {
  width: number;
  height: number;
};

// NOTE: Only can display one data value, if you want 2 or more, you need more pies. So, not good visually

const PieChartComponent = ({ width, height }: propsChart) => {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer>
          <PieChart width={width} height={height}>
            <Tooltip
              content={
                <CustomTooltip
                  active={true}
                  payload={[{ value: 100 }, { value: 200 }]}
                  label="Sales"
                  wordquantity={"€"}
                  items={[{ name: "Value", color: "text-blue-400" }]}
                />
              }
            />

            <Legend />
            <Pie data={salesData} dataKey="revenue" fill="#2563eb" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PieChartComponent;
