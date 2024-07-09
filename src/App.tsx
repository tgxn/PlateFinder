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
        <img src="lib.png" alt="logo" className="headerImage" />
        <span className="headerText">WA Registration Plate Lookup</span>
        <span className="headerSubText">
          Enter a interesting or regional plate, to find out where it's from!
        </span>
      </div>
    );
  }

  return (
    <div className="resultContainer">
      <span className="headerText">{plateResult.name}</span>
      <img className="plateExampleImage" src={plateResult.image} />
    </div>
  );
}

// this is a minimalistic list of links to things
export function NavLinks() {
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);

  // if the popup is open, register a click and kb listenenr
  // we should close on click (not on a a link_click) and if the user presses key on kb
  useEffect(() => {
    if (aboutOpen) {
      const onClick = (e: MouseEvent) => {
        if (
          (e.target as HTMLElement).closest(".aboutContainer") &&
          (e.target as HTMLElement).classList.contains("aboutContainer")
        ) {
          console.log("click", e.target);
          setAboutOpen(false);
        }
      };

      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          console.log("escape");
          setAboutOpen(false);
        }
      };

      document.addEventListener("click", onClick);
      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.removeEventListener("click", onClick);
        document.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [aboutOpen]);

  return (
    <div className="navLinks">
      <div className={`aboutContainer${aboutOpen ? " show" : ""}`}>
        <div className="aboutContent">
          <div>
            <h3>PlateFinder</h3>
            <p>
              A simple tool to find out where a Western Australian number plates
              are from.
            </p>
          </div>
          <div>
            <p>
              Made by{" "}
              <a href="https://github.com/tgxn" target="_blank">
                tgxn
              </a>
              <br />
              <br />
              Credits
              <ul className="creditsList">
                <li>
                  <a href="https://warego.au/" target="_blank">
                    WARego.au
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.transport.wa.gov.au/licensing/district-series-plates.asp"
                    target="_blank"
                  >
                    Transport WA
                  </a>
                </li>
                <li>
                  <a
                    href="https://leewardpro.com/articles/licplatefonts/licplate-fonts-aust.html"
                    target="_blank"
                  >
                    Font
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <a onClick={() => setAboutOpen(!aboutOpen)} target="_blank">
        about / credits
      </a>
      <a href="https://github.com/tgxn/PlateFinder" target="_blank">
        github / source
      </a>
    </div>
  );
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
      <NavLinks />
    </div>
  );
}
