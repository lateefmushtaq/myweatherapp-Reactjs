import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import "./QuickLinks.css";
import { Cloud, CloudCircleTwoTone, WbSunny } from "@mui/icons-material";

function QuikList() {
  const [variant, setVariant] = useState(["outlined", "outlined", "outlined"]);
  const [color, setColor] = useState(["#FF5733", "#FF5733", "#FF5733"]); // Default color set to salmon

  function handleState(index) {
    const newVariant = variant.map((e, i) =>
      i === index ? "contained" : "outlined"
    );
    const newColor = color.map((e, i) => (i === index ? "#FF5733" : "#FF5733"));
    setVariant(newVariant);
    setColor(newColor);
  }

  return (
    <div>
      <h1
        style={{
          background:
            "linear-gradient(90deg, rgba(255,87,51,1) 0%, rgba(255,165,0,1) 100%)",
          color: "white",
          padding: "20px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
          fontFamily: "Arial, sans-serif",
          letterSpacing: "2px",
          margin: "20px 0",
        }}
      >
        Weather App
      </h1>
      <ButtonGroup className="buttonGroup" aria-label="Basic button group">
        <Button
          startIcon={<WbSunny />}
          style={{
            backgroundColor:
              variant[0] === "contained" ? color[0] : "transparent",
            color: variant[0] === "contained" ? "#fff" : color[0],
            borderColor: color[0],
          }}
          variant={variant[0]}
          onClick={() => {
            handleState(0);
          }}
        >
          Delhi
        </Button>
        <Button
          startIcon={<Cloud />}
          style={{
            backgroundColor:
              variant[1] === "contained" ? color[1] : "transparent",
            color: variant[1] === "contained" ? "#fff" : color[1],
            borderColor: color[1],
          }}
          variant={variant[1]}
          onClick={() => {
            handleState(1);
          }}
        >
          Berlin
        </Button>
        <Button
          startIcon={<CloudCircleTwoTone />}
          style={{
            backgroundColor:
              variant[2] === "contained" ? color[2] : "transparent",
            color: variant[2] === "contained" ? "#fff" : color[2],
            borderColor: color[2],
          }}
          variant={variant[2]}
          onClick={() => {
            handleState(2);
          }}
        >
          Amsterdam
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default QuikList;
