/*/

    Extra Plate Prefixes

    These are in addition to those scrapred from warego.au.

    It seems there are quite a few missing, especially sports teams.

/*/

const specialPlatePrefixExtras = [
  {
    type: "special",
    code: "TP",
    name: "TransPerth (Bus)",
    desc: "https://www.perthbus.info/index.php",
  },
  {
    type: "special",
    code: "WPC",
    name: "Western Power Corporation",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188312-kl.gif",
  },
  {
    type: "special",
    code: "IT",
    name: "Interchangeable",
  },
  {
    type: "special",
    code: "TC",
    name: "Touring Coach / Transport Commission",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-56433-kl.gif",
  },
  {
    type: "special",
    code: "TAXI",
    name: "Taxi Cab",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-77323-kl.gif",
  },
  {
    type: "special",
    code: "CT",
    name: "Taxi Cab (Non-Metro)",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-99458-kl.gif",
  },
  {
    type: "special",
    code: "SCV",
    name: "Charter Vehicle",
    image: "http://www.plateshack.com/y2k/Western_Australia/wasmallcharter.jpg",
  },
  {
    type: "special",
    code: "CVL",
    name: "Charter Vehicle",
  },
  {
    type: "special",
    code: "WAC",
    name: "Commonwealth Games",
  },
];

const orgCharityPlatePrefixExtras = [
  {
    type: "org_charity",
    code: "AFC",
    name: "Adelaide Crows",
  },
  {
    type: "org_charity",
    code: "BL",
    name: "Brisbane Lions",
  },
  {
    type: "org_charity",
    code: "CFC",
    name: "Carlton Blues",
  },
  {
    type: "org_charity",
    code: "CFC",
    name: "Collingwood Magpies",
  },
  {
    type: "org_charity",
    code: "EFC",
    name: "Essendon Bombers",
  },
  {
    type: "org_charity",
    code: "GFC",
    name: "Geelong Cats",
  },
  {
    type: "org_charity",
    code: "HFC",
    name: "Hawthorn Hawks",
  },
  {
    type: "org_charity",
    code: "ROO",
    name: "North Melbourne",
  },
  {
    type: "org_charity",
    code: "PORT",
    name: "Port Adelaide",
  },
  {
    type: "org_charity",
    code: "SKS",
    name: "St Kilda",
  },
  {
    type: "org_charity",
    code: "SFC",
    name: "Sydney Swans",
  },

  // -- non-sports

  {
    type: "org_charity",
    code: "PCH",
    name: "Perth Childrens Hospital Foundation",
  },
  {
    type: "org_charity",
    code: "EFA",
    name: "Equestrian Excellence",
  },
  {
    type: "org_charity",
    code: "ASSET",
    name: "ASSET SERVICES - Total Buillding Maintenance",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188185-kl.gif",
  },
  {
    type: "org_charity",
    code: "AI",
    name: "Land Speed Challenge",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/waspeedchallenge.jpg",
  },
  {
    type: "org_charity",
    code: "CSC",
    name: "Western Australia Celtic Club Supporters",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/westauscelticclub.jpg",
  },
  {
    type: "org_charity",
    code: "LAS",
    name: "Lasts Transit (Corporate Plate)",
    image: "http://www.plateshack.com/y2k/Western_Australia/walaststransit.jpg",
  },
  {
    type: "org_charity",
    code: "MFC",
    name: "Melbourne Football Club",
    image: "http://www.plateshack.com/y2k/Western_Australia/wamelbournefc.jpg",
  },
  {
    type: "org_charity",
    code: "RR",
    name: "Motorcycle Racing Club of Western Australia",
    image: "http://www.plateshack.com/y2k/Western_Australia/wamcracingclub.jpg",
  },
  {
    type: "org_charity",
    code: "BRS",
    name: "Pilbara Black Rock Stakes Wheelbarrow race",
    image: "http://www.plateshack.com/y2k/Western_Australia/wapilbara.jpg",
  },
  {
    type: "org_charity",
    code: "RFC",
    name: "Richmond Football Club",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/warichmondfooty2018.jpg",
  },
  {
    type: "org_charity",
    code: "YEARS",
    name: "Western Australia Centenary of Federation plate issued in 2001",
    image: "http://www.plateshack.com/y2k/Western_Australia/wafederation.jpg",
  },
  {
    type: "org_charity",
    code: "RSL",
    name: "Returned Services League",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188228-kl.gif",
  },
  {
    type: "org_charity",
    code: "VC",
    name: "Variety Club of Western Australia",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-188248-kl.gif",
  },
];

const townShirePlatePrefixExtras = [
  {
    type: "town_shire",
    code: "HRP",
    name: "Hutt River Principality",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-79455-kl.gif",
  },
  {
    type: "town_shire",
    code: "BG",
    name: "Bridgetown Greenbushes",
  },
  {
    type: "town_shire",
    code: "PCC",
    name: "Perth City",
  },
  {
    type: "town_shire",
    code: "K",
    name: "City of Karratha",
  },
  {
    type: "town_shire",
    code: "GOS",
    name: "Gosnells City",
    image:
      "http://www.plateshack.com/y2k/Western_Australia/wesausgosnells2021.jpg",
  },
  {
    type: "town_shire",
    code: "NAT",
    name: "Cape Naturaliste",
    image: "http://www.plateshack.com/y2k/Western_Australia/wacape2017.jpg",
  },
];

