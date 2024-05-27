import { z } from 'zod';

import { IdObjectSchema } from './common';
import { dateStringOptional, string } from './helpers';

export type TokenUpdateSchemaType = z.infer<typeof TokenUpdateSchema>;

export const TokenUpdateSchema = z.object({
  completedAt: dateStringOptional,
  printedAt: dateStringOptional,
  orderId: string(),
  note: z.string().optional(),
});

export type TokenUpdateReqSchemaType = z.infer<typeof TokenUpdateReqSchema>;

export const TokenUpdateReqSchema = z.object({
  body: TokenUpdateSchema,
  params: IdObjectSchema,
});
