import * as React from "react";
import Card from "@mui/material/Card";
import SearchIcon from "@mui/icons-material/Search";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./Card.css";
import QuikList from "./QuickLinks";
import Input from "./Input";
import WeatherDisplay from "./DisplayData";
import { useReducer } from "react";

const initialState = {
  loading: false,
  trigger: false,
  data: null,
  error: null,
  input: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return { ...state, loading: false, data: payload, input: "" };
    case "ERROR":
      return { ...state, loading: false, error: payload };
    case "SET_INPUT":
      return { ...state, input: payload };
    case "TRIGGER":
      return { ...state, trigger: true };
    case "RESET_TRIGGER":
      return { ...state, trigger: false };
    default:
      throw new Error("Unknown action type");
  }
};

export default function MyCard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: "TRIGGER" });
  };

  const onChange = (e) => {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
    console.log(e.target.value);
  };

  React.useEffect(() => {
    if (state.trigger && state.input) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${state.input}&APPID=7f12b9f7637879bc79cddc5739293ac2`;
      const fetchData = async () => {
        dispatch({ type: "LOADING" });
        try {
          const response = await fetch(URL);
          const data = await response.json();
          dispatch({ type: "SUCCESS", payload: data });
        } catch (e) {
          dispatch({ type: "ERROR", payload: e });
        } finally {
          dispatch({ type: "RESET_TRIGGER" });
        }
      };

      fetchData();
    }
  }, [state.trigger, state.input]);

  return (
    <>
      <QuikList />
      <div className="myCard">
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <div className="input">
              <Input value={state.input} onChange={onChange} />
              <Button
                variant="contained"
                onClick={handleClick}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <WeatherDisplay
          data={state.data}
          loading={state.loading}
          error={state.error}
        />
      </div>
    </>
  );
}
