export interface ProductsType {
  id: number;
  date: string;
  date_gmt: string;
  guid: GUID;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  template: string;
  meta: Meta;
  acf: Acf;
  _links: Links;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  "acf:attachment": AcfAttachment[];
  "wp:attachment": About[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface AcfAttachment {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface Acf {
  code: string;
  price: number;
  size: string;
  material: string;
  colors: string;
  product_characteristic: string;
  images: number[];
  category: string;
  new_product: string[];
  link_tokopedia: string;
  link_shopee: string;
}

export interface GUID {
  rendered: string;
}

export interface Meta {
  _et_pb_use_builder: string;
  _et_pb_old_content: string;
  _et_gb_content_width: string;
}
