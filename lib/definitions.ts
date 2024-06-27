import { PlatePrefixList } from "./types";

// https://warego.au/#district

// Western Australian General Format
export const generalFormatRegex = /^([0-2]{1})([A-Z]{3})[-\s]?([0-9]{3})$/;

// https://warego.au/#district
// Must be checked before general plate format
export const specialPlatePrefix: PlatePrefixList = {
  TP: {
    name: "TransPerth (Bus)",
    desc: "https://www.perthbus.info/index.php",
  },
  "1Q": {
    name: "government vehicles",
  },
  "1T": {
    name: "trailers",
  },
  WPC: {
    name: "Western Power Corporation",
  },
  "1Z": {
    name: "Licensed vehicle repairers / mechanics",
  },
};

// Organisations and Charities
// 147 entries
export const orgCharityPlatePrefix: PlatePrefixList = {
  // ADDED MORE
  PCH: {
    name: "Perth Childrens Hospital Foundation",
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
    name: "Manjimup Deanmill Football Club",
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
  },
  FLY: {
    name: "The Royal Aero Club of WA",
  },
  FSC: {
    name: "Fremantle Sailing Club",
  },
  FSR: {
    name: "Fremantle Sea Rescue",
  },
  GBYC: {
    name: "Geographe Bay Yacht Club",
  },
  GCS: {
    name: "Geraldton City Speedway",
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
    name: "Newdegate Football Club",
  },
  OK: {
    name: "Bridgetown Blues Festival",
  },
  PAW: {
    name: "RSCPA",
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
  },
  PMH: {
    name: "Princess Margaret Hospital",
  },
  PT: {
    name: "Peel Thunder Football Club",
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
  },
  RCSA: {
    name: "Rottnest Channel Swim Association",
  },
  RFCA: {
    name: "Railways Football Club Albany",
  },
  RFSC: {
    name: "Royals Football and Sporting Cub (Albany)",
  },
  RNC: {
    name: "Rockingham Navy Club",
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
  },
  SRC: {
    name: "Swanleigh Residential College",
  },
  SRL: {
    name: "South Sydney Supporters Club",
  },
  SSRL: {
    name: "South Sydney Supporters Club",
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
  },
  VMX: {
    name: "Vintage Motorcross",
  },
  VPXHS: {
    name: "Vic Park Xavier Hockey Club",
  },
  WAC: {
    name: "Freemasonry - Charity and Fraternity",
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
  },
  WBR: {
    name: "Wally Boys Racing",
  },
  WCE: {
    name: "West Coast Eagles",
  },
  WDR: {
    name: "West Side Drag Racing Association",
  },
  WEDGE: {
    name: "Wedge Island Protection Association",
  },
  WFC: {
    name: "Wagin Football Club / Watheroo Football Club",
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
  D: {
    name: "Dowerin",
  },
  KE: {
    name: "Kellerberrin",
  },

  // from source
  AU: {
    name: "Augusta",
  },
  AW: {
    name: "West Arthur",
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
    name: "Boyup Brook",
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
    name: "Dryandra Country",
  },
  COW: {
    name: "Cowaramup",
  },
  CRJ: {
    name: "Clackline Railway Junction",
  },
  DB: {
    name: "Donnybrook",
  },
  DE: {
    name: "Denmark",
  },
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
  DS: {
    name: "Dundas",
  },
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
  IR: {
    name: "Irwin",
  },
  KM: {
    name: "Kalamunda",
  },
  KND: {
    name: "Kendenup",
  },
  KO: {
    name: "Kojonup",
  },
  KT: {
    name: "Shire of Kent (Nyabing / Pingrup)",
  },
  KUK: {
    name: "Kukerin",
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
  MBL: {
    name: "Mukinbudin Brown Lake",
  },
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
  },
  OF: {
    name: "Ocean Farm, Nilgen",
  },
  ONG: {
    name: "Ongerup",
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
  SBK: {
    name: "Spencer's Brook",
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
  VP: {
    name: "Victoria Plains",
  },
  VPk: {
    name: "Victoria Park",
  },
  W: {
    name: "Wagin (Woolorama)",
  },
  WA: {
    name: "Manjimup Shire (Warren)",
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
  },
  AL: {
    name: "Albany",
  },
  AS: {
    name: "Ashburton",
  },
  AU: {
    name: "Augusta - Margaret River",
  },
  AW: {
    name: "West Arthur",
  },
  B: {
    name: "Bridgetown",
  },
  BD: {
    name: "Boulder",
  },
  BE: {
    name: "Beverley",
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
  BU: {
    name: "Blackwood Upper (Boyup Brook)",
  },
  BY: {
    name: "Bunbury",
  },
  C: {
    name: "Carnarvon",
  },
  CA: {
    name: "Carnamah",
  },
  CB: {
    name: "Cranbrook",
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
  },
  // +1 split from CM(T)
  CMT: {
    name: "Cunderdin - Meckering (Tammin)",
  },
  CN: {
    name: "Cuballing",
  },
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
  },
  DE: {
    name: "Denmark",
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
  },
  GNG: {
    name: "Geraldton - Greenough",
  },
  GO: {
    name: "Goomalling",
  },
  GU: {
    name: "Gascoyne Upper",
  },
  H: {
    name: "Harvey",
  },
  HC: {
    name: "Hall's Creek",
  },
  IR: {
    name: "Irwin",
  },
  JP: {
    name: "Jerramungup",
  },
  KA: {
    name: "Katanning",
  },
  KBC: {
    name: "Kalgoorlie - Boulder",
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
  },
  LA: {
    name: "Laverton",
  },
  LG: {
    name: "Lake Grace",
  },
  M: {
    name: "Moora",
  },
  MA: {
    name: "Mt. Magnet",
  },
  MBL: {
    name: "Mukinbudin - Bonnie Rock - Lake Brown",
  },
  MD: {
    name: "Merredin",
  },
  MDG: {
    name: "Mundaring",
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
  NGN: {
    name: "Narrogin (Town Council)",
  },
  NGT: {
    name: "Newdegate",
  },
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
  },
  PL: {
    name: "Plantagenet (Mount Barker)",
  },
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
  },
  VP: {
    name: "Victoria Plains",
  },
  W: {
    name: "Wagin",
  },
  WA: {
    name: "Manjimup (Warren)",
  },
  WB: {
    name: "Wongan - Ballidu",
  },
  WD: {
    name: "Wandering",
  },
  WK: {
    name: "Wickepin",
  },
  WL: {
    name: "Williams",
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
  },
  YA: {
    name: "Yalgoo",
  },
  YL: {
    name: "Yilgarn",
  },
};
