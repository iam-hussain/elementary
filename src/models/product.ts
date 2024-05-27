import { z } from 'zod';

import { IdObjectSchema, PRODUCT_TYPE } from './common';
import { number, string } from './helpers';

export type ProductCreateSchemaType = z.infer<typeof ProductCreateSchema>;

export const ProductCreateSchema = z.object({
  name: string(),
  deck: string({ optional: true }),
  type: PRODUCT_TYPE.optional(),
  price: number({ min: 0, max: 10000 }),
  categoryId: string(),
  kitchenCategoryId: string({ optional: true }),
});

export type ProductCreateReqSchemaType = z.infer<typeof ProductCreateReqSchema>;

export const ProductCreateReqSchema = z.object({
  body: ProductCreateSchema,
});

export type ProductUpdateSchemaType = z.infer<typeof ProductUpdateSchema>;

export const ProductUpdateSchema = z.object({
  name: string({ optional: true }),
  deck: string({ optional: true }),
  price: number({ min: 1, max: 10000, optional: true }),
  type: PRODUCT_TYPE.optional(),
  categoryId: string({ optional: true }),
  kitchenCategoryId: string({ optional: true }),
});
export type ProductUpdateReqSchemaType = z.infer<typeof ProductUpdateReqSchema>;

export const ProductUpdateReqSchema = z.object({
  body: ProductUpdateSchema,
  params: IdObjectSchema,
});
