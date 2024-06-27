import { generalFormatRegex, specialPlatePrefix, orgCharityPlatePrefix, townShirePlatePrefix, districtPlatePrefix } from "../definitions";

import { findPlate } from "../find";

describe("test definitions", () => {
  it("lengths", () => {
    // expect(Object.keys(specialPlatePrefix).length).toBe(5);
    // expect(Object.keys(orgCharityPlatePrefix).length).toBe(148);
    // expect(Object.keys(townShirePlatePrefix).length).toBe(100);
    // expect(Object.keys(districtPlatePrefix).length).toBe(133);
  });
});

// i know these plates
describe("find known plates", () => {
  it("Organisations and Charities", () => {
    const testExpect = [
      ["4WDA", "4WD Associations of WA"],
      ["ASC111", "Armadale Soccer Club"],
      ["REDS 2", "Western Reds Ruby League"],
      ["VPXHS2222", "Vic Park Xavier Hockey Club"],
    ];

    testExpect.forEach(([plate, expected]) => {
      const result = findPlate(plate);
      console.log(plate, result);
      expect(result).not.toBeFalsy();
      expect(result?.name).toEqual(expected);
    });
  });

  it("Town and Shire Councils", () => {
    const testExpect = [
      // single
      ["B", "Bridgetown"],
      ["B222", "Bridgetown"],
      ["B 222", "Bridgetown"],
      ["B-222", "Bridgetown"],

      // dbl
      ["MR", "Moora"],
      ["MR222", "Moora"],
      ["MR 222", "Moora"],
      ["MR-222", "Moora"],

      // more
      ["MRR", "Moore River Region"],
      ["MRR222", "Moore River Region"],
      ["MRR 222", "Moore River Region"],
      ["MRR-222", "Moore River Region"],
    ];

    testExpect.forEach(([plate, expected]) => {
      const result = findPlate(plate);
      console.log(plate, result);
      expect(result).not.toBeFalsy();
      expect(result?.name).toEqual(expected);
    });
  });

  it("Road Districts", () => {
    const testExpect = [
      // single
      ["A", "Albany"],
      ["A222", "Albany"],
      ["A 222", "Albany"],
      ["A-222", "Albany"],

      // dbl
      ["CM", "Cunderdin - Meckering"],
      ["CM222", "Cunderdin - Meckering"],
      ["CM 222", "Cunderdin - Meckering"],
      ["CM-222", "Cunderdin - Meckering"],

      // more
      ["CMT", "Cunderdin - Meckering (Tammin)"],
      ["CMT222", "Cunderdin - Meckering (Tammin)"],
      ["CMT 222", "Cunderdin - Meckering (Tammin)"],
      ["CMT-222", "Cunderdin - Meckering (Tammin)"],
    ];

    testExpect.forEach(([plate, expected]) => {
      const result = findPlate(plate);
      console.log(plate, result);
      expect(result).not.toBeFalsy();
      expect(result?.name).toEqual(expected);
    });
  });

  it("General Plates", () => {
    const testExpect = [
      ["1ADD333", "General Plate (1990's)"],
      ["1FFF333", "Vanity Plate Purchase Only"],
      ["IT", "Interchangeable"],
      ["WAC", "Commonwealth Games"],
    ];

    testExpect.forEach(([plate, expected]) => {
      const result = findPlate(plate);
      console.log(plate, result);
      expect(result).not.toBeFalsy();
      expect(result?.name).toEqual(expected);
    });
  });
});

// i found some images on the internet of wa plates
describe("find found plates", () => {
  it("http://www.worldlicenseplates.com/jpglps/AU_WAXX_GI2.jpg", () => {
    const testExpect = [
      ["B-305", "Bridgetown"],
      ["BSN-938", "Busselton"],
      ["CO-1060", "Collie"],
      ["M-1029", "Moora"],
      ["NR4204", "Northampton"],
      ["RA302", "Ravensthorpe"],
      ["323 DB", "Donnybrook"],
      ["A 13938", "Albany"],
      ["KM-5259", "Kalamunda"],
      ["35 IR", "Irwin"],
      ["100 D", "Dowerin"],
      ["1969 KE", "Kellerberrin"],
      ["28 MP", "Mosman Park"],
      ["1966 MH", "Mandurah"],
      ["940 PCC", "Perth City"],
    ];

    testExpect.forEach(([plate, expected]) => {
      const result = findPlate(plate);
      console.log(plate, result);
      expect(result?.name).toEqual(expected);
    });
  });
});
