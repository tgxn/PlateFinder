import { PlateDefintion } from "./types";

/// fetch data from file at lib/data/data.json
export function fetchPlateData(): PlateDefintion[] {
  // current path
  return require("./data/data.json");
}
