export enum SIZE {
  CM50x70 = '50cm_x_70cm',
  CM65x65 = '65cm_x_65cm',
  CM90x190 = '90cm_x_190cm_x_30cm',
  CM140x190 = '140cm_x_190cm_x_30cm',
  CM160x200 = '160cm_x_200cm_x_30cm',
  CM180x200 = '180cm_x_200cm_x_30cm'
}

export enum TYPE {
  Flat_sheet = 'Flat_sheet',
  Fitted_sheet = 'Fitted_sheet',
  Duvet_cover = 'Duvet_cover',
  Pillowcase = 'Pillowcase',
  Bath_towel = 'Bath_towel',
  Tablecloth = 'Tablecloth',
  Bib = 'Bib'

}

export enum GROUP {
  Bed = 'Bedding',
  Duvet = 'Duvets and Pillows',
  Bath = 'Bath',
  Kids = 'Kids',
  Kitchen = 'Kitchen'
}

export interface Price {
  size: SIZE;
  price: string;
}

export interface Item {
  id: string;
  collection: string;
  group: GROUP;
  type: TYPE;
  image: Array<string>;
  price: Array<Price>;
  composition: string;
  description: string;
}

export interface Note {
  id: string;
  author: string;
  msg: string;
}

