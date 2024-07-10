import { PlateDefintion, PlatePrefixList } from "./types";

/*/
  General Format
/*/

// Western Australian General Format
export const generalFormatRegex = /^([0-2]{1})([A-Z]{3})[-\s]?([0-9]{3})$/;

export const generalBikeFormatRegex = /^([0-2]{1})([A-Z]{2})[-\s]?([0-9]{3})$/;

export const generalNumberPlateImage =
  "http://www.plateshack.com/y2k/Western_Australia/westaus2014.jpg";

// https://warego.au/#organisation
export const generalPlateYears = {
  A: "1990's",
  B: "2002",
  D: "2009",
  E: "2015",
  G: "2017",
  H: "2020",
  I: "2023",
};

export const regexDefs: PlateDefintion[] = [
  {
    type: "general",
    name: "General Format",
    desc: "Series 1AAA-000 - 2ZZZ-999",
    images: [
      {
        src: "http://www.plateshack.com/y2k/Western_Australia/westaus2014.jpg",
        link: "www.plateshack.com/y2k/Western_Australia/westernaustralia.html",
      },
    ],
    regex: generalFormatRegex,
  },
  {
    type: "general",
    name: "Motorcycle",
    desc: "Series 1AA-000 - 2ZZ-999",
    images: [
      {
        src: "http://www.plateshack.com/y2k/Western_Australia/wamotorcycle.jpg",
        link: "www.plateshack.com/y2k/Western_Australia/westernaustralia.html",
      },
    ],
    regex: generalBikeFormatRegex,
  },
];

// TODO

/**
 * https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Western_Australia
 *
 * - Motorcycles have the plate 1aa-nnn (e.g.: 1AB-123).
 *
 * also, https://cl.pinterest.com/pin/western-australia-home-of-the-americas-cup--514747432387446577/
 *
 * - Stock Carrying Trucks have 'ST' as the second & third letters of the prefix; e.g., 6ST-123, 9ST-123, 1STA-123.
 *
 *
 *
 *
 */

/*/
  General Format (Prefix Matcher)
/*/

// these are part of the general prpose format
export const matchGeneralPrefix: PlatePrefixList = {
  "1Q": {
    name: "Government",
    desc: "Series 1QAA-000 - 1QSZ-999 and 1QXA-000 - 1QZZ-999",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-77330-kl.gif",
  },
  "1T": {
    name: "Trailers",
  },
  "1U": {
    name: "Trailers",
  },
  "1Z": {
    // TODO can also be farm vehicle,,, probably only certain prefixes
    name: "Licensed vehicle repairers / mechanics / dealers",
    image: "http://www.plateshack.com/y2k/Western_Australia/wafarm.jpg",

    // images: [
    //   {
    //     src: "http://www.plateshack.com/y2k/Western_Australia/wafarm.jpg",
    //     credit:
    //       "www.plateshack.com/y2k/We stern_Australia/westernaustralia.html",
    //   },
    //   {
    //     src: "http://www.plate-planet.com/images/plates/Fotobatch-188229-kl.gif",
    //     credit: "http://www.plate-planet.com/homepage.htm",
    //   },
    //   {
    //     src: "http://www.plate-planet.com/images/plates/Fotobatch-74164-kl.gif",
    //     credit: "http://www.plate-planet.com/homepage.htm",
    //   },
    // ],
  },
  "1F": {
    name: "Vanity Plate Purchase Only",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/2016_Western_Australia_registration_plate_1FAB212_slimline_platinum.jpg/200px-2016_Western_Australia_registration_plate_1FAB212_slimline_platinum.jpg",
  },
  "1Y": {
    name: "Hire Vehicle",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-85615-kl.gif",
  },
};

/*/
  Special Plates (Prefix Matcher)
/*/

// Must be checked before general plate format
export const specialPlatePrefix: PlatePrefixList = {
  TP: {
    name: "TransPerth (Bus)",
    desc: "https://www.perthbus.info/index.php",
  },
  WPC: {
    name: "Western Power Corporation",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188312-kl.gif",
  },

  // i added
  IT: {
    name: "Interchangeable",
  },
  TC: {
    name: "Touring Coach / Transport Commission",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-56433-kl.gif",
    // image: "http://www.plate-planet.com/images/plates/Fotobatch-120067-kl.gif",
  },
  TAXI: {
    name: "Taxi Cab",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-77323-kl.gif",
  },
  CT: {
    name: "Taxi Cab (Non-Metro)",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-99458-kl.gif",
  },
  SCV: {
    name: "Charter Vehicle",
    image: "http://www.plateshack.com/y2k/Western_Australia/wasmallcharter.jpg",
  },
  CVL: {
    name: "Charter Vehicle",
  },

  WAC: {
    name: "Commonwealth Games",
  },
  TRA: {
    name: "Telstra Rally Australia",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-74013-kl.gif",
  },
};

