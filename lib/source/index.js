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
  integrateImages(orgCharityImages, mainDataArray);

  const townShireImages = [
    [
      "HRP",
      "town_shire",
      "http://www.plate-planet.com/images/plates/Fotobatch-79455-kl.gif",
    ],
    [
      "GOS",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/wesausgosnells2021.jpg",
    ],
    [
      "NAT",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/wacape2017.jpg",
    ],
    [
      "AW",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/washirearthur.jpg",
    ],
    [
      "COW",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/wacowramup.jpg",
    ],
    [
      "CRJ",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/wa2021clackline.jpg",
    ],
    [
      "IR",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/washireirwin.jpg",
    ],
    [
      "KUK",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/wakukerin.jpg",
    ],
    [
      "KUK",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/wanungarin.jpg",
    ],
    [
      "NGT",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/wanewmachinery.jpg",
    ],
    [
      "ONG",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/waongerup.jpg",
    ],
    [
      "PL",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/waplantegenetshire.jpg",
    ],
    [
      "TS",
      "town_shire",
      "http://www.plateshack.com/y2k/Western_Australia/wa2021threesprings.jpg",
    ],
    [
      "VPK",
      "town_shire",
      "http://www.plate-planet.com/images/plates/Fotobatch-188144-kl.gif",
    ],
    [
      "VP",
      "town_shire",
      "http://www.plate-planet.com/images/plates/Fotobatch-160286-kl.gif",
    ],
    [
      "W",
      "town_shire",
      "http://www.plate-planet.com/images/plates/Fotobatch-65224-kl.gif",
    ],
    [
      "WA",
      "town_shire",
      "http://www.plate-planet.com/images/plates/Fotobatch-188148-kl.gif",
    ],
  ];
  integrateImages(townShireImages, mainDataArray);

  const roadDistrictImages = [
    [
      "AK",
      "road_district",
      "http://www.plate-planet.com/images/plates/Fotobatch-160002-kl.gif",
    ],
    [
      "AL",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/waalbany.jpg",
    ],
    [
      "AS",
      "road_district",
      "http://www.plate-planet.com/images/plates/Fotobatch-188004-kl.gif",
    ],
    [
      "BE",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/wabeverley.jpg",
    ],
    [
      "C",
      "road_district",
      "http://www.plate-planet.com/images/plates/Fotobatch-159247-kl.gif",
    ],
    [
      "CB",
      "road_district",
      "http://www.plate-planet.com/images/plates/Fotobatch-188047-kl.gif",
    ],
    [
      "CM",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/wa2016CM1416.jpg",
    ],
    [
      "DB",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/westaustralia.JPG",
    ],
    [
      "DE",
      "road_district",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/1990s_Western_Australia_Regional_Plate%2C_89_DE%2C_Denmark.jpg/200px-1990s_Western_Australia_Regional_Plate%2C_89_DE%2C_Denmark.jpg",
    ],
    [
      "GN",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/wabatavia2021.jpg", // this is (withoutdot) greraldton
      "Geraldton (without dot)",
    ],
    [
      "JP",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/wasoldier.jpg",
    ],
    [
      "KBC",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/au-wakalgoorlie.jpg",
    ],
    [
      "L",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/waleeonora.jpg",
    ],
    [
      "M",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/wamoorashire.jpg",
    ],
    [
      "MDG",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/westausmundaring.jpg",
    ],
    [
      "PJ",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/wa,peronjori.jpg",
    ],
    [
      "SJ",
      "road_district",
      "http://www.plateshack.com/y2k/Western_Australia/wa2016-SJ4643.jpg",
    ],
    [
      "WB",
      "road_district",
      "http://www.plate-planet.com/images/plates/Fotobatch-160300-kl.gif",
    ],
    [
      "WK",
      "road_district",
      "http://www.plate-planet.com/images/plates/Fotobatch-160307-kl.gif",
    ],
    [
      "WL",
      "road_district",
      "http://www.plate-planet.com/images/plates/Fotobatch-160324-kl.gif",
    ],
    [
      "Y",
      "road_district",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/2000_Western_Australia_registration_plate_Y%E2%80%A26642_York.jpg/200px-2000_Western_Australia_registration_plate_Y%E2%80%A26642_York.jpg",
    ],
  ];
  integrateImages(roadDistrictImages, mainDataArray);

  function integrateImages(imageArray, mainDataArray) {
    for (const [code, type, url, name = false] of imageArray) {
      if (!name) {
        const item = mainDataArray.find(
          (item) => item.code === code && item.type === type,
        );
        if (item) {
          item.image = url;
        } else {
          throw new Error("Item not found" + code + type + url);
        }
      } else {
        const item = mainDataArray.find(
          (item) =>
            item.code === code && item.type === type && item.name === name,
        );
        if (item) {
          item.image = url;
        } else {
          throw new Error("Item not found" + code + type + name + url);
        }
      }
    }
  }

  // loop thru the images, and fetch them from the source, cache them locally in data/TYPE/CODE(name).jpg
  for (const item of mainDataArray) {
    if (item.image) {
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
      const exists = fs.existsSync(imageFileName);
      if (!exists) {
        const image = await axios.get(item.image, {
          responseType: "arraybuffer",
        });

        console.log("Fetched image", item.image);

        // make them all the same size with sharp
        const width = 185;

        const imageBuffer = await sharp(image.data).resize(width).toBuffer();

        // cache the image

        // make folder if nto exist, recursively
        fs.mkdirSync(`public/cache/${imageType}`, { recursive: true });

        fs.writeFileSync(imageFileName, imageBuffer);
      } else {
        console.log("Image already exists", imageFileName);
      }

      // update the im  age path
      item.image = imageFileName.replace("public", "");
    }
  }

  fs.writeFileSync(TARGET_DATA_FILE, JSON.stringify(mainDataArray, null, 2));
}

importData();
