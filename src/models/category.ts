import { z } from 'zod';

import { CATEGORY_TYPE, IdObjectSchema } from './common';
import { number, string } from './helpers';

export type CategoryCreateSchemaType = z.infer<typeof CategoryCreateSchema>;

export const CategoryCreateSchema = z.object({
  name: string(),
  deck: string({ optional: true }),
  type: CATEGORY_TYPE.optional(),
  position: number({ min: 0, max: 10000, optional: true }),
});

export type CategoryUpdateSchemaType = z.infer<typeof CategoryUpdateSchema>;

export const CategoryUpdateSchema = z.object({
  name: string({ optional: true }),
  deck: string({ optional: true }),
  type: CATEGORY_TYPE.optional(),
  position: number({ min: 0, max: 10000, optional: true }),
});

export type CategoryCreateReqSchemaType = z.infer<typeof CategoryCreateReqSchema>;

export const CategoryCreateReqSchema = z.object({
  body: CategoryCreateSchema,
});

export type CategoryUpdateReqSchemaType = z.infer<typeof CategoryUpdateReqSchema>;

export const CategoryUpdateReqSchema = z.object({
  body: CategoryUpdateSchema,
  params: IdObjectSchema,
});
