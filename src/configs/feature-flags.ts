import _ from 'lodash';

export type FeatureFlagsType = {
  enableKDS: boolean;
  showProductsImage: boolean;
  enableExpressOrder: boolean;
  showUpdatedDate: boolean;
  enableTables: boolean;
  enableCustomerAdding: boolean;
  enableKitchenCategory: boolean;
};

export const defaultFeatureFlags: FeatureFlagsType = {
  enableKDS: false,
  showProductsImage: false,
  enableExpressOrder: false,
  showUpdatedDate: false,
  enableTables: false,
  enableCustomerAdding: false,
  enableKitchenCategory: false,
};

export type FeatureFlagLabelType = {
  key: keyof typeof defaultFeatureFlags;
  label: string;
  info?: string;
};

export const featureFlagLabel: FeatureFlagLabelType[] = [
  {
    key: 'enableKDS',
    label: 'Enable Kitchen Display System (KDS) or Use KOT Print System',
    info: 'Enable KDS to use a digital display system in the kitchen for efficient order management. Use the KOT Print System to manage orders with printed tickets.',
  },
  {
    key: 'showProductsImage',
    label: 'Show Products with Image in the POS Screen',
    info: 'Enable this to display product images along with their details on the POS screen for enhanced visual representation.',
  },
  {
    key: 'enableExpressOrder',
    label: 'Use Express Order for Quick Billing in the POS App',
    info: 'Activate this to use the express order feature for quick and convenient billing in the POS application.',
  },
  {
    key: 'showUpdatedDate',
    label: 'Show Updated Date Instead of Created Date in the POS Screen',
    info: 'Opt to display the updated date of products or transactions instead of their creation date on the POS screen, providing the latest information.',
  },
  {
    key: 'enableTables',
    label: 'Enable Table Selection in the POS Ordering',
    info: 'Enable table selection for dine-in orders directly in the POS system. Disable if your business does not require table service.',
  },
  {
    key: 'enableCustomerAdding',
    label: 'Enable Customer Details Adding on the Order Details',
    info: 'Allow adding customer details (name, contact information) to orders for better management and tracking. Disable to remove this option.',
  },
  {
    key: 'enableKitchenCategory',
    label: 'Enable Kitchen Category Printing/Rendering',
    info: 'Enable this option to print or render kitchen screens based on specific kitchen categories separately.',
  },
];

export const getFeatureFlags = (input: any): FeatureFlagsType => {
  const items = _.pick(input, Object.keys(defaultFeatureFlags));
  return _.merge(defaultFeatureFlags, items);
};

export const mergeFeatureFlags = (a: any, b: any): FeatureFlagsType => {
  return _.merge(defaultFeatureFlags, a, b);
};

export type FeatureFlagFormType = {
  key: keyof typeof defaultFeatureFlags;
  label: string;
  info?: string;
  value: boolean;
};

export const getFeatureFlagForm = (input: any): FeatureFlagFormType[] => {
  const items = getFeatureFlags(input);
  return featureFlagLabel.map((each) => ({
    ...each,
    value: items[each.key],
  }));
};
