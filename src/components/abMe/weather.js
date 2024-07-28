import React, { useState, useEffect } from "react";

const api_key = process.env.REACT_APP_WEATHER_API_KEY

export const Weather = ({key=api_key}) =>{
    const [weatherData, updateWeatherData] = useState({});
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.2557&lon=-79.8711&appid=${key}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('error');
                })
            .then(data => updateWeatherData(data))
            .catch(() =>
                updateWeatherData({ error: 'weather not available' })
            );
    }, []);

    const buildWeatherData = () => {
        const  { error } = weatherData;
        const tempr = (weatherData?.main?.temp);
        var clim = weatherData?.weather?.main;

        if (!clim){
            clim = '.'
        }else{
            clim = ` and ${clim}.`
        }

        if (error) {
            console.log(error)
            return <p></p>;
        }
  
        if (!tempr) {
            return <p>Loading</p>;
        }

        return(
            <h2>I'm a Software Engineer studying in Hamilton, Ontario, 
                where it is currently {Math.round(tempr - 273.15)}°C{clim}</h2>
        );
        }
    return(buildWeatherData())
    }