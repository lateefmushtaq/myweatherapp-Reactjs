import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import "./QuickLinks.css";
import { Cloud, CloudCircleTwoTone, WbSunny } from "@mui/icons-material";
function QuikList() {
  const [variant, setVariant] = useState(["outlined", "outlined", "outlined"]);
  const [color, setColor] = useState(["#fffff", "#fffff", "#fffff"]);

  function handleState(index) {
    const newVariant = variant.map((e, i) =>
      i === index ? "contained" : "outlined"
    );
    const newColor = color.map((e, i) => (i === index ? "#FF5733" : "#fff"));
    setVariant(newVariant);
    setColor(newColor);
  }

  return (
    <div>
      <h1 style={{ color: "salmon" }}>Weather App</h1>
      <ButtonGroup className="buttonGroup" aria-label="Basic button group">
        <Button
          startIcon={<WbSunny />}
          style={{ backgroundColor: color[0] }}
          variant={variant[0]}
          onClick={() => {
            handleState(0);
          }}
        >
          Delhi
        </Button>
        <Button
          startIcon={<Cloud />}
          style={{ backgroundColor: color[1] }}
          variant={variant[1]}
          onClick={() => {
            handleState(1);
          }}
        >
          Berlin
        </Button>
        <Button
          startIcon={<CloudCircleTwoTone />}
          style={{ backgroundColor: color[2] }}
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
