import { useState } from "react";
import WeatherStat from "./WeatherStat";

const WeatherContainer = ({weather}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeUnitTemp = (temp) => {
    if(isCelsius) {
    const celsiusTemp = (temp - 273.15).toFixed(1)
    return  `${celsiusTemp}°C`;
    } else {
    const fahrenheitTemp = (((temp - 273.15) * 9/5) + 32).toFixed(1)
    return `${fahrenheitTemp}°F`;
    }
  }

 const handleChangeUnit = () => {
  setIsCelsius(!isCelsius)
 }

    return (
      <section className="bg-[url('/cielo_despejado.jpg')] grip place display-center items-center justify-center">
       {/* <button className="bg-slate-900 px-4 py-2 rounded-[21.53px] hover:bg-slate-300"><img src="/butto.png" alt="button" /></button>  */}
        <h3 className="text-xl font-semibold flex items-center justify-center py-8 pt-20">
          {weather.name}, {weather.sys.country}
        </h3>

        <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
 {/* seccion superior */}
            <article className="bg-slate-500/50 rounded-2xl grid grid-cols-2 ml-60  items-center justify-center  
             px-2 w-[400px] h-[250px] ">
                <h4 className="col-span-2 capitalize flex items-center justify-center py-4">{weather.weather[0].description}</h4>
                <span className="text-5xl">
                  {changeUnitTemp(weather.main.temp)}
                </span>
                <picture>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt=""/>
                </picture>

            </article>
 {/*seccion inferior */}

            <article className="grid grid-cols-3 justify-items-center mr-80 bg-slate-500/50 rounded-2xl py-3 sm:grid-cols-1">
             <WeatherStat icon="/wind.png" unit="m/s" value={weather.wind.speed}/>
             <WeatherStat icon="/humidity.png" unit="%" value={weather.main.humidity}/>
             <WeatherStat icon="/pressure.png" unit="hPa" value={weather.main.pressure}/>
            </article>
        </div>

        <button onClick={handleChangeUnit} className="mt-12 w-[151.87px] h-[34px] bg-white rounded-[21.53px] shadow flex justify-center items-center mx-auto my-4 ">
          °C / °F
        </button>
      </section>
    )
  }
  export default WeatherContainer