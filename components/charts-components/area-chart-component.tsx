"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CustomTooltip from "../custom-tool-tip/custom-tool-tip";

const productSales = [
  {
    name: "Jan",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
];

type propsChart = {
  width: number;
  height: number;
};

var AreaChartComponent = ({ width, height }: propsChart) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={width}
        height={height}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip
          content={
            <CustomTooltip
              active={true}
              payload={[{ value: 100 }, { value: 200 }]}
              label="Product sales"
              wordquantity={"€"}
              items={[
                { name: "Product 1", color: "text-blue-400" },
                { name: "Product 2", color: "text-indigo-400" },
              ]}
            />
          }
        />
        <Legend />

        <Area
          type="monotone"
          dataKey="product1"
          stroke="#2563eb"
          fill="#3b82f6"
          stackId="1"
        />

        <Area
          type="monotone"
          dataKey="product2"
          stroke="#7c3aed"
          fill="#8b5cf6"
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
