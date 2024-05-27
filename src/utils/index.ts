import _ from 'lodash';

// Merge arrays within grouped objects by concatenating them
export const mergeHelper = (objValue: string | any[], srcValue: any) => {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
};

export const getGroupedItems = (items: any[]): any[] => {
  const grouped = items.reduce<{ [key in string]: any }>((obj, item) => {
    if (obj[item.productId]) {
      const data = obj[item.productId];
      obj[item.productId] = {
        ...data,
        quantity: data.quantity + item.quantity,
        price: data.price + item.price,
        total: data.total + item.total,
      };
    } else {
      obj[item.productId] = item;
    }
    return obj;
  }, {});

  return Object.values(grouped).sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0; // Names are equal
  });
};