// Organisations and Charities
// 147 entries
export const orgCharityPlatePrefix: PlatePrefixList = {
  // ADDED MORE
  PCH: {
    name: "Perth Childrens Hospital Foundation",
  },
  EFA: {
    name: "Equestrian Excellence",
  },

  AI: {
    name: "Land Speed Challenge",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/waspeedchallenge.jpg",
  },
  CSC: {
    name: "Western Australia Celtic Club Supporters",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/westauscelticclub.jpg",
  },
  LAS: {
    name: "Lasts Transit (Corporate Plate)",
    image: "http://www.plateshack.com/y2k/Western_Australia/walaststransit.jpg",
  },
  MFC: {
    name: "Melbourne Football Club",
    image: "http://www.plateshack.com/y2k/Western_Australia/wamelbournefc.jpg",
  },
  RR: {
    name: "Motorcycle Racing Club of Western Australia",
    image: "http://www.plateshack.com/y2k/Western_Australia/wamcracingclub.jpg",
  },
  BRS: {
    name: "Pilbara Black Rock Stakes Wheelbarrow race",
    image: "http://www.plateshack.com/y2k/Western_Australia/wapilbara.jpg",
  },
  RFC: {
    name: "Richmond Football Club",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/warichmondfooty2018.jpg",
  },
  YEARS: {
    name: "Western Australia Centenary of Federation plate issued in 2001",
    image: "http://www.plateshack.com/y2k/Western_Australia/wafederation.jpg",
  },
  RSL: {
    name: "Returned Services League",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188228-kl.gif",
  },
  VC: {
    name: "Variety Club of Western Australia",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188248-kl.gif",
  },
  ASSET: {
    name: "ASSET SERVICES - Total Buillding Maintenance",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188185-kl.gif",
  },

  // from warego.au (147 on 27/6/24)
  "4WDA": {
    name: "4WD Associations of WA",
  },
  AC: {
    name: "Aquinas College Rowing",
  },
  AD: {
    name: "Avon Descent",
  },
  APEX: {
    name: "Apex Community Organisation",
  },
  AMR: {
    name: "Augusta Margaret River Football Club",
  },
  APLA: {
    name: "Amalgamated Prospectors and Leaseholders Association of W.A.",
  },
  ASC: {
    name: "Armadale Soccer Club",
  },
  AV: {
    name: "Avon Valley Vintage Vehicle Association",
  },
  A4R: {
    name: "All 4s and Rotaries",
  },
  BABY: {
    name: "SIDS and KIDS",
  },
  BBFC: {
    name: "Boyup Brook Football Club Premiers 2012",
  },
  BC: {
    name: "Buick Owners Club of WA",
  },
  BCF: {
    name: "Breast Cancer Foundation",
  },
  BCFC: {
    name: "Boulder City Football Club",
  },
  BCN: {
    name: "Beacon Football Club",
  },
  BES: {
    name: "Berestford Electrical Service",
  },
  BFC: {
    name: "Bunbury Football Club",
  },
  BFS: {
    name: "Bush Fire Service",
  },
  BLC: {
    name: "Balcatta Leisure Centre",
  },
  BLU: {
    name: "Bright Blue",
  },
  BP: {
    name: "Scouts Australia (Be Prepared)",
  },
  BPFC: {
    name: "Brookton-Pingelly Football Club",
  },
  BSC: {
    name: "Broome Speedway Club",
  },
  BUSC: {
    name: "Bunbury United Soccer Club",
  },
  CARE: {
    name: "People Choose (Albany)",
  },
  CAT: {
    name: "Cat Haven",
    image: "http://www.plateshack.com/y2k/Western_Australia/wacat2019.jpg",
  },
  CC: {
    name: "WA Consulate Corps",
  },
  CF: {
    name: "Cystic Fibrosis",
  },
  CFC: {
    name: "Cervantes Football Club",
  },
  CFC0: {
    name: "Carlton Football Club",
  },
  CGC: {
    name: "Capel Golf Club",
  },
  CHC: {
    name: "Centaurs Hockey Club Collie",
  },
  CITY: {
    name: "Swan Chamber of Commerce",
  },
  CI: {
    name: "Cycle Instead",
  },
  CL: {
    name: "Claremont Football Club",
  },
  CRDA: {
    name: "Collie Racing Drivers Association",
  },
  CTC: {
    name: "Claremont Centenary (1898 - 1998)",
  },
  CTP: {
    name: "Curtin Trinity Pirates Hockey Club",
  },
  CVFC: {
    name: "Chapman Valley Football Club",
  },
  DDMS: {
    name: "Dale Districts Mens Softball Association",
  },
  DOBE: {
    name: "Dobermans WA",
  },
  DOGS: {
    name: "Bridgetown Bulldogs Football Club",
  },
  DFC: {
    name: "Manjimup Deanmill (Donnybrook) Football Club",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-177368-kl.gif",
  },
  DUCK: {
    name: "Dunsborough DUCKS Football Club",
  },
  EB: {
    name: "Eaton Boomers",
  },
  EF: {
    name: "East Fremantle Football Club",
  },
  EG4WD: {
    name: "Eastern Goldfields 4WD Club",
  },
  EPFC: {
    name: "East Perth Football Club",
  },
  FD: {
    name: "Fremantle Dockers",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/wafreemantledockers2020.jpg",
  },
  FLY: {
    name: "The Royal Aero Club of WA",
  },
  FSC: {
    name: "Fremantle Sailing Club",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188201-kl.gif",
  },
  FSR: {
    name: "Fremantle Sea Rescue",
  },
  GBYC: {
    name: "Geographe Bay Yacht Club",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-44038-kl.gif",
  },
  GCS: {
    name: "Geraldton City Speedway",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/wageraldtonspwy.jpg",
  },
  GD: {
    name: "Guide Dogs WA",
  },
  GGFC: {
    name: "Gingin Football Club",
  },
  GGS: {
    name: "Guildford Grammar School",
  },
  GIBO: {
    name: "Gibson Football Club - Tiger Country",
  },
  GIDGE: {
    name: "Gidgegannup Football Club",
  },
  GM: {
    name: "Danny Green (The Green Machine) WBC World Champion",
  },
  GSP: {
    name: "German Shorthaired Pointer Club",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188214-kl.gif",
  },
  GYC: {
    name: "Geraldton Yacht Club",
  },
  HBFC: {
    name: "Harvey Bulls Football Club",
  },
  HKWA: {
    name: "Heart Kids WA",
  },
  HPH: {
    name: "Hollywood Private Hospital",
  },
  HYC: {
    name: "Hillarys Yacht Club",
  },
  IFAP: {
    name: "IFAP ifap.asn.au",
  },
  IMP: {
    name: "Manjimup Imperials Football Club",
  },
  JAGS: {
    name: "Jaguars Softball Club",
  },
  JETTY: {
    name: "Busselton Jetty",
  },
  LGHC: {
    name: "Lake Grace Hockey Club",
  },
  LCC: {
    name: "Light Car Club (Motorsport)",
  },
  LLFC: {
    name: "Lancelin Ledge Point Pirates Football Club",
  },
  LSR: {
    name: "Lancelin Sea Rescue",
  },
  KALA: {
    name: "Kalamunda & Districts Football Club",
  },
  KAT: {
    name: "Kardinya Bowling Club",
  },
  KCFC: {
    name: "Kalgoorlie City Football Club",
  },
  KDRC: {
    name: "Kalgoorlie Districts Rugby Club",
  },
  KEYS: {
    name: "Mindarie Keys - The Keys to the Good Life",
  },
  KGC: {
    name: "Kwinana Golf Club",
  },
  KFC: {
    name: "Kallanie Football Club",
  },
  KRFC: {
    name: "Kalgoorlie Railways Football Club",
  },
  MBFC: {
    name: "Mangles Bay Fishing Club",
  },
  MHHH: {
    name: "Mandurah Hash House Harriers",
  },
  MLSC: {
    name: "Mullaloo Surf Live Saving Club",
  },
  MOD: {
    name: "Perth Modern College",
  },
  MRFC: {
    name: "Mines Rovers Football Club",
  },
  MSC: {
    name: "Manjimup Speedway Club (Manjimup Hotrod Club)",
  },
  NC: {
    name: "North Cottesloe Surf Life Saving Club",
  },
  NFC: {
    name: "Newdegate (or Northampton) Football Club",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/wanorthamptonfc.jpg",
  },
  OK: {
    name: "Bridgetown Blues Festival",
  },
  PAW: {
    name: "RSCPA",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188219-kl.gif",
  },
  PBC: {
    name: "Perth Baseball Club",
  },
  PHSC: {
    name: "Port Hedland Speedway Club",
  },
  PIGS: {
    name: "Vic Park Masters Football Club",
  },
  PG: {
    name: "Perth Glory",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188298-kl.gif",
  },
  PMH: {
    name: "Princess Margaret Hospital",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-74020-kl.gif",
  },
  PT: {
    name: "Peel Thunder Football Club (or Private Taxi)",
  },
  QRFB: {
    name: "Quinns Rock Volunteer Bushfire Brigade",
  },
  R4Y: {
    name: "Hawaiian Ride for Youth",
  },
  RAE: {
    name: "Royal Australian Engineers 13 Field Squadron",
  },
  RAMS: {
    name: "Mukinbudin Football Club",
  },
  REDS: {
    name: "Western Reds Ruby League",
  },
  RCS: {
    name: "Rottnest Channel Swim",
    image: "http://www.plateshack.com/y2k/Western_Australia/warottnest.jpg",
  },
  RCSA: {
    name: "Rottnest Channel Swim Association",
  },
  RFCA: {
    name: "Railways Football Club Albany",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/warailwaysfooty2018.jpg",
  },
  RFSC: {
    name: "Royals Football and Sporting Cub (Albany)",
  },
  RNC: {
    name: "Rockingham Navy Club",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/wesrausnavyclub.jpg",
  },
  ROW: {
    name: "Penrhos College Rowing",
  },
  RPYC: {
    name: "Royal Perth Yacht Club",
  },
  RWA: {
    name: "RallyWA",
  },
  SBFC: {
    name: "South Bunbury Football Club",
  },
  SBWC: {
    name: "Safety Bay Windsurfing Club",
  },
  SD: {
    name: "Swans District Football Club",
  },
  SES: {
    name: "State Emergency Services",
  },
  SF: {
    name: "South Fremantle Football Club",
  },
  SLS: {
    name: "Surf Life Saving",
  },
  SN: {
    name: "Swanbourne Nedlands Surf Life Saving",
  },
  SPGC: {
    name: "Spalding Park Golf Club (Geraldton)",
  },
  SPYC: {
    name: "South Perth Yacht Club",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188311-kl.gif",
    // image: "http://www.plate-planet.com/images/plates/Fotobatch-74149-kl.gif",
  },
  SRC: {
    name: "Swanleigh Residential College",
  },
  SRL: {
    name: "South Sydney Supporters Club",
  },
  SSRL: {
    name: "South Sydney Supporters Club",
    image: "http://www.plateshack.com/y2k/Western_Australia/wasouthsyd.jpg",
  },
  SWIM: {
    name: "Masters Swimming WA",
  },
  SXFC: {
    name: "Southern Cross Football Club",
  },
  SUP: {
    name: "Stand Up Paddleboard (company)",
  },
  SV: {
    name: "HSV Owners Club",
  },
  SVFC: {
    name: "Swan Valley Football Club",
  },
  TFC: {
    name: "Manjimup Tigers Football Club",
  },
  ZOO: {
    name: "Perth Zoo",
  },
  VFF: {
    name: "Volunteer Fire Fighters",
    image: "http://www.plateshack.com/y2k/Western_Australia/wavff.jpg",
  },
  VMX: {
    name: "Vintage Motorcross",
  },
  VPXHS: {
    name: "Vic Park Xavier Hockey Club",
  },
  WAC: {
    // name: "Freemasonry - Charity and Fraternity",
    // i have only seen this as Commonwealth Games ahh now i have seen both (wac as a suffix)
    name: "Commonwealth Games",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188258-kl.gif",
  },
  WAFC: {
    name: "Whitford Amateur Football Club",
  },
  WASM: {
    name: "WA School of Mines",
  },
  WASDA: {
    name: "Wild n Wingless Sprintcars",
  },
  WBFC: {
    name: "Western Bulldogs Football Club",
    image: "http://www.plateshack.com/y2k/Western_Australia/wabulldogs2021.jpg",
  },
  WBR: {
    name: "Wally Boys Racing",
  },
  WCE: {
    name: "West Coast Eagles",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/wawestcoasteagle.jpg",
  },
  WDR: {
    name: "West Side Drag Racing Association",
  },
  WEDGE: {
    name: "Wedge Island Protection Association",
  },
  WFC: {
    name: "Wagin Football Club / Watheroo Football Club",
    image: "http://www.plateshack.com/y2k/Western_Australia/wawatherloofc.jpg",
  },
  WGC: {
    name: "Wanneroo Golf Club",
  },
  WILD: {
    name: "Kanaya Wildlife",
  },
  WRC: {
    name: "World Rally Championship (WRC in WA 1980s to 2006)",
  },
  WSRU: {
    name: "West Scarborough Rugby Union Club",
  },
};

