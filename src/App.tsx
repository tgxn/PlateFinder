import React, { useEffect, useState } from "react";

import { PlateDefintion, PlatePrefixList } from "../lib/types";
import { findPlate } from "../lib/find";

function RenderPlateResult({ plateResult }: { plateResult: PlateDefintion | null }) {
  if (plateResult === null) {
    return null;
  }

  return <div className="resultBox">{plateResult.name}</div>;
}

import "./scss/App.scss";

export default function App() {
  const [plateInput, setPlateInput] = useState<string>("");
  const [plateResult, setPlateResult] = useState<PlateDefintion | null>(null);

  // when the input changes, try to find a plate, if found set the other state
  useEffect(() => {
    setPlateResult(findPlate(plateInput));
  }, [plateInput]);

  return (
    <div className="appContainer">
      {/* <img src="lib.png" alt="logo" className="headerImage" /> */}
      {/* <span className="headerText">WA Plate Lookup</span> */}
      <label data-domain="W.A." className="inputLabel">
        <input autoFocus type="text" placeholder="WA 123A" value={plateInput} onChange={(e) => setPlateInput(e.target.value)} className={"inputField"} />
      </label>
      <RenderPlateResult plateResult={plateResult} />
    </div>
  );
}
