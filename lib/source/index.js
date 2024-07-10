const fs = require("fs");

const warego = require("./fetch-warego");

// main data loader and importer
const TARGET_DATA_FILE = "lib/data/data.json";

async function importData() {
  const mainDataArray = [];

  // first, run warego import
  const waRegosArray = await warego();
  mainDataArray.push(...waRegosArray);

  // specialPlatePrefix EXTRAS
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
      image:
        "http://www.plate-planet.com/images/plates/Fotobatch-188312-kl.gif",
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
      image:
        "http://www.plateshack.com/y2k/Western_Australia/wasmallcharter.jpg",
    },
  ];
  mainDataArray.push(...specialPlatePrefixExtras);

  // orgCharityPlatePrefix EXTRAS
  const orgCharityPlatePrefixExtras = [
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
      image:
        "http://www.plate-planet.com/images/plates/Fotobatch-188185-kl.gif",
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
      image:
        "http://www.plateshack.com/y2k/Western_Australia/walaststransit.jpg",
    },
    {
      type: "org_charity",
      code: "MFC",
      name: "Melbourne Football Club",
      image:
        "http://www.plateshack.com/y2k/Western_Australia/wamelbournefc.jpg",
    },
    {
      type: "org_charity",
      code: "RR",
      name: "Motorcycle Racing Club of Western Australia",
      image:
        "http://www.plateshack.com/y2k/Western_Australia/wamcracingclub.jpg",
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
      image:
        "http://www.plate-planet.com/images/plates/Fotobatch-188228-kl.gif",
    },
    {
      type: "org_charity",
      code: "VC",
      name: "Variety Club of Western Australia",
      image:
        "http://www.plate-planet.com/images/plates/Fotobatch-188248-kl.gif",
    },
  ];
  mainDataArray.push(...orgCharityPlatePrefixExtras);

  // townShirePlatePrefix EXTRAS
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
  mainDataArray.push(...townShirePlatePrefixExtras);

  // write to final destination
  console.log("Writing to final destination");
  console.log(mainDataArray);

  // post-validation
  // check there are enough items
  if (mainDataArray.length < 100) {
    console.error("Not enough items found in tables");
    process.exit(1);
  }

  // check that all "code" confirm to a regex
  const codeRegex = /^[a-zA-Z0-9]{1,5}$/;
  for (const item of mainDataArray) {
    if (!codeRegex.test(item.code)) {
      console.error("Code does not match regex", item);
      process.exit(1);
    }
  }

  // check that there are no duplicates

  fs.writeFileSync(TARGET_DATA_FILE, JSON.stringify(mainDataArray, null, 2));
}

importData();