// regex generator  `XX AA - 000` where `XX` is the prefix; eg `1Q` matches `1QAA000`
function generateGeneralFormatRegex(generalFormatPrefix) {
  return `^${generalFormatPrefix}([A-Z]{1}|([A-Z]{2})[-\s]?([0-9]{1,3})?)?$`;
}

// these are part of the general prpose format
const matchRegexPrefix = [
  {
    type: "regex",
    code: "1Q",
    // match 1Q XX-000
    regex: generateGeneralFormatRegex("1Q"),
    name: "Government Vehicles",
    desc: "Series 1QAA-000 - 1QSZ-999 and 1QXA-000 - 1QZZ-999",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-77330-kl.gif",
  },
  {
    type: "regex",
    code: "1T",
    regex: generateGeneralFormatRegex("1T"),
    name: "Trailers",
  },
  {
    type: "regex",
    code: "1U",
    regex: generateGeneralFormatRegex("1U"),
    name: "Trailers",
  },
  {
    type: "regex",
    code: "1Z",
    // TODO can also be farm vehicle,,, probably only certain prefixes
    name: "Licensed vehicle repairers / mechanics / dealers",
    image: "http://www.plateshack.com/y2k/Western_Australia/wafarm.jpg",
    regex: generateGeneralFormatRegex("1Z"),

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
  {
    type: "regex",
    code: "1Z",
    // TODO can also be farm vehicle,,, probably only certain prefixes
    name: "Licensed vehicle dealers",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-74164-kl.gif",
    regex: generateGeneralFormatRegex("1Z"),

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

  {
    type: "regex",
    code: "1Y",
    regex: generateGeneralFormatRegex("1Y"),

    name: "Hire Vehicle",
    image: "http://www.plate-planet.com/images/plates/Fotobatch-85615-kl.gif",
  },

  /*/
1990's + General Format 1XXX-000
/*/

  {
    type: "regex",
    code: "1A",
    // 1AAA-000
    name: "General (~1990's)",
    regex: generateGeneralFormatRegex("1A"),
    image: "http://www.plateshack.com/y2k/Western_Australia/westaus2014.jpg",
  },
  {
    type: "regex",
    code: "1B",
    // 1BAA-000
    name: "General (~2002)",
    regex: generateGeneralFormatRegex("1B"),
    // image: "http://www.plateshack.com/y2k/Western_Australia/westaus2014.jpg",
  },
  {
    type: "regex",
    code: "1C",
    // 1CAA-000
    name: "General (~2005)", // unknown year, guessing 2005's
    regex: generateGeneralFormatRegex("1C"),
    // image: "http://www.plateshack.com/y2k/Western_Australia/westaus2014.jpg",
  },
  {
    type: "regex",
    code: "1D",
    // 1DAA-000
    name: "General (~2009)",
    regex: generateGeneralFormatRegex("1D"),
    // image: "http://www.plateshack.com/y2k/Western_Australia/westaus2014.jpg",
  },
  {
    type: "regex",
    code: "1E",
    // 1EAA-000
    name: "General (~2015)",
    regex: generateGeneralFormatRegex("1E"),
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/1997_Western_Australia_registration_plate_1EYB%E2%99%A6674.jpg",
  },
  {
    type: "regex",
    code: "1F",
    regex: generateGeneralFormatRegex("1F"),
    name: "Vanity Plate Purchase Only",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/2016_Western_Australia_registration_plate_1FAB212_slimline_platinum.jpg/200px-2016_Western_Australia_registration_plate_1FAB212_slimline_platinum.jpg",
  },
  {
    type: "regex",
    code: "1G",
    // 1GAA-000
    name: "General (~2017)",
    regex: generateGeneralFormatRegex("1G"),
    // image: "http://www.plateshack.com/y2k/Western_Australia/westaus2014.jpg",
  },
  {
    type: "regex",
    code: "1H",
    // 1HAA-000
    name: "General (~2020)",
    regex: generateGeneralFormatRegex("1H"),
    // image: "http://www.plateshack.com/y2k/Western_Australia/westaus2014.jpg",
  },
  {
    type: "regex",
    code: "1I",
    // 1IAA-000
    name: "General (~2023)",
    regex: generateGeneralFormatRegex("1I"),
    // image: "http://www.plateshack.com/y2k/Western_Australia/westaus2014.jpg",
  },

  /*/
1990's + Motorbike Format 1XX-000
/*/

  {
    type: "regex",
    code: "1AA",
    regex: /^(1A)([A-Z]{1})[-\s]?([0-9]{1,3})?$/,
    name: "Motorbike General",
  },
];

module.exports = [
  ...specialPlatePrefixExtras,
  ...orgCharityPlatePrefixExtras,
  ...townShirePlatePrefixExtras,
  ...matchRegexPrefix,
];