// Town and Shire Councils
// 98 entries
export const townShirePlatePrefix: PlatePrefixList = {
  // i added

  KE: {
    name: "Kellerberrin",
  },
  HRP: {
    name: "Hutt River Principality",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-79455-kl.gif",
  },
  BG: {
    name: "Bridgetown Greenbushes",
  },
  PCC: {
    name: "Perth City",
  },

  GOS: {
    name: "Gosnells City",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/wesausgosnells2021.jpg",
  },
  NAT: {
    name: "Cape Naturaliste",
    image: "http://www.plateshack.com/y2k/Western_Australia/wacape2017.jpg",
  },

  // from source
  //   AU: { // DUPE
  //     name: "Augusta",
  //   },
  AW: {
    name: "West Arthur",
    image: "http://www.plateshack.com/y2k/Western_Australia/washirearthur.jpg",
  },
  B: {
    name: "Bridgetown",
  },
  BB: {
    name: "Bremer Bay",
  },
  BCC: {
    name: "Belmont - City of Opportunity",
  },
  BCN: {
    name: "Beacon",
  },
  BKP: {
    name: "Burekup",
  },
  BM: {
    name: "Broome",
  },
  BNP: {
    name: "Binningup",
  },
  BU: {
    name: "Blackwood Upper (Boyup Brook)",
  },
  BWK: {
    name: "Brunswick Junction",
  },
  CBAY: {
    name: "Cowaramup Bay",
  },
  CDX: {
    name: "Cadoux",
  },
  CLK: {
    name: "Clackline",
  },
  CN: {
    name: "Dryandra Country (Cuballing)",
  },
  COW: {
    name: "Cowaramup",
    image: "http://www.plateshack.com/y2k/Western_Australia/wacowramup.jpg",
  },
  CRJ: {
    name: "Clackline Railway Junction",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/wa2021clackline.jpg",
  },
  // DB: {
  //   name: "Donnybrook",
  // },
  // DE: {
  //   name: "Denmark",
  // },
  DL: {
    name: "Dalwallinu",
  },
  DLKN: {
    name: "Doodlakine",
  },
  DLP: {
    name: "Dalyellup Bay",
  },
  DMP: {
    name: "Dampier",
  },
  DN: {
    name: "Dandaragan",
  },
  //   DS: { // DUPE
  //     name: "Dundas",
  //   },
  DU: {
    name: "Dumbleyung",
  },
  ESP: {
    name: "Esperance",
  },
  EUCLA: {
    name: "EUCLA",
  },
  EX: {
    name: "Exmouth",
  },
  FR: {
    name: "Frankland River",
  },
  GF: {
    name: "Glen Forrest",
  },
  GH: {
    name: "Gooseberry Hill",
  },
  GLD: {
    name: "Guildford",
  },
  GLP: {
    name: "Gelorup",
  },
  GO: {
    name: "Goomalling",
  },
  GP: {
    name: "Grass Patch",
  },
  GV: {
    name: "Grass Valley",
  },
  HOPEY: {
    name: "Hopetoun Fitzgerald River National Park",
  },
  HY: {
    name: "Hyden",
  },
  // IR: {
  //   name: "Irwin",
  // },
  KM: {
    name: "Kalamunda",
  },
  KND: {
    name: "Kendenup",
  },
  KO: {
    name: "Kojonup",
  },
  //   KT: { // dupe
  //     name: "Shire of Kent (Nyabing / Pingrup)",
  //   },
  KUK: {
    name: "Kukerin",
    image: "http://www.plateshack.com/y2k/Western_Australia/wakukerin.jpg",
  },
  KW: {
    name: "Shire of Derby / Kimberley West",
  },
  LG: {
    name: "Lake Grace",
  },
  LK: {
    name: "Lake King",
  },
  LMN: {
    name: "Leman",
  },
  LP: {
    name: "Ledge Point",
  },
  MA: {
    name: "Mount Magnet",
  },
  //   MBL: {
  //     name: "Mukinbudin Brown Lake",
  //   },
  MM: {
    name: "Mount Marshall",
  },
  MP: {
    name: "Mosman Park",
  },
  MR: {
    name: "Moora",
  },
  MRR: {
    name: "Moore River Region",
  },
  MRW: {
    name: "Margaret River Wine Region",
  },
  MW: {
    name: "Mullewa",
  },
  NA: {
    name: "Nungarin",
    image: "http://www.plateshack.com/y2k/Western_Australia/wanungarin.jpg",
  },
  NB: {
    name: "Narembeen",
  },
  NCF: {
    name: "Northcliffe",
  },
  NGN: {
    name: "Narrogin",
  },
  NGT: {
    name: "Newdegate",
    image: "http://www.plateshack.com/y2k/Western_Australia/wanewmachinery.jpg",
  },
  OF: {
    name: "Ocean Farm, Nilgen",
  },
  ONG: {
    name: "Ongerup",
    image: "http://www.plateshack.com/y2k/Western_Australia/waongerup.jpg",
  },
  PB: {
    name: "Port Bouvard",
  },
  PBY: {
    name: "Peaceful Bay",
  },
  PEM: {
    name: "Pemberton",
  },
  PGB: {
    name: "Peppermint Grove Beach",
  },
  PGP: {
    name: "Pingrup",
  },
  PING: {
    name: "Pingaring (The Place the People)",
  },
  PL: {
    name: "Plantagenet (Mount Barker)",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/waplantegenetshire.jpg",
  },
  PS: {
    name: "Point Sampson",
  },
  Q: {
    name: "Quairading",
  },
  RG: {
    name: "Rocky Gully",
  },
  SAW: {
    name: "Sawyers Valley",
  },
  SB: {
    name: "Shark Bay",
  },
  SCDN: {
    name: "Scadden",
  },
  SG: {
    name: "Salmon Gums",
  },
  SH: {
    name: "Secret Harbour",
  },
  SIN: {
    name: "Singleton",
  },
  SUBI: {
    name: "Subiaco",
  },
  SV: {
    name: "Swan Valley",
  },
  TA: {
    name: "Tambellup",
  },
  TS: {
    name: "Three Springs",
  },
  VLY: {
    name: "Varley",
  },
  // VP: {
  //   name: "Victoria Plains",
  // },
  VPK: {
    name: "Victoria Park",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188144-kl.gif",
  },
  W: {
    name: "Wagin (Woolorama)",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-65224-kl.gif",
  },
  WA: {
    name: "Manjimup Shire (Warren)",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188148-kl.gif",
  },
  WKM: {
    name: "Wickham",
  },
  WL: {
    name: "Williams",
  },
  WLP: {
    name: "Walpole",
  },
  WOO: {
    name: "Wooroloo",
  },
  WR: {
    name: "Waroona",
  },
  WY: {
    name: "Shire of Wyndham, East Kimberley including Kununurra",
  },
  YEA: {
    name: "Lake Yealering (Head of the Avon)",
  },
};

