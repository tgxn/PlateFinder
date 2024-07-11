// fetch and parse ht warego.info site into json arrays and html parse it

const fs = require("fs");

const axios = require("axios");
const jsdom = require("jsdom");

const SOURCE_URL = "https://warego.au/";

const HTML_FILE = "lib/data/warego.orig.html";
const FINAL_DEST = "lib/data/warego.json";

// mapping from the order the table appears on the page to the type of data contained in it
const TABLE_MAP = {
  0: "org_charity",
  1: "town_shire",
  2: "road_district",
};

function extractTables(htmlString) {
  const { window } = new jsdom.JSDOM(htmlString);
  const tables = window.document.querySelectorAll("table");
  return Array.from(tables);
}

function parseTable(tableElement) {
  // things in tbody tr
  const rows = tableElement.querySelectorAll("tbody tr");
  const data = [];
  for (const row of rows) {
    const cells = row.querySelectorAll("td");
    const rowData = Array.from(cells).map((cell) => cell.textContent);
    data.push(rowData);
  }
  return data;
}

// check if HTML_FILE exists and stat it and see if it is less than 1 day old
async function loadData() {
  let htmlData = null;
  if (fs.existsSync(HTML_FILE)) {
    const stats = fs.statSync(HTML_FILE);
    const age = Date.now() - stats.mtime.getTime();
    if (age < 24 * 60 * 60 * 1000) {
      const html = fs.readFileSync(HTML_FILE, "utf8");
      htmlData = html;
      console.log("Using local file");
    }
  }

  if (!htmlData) {
    const response = await axios.get(SOURCE_URL);

    htmlData = response.data;

    // dump to local file
    fs.writeFileSync("lib/data/warego.orig.html", html);
    console.log("fetched from source");
  }
  return htmlData;
}

// convert tables from like  [ 'AW', 'West Arthur' ]
// to object arrays with the type in, as well as the data and credit
// { type: 'org_charity', data: 'AW', credit: 'West Arthur' }
function toCleanTable(table, typeInt) {
  const arrays = table.map((row) => {
    // remove spaces in the code + uppercase
    const cleanCode = row[0].replace(/\s/g, "").toUpperCase();

    const cleanName = row[1].trim();

    //
    /// CONVERSIONS
    //

    // for "SRL / SSRL" we need to split it into 2 records
    if (cleanCode == "SRL/SSRL") {
      console.log("Splitting", cleanCode);
      let [code1, code2] = cleanCode.split("/");
      code1 = code1.replace(/\s/g, "");
      code2 = code2.trim();

      return [
        {
          type: TABLE_MAP[typeInt],
          code: code1,
          name: cleanName,
          credit: SOURCE_URL,
        },
        {
          type: TABLE_MAP[typeInt],
          code: code2,
          name: cleanName,
          credit: SOURCE_URL,
        },
      ];
    }

    // if there are () then we need to make two options
    if (cleanCode == "CM(T)") {
      return [
        {
          type: TABLE_MAP[typeInt],
          code: "CM",
          name: "Cunderdin - Meckering",
          credit: SOURCE_URL,
        },
        {
          type: TABLE_MAP[typeInt],
          code: "CMT",
          name: "Cunderdin - Meckering (Tammin)",
          credit: SOURCE_URL,
        },
      ];
    }

    // GN(withdot) - move the description and double up  the Code
    if (cleanCode == "GN(WITHDOT)" || cleanCode == "GN(WITHOUTDOT)") {
      console.log("Splitting", cleanCode);
      return [
        {
          type: TABLE_MAP[typeInt],
          code: "GN",
          name: row[0],
          credit: SOURCE_URL,
        },
      ];
    }

    //
    // END CONVERSIONS
    //

    return [
      {
        type: TABLE_MAP[typeInt],
        code: cleanCode,
        name: cleanName,
        credit: SOURCE_URL,
      },
    ];
  });

  return arrays.flat();
}

async function fetchWaregoInfo() {
  let htmlData = await loadData();

  const tables = extractTables(htmlData);

  const conjoinedTableArray = [];

  // loop the taables, extract the elements to json
  for (const [tableIndex, table] of tables.entries()) {
    console.log("Table found", table);

    const parsedTable = parseTable(table);
    console.log(parsedTable.length, parsedTable[0]);

    const mapTable = toCleanTable(parsedTable, tableIndex);
    // console.log(mapTable);

    conjoinedTableArray.push(...mapTable);
  }

  // write the output
  // fs.writeFileSync(FINAL_DEST, JSON.stringify(conjoinedTableArray, null, 2);
  return conjoinedTableArray;
}

module.exports = fetchWaregoInfo;
