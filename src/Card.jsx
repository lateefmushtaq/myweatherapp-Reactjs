import * as React from "react";
import Card from "@mui/material/Card";
import SearchIcon from "@mui/icons-material/Search";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./Card.css";
import QuikList from "./QuickLinks";
import Input from "./Input";
import WeatherDisplay from "./DisplayData";
export default function MyCard() {
  const [loading, setLoading] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [input, setInput] = React.useState("");
  function handleClick() {
    setTrigger(true);
  }
  function onChange(e) {
    setInput(e.target.value);
    console.log(e.target.value);
  }
  React.useEffect(() => {
    if (trigger === true && input) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=7f12b9f7637879bc79cddc5739293ac2`;
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(URL);
          const data = await response.json();
          setData(data);
          setInput("");
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
          setTrigger(false);
        }
      };

      fetchData();
    }
  }, [trigger, input]);

  return (
    <>
      <QuikList />
      <div className="myCard">
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <div className="input">
              {" "}
              <Input value={input} onChange={onChange} />
              <Button
                variant={"contained"}
                onClick={handleClick}
                startIcon={<SearchIcon />}
              >
                {" "}
                Search{" "}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <WeatherDisplay data={data} loading={loading} error={error} />
      </div>
    </>
  );
}
