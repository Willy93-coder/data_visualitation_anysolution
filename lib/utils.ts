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

export const selectOptionsCreateChartForm = [
  { value: "area", label: "Area chart" },
  { value: "bar", label: "Bar chart" },
  { value: "line", label: "Line chart" },
  { value: "pie", label: "Pie chart" },
];
