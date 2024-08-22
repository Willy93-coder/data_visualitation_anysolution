# Posibles snippets

## CustomToolTip

```tsx
"use client";

export default function CustomTooltip({
  active,
  payload,
  label,
  wordquantity,
  items,
}: {
  active: boolean;
  payload: any;
  label: string;
  wordquantity: string | undefined | null;
  items: { name: string; color: string }[];
}) {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg text-blue-600">{label}</p>
        {items.map((item, index) => (
          <p key={index} className={`text-sm ${item.color}`}>
            {item.name}:
            <span className="ml-2">
              {payload[index].value}
              {wordquantity}
            </span>
          </p>
        ))}
      </div>
    );
  }

  return null;
}
```

### Example:
```tsx

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

///////////////// HERE
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
///////////////// HERE

        <Legend />
        <Bar dataKey="revenue" fill="#2563eb" />
        <Bar dataKey="profit" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  );
};
```
