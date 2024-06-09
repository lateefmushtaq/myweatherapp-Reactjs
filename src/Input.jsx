import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./Card.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF5733",
            boxShadow: "0 0 8px #FF5733",
          },
          "&.Mui-focused .MuiOutlinedButton-notchedOutline": {
            borderColor: "#FF5733",
            boxShadow: "0 0 8px #FF5733",
          },
        },
      },
    },
  },
});
export default function ComboBox() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Autocomplete
        freeSolo
        options={cities.map((city) => city.label)}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            className="inputfield"
            {...params}
            label="Enter your city"
            variant="outlined"
          />
        )}
      />
    </ThemeProvider>
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
