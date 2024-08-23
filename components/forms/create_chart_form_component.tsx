import React from "react";

type SelectProps = {
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: any) => void;
};

export default function CreateChartFormComponent({
  options,
  selectedValue,
  onChange,
  label,
}: SelectProps) {
  return (
    <form className="mb-4 w-full">
      <div>
        <label className="block mb-1.5">{label}</label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedValue}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
