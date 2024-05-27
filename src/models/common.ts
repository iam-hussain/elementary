import { z } from 'zod';

import { string } from './helpers';

export const IdObjectSchema = z.object({ id: string() });

export const ParamIdReqSchema = z.object({
  params: IdObjectSchema,
});

export const PRODUCT_TYPE = z.enum(['VEG', 'NON_VEG', 'VEGAN']);

export const ORDER_TYPE = z.enum(['DINING', 'TAKE_AWAY', 'PICK_UP', 'DELIVERY', 'PLATFORM']);

export const ORDER_STATUS = z.enum(['DRAFT', 'IN_PROGRESS', 'COMPLETED', 'DELIVERY_PENDING', 'DELIVERED']);

export const CALC_VALUE_TYPE = z.enum(['VALUE', 'PERCENTAGE', 'VALUE_COUNT']);

export const CATEGORY_TYPE = z.enum(['DEFAULT', 'KITCHEN']);
