import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      freeSolo
      options={cities.map((city) => city.label)}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Enter your city" variant="outlined" />
      )}
    />
  );
}

const cities = [
  { label: "New York" },
  { label: "Paris" },
  { label: "Tokyo" },
  { label: "London" },
  { label: "Hong Kong" },
  { label: "Dubai" },
  { label: "Rome" },
  { label: "Barcelona" },
  { label: "Los Angeles" },
  { label: "Bangkok" },
  { label: "Singapore" },
  { label: "Sydney" },
  { label: "Istanbul" },
  { label: "Moscow" },
  { label: "Toronto" },
  { label: "San Francisco" },
  { label: "Amsterdam" },
  { label: "Chicago" },
  { label: "Vienna" },
  { label: "Seoul" },
];
