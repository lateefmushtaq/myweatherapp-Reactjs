const API_ID = "7f12b9f7637879bc79cddc5739293ac2";


export async function fetchData({ city, setLoading, setData, setError }) {
    try {
        setLoading(true);
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_ID}`
        );
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
}
