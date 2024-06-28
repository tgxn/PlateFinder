export type PlateDefintion = {
  name: string;
  type?: string;
  image?: string;
  desc?: string;
  link?: string;
};

export type PlatePrefixList = {
  [key: string]: PlateDefintion;
};
