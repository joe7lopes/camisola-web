/* eslint-disable import/prefer-default-export */
const benfica = [
  {
    id: 'b1',
    categories: ['benfica'],
    name: 'Camisola slb very long text 2020 bla bla',
    availableSizes: [
      { size: 'S', price: 1 },
      { size: 'M', price: 2 },
      { size: 'L', price: 3 },
      { size: 'XL', price: 4 },
    ],
    defaultPrice: 35,
    isCustomizable: true,
    images: [
      {
        name: 'img1',
        url:
          'https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-30-at-17.10.27.jpeg',
        isDefault: true,
      },
    ],
  },

  {
    id: 'b2',
    categories: ['benfica'],
    name: 'Camisola slb 2',
    availableSizes: [
      { size: 'S', price: 1 },
      { size: 'M', price: 2 },
      { size: 'XL', price: 4 },
    ],
    defaultPrice: 65,
    isCustomizable: true,
    images: [],
  },

  {
    id: 'b3',
    categories: ['benfica'],
    name: 'Camisola slb 3 summer fashion',
    availableSizes: [{ size: 'S', price: 1 }],
    defaultPrice: 10,
    isCustomizable: false,
    images: [
      {
        name: 'img23',
        isDefault: true,
        url:
          'https://camisola10.com/wp-content/uploads/2019/11/WhatsApp-Image-2019-11-29-at-16.29.472.jpeg',
      },
    ],
  },
];


const porto = [
  {
    id: 'p1',
    categories: ['porto'],
    name: 'Camisola Porto text 2020 dragoes',
    availableSizes: [
      { size: 'S', price: 1 },
      { size: 'M', price: 2 },
      { size: 'L', price: 3 },
      { size: 'XL', price: 4 },
    ],
    defaultPrice: 35,
    isCustomizable: true,
    images: [
      {
        name: 'img1',
        url: 'https://camisola10.com/wp-content/uploads/2019/10/WhatsApp-Image-2019-10-25-at-16.06.29-300x300.jpeg',
        isDefault: true,
      },
    ],
  },

  {
    id: 'p2',
    categories: ['porto'],
    name: 'Camisola PORTO epoca ssss 2',
    availableSizes: [
      { size: 'M', price: 2 },
      { size: 'XL', price: 4 },
    ],
    defaultPrice: 62,
    isCustomizable: true,
    images: [],
  },

  {
    id: 'p3',
    categories: ['porto'],
    name: 'Camisola porto 3 kids',
    availableSizes: [{ size: 'S', price: 1 }],
    defaultPrice: 50,
    isCustomizable: false,
    images: [
      {
        name: 'img23',
        isDefault: true,
        url: 'https://camisola10.com/wp-content/uploads/2018/08/20190221_144803-e1557520155935-300x300.jpg',
      },
    ],
  },
];

export const products = [
  ...benfica,
  ...porto,
];
