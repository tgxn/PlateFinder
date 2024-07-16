const fs = require("fs");
const crypto = require("crypto");

const warego = require("./fetch-warego");
const extra = require("./extra");
const imageAdditions = require("./images");

const axios = require("axios");

const sharp = require("sharp");

// main data loader and importer
const TARGET_DATA_FILE = "lib/data/data.json";

async function importData() {
  const mainDataArray = [];

  // first, run warego import
  const waRegosArray = await warego();
  mainDataArray.push(...waRegosArray);

  console.log("Warego import done", waRegosArray.length);

  // then extend with our local items
  mainDataArray.push(...extra);

  console.log("Extra import done", extra.length, mainDataArray.length);

  // write to final destination
  console.log("Writing to final destination", mainDataArray.length);

  // check there are enough items
  if (mainDataArray.length < 100) {
    console.error("Not enough items found in tables", mainDataArray.length);
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

  // i want to extract a list of all of the entried with more than one
  function findArrayElement(array, key, value) {
    return array.filter((element) => element[key] === value);
  }

  // check for duplicate status
  for (const item of mainDataArray) {
    const dupeCodesFound = findArrayElement(mainDataArray, "code", item.code);
    if (dupeCodesFound.length > 1) {
      console.warn("DUPLICATE codes found", dupeCodesFound);
    }
    if (dupeCodesFound.length > 2) {
      console.error("TRIPLICATES codes found", dupeCodesFound);
      // process.exit(1);
    }

    // // extract types from codes, we want to check if there are more than one entry for each tye
    // const allTypes = dupeCodesFound.map((item) => item.type);
    // // where two fo the entries inthe array are the same
    // const dupeTypes = allTypes.filter(
    //   (item, index) => allTypes.indexOf(item) !== index,
    // );

    // //check if there are dupe types
    // if (dupeTypes.length > 0) {
    //   console.error("DUPLICATE types found", dupeTypes, item.code);
    //   // process.exit(1);
    // }
  }

  // integrate images from other file

  function integrateImages(imageArray, mainDataArray) {
    for (const [code, type, url, name = false] of imageArray) {
      if (!name) {
        const item = mainDataArray.find(
          (item) => item.code === code && item.type === type,
        );
        const filterd = mainDataArray.filter(
          (item) => item.code === code && item.type === type,
        );
        if (filterd.length > 1) {
          throw new Error(
            `Multiple items found with same code ${code} and type ${type}, please sepcify name: ${filterd
              .map((item) => item.name)
              .join(", ")}`,
          );
        }

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

  integrateImages(imageAdditions, mainDataArray);

  // cache all images!!!!

  // loop thru the images, and fetch them from the source, cache them locally in data/TYPE/CODE(name).jpg
  for (const item of mainDataArray) {
    if (item.image) {
      const imageType = item.type;
      const imageCode = item.code;

      // gmd5 the string and take first 4
      const itemNameHash = crypto
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
