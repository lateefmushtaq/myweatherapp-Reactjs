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
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
            Enter your city
          </Typography>
          <Input />
          <Button variant={"contained"}> Search </Button>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
