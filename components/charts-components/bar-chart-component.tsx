"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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

var BarChartComponent = ({ width, height }: propsChart) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={width}
        height={height}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Tooltip
          content={
            <CustomTooltip
              active={true}
              payload={[{ value: 100 }, { value: 200 }]}
              label="Sales"
              wordquantity={"€"}
              items={[
                { name: "Revenue", color: "text-blue-400" },
                { name: "Profit", color: "text-indigo-400" },
              ]}
            />
          }
        />

        <Legend />
        <Bar dataKey="revenue" fill="#2563eb" />
        <Bar dataKey="profit" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
