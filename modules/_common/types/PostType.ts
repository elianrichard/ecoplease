export interface PostsType {
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
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: any[];
  acf: any[];
  _links: Links;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  author: Author[];
  replies: Author[];
  "version-history": VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:featuredmedia": Author[];
  "wp:attachment": About[];
  "wp:term": WpTerm[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface PredecessorVersion {
  id: number;
  href: string;
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface WpTerm {
  taxonomy: Taxonomy;
  embeddable: boolean;
  href: string;
}

export enum Taxonomy {
  Category = "category",
  PostTag = "post_tag",
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}

export interface Meta {
  _et_pb_use_builder: string;
  _et_pb_old_content: string;
  _et_gb_content_width: string;
}