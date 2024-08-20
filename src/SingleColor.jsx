import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";
import { IoMdCopy } from "react-icons/io";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  //   const hex = rgbToHex(...rgb);

  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <div className="color-stage-one">
        <span className="percent-value">{weight}%</span>
        <span
          onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hexValue);
          }}
          className="copy-icon"
        >
          <IoMdCopy />
        </span>
      </div>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard 🎉</p>}
    </article>
  );
};

export default SingleColor;
