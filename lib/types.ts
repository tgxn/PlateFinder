export type ImageData = {
  src: string;
  credit?: string;
};

export type PlateDefintion = {
  name: string;
  type?: string;
  images?: ImageData[];
  image?: string;
  desc?: string;
  link?: string;
};

export type PlatePrefixList = {
  [key: string]: PlateDefintion;
};