// Road Districts
// 133 entries
export const districtPlatePrefix: PlatePrefixList = {
  A: {
    name: "Albany",
  },
  AK: {
    name: "Armadale - Kelmscott",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-160002-kl.gif",
  },
  AL: {
    name: "Albany",
    image: "http://www.plateshack.com/y2k/Western_Australia/waalbany.jpg",
  },
  AS: {
    name: "Ashburton",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188004-kl.gif",
  },
  AU: {
    name: "Augusta - Margaret River",
  },
  // AW: {
  //   name: "West Arthur",
  // },
  //   B: {
  //     name: "Bridgetown",
  //   },
  BD: {
    name: "Boulder",
  },
  BE: {
    name: "Beverley",
    image: "http://www.plateshack.com/y2k/Western_Australia/wabeverley.jpg",
  },
  BH: {
    name: "Broomehill",
  },
  BHT: {
    name: "Broomehill - Tambellup",
  },
  BK: {
    name: "Bruce Rock",
  },
  BM: {
    name: "Broome",
  },
  BO: {
    name: "Brookton",
  },
  BSN: {
    name: "Busselton",
  },
  BT: {
    name: "Boddington",
  },
  //   BU: {
  //     name: "Blackwood Upper (Boyup Brook)",
  //   },
  BY: {
    name: "Bunbury",
  },
  C: {
    name: "Carnarvon",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-159247-kl.gif",
  },
  CA: {
    name: "Carnamah",
  },
  CB: {
    name: "Cranbrook",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188047-kl.gif",
  },
  CD: {
    name: "Cue Daydawn",
  },
  CG: {
    name: "Coolgardie",
  },
  CGG: {
    name: "City of Greater Geraldton",
  },
  CH: {
    name: "Chittering",
  },
  CM: {
    name: "Cunderdin - Meckering",
    image: "http://www.plateshack.com/y2k/Western_Australia/wa2016CM1416.jpg",
  },
  // +1 split from CM(T)
  CMT: {
    name: "Cunderdin - Meckering (Tammin)",
  },
  //   CN: { //dupe
  //     name: "Cuballing",
  //   },
  CO: {
    name: "Collie",
  },
  CP: {
    name: "Capel",
  },
  CR: {
    name: "Corrigin",
  },
  CV: {
    name: "Chapman Valley",
  },
  CW: {
    name: "Coorow",
  },
  D: {
    name: "Dowerin",
  },
  DA: {
    name: "Dardanup",
  },
  DB: {
    name: "Donnybrook - Balingup",
    image: "http://www.plateshack.com/y2k/Western_Australia/westaustralia.JPG",
  },
  DE: {
    name: "Denmark",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/1990s_Western_Australia_Regional_Plate%2C_89_DE%2C_Denmark.jpg/200px-1990s_Western_Australia_Regional_Plate%2C_89_DE%2C_Denmark.jpg",
  },
  DL: {
    name: "Dalwallinu",
  },
  DN: {
    name: "Dandaragan",
  },
  DR: {
    name: "Darling Range (Road Board)",
  },
  DS: {
    name: "Dundas (Norseman)",
  },
  DU: {
    name: "Dumbleyung",
  },
  E: {
    name: "Esperance",
  },
  EP: {
    name: "East Pilbara",
  },
  EX: {
    name: "Exmouth",
  },
  G: {
    name: "Greenough - Geraldton", // can be geraldton
  },
  GG: {
    name: "Gingin",
  },
  GM: {
    name: "Gascoyne-Minilya",
  },
  GN: {
    name: "Gnowangerup (with dot), Geraldton (no dot)",
    image: "http://www.plateshack.com/y2k/Western_Australia/wabatavia2021.jpg",
  },
  GNG: {
    name: "Geraldton - Greenough",
  },
  GO: {
    name: "Goomalling",
  },
  GU: {
    name: "Upper Gascoyne",
  },
  H: {
    name: "Harvey",
  },
  HC: {
    name: "Hall's Creek",
  },
  IR: {
    name: "Irwin",
    image: "http://www.plateshack.com/y2k/Western_Australia/washireirwin.jpg",
  },
  JP: {
    name: "Jerramungup",
    image: "http://www.plateshack.com/y2k/Western_Australia/wasoldier.jpg",
  },
  KA: {
    name: "Katanning",
  },
  KBC: {
    name: "Kalgoorlie - Boulder",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/au-wakalgoorlie.jpg",
  },
  KBMC: {
    name: "Kalgoorlie Boulder Municipal Council",
  },
  KD: {
    name: "Koorda",
  },
  KE: {
    name: "Kellerberrin",
  },
  KM: {
    name: "Kalamunda",
  },
  KMC: {
    name: "Kalgoorlie",
  },
  KMT: {
    name: "Kalgoorlie Municipal Township",
  },
  KN: {
    name: "Kondinin",
  },
  KO: {
    name: "Kojonup",
  },
  KR: {
    name: "Karratha City",
  },
  KT: {
    name: "Kent (Nyabing - Pingrup)",
  },
  KTY: {
    name: "Kununoppin - Trayning - Yelbeni",
  },
  KU: {
    name: "Kulin",
  },
  KW: {
    name: "Kimberley West",
  },
  KWN: {
    name: "Kwinana",
  },
  L: {
    name: "Leonora",
    image: "http://www.plateshack.com/y2k/Western_Australia/waleeonora.jpg",
  },
  LA: {
    name: "Laverton",
  },
  LG: {
    name: "Lake Grace",
  },
  M: {
    name: "Moora",
    image: "http://www.plateshack.com/y2k/Western_Australia/wamoorashire.jpg",
  },
  MA: {
    name: "Mt. Magnet",
  },
  MBL: {
    name: "Mukinbudin - Bonnie Rock - Lake Brown (Brown Lake)",
  },
  MD: {
    name: "Merredin",
  },
  MDG: {
    name: "Mundaring",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/westausmundaring.jpg",
  },
  MH: {
    name: "Mandurah",
  },
  MI: {
    name: "Mingenew",
  },
  MK: {
    name: "Meekatharra",
  },
  MM: {
    name: "Mount Marshall (Mandiga, Welbungin)",
  },
  MN: {
    name: "Menzies",
  },
  MO: {
    name: "Morawa",
  },
  MU: {
    name: "Murchison",
  },
  MW: {
    name: "Mullewa",
  },
  MY: {
    name: "Murray (Pinjarra)",
  },
  N: {
    name: "Northam",
  },
  NA: {
    name: "Nungarin",
  },
  NB: {
    name: "Narembeen",
  },
  //   NGN: {
  //     name: "Narrogin (Town Council)",
  //   },
  // NGT: {
  //   name: "Newdegate",
  // },
  NO: {
    name: "Narrogin (Road Board)",
  },
  NP: {
    name: "Nannup",
  },
  NR: {
    name: "Northampton",
  },
  PE: {
    name: "Preston Road Board (Donnybrook East Region)",
  },
  PH: {
    name: "Port Hedland",
  },
  PJ: {
    name: "Perenjori",
    image: "http://www.plateshack.com/y2k/Western_Australia/wa,peronjori.jpg",
  },
  // PL: {
  //   name: "Plantagenet (Mount Barker)",
  // },
  PN: {
    name: "Pingelly",
  },
  Q: {
    name: "Quairading",
  },
  R: {
    name: "Roebourne",
  },
  RA: {
    name: "Ravensthorpe",
  },
  RO: {
    name: "Rockingham",
  },
  S: {
    name: "Sandstone",
  },
  SB: {
    name: "Shark Bay",
  },
  SJ: {
    name: "Serpentine - Jarradale",
    image: "http://www.plateshack.com/y2k/Western_Australia/wa2016-SJ4643.jpg",
  },
  SW: {
    name: "Swan",
  },
  T: {
    name: "Toodyay",
  },
  TA: {
    name: "Tambellup",
  },
  TB: {
    name: "Tablelands",
  },
  TN: {
    name: "Tammin",
  },
  TS: {
    name: "Three Springs",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/wa2021threesprings.jpg",
  },
  VP: {
    name: "Victoria Plains",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-160286-kl.gif",
  },
  W: {
    name: "Wagin",
  },
  WA: {
    name: "Manjimup (Warren)",
  },
  WB: {
    name: "Wongan - Ballidu",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-160300-kl.gif",
  },
  WD: {
    name: "Wandering",
  },
  WK: {
    name: "Wickepin",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-160307-kl.gif",
  },
  WL: {
    name: "Williams",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-160324-kl.gif",
  },
  WM: {
    name: "Wyalkatchem",
  },
  WN: {
    name: "Wanneroo",
  },
  WO: {
    name: "Woodanilling",
  },
  WP: {
    name: "West Pilbara",
  },
  WR: {
    name: "Waroona",
  },
  WT: {
    name: "Westonia",
  },
  WU: {
    name: "Wiluna",
  },
  WY: {
    name: "Wyndham",
  },
  Y: {
    name: "York",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/2000_Western_Australia_registration_plate_Y%E2%80%A26642_York.jpg/200px-2000_Western_Australia_registration_plate_Y%E2%80%A26642_York.jpg",
  },
  YA: {
    name: "Yalgoo",
  },
  YL: {
    name: "Yilgarn",
  },
};
