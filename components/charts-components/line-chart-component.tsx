import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 300, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 200, pv: 2400, amt: 2400 },
  { name: "Page E", uv: 280, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 190, pv: 2400, amt: 2400 },
];

type propsChart = {
  width: number;
  height: number;
};

export function LineChartComponent({ width, height }: propsChart) {
  return (
    <div className="grow">
      <LineChart width={width} height={height} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
}
