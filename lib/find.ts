import { PlateDefintion, PlatePrefixList } from "./types";

import {
  generalFormatRegex,
  generalBikeFormatRegex,
  generalPlateYears,
  specialPlatePrefix,
  matchGeneralPrefix,
  orgCharityPlatePrefix,
  townShirePlatePrefix,
  districtPlatePrefix,
} from "./definitions";

function matchPrefixPlate(cleanPlate: string, prefix: string): boolean {
  const regexMatch = new RegExp(`^${prefix}[-\s]?[0-9]*$`);

  return regexMatch.test(cleanPlate);
}
function matchPrefixGeneralPlate(cleanPlate: string, prefix: string): boolean {
  const regexMatch = new RegExp(`^${prefix}[A-Z]{2}[0-9]{3}$`);

  return regexMatch.test(cleanPlate);
}

function matchSuffixPlate(cleanPlate: string, suffix: string): boolean {
  const regexMatch = new RegExp(`^[0-9]*[-\s]?${suffix}$`);

  return regexMatch.test(cleanPlate);
}

function checkPlateList(
  cleanPlate: string,
  prefixList: PlatePrefixList,
): PlateDefintion | null {
  // check for org/charity plates
  for (const [key, value] of Object.entries(prefixList)) {
    if (cleanPlate.startsWith(key) && matchPrefixPlate(cleanPlate, key)) {
      return value;
    }
    if (cleanPlate.endsWith(key) && matchSuffixPlate(cleanPlate, key)) {
      return value;
    }
  }

  return null;
}
function checkGeneralPrefix(
  cleanPlate: string,
  prefixList: PlatePrefixList,
): PlateDefintion | null {
  // works slightly different, cause it can be also a general purpose plate
  for (const [key, value] of Object.entries(prefixList)) {
    if (
      cleanPlate.startsWith(key) &&
      matchPrefixGeneralPlate(cleanPlate, key)
    ) {
      return value;
    }
  }

  return null;
}

export function findPlate(partialPlate: string): PlateDefintion | null {
  // generalize to uppercase, strip everything special for spoaces
  let cleanPlate = partialPlate.trim().toUpperCase().replace(/\s/g, "");

  const checkSpecialPlatePrefix = checkPlateList(
    cleanPlate,
    specialPlatePrefix,
  );
  if (checkSpecialPlatePrefix) {
    return checkSpecialPlatePrefix;
  }

  // check for org/charity plates
  const checkOrgCharityPlatePrefix = checkPlateList(
    cleanPlate,
    orgCharityPlatePrefix,
  );
  if (checkOrgCharityPlatePrefix) {
    return checkOrgCharityPlatePrefix;
  }

  // check for town/shire plates
  const checkTownShirePlatePrefix = checkPlateList(
    cleanPlate,
    townShirePlatePrefix,
  );
  if (checkTownShirePlatePrefix) {
    return checkTownShirePlatePrefix;
  }

  // check for district plates
  const checkDistrictPlatePrefix = checkPlateList(
    cleanPlate,
    districtPlatePrefix,
  );
  if (checkDistrictPlatePrefix) {
    return checkDistrictPlatePrefix;
  }

  // check for general plate prefixes
  const generalPrefixMatch = checkGeneralPrefix(cleanPlate, matchGeneralPrefix);
  if (generalPrefixMatch) {
    return generalPrefixMatch;
  }

  // check for general plates
  if (generalBikeFormatRegex.test(cleanPlate)) {
    return { name: "Motorbike Plate" };
  }

  if (generalFormatRegex.test(cleanPlate)) {
    // check the second letter against the map generalPlateYears
    const yearData = cleanPlate.substring(1, 2);
    if (generalPlateYears[yearData]) {
      return { name: `General Plate (${generalPlateYears[yearData]})` };
    }

    return { name: "General Plate" };
  }

  // unknown?
  return null;
}
