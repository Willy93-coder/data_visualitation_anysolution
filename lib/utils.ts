import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PresentationChartLineIcon } from "@heroicons/react/24/solid";
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const links = [
  { name: "Panel", href: "/", icon: PresentationChartLineIcon },
];

const attributeSchema = z.object({
  type: z.string(),
  value: z.unknown(),
  metadata: z.record(z.unknown()).optional(),
});

export const ngsiLdSchema = z.object({
  id: z.string().regex(/^urn:ngsi-ld:/),
  type: z.string(),
}).catchall(
   attributeSchema.optional()
);

export type NgsildData = z.infer<typeof ngsiLdSchema>;

let client: NextApiResponse | null = null;

export function eventsHandler(req: NextApiRequest, res: NextApiResponse): void {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  client = res;

  req.on('close', () => {
    client = null;
  });
}

export function sendEventToClient(data: NgsildData): void {
  if (client) {
    client.write(`data: ${JSON.stringify(data)}\n\n`);
  }
}