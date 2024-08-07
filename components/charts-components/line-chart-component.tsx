import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts";
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

/*
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
*/

var LineChartComponent = ({ width, height }: propsChart) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={width} height={height} data={data}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip active={false} payload={undefined} label={""} />} />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#3b82f6" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: any;
  label: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-blue-600">{label}</p>
        <p className="text-sm text-blue-400">
          uv:
          <span className="ml-2">{payload[0].value}</span>
        </p>
      </div>
    );
  }
};
