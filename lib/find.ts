import { PlateDefintion, PlatePrefixList } from "./types";

import { fetchPlateData } from "./definitions";

// Utils for RegExp Matching of Plates
class Utils {
  // match if it exists at the start
  // X - prefix, then numbers and optionally 1 letter
  static matchPrefixPlate(cleanPlate: string, prefix: string): boolean {
    const regexMatch = new RegExp(`^${prefix}[-\s]?([0-9]+[A-Z]{0,1})?$`);

    return regexMatch.test(cleanPlate);
  }

  // match if the string exists at the end
  static matchSuffixPlate(cleanPlate: string, suffix: string): boolean {
    const regexMatch = new RegExp(`^[0-9]+[-\s]?${suffix}$`);

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

export function findPlates(partialPlate: string): PlateDefintion[] | null {
  const plateData: PlateDefintion[] = fetchPlateData();

  // generalize to uppercase, strip everything special for spoaces
  let cleanPlate: string = partialPlate.trim().toUpperCase().replace(/\s/g, "");

  /// loop thru the full array and find all entries that match
  const matchedPlates: PlateDefintion[] = plateData.filter((plate) => {
    // filter tpye
    if (plate.type === "regex") {
      return false;
    }

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
    // console.log("found", matchedPlates);
    return matchedPlates;
  }

  const matchedRegex: PlateDefintion[] = plateData.filter((plate) => {
    // filter tpye
    if (plate.type !== "regex") {
      return false;
    }
    // console.log("checking", plate);

    // convert from string /^(1A)([A-Z]{1,2})?[-\s]?([0-9]{1,3})?$/
    const regex = new RegExp(plate.regex);

    // console.error("checking", cleanPlate, regex);

    if (regex.test(cleanPlate)) {
      // console.log("found regex in matchedRegex", plate);
      return true;
    }

    return false;
  });
  if (matchedRegex.length > 0) {
    // console.log("found", matchedRegex);
    return matchedRegex;
  }
  // for (const prefix of matchRegexPrefix) {
  //   if (prefix.regex.test(cleanPlate)) {
  //     console.log("found", prefix);
  //     return [prefix];
  //   }
  // }

  // unknown?
  console.error("unknown plate", cleanPlate);
  return null;
}
