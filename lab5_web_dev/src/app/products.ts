export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  kaspilink: string;
  prodcategory: number;
  shows: boolean;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 11 128Gb',
    price: 650,
    description:
      'технология NFC: Да\n' +
      'цвет: черный\n' +
      'тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD\n',
    rating: 5.0,
    //arrayofimages: ['123','234234','534534'],
    imageSrc:
      'https://https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg.media-amazon.com/images/I/71Ujb4adTRL._AC_SL1500_.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    prodcategory: 1,
    shows: true,
    likes: 0,
  },
  {
    id: 2,
    name: 'iPhone 14 Pro Max 256Gb',
    price: 1490,
    description:
      'технология NFC: Да\n' +
      'цвет: фиолетовый\n' +
      'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n',
    rating: 5.0,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg ',
    kaspilink:
      'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    prodcategory: 1,
    shows: true,
    likes: 0,
  },
  {
    id: 3,
    name: 'iPhone 14 128Gb ',
    price: 940,
    description:
      'технология NFC: Да\n' +
      'цвет: черный\n' +
      'тип экрана: OLED, Super Retina XDR display\n',
    rating: 5.0,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item',
    prodcategory: 1,
    shows: true,
    likes: 0,
  },
  {
    id: 4,
    name: 'iPhone 13 128Gb ',
    price: 830,
    description:
      'технология NFC: Да\n' +
      'цвет: белый\n' +
      'тип экрана: OLED, Super Retina XDR\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg.media-amazon.com/images/I/71Ujb4adTRL._AC_SL1500_.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',
    prodcategory: 1,
    shows: true,
    likes: 0,
  },
  {
    id: 5,
    name: 'iPhone 13 128Gb ',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: синий\n' +
      'тип экрана: OLED, Super Retina XDR\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h1d/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    prodcategory: 1,
    shows: true,
    likes: 0,
  },
  {
    id: 6,
    name: 'Смартфон Samsung Galaxy A53 5G 6 ГБ/128 ГБ черный ',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/he7/49613532528670/smartfon-samsung-galaxy-a53-5g-128gb-sm-a536ezkdskz-black-104253225-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-6-gb-128-gb-chernyi-104253225/?c=750000000#!/item',
    prodcategory: 2,
    shows: true,
    likes: 0,
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный ',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    prodcategory: 2,
    shows: true,
    likes: 0,
  },
  {
    id: 8,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ голубой ',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hb5/49613818069022/smartfon-samsung-galaxy-a13-128gb-sm-a135flbkskz-blue-104253392-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-goluboi-104253392/?c=750000000#!/item',
    prodcategory: 2,
    shows: true,
    likes: 0,
  },
  {
    id: 9,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный ',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    prodcategory: 2,
    shows: true,
    likes: 0,
  },
  {
    id: 10,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ черный',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/hce/47719147929630/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000#!/item',
    prodcategory: 2,
    shows: true,
    likes: 0,
  },
  {
    id: 11,
    name: 'Смартфон Xiaomi Redmi 9A 2 ГБ/32 ГБ серый',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h2d/31501176963102/xiaomi-redmi-9a-2-32gb-seryj-100399600-1-Container.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/xiaomi-redmi-9a-2-gb-32-gb-seryi-100399600/?c=750000000#!/item',
    prodcategory: 3,
    shows: true,
    likes: 0,
  },
  {
    id: 12,
    name: 'Смартфон Xiaomi Redmi 10A 3 ГБ/64 ГБ серый графиt',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/h81/52289124499486/xiaomi-redmi-10a-3-gb-64-gb-seryi-grafit-105711712-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/xiaomi-redmi-10a-3-gb-64-gb-seryi-grafit-105711712/?c=750000000#!/item',
    prodcategory: 3,
    shows: true,
    likes: 0,
  },
  {
    id: 13,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ зеленый',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hff/51348549861406/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164/?c=750000000#!/item',
    prodcategory: 3,
    shows: true,
    likes: 0,
  },
  {
    id: 14,
    name: 'Смартфон Xiaomi Redmi Note 11S 8 ГБ/128 ГБ серый',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h50/49684457259038/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104292774-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/xiaomi-redmi-note-11s-8-gb-128-gb-seryi-104292774/?c=750000000#!/item',
    prodcategory: 3,
    shows: true,
    likes: 0,
  },
  {
    id: 15,
    name: 'Смартфон Xiaomi Redmi 9A 2 ГБ/32 ГБ серый   ',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5d/h2d/31501176963102/xiaomi-redmi-9a-2-32gb-seryj-100399600-1-Container.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/xiaomi-redmi-9a-2-gb-32-gb-seryi-100399600/?c=750000000#!/item',
    prodcategory: 3,
    shows: true,
    likes: 0,
  },
  {
    id: 16,
    name: 'Смартфон Xiaomi Redmi 9A 2 ГБ/32 ГБ серый   ',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2d/ha6/52596069203998/huawei-nova-y70-4-gb-64-gb-cernyj-105889920-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/huawei-nova-y70-4-gb-64-gb-chernyi-105889920/?c=750000000',
    prodcategory: 4,
    shows: true,
    likes: 0,
  },
  {
    id: 17,
    name: 'Смартфон Xiaomi Redmi 9A 2 ГБ/32 ГБ серый   ',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf6/h31/51340742459422/huawei-nova-y70-4-gb-128-gb-cernyj-105191899-1.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/huawei-nova-y70-4-gb-128-gb-chernyi-105191899/?c=750000000#!/item',
    prodcategory: 4,
    shows: true,
    likes: 0,
  },
  {
    id: 18,
    name: 'Смартфон Huawei P40 8/128Gb черный   ',
    price: 850,
    description:
      'технология NFC: Да\n' +
      'цвет: серый\n' +
      'тип экрана:  цветной AMOLED, сенсорный\n',
    rating: 4.2,
    //arrayofimages: ['123', '234234', '534534'],
    imageSrc:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/hd1/32771444768798/huawei-p40-8-128gb-cernyj-100264959-1-Container.jpg',
    kaspilink:
      'https://kaspi.kz/shop/p/huawei-p40-8-128gb-chernyi-100264959/?c=750000000#!/item',
    prodcategory: 4,
    shows: true,
    likes: 0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
