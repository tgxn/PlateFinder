export type PlateType =
  | "special"
  | "org_charity"
  | "town_shire"
  | "road_district";

export type ImageData = {
  src: string;
  link?: string;
};

export type PlateDefintion = {
  code?: string;
  name: string;
  type?: string;
  // images?: ImageData[];
  // image?: string;
  desc?: string;
  link?: string;
  regex?: RegExp;
};

export type PlatePrefixList = {
  [key: string]: PlateDefintion;
};
