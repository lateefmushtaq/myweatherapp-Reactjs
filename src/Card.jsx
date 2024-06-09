import * as React from "react";
import Input from "./Input";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";

export default function MyCard() {
  return (
    <div className="myCard">
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            Enter your city
          </Typography>

          <div className="input">
            {" "}
            <Input />
            <Button variant={"contained"}> Search </Button>
          </div>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
