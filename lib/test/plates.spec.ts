import { PlateDefintion } from "../types";

import { findPlates } from "../find";

// i know these plates
describe("find known plates", () => {
  it("Organisations and Charities", () => {
    const testExpect: [string, string][] = [
      ["4WDA", "4WD Associations of WA"],
      ["ASC111", "Armadale Soccer Club"],
      ["REDS 2", "Western Reds Ruby League"],
      ["VPXHS2222", "Vic Park Xavier Hockey Club"],
    ];

    testExpectArray(testExpect);
  });

  it("Town and Shire Councils", () => {
    const testExpect: [string, string][] = [
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

      // LETTER AT END?
      // ["MH0761A", "Mandurah"],

      // more
      ["MRR", "Moore River Region"],
      ["MRR222", "Moore River Region"],
      ["MRR 222", "Moore River Region"],
      ["MRR-222", "Moore River Region"],
    ];

    testExpectArray(testExpect);
  });

  it("Road Districts", () => {
    const testExpect: [string, string][] = [
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

    testExpectArray(testExpect);
  });
});

describe("identify general format plates", () => {
  it("General Plates", () => {
    const testExpect: [string, string, number?][] = [
      ["1ADD333", "General (~1990's)"],
      ["1FFF333", "Vanity Plate Purchase Only"],
      ["IT", "Interchangeable"],
      // ["6SR-123", "Stock Transport"],
    ];

    testExpectArray(testExpect);
  });

  it("General Plates - General Format", () => {
    const testExpect: [string, string, number?][] = [
      ["1ADD333", "General (~1990's)"],
      ["1IDD333", "General (~2023)"],
      ["1FFF333", "Vanity Plate Purchase Only"],

      ["1F", "Vanity Plate Purchase Only"],
      ["1FF", "Vanity Plate Purchase Only"],
      ["1FFF", "Vanity Plate Purchase Only"],
      ["1FFF2", "Vanity Plate Purchase Only"],
      ["1FFF-2", "Vanity Plate Purchase Only"],
      ["1FFF-62", "Vanity Plate Purchase Only"],
      ["1FFF-642", "Vanity Plate Purchase Only"],
      ["1FFF642", "Vanity Plate Purchase Only"],
    ];

    testExpectArray(testExpect);
  });
});

describe("edge case plates", () => {
  it("General Plates - Edge Cases", () => {
    const testExpect: [string, string, number?][] = [
      ["1ADD333", "General (~1990's)"],
      ["1FFF333", "Vanity Plate Purchase Only"],
      ["IT", "Interchangeable"],

      ["WAC", "Freemasonry - Charity and Fraternity", 0],
      ["WAC", "Commonwealth Games", 1],

      ["CVL", "Charter Vehicle"],

      ["MFC", 'Mullewa Football Club "Mighty Saints"', 0],
      ["MFC", "Melbourne Football Club", 1],

      ["WFC", "Wagin Football Club", 0],
      ["WFC", "Watheroo Football Club", 1],
    ];

    testExpectArray(testExpect);
  });
});

// i found some images on the internet of wa plates
describe("find found plates", () => {
  /// sports teams https://www.waaflplates.com.au/
  it("https://www.waaflplates.com.au/", () => {
    const testExpect: [string, string, number?][] = [
      ["AFC", "Adelaide Crows"],
      ["BL", "Brisbane Lions"],
      ["CFC", "Cervantes Football Club", 0],
      ["CFC", "Carlton Blues", 1],
      ["CFC", "Collingwood Magpies", 2],
      ["EFC", "Essendon Bombers"],
      ["FD", "Fremantle Dockers"],
      ["GFC", "Geelong Cats"],
      ["HFC", "Hawthorn Hawks"],

      ["MFC", 'Mullewa Football Club "Mighty Saints"', 0],
      ["MFC", "Melbourne Football Club", 1],

      ["ROO", "North Melbourne"],
      ["PORT", "Port Adelaide"],
      ["RFC", "Richmond Football Club"],
      ["SKS", "St Kilda"],
      ["SFC", "Sydney Swans"],
      // ["SFC", "Sydney Swans"],
      ["WCE", "West Coast Eagles"],
      ["WBFC", "Western Bulldogs Football Club"],
    ];

    testExpectArray(testExpect);
  });

  it("http://www.worldlicenseplates.com/jpglps/AU_WAXX_GI2.jpg", () => {
    const testExpect: [string, string, number?][] = [
      ["B-305", "Bridgetown"],
      ["BSN-938", "Busselton"],
      ["CO-1060", "Collie"],
      ["M-1029", "Moora"],
      ["NR4204", "Northampton"],
      ["RA302", "Ravensthorpe"],
      ["323 DB", "Donnybrook - Balingup", 1],
      ["A 13938", "Albany"],
      ["KM-5259", "Kalamunda"],
      ["35 IR", "Irwin"],
      ["100 D", "Dowerin"],
      ["1969 KE", "Kellerberrin"],
      ["28 MP", "Mosman Park"],
      ["1966 MH", "Mandurah"],
      ["940 PCC", "Perth City"],
    ];

    testExpectArray(testExpect);
  });

  it("http://www.plate-planet.com/bodypages/au-aust-wasshigr.html", () => {
    const testExpect: [string, string, number?][] = [
      ["117AK", "Armadale - Kelmscott", 0],
      ["7798AS", "Ashburton", 0],
      ["888AW", "West Arthur", 0],
      ["888AW", "West Arthur", 1],
      ["28BAY", "City of Bayswater", 0],
      ["1998BB", "Bremer Bay", 0],
      ["74BCC", "Belmont - City of Opportunity", 0],
      ["181BCC", "Belmont - City of Opportunity", 0],
      ["440BE", "Beverley", 0],
      ["255BK", "Bruce Rock", 0],
      ["BKH253", "Bakers Hill", 0],
      ["530 BM", "Broome", 0],
      ["648 BM", "Broome", 1],
      ["682BO", "Brookton", 0],
      ["123BSN", "Busselton", 0],
      ["0652BT", "Boddington", 0],
      ["922BU", "Boyup Brook", 0],
      ["922BU", "Blackwood Upper (Boyup Brook)", 1],
      ["622BWK", "Brunswick Junction", 0],
      ["174BY", "Bunbury", 0],
      ["351 CA", "Carnamah", 0],
      ["111CB", "Cranbrook", 0],
      ["20CBAY", "Cowaramup Bay", 0],
      ["65 CD", "Cue Daydawn", 0],
      ["96CH", "Chittering", 0],
      ["33CMT", "Cunderdin - Meckering (Tammin)", 0],
      ["200CN", "Dryandra Country", 0],
      ["200CN", "Cuballing", 1],
      ["200CN", "Cuballing", 1],
      ["2CO", "Collie", 0],
      ["448CP", "Capel", 0],
      ["757CR", "Corrigin", 0],
      ["99CV", "Chapman Valley", 0],
      ["518CW", "Coorow", 0],
      ["307D", "Dowerin", 0],
      ["52DA", "Dardanup", 0],
      ["3800DB", "Donnybrook", 0],
      ["3800DB", "Donnybrook - Balingup", 1],
      ["3800DB", "Donnybrook - Balingup", 1],
      ["26 DE", "Denmark", 0],
      ["26 DE", "Denmark", 1],
      ["26 DE", "Denmark", 1],
      ["31DS", "Dundas", 0],
      ["31DS", "Dundas (Norseman)", 1],
      ["31DS", "Dundas (Norseman)", 1],
      ["899E", "Esperance", 0],
      ["20EPS", "Shire of East Pilbara", 0],
      ["96EX", "Exmouth", 0],
      ["96EX", "Exmouth", 1],
      ["96EX", "Exmouth", 1],
      ["FR007", "Frankland River", 0],
      ["00G", "Greenough", 0],
      ["1700GG", "Gingin", 0],
      ["1960GN", "Gnowangerup (with dot)", 0],
      ["1960GN", "Geraldton (without dot)", 1],
      ["1960GN", "Geraldton (without dot)", 1],
      ["94GNP", "Gnowangerup Shire", 0],
      ["61H", "Harvey", 0],
      ["86IR", "Irwin", 0],
      ["86IR", "Irwin", 1],
      ["86IR", "Irwin", 1],
      ["1996KA", "Katanning", 0],
      ["1995KD", "Koorda", 0],
      ["54KE", "Kellerberrin", 0],
      ["3KM", "Kalamunda", 0],
      ["3KM", "Kalamunda", 1],
      ["3KM", "Kalamunda", 1],
      ["145KM", "Kalamunda", 0],
      ["145KM", "Kalamunda", 1],
      ["145KM", "Kalamunda", 1],
      ["88KT", "Shire of Kent (Nyabing / Pingrup)", 0],
      ["88KT", "Kent (Nyabing - Pingrup)", 1],
      ["88KT", "Kent (Nyabing - Pingrup)", 1],
      ["308KTY", "Kununoppin - Trayning - Yelbeni", 0],
      ["42KU", "Kulin", 0],
      ["2426KW", "Shire of Derby / Kimberley West", 0],
      ["2426KW", "Kimberley West", 1],
      ["2426KW", "Kimberley West", 1],
      ["2000LA", "Laverton", 0],
      ["253M", "Moora", 0],
      ["100MBL", "Mukinbudin Brown Lake", 0],
      ["100MBL", "Mukinbudin - Bonnie Rock - Lake Brown", 1],
      ["100MBL", "Mukinbudin - Bonnie Rock - Lake Brown", 1],
      ["2244MD", "Merredin", 0],
      ["800MDG", "Mundaring", 0],
      ["540MEL", "City Of Melville", 0],
      ["400MH", "Mandurah", 0],
      ["1022MI", "Mingenew", 0],
      ["278MK", "Meekatharra", 0],
      ["1995MK", "Meekatharra", 0],
      ["6472MM", "Mount Marshall", 0],
      ["6472MM", "Mount Marshall (Mandiga, Welbungin)", 1],
      ["6472MM", "Mount Marshall (Mandiga, Welbungin)", 1],
      ["56MO", "Morawa", 0],
      ["31MP", "Mosman Park", 0],
      ["1994MR", "Moora", 0],
      ["15MW", "Mullewa", 0],
      ["15MW", "Mullewa", 1],
      ["15MW", "Mullewa", 1],
      ["66MY", "Murray (Pinjarra)", 0],
      ["211N", "Northam", 0],
      ["29NAT", "Cape Naturaliste", 0],
      ["364NR", "Northampton", 0],
      ["256PCC", "Perth City", 0],
      ["72PH", "Port Hedland", 0],
      ["94PJ", "Perenjori", 0],
      ["1998PL", "Plantagenet (Mount Barker)", 0],
      ["1998PL", "Plantagenet (Mount Barker)", 1],
      ["1998PL", "Plantagenet (Mount Barker)", 1],
      ["98Q", "Quairading", 0],
      ["98Q", "Quairading", 1],
      ["98Q", "Quairading", 1],
      ["SUBI500", "Subiaco", 0],
      ["20SV", "HSV Owners Club", 0],
      ["20SV", "Swan Valley", 1],
      ["20SV", "Swan Valley", 1],
      ["125SW", "Swan", 0],
      ["93SW", "Swan", 0],
      ["44TA", "Tambellup", 0],
      ["44TA", "Tambellup", 1],
      ["44TA", "Tambellup", 1],
      ["90TS", "Three Springs", 0],
      ["90TS", "Three Springs", 1],
      ["90TS", "Three Springs", 1],
      ["VLY29", "Varley", 0],
      ["555VP", "Victoria Plains", 0],
      ["555VP", "Victoria Plains", 1],
      ["555VP", "Victoria Plains", 1],
      ["37VPk", "Victoria Park", 0],
      ["234W", "Wagin (Woolorama)", 0],
      ["234W", "Wagin", 1],
      ["234W", "Wagin", 1],
      ["1234WA", "Manjimup Shire (Warren)", 0],
      ["1234WA", "Manjimup (Warren)", 1],
      ["1234WA", "Manjimup (Warren)", 1],
      ["28WB", "Wongan - Ballidu", 0],
      ["868WK", "Wickepin", 0],
      ["16WL", "Williams", 0],
      ["16WL", "Williams", 1],
      ["16WL", "Williams", 1],
      ["159WM", "Wyalkatchem", 0],
      ["14WR", "Waroona", 0],
      ["14WR", "Waroona", 1],
      ["14WR", "Waroona", 1],
      ["33WT", "Westonia", 0],
      ["25YL", "Yilgarn", 0],
      ["91YLP", "Yarloop", 0],
    ];

    testExpectArray(testExpect, false);
  });

  // it("http://www.worldlicenseplates.com/jpglps/AU_WAXX_SIV.jpg", () => {
  //   const testExpect: [string, string, number?][] = [
  //     ["AR000P", "OLD"],
  //     ["AR - 000P", "OLD"],
  //     ["RJT302P", "OLD"],
  //     ["RJT - 302P", "OLD"],
  //     ["VT135P", "OLD"],
  //     ["VT-135P", "OLD"],
  //     ["DJ666", "OLD"],
  //     ["DJ.666", "OLD"],
  //     ["SAP- 002-P", "OLD"],
  //   ];

  //   testExpectArray(testExpect);
  // });

  // it("things i have seen on the road", () => {
  //   const testExpect: [string, string, number?][] = [
  //     ["NBFC6", "idk"],
  //     ["SSLSC99", "idk"],
  //     ["KLS99", "idk"],
  //   ];

  //   testExpectArray(testExpect);
  // });

  it("https://web.archive.org/web/20120313005521/http://www.regionalwa.com.au/WAinfo/TT_CountryCars.htm", () => {
    const testExpect: [string, string, number?][] = [
      ["A", "Albany"],
      ["BY", "Bunbury"],
      ["GNG", "Geraldton - Greenough"],
      ["KBC", "Kalgoorlie - Boulder"],
      ["MH", "Mandurah"],
      ["NGN", "Narrogin"],
      ["N", "Northam"],
      ["RO", "Rockingham"],
      ["AL", "Albany"],
      ["AK", "Armadale - Kelmscott"],
      ["AW", "West Arthur"],
      ["AS", "Ashburton"],
      ["AU", "Augusta", 0],
      ["AU", "Augusta - Margaret River", 1],
      ["BD", "Boulder"],
      ["BE", "Beverley"],
      ["BT", "Boddington"],
      ["BU", "Boyup Brook", 0],
      ["BU", "Blackwood Upper (Boyup Brook)", 1],
      ["B", "Bridgetown"],
      ["BO", "Brookton"],
      ["BM", "Broome"],
      ["BH", "Broomehill"],
      ["BK", "Bruce Rock"],
      ["BSN", "Busselton"],
      ["CP", "Capel"],
      ["CA", "Carnamah"],
      ["C", "Carnarvon"],
      ["CV", "Chapman Valley"],
      ["CH", "Chittering"],
      ["CO", "Collie"],
      ["CG", "Coolgardie"],
      ["CW", "Coorow"],
      ["CR", "Corrigin"],
      ["CB", "Cranbrook"],
      ["CN", "Dryandra Country", 0],
      ["CN", "Cuballing", 1],
      ["CD", "Cue Daydawn"],
      ["CM", "Cunderdin - Meckering"],
      ["CMT", "Cunderdin - Meckering (Tammin)"],
      ["DL", "Dalwallinu"],
      ["DN", "Dandaragan"],
      ["DA", "Dardanup"],
      ["DE", "Denmark"],
      ["DB", "Donnybrook", 0],
      ["DB", "Donnybrook - Balingup", 1],
      ["D", "Dowerin"],
      ["DU", "Dumbleyung"],
      ["DS", "Dundas", 0],
      ["DS", "Dundas (Norseman)", 1],
      ["E", "Esperance"],
      ["EP", "East Pilbara"],
      ["EX", "Exmouth"],
      ["GU", "Gascoyne Upper"],
      ["GG", "Gingin"],
      ["GO", "Goomalling"],
      ["HC", "Hall's Creek"],
      ["H", "Harvey"],
      ["IR", "Irwin"],
      ["JP", "Jerramungup"],
      ["KM", "Kalamunda"],
      ["KMC", "Kalgoorlie"],
      ["KA", "Katanning"],
      ["KE", "Kellerberrin"],
      ["KT", "Shire of Kent (Nyabing / Pingrup)"],
      ["KW", "Shire of Derby / Kimberley West"],
      ["KO", "Kojonup"],
      ["KN", "Kondinin"],
      ["KD", "Koorda"],
      ["KU", "Kulin"],
      ["KWN", "Kwinana"],
      ["KTY", "Kununoppin - Trayning - Yelbeni"],
      ["LG", "Lake Grace"],
      ["LA", "Laverton"],
      ["L", "Leonora"],
      ["MK", "Meekatharra"],
      ["MN", "Menzies"],
      ["MD", "Merredin"],
      ["MI", "Mingenew"],
      ["M", "Moora"],
      ["MO", "Morawa"],
      ["MA", "Mount Magnet"],
      ["MM", "Mount Marshall"],
      ["MBL", "Mukinbudin Brown Lake", 0],
      ["MBL", "Mukinbudin - Bonnie Rock - Lake Brown", 1],
      ["MW", "Mullewa"],
      ["MDG", "Mundaring"],
      ["MU", "Murchison"],
      ["MY", "Murray (Pinjarra)"],
      ["NP", "Nannup"],
      ["NB", "Narembeen"],
      ["NA", "Nungarin"],
      ["N", "Northam"],
      ["NR", "Northampton"],
      ["NO", "Narrogin (Road Board)"],
      ["PJ", "Perenjori"],
      ["PN", "Pingelly"],
      ["PL", "Plantagenet (Mount Barker)"],
      ["PH", "Port Hedland"],
      ["Q", "Quairading"],
      ["RA", "Ravensthorpe"],
      ["R", "Roebourne"],
      ["S", "Sandstone"],
      ["SJ", "Serpentine - Jarradale"],
      ["SB", "Shark Bay"],
      ["SW", "Swan"],
      ["TB", "Tablelands"],
      ["TA", "Tambellup"],
      ["TN", "Tammin"],
      ["TS", "Three Springs"],
      ["T", "Toodyay"],
      ["VP", "Victoria Plains"],
      ["W", "Wagin (Woolorama)"],
      ["WA", "Manjimup Shire (Warren)"],
      ["WB", "Wongan - Ballidu"],
      ["WD", "Wandering"],
      ["WN", "Wanneroo"],
      ["WK", "Wickepin"],
      ["WL", "Williams"],
      ["WM", "Wyalkatchem"],
      ["WO", "Woodanilling"],
      ["WP", "West Pilbara"],
      ["WR", "Waroona"],
      ["WT", "Westonia"],
      ["WU", "Wiluna"],
      ["WY", "Shire of Wyndham, East Kimberley including Kununurra"],
      ["YA", "Yalgoo"],
      ["YL", "Yilgarn"],
      ["Y", "York"],
    ];

    testExpectArray(testExpect);
  });
});

function testExpectArray(
  testExpect: [string, string, number?, string?][],
  shouldLog = false,
) {
  let newArr: [string, string, number?, string?][] = [];

  testExpect.forEach(([plate, expected, int = 0, string = false]) => {
    const result = findPlates(plate);

    if (!result) newArr.push([plate, "UNKNOWN"]);

    if (result) newArr.push([plate, result[int].name, int]);
    if (result && result[int + 1])
      newArr.push([plate, result[int + 1].name, int + 1]);

    // console.log(plate, result);
    try {
      expect(result).not.toBeFalsy();
      expect(result && result[int].name).toEqual(expected);
      if (string) expect(result && result[int].type).toEqual(string);
    } catch (e) {
      console.log(plate, result);
      throw e;
    }
  });

  if (shouldLog) console.log(JSON.stringify(newArr, null, 2));
}
