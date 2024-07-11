import { PlateDefintion, PlatePrefixList } from "./types";

import {
  generalFormatRegex,
  generalBikeFormatRegex,
  generalPlateYears,
  // specialPlatePrefix,
  matchGeneralPrefix,
  // orgCharityPlatePrefix,
  // townShirePlatePrefix,
  // districtPlatePrefix,
} from "./definitions";

/// fetch data from file at lib/data/data.json
export function fetchPlateData(): PlateDefintion[] {
  return require("./data/data.json");
}

// Utils for RegExp Matching of Plates
class Utils {
  // match if it exists at the start
  static matchPrefixPlate(cleanPlate: string, prefix: string): boolean {
    const regexMatch = new RegExp(`^${prefix}[-\s]?[0-9]*$`);

    return regexMatch.test(cleanPlate);
  }

  // match if the string exists at the end
  static matchSuffixPlate(cleanPlate: string, suffix: string): boolean {
    const regexMatch = new RegExp(`^[0-9]*[-\s]?${suffix}$`);

    return regexMatch.test(cleanPlate);
  }

  // match if the string exists  within the general plate regex
  static matchPrefixGeneralPlate(cleanPlate: string, prefix: string): boolean {
    const regexMatch = new RegExp(`^${prefix}[A-Z]{2}[0-9]{3}$`);

    return regexMatch.test(cleanPlate);
  }

  static checkGeneralPrefixList(
    cleanPlateInput: string,
    prefixList: PlatePrefixList,
  ): PlateDefintion | null {
    // works slightly different, cause it can be also a general purpose plate
    for (const [key, value] of Object.entries(prefixList)) {
      if (
        cleanPlateInput.startsWith(key) &&
        Utils.matchPrefixGeneralPlate(cleanPlateInput, key)
      ) {
        return value;
      }
    }

    return null;
  }
}

// function checkPlateList(
//   cleanPlate: string,
//   prefixList: any,
// ): PlateDefintion | null {
//   // check for org/charity plates
//   for (const [key, value] of Object.entries(prefixList)) {
//     if (cleanPlate.startsWith(key) && matchPrefixPlate(cleanPlate, key)) {
//       return value;
//     }
//     if (cleanPlate.endsWith(key) && matchSuffixPlate(cleanPlate, key)) {
//       return value;
//     }
//   }

//   return null;
// }

export function findPlates(partialPlate: string): PlateDefintion[] | null {
  const plateData: PlateDefintion[] = fetchPlateData();

  // generalize to uppercase, strip everything special for spoaces
  let cleanPlate: string = partialPlate.trim().toUpperCase().replace(/\s/g, "");

  /// loop thru the full array and find all entries that match
  const matchedPlates: PlateDefintion[] = plateData.filter((plate) => {
    if (
      cleanPlate.startsWith(plate.code) &&
      Utils.matchPrefixPlate(cleanPlate, plate.code)
    ) {
      return true;
    }

    if (
      cleanPlate.endsWith(plate.code) &&
      Utils.matchSuffixPlate(cleanPlate, plate.code)
    ) {
      return true;
    }

    return false;
  });

  if (matchedPlates.length > 0) {
    return matchedPlates;
  }

  // check for general plate prefixes
  const generalPrefixMatch = Utils.checkGeneralPrefixList(
    cleanPlate,
    matchGeneralPrefix,
  );
  if (generalPrefixMatch) {
    return [generalPrefixMatch];
  }

  // check for general plates
  if (generalBikeFormatRegex.test(cleanPlate)) {
    return [{ name: "Motorbike Plate" }];
  }

  if (generalFormatRegex.test(cleanPlate)) {
    // check the second letter against the map generalPlateYears
    const yearData = cleanPlate.substring(1, 2);
    if (generalPlateYears[yearData]) {
      return [{ name: `General Plate (${generalPlateYears[yearData]})` }];
    }

    return [{ name: "General Plate" }];
  }

  // unknown?
  return null;
}
