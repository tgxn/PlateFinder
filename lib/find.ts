import { PlateDefintion, PlatePrefixList } from "./types";

import { generalFormatRegex, specialPlatePrefix, orgCharityPlatePrefix, townShirePlatePrefix, districtPlatePrefix } from "./definitions";

function matchPrefixPlate(cleanPlate: string, prefix: string): boolean {
  const regexMatch = new RegExp(`^${prefix}[-\s]?[0-9]*$`);

  return regexMatch.test(cleanPlate);
}

function matchSuffixPlate(cleanPlate: string, suffix: string): boolean {
  const regexMatch = new RegExp(`^[0-9]*[-\s]?${suffix}$`);

  return regexMatch.test(cleanPlate);
}

export function findPlate(partialPlate: string): PlateDefintion | null {
  // generalize to uppercase, strip everything special for spoaces
  let cleanPlate = partialPlate.trim().toUpperCase().replace(/\s/g, "");

  // use a for in loop to index the prefix list (which is key:value with the key being hte prefix)
  for (const [key, value] of Object.entries(specialPlatePrefix)) {
    if (cleanPlate.startsWith(key) && matchPrefixPlate(cleanPlate, key)) {
      console.log(key, value);
      return value;
    }
  }

  // check for org/charity plates
  for (const [key, value] of Object.entries(orgCharityPlatePrefix)) {
    if (cleanPlate.startsWith(key) && matchPrefixPlate(cleanPlate, key)) {
      return value;
    }
  }

  // check for town/shire plates
  for (const [key, value] of Object.entries(townShirePlatePrefix)) {
    if (cleanPlate.startsWith(key) && matchPrefixPlate(cleanPlate, key)) {
      return value;
    }

    // they can be backwards
    if (cleanPlate.endsWith(key) && matchSuffixPlate(cleanPlate, key)) {
      return value;
    }
  }

  // check for district plates
  for (const [key, value] of Object.entries(districtPlatePrefix)) {
    if (cleanPlate.startsWith(key) && matchPrefixPlate(cleanPlate, key)) {
      return value;
    }

    // they can be backwards
    if (cleanPlate.endsWith(key) && matchSuffixPlate(cleanPlate, key)) {
      return value;
    }
  }

  // check for general plates
  if (generalFormatRegex.test(cleanPlate)) {
    return { name: cleanPlate.substring(0, 2) };
  }

  // unknown?
  return null;
}
