import { z } from 'zod';

import { IdObjectSchema, PRODUCT_TYPE } from './common';
import { dateStringOptional, number, string } from './helpers';

export type ItemCreateSchemaType = z.infer<typeof ItemCreateSchema>;

export const ItemCreateSchema = z.object({
  title: string({ optional: true }),
  note: string({ optional: true }),
  price: number({ min: 0, max: 10000, optional: true }),
  type: PRODUCT_TYPE.optional(),
  quantity: number({ min: 0, max: 10000 }),
  position: number({ min: 0, max: 10000, optional: true }),
  productId: string(),
  kitchenCategoryId: z.string().optional(),
});

export type ItemUpdateSchemaType = z.infer<typeof ItemUpdateSchema>;

export const ItemUpdateSchema = z.object({
  title: z.string().optional(),
  note: z.string().optional(),
  type: z.enum(['NON_VEG', 'VEG', 'VEGAN']).optional(),
  price: z.number().optional(),
  quantity: z.number().optional(),
  total: z.number().optional(),
  scheduledAt: dateStringOptional,
  placeAt: dateStringOptional,
  placedAt: dateStringOptional,
  acceptedAt: dateStringOptional,
  completedAt: dateStringOptional,
  rejectedAt: dateStringOptional,
  rejected: z.boolean().optional(),
  productId: z.string().optional(),
  kitchenCategoryId: z.string().optional(),
  orderId: z.string().optional(),
  billId: z.string().optional(),
});

export type ItemUpdateReqSchemaType = z.infer<typeof ItemUpdateReqSchema>;

export const ItemUpdateReqSchema = z.object({
  body: ItemUpdateSchema,
  params: IdObjectSchema,
});
