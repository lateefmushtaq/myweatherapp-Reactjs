import * as React from "react";
import { fetchData } from "./fetchData";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
import ComboBox from "./Input";
export default function MyCard() {
  const [load, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  function handleClick() {
    const city = "berlin";
    fetchData({ city, setLoading, setData, setError });

    console.log(load, data, error);
  }

  return (
    <div className="myCard">
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            Enter your city
          </Typography>

          <div className="input">
            {" "}
            <ComboBox />
            <Button variant={"contained"} onClick={handleClick}>
              {" "}
              Search{" "}
            </Button>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
