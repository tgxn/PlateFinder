import React, { useEffect, useState } from "react";

import { PlateDefintion, PlatePrefixList } from "../lib/types";
import { findPlate } from "../lib/find";

function NumberPlateInput({
  plateInput,
  setPlateInput,
}: {
  plateInput: string;
  setPlateInput: (plate: string) => void;
}) {
  return (
    <div className="inputContainer">
      <div className="inputBorder">
        <label className="inputLabel">W.A.</label>
        <div className="inputSpacer">
          <input
            className="inputField"
            autoFocus
            type="text"
            placeholder="WA &middot; 123A"
            value={plateInput}
            onChange={(e) => setPlateInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

function RenderPlateResult({
  plateInput,
  plateResult,
}: {
  plateInput: string;
  plateResult: PlateDefintion | null;
}) {
  // show nothing found :(
  if (plateInput.length !== 0 && plateResult === null) {
    return <div className="resultContainer">No match found</div>;
  }

  // show info if no entry
  if (plateResult === null) {
    return (
      <div className="resultContainer">
        <span className="headerText">WA Plate Lookup</span>
        <img src="lib.png" alt="logo" className="headerImage" />
        <span className="headerSubText">
          lets you identify where most WA number plates are from
        </span>
      </div>
    );
  }

  return <div className="resultContainer">{plateResult.name}</div>;
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
      <NumberPlateInput plateInput={plateInput} setPlateInput={setPlateInput} />
      <RenderPlateResult plateInput={plateInput} plateResult={plateResult} />
    </div>
  );
}
