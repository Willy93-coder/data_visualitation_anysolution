import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links = [
  { name: "Panel", href: "/", icon: PresentationChartLineIcon },
];

const attributeSchema = z.object({
  type: z.string(),
  value: z.unknown(),
  metadata: z.record(z.unknown()).optional(),
});

export const ngsiLdSchema = z
  .object({
    id: z.string().regex(/^urn:ngsi-ld:/),
    type: z.string(),
  })
  .catchall(attributeSchema.optional());

export type NgsildData = z.infer<typeof ngsiLdSchema>;

export const CREATE_CHART = "Create chart";

export enum ChartType {
  AREA,
  BAR,
  LINE,
  PIE,
}

export const selectOptionsCreateChartForm = [
  { value: ChartType.AREA, label: "Area chart" },
  { value: ChartType.BAR, label: "Bar chart" },
  { value: ChartType.LINE, label: "Line chart" },
  { value: ChartType.PIE, label: "Pie chart" },
];

export const chartConfigSchema = z.object({
  id: z.string().uuid(),
  type: z.nativeEnum(ChartType),
});

export type ChartConfigType = z.infer<typeof chartConfigSchema>;

export const chartConfig: ChartConfigType[] = [];

export function addChart(chart: ChartConfigType) {
  chartConfig.push(chart);
}
