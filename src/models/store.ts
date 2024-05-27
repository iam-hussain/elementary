import { z } from 'zod';

import { CALC_VALUE_TYPE } from './common';
import { number, string } from './helpers';

export type FeeSchemaType = z.infer<typeof FeeSchema>;
export const FeeSchema = z.object({
  key: string(),
  name: string(),
  rate: number({ min: 0, max: 10000 }),
  printName: string({ optional: true }),
  position: number({ min: 1, max: 10000, optional: true }),
  type: CALC_VALUE_TYPE.optional(),
});

export type FeesSchemaType = z.infer<typeof FeesSchema>;
export const FeesSchema = z.array(FeeSchema).optional();

export type TableSchemaType = z.infer<typeof TableSchema>;
export const TableSchema = z.object({
  key: string(),
  name: string(),
  printName: string({ optional: true }),
  position: number({ min: 1, max: 10000, optional: true }),
});

export type TablesSchemaType = z.infer<typeof TablesSchema>;
export const TablesSchema = z.array(TableSchema).optional();

export type AdditionalReqSchemaType = z.infer<typeof TablesSchema>;

export const AdditionalReqSchema = z.object({
  body: z.object({
    fees: FeesSchema,
    taxes: FeesSchema,
    tables: TablesSchema,
  }),
});
