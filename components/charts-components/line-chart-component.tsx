import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import CustomTooltip from "../custom-tool-tip/custom-tool-tip";
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

var LineChartComponent = ({ width, height }: propsChart) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Tooltip
          content={
            <CustomTooltip
              active={true}
              payload={[{ value: 100 }, { value: 200 }]}
              label="PageData"
              wordquantity={null}
              items={[{ name: "uv", color: "text-blue-400" }]}
            />
          }
        />

        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#3b82f6" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
