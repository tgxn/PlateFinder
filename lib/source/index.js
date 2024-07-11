const fs = require("fs");

const warego = require("./fetch-warego");

const axios = require("axios");

const sharp = require("sharp");
const { types } = require("util");

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

  // check that there are no duplicates elements in the array with the same `code` property

  // // i want to extract a list of all of the entried with more than one
  // function findArrayElement(array, key, value) {
  //   return array.filter((element) => element[key] === value);
  // }
  // for (const item of mainDataArray) {
  //   const dupeCodesFound = findArrayElement(mainDataArray, "code", item.code);

  //   // extract types
  //   const allTypes = dupeCodesFound.map((item) => item.type);
  //   // where two fo the entries inthe array are the same
  //   const dupeTypes = allTypes.filter(
  //     (item, index) => allTypes.indexOf(item) !== index,
  //   );
  //   //check if there are dupe types
  //   if (dupeTypes.length > 0) {
  //     console.log("DUPLICATE types found", dupeTypes, item.code);
  //     process.exit(1);
  //   }

  //   if (dupeCodesFound.length > 2) {
  //     console.log("TRIPLICATES codes found", dupeCodesFound);
  //     process.exit(1);
  //   }
  // }

  // cache all images!!!!

  const orgCharityImages = [
    [
      "CAT",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/wacat2019.jpg",
    ],
    [
      "DFC",
      "org_charity",
      "http://www.plate-planet.com/images/plates/Fotobatch-177368-kl.gif",
    ],
    [
      "FD",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/wafreemantledockers2020.jpg",
    ],
    [
      "FSC",
      "org_charity",
      "http://www.plate-planet.com/images/plates/Fotobatch-188201-kl.gif",
    ],
    [
      "GBYC",
      "org_charity",
      "http://www.plate-planet.com/images/plates/Fotobatch-44038-kl.gif",
    ],
    [
      "GCS",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/wageraldtonspwy.jpg",
    ],
    [
      "GSP",
      "org_charity",
      "http://www.plate-planet.com/images/plates/Fotobatch-188214-kl.gif",
    ],
    [
      "NFC",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/wanorthamptonfc.jpg",
    ],
    [
      "PAW",
      "org_charity",
      "http://www.plate-planet.com/images/plates/Fotobatch-188219-kl.gif",
    ],
    [
      "PG",
      "org_charity",
      "http://www.plate-planet.com/images/plates/Fotobatch-188298-kl.gif",
    ],
    [
      "PMH",
      "org_charity",
      "http://www.plate-planet.com/images/plates/Fotobatch-74020-kl.gif",
    ],
    [
      "RCS",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/warottnest.jpg",
    ],
    [
      "RFCA",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/warailwaysfooty2018.jpg",
    ],
    [
      "RNC",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/wesrausnavyclub.jpg",
    ],
    [
      "SPYC",
      "org_charity",
      "http://www.plate-planet.com/images/plates/Fotobatch-188311-kl.gif",
    ],
    [
      "SSRL",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/wasouthsyd.jpg",
    ],
    [
      "VFF",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/wavff.jpg",
    ],
    [
      "WAC",
      "org_charity",
      "http://www.plate-planet.com/images/plates/Fotobatch-188258-kl.gif",
    ],
    [
      "WBFC",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/wabulldogs2021.jpg",
    ],
    [
      "WCE",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/wawestcoasteagle.jpg",
    ],
    [
      "WFC",
      "org_charity",
      "http://www.plateshack.com/y2k/Western_Australia/wawatherloofc.jpg",
      "Watheroo Football Club", // optional if there are more than 1
    ],
  ];
  integrateImages(orgCharityImages);

  function integrateImages(imageArray) {
    for (const [code, type, url, name] of imageArray) {
      if (!name) {
        const item = mainDataArray.find(
          (item) =>
            item.code === code && item.type === type && item.name === name,
        );
        if (item) {
          item.image = url;
          if (name) {
            item.name = name;
          }
        }
      } else {
        const item = mainDataArray.find(
          (item) => item.code === code && item.type === type,
        );
        if (item) {
          item.image = url;
          if (name) {
            item.name = name;
          }
        }
      }
    }
  }

  // loop thru the images, and fetch them from the source, cache them locally in data/TYPE/CODE(name).jpg
  for (const item of mainDataArray) {
    if (item.image) {
      console.log("Fetching image", item.image);

      const imageType = item.type;
      const imageCode = item.code;

      // gmd5 the string and take first 4
      const itemNameHash = require("crypto")
        .createHash("md5")
        .update(item.name)
        .digest("hex")
        .slice(0, 4);

      const imageFileName = `public/cache/${imageType}/${imageCode}-${itemNameHash}.png`;

      // check file dont exisdt
      if (!fs.existsSync(imageFileName)) {
        const image = await axios.get(item.image, {
          responseType: "arraybuffer",
        });

        // make them all the same size with sharp
        const width = 185;

        const imageBuffer = await sharp(image.data).resize(width).toBuffer();

        // cache the image

        // make folder if nto exist, recursively
        fs.mkdirSync(`public/cache/${imageType}`, { recursive: true });

        fs.writeFileSync(imageFileName, imageBuffer);
      }

      // update the im  age path
      item.image = imageFileName.replace("public", "");
    }
  }

  fs.writeFileSync(TARGET_DATA_FILE, JSON.stringify(mainDataArray, null, 2));
}

importData();
