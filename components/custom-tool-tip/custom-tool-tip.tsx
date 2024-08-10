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
