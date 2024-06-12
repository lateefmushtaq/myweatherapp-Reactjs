import * as React from "react";
import TextField from "@mui/material/TextField";
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
export default function Input({ value, onChange }) {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <TextField
        className="inputfield"
        label="Enter your city"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </ThemeProvider>
  );
}
