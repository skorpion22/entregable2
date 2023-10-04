import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherContainer from './components/WeatherContainer'

function App() {
  const [weather, setWeather] = useState(null)

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const API_KEY = "296d12a0435b93936b390b93d4da9647";
    
   axios
   .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
   )
   .then(({data}) => setWeather(data))
   .catch((err) => console.log(err))

  }
  useEffect (() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <main className="bg-black min-h-screen text-black font-semibold font-['Lato'] grid place">
      {
        weather === null ? (
        
        <div className="grid place display-center items-center justify-center">
          <weatherStart className="ml-20"><img src="/weatherStart.png" alt="" /></weatherStart>
          <h3 className="text-center text-white text-[33.93px] font-semibold font-['Lato']">Weather app😶‍🌫️</h3>
          <p className="text-center text-white font-semibold font-['Lato']">Desarrollado por Diego Roldan😊</p>
        </div>
        ) : (
          <WeatherContainer weather={weather}/>
        )}  
    </main>
  );
}

export default App;
