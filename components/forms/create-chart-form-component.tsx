import { chartConfig, ChartConfigType } from "@/lib/utils";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import GenericButtonComponent from "../buttons-components/generic-button-component";

type SelectProps = {
  label: string;
  options: { value: string; label: string }[];
};

export default function CreateChartFormComponent({
  options,
  label,
}: SelectProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChartConfigType>();

  const onSubmit: SubmitHandler<ChartConfigType> = (data) => {
    console.log("Chart type: ", data.type);

    const chartConfigObj: ChartConfigType = {
      id: crypto.randomUUID(),
      type: data.type,
    };
    chartConfig.push(chartConfigObj);
    console.log("Chart type arr: ", chartConfig);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-4 w-full flex flex-col justify-center"
    >
      <div className="mb-4">
        <label className="block mb-1.5">{label}</label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("type")}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center items-center">
        <GenericButtonComponent text="Create" type="submit" />
      </div>
    </form>
  );
}
