export interface MediaType {
  id: number;
  date: string;
  date_gmt: string;
  guid: Caption;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Caption;
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  acf: any[];
  description: Caption;
  caption: Caption;
  alt_text: string;
  media_type: string;
  mime_type: MIMEType;
  media_details: MediaDetails;
  post: number;
  source_url: string;
  _links: Links;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  author: Author[];
  replies: Author[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Caption {
  rendered: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: { [key: string]: Size };
  image_meta: ImageMeta;
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Size {
  file: string;
  width: number;
  height: number;
  filesize?: number;
  mime_type: MIMEType;
  source_url: string;
}

export enum MIMEType {
  ImagePNG = "image/png",
}

export interface Meta {
  _et_pb_use_builder: string;
  _et_pb_old_content: string;
  _et_gb_content_width: string;
}
