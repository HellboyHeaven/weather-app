import React, { useEffect, useState } from "react";
import axios from "axios";

import * as Location from 'expo-location';
import NotFoundWeather from "@/components/Error";
import LoadingWeather from "@/components/Loading";
import Weather from "@/components/Weather";





const API = "e2aec2b8a00ef2433624034a4295ca21"

const enum LoadStatus {
  Loading,
  Loaded,
  Error
}


export default function Index() {  
  const [loadStatus, setLoadStatus] = useState<LoadStatus>(LoadStatus.Loading);
  const [temp, setTemp] = useState<number>();
  const [con, setCon] = useState<string>();

  const fetchWeather = async () => {
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`).then((res) => {
      setTemp(res.data.main.temp);
      setCon(res.data.weather[0].main);
      setLoadStatus(LoadStatus.Loaded);},
      (error) => {
        setLoadStatus(LoadStatus.Error);
        Promise.reject(new Error(error));
      }
  )};
 

  useEffect(() => {
    const requestPermission = Location.requestForegroundPermissionsAsync;
    requestPermission().then((res) => {res.granted ? fetchWeather() : requestPermission()})
    
  
    
    }, []
);
  const Component = () => {
    switch(loadStatus) {

      case LoadStatus.Loaded:   return <Weather temp={temp!} con={con!}/>;
      case LoadStatus.Error:    return <NotFoundWeather/>;
      default:                  return <LoadingWeather/>;
    }
  }

  
  return Component();
}

