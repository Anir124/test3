import { useEffect, useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [weather, setWeather] = useState(false);
//   const currentWeather = async (city) => {
// //     try {
// //       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
// //         import.meta.env.VITE_APP_ID
// //       }`;
// //       const response = await fetch(url);
// //       const data = await response.json();
// //       console.log(data);
// //       setWeather({
// //         city: data.name,
// //         country: data.sys.country,
// //         temp: data.main.temp,
// //         description: data.weather[0].description,
// //         icon: data.weather[0].icon,
// //       });
// //     } catch (error) {
// //       alert("Ran out of daily api requests");
// //     }
//   };
//   useEffect(() => {
//     currentWeather("Delhi");
//   }, []);
  return (
    <>

    </>
  );
};

export default Weather;
