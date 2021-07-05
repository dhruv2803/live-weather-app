// api.openweathermap.org/data/2.5/weather?q={city name}&appid=9ddd4fd6cc49461ba6fe62d175516e9d
import React, { useEffect, useState } from 'react'
import './TempBox.css'
function TempBox() {
    const [city,setCity] = useState(null)
    const [search,setSearch] = useState("vadodara")
    useEffect(
        ()=>{
            const fetchApi = async() =>{
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9ddd4fd6cc49461ba6fe62d175516e9d`
                const rep = await fetch(url)
                const repJson = await rep.json()
                console.log(repJson)
                setCity(repJson.main)
            }
            fetchApi();
        }
    ,[search])
    return (
        <div className="box">
            <div className="search">
                <input type="search" className="search_inp" value={search}
                    onChange = {(e)=>(setSearch(e.target.value))}
                />
            </div>
            {!city?(<p className="Err">No data found</p>):(
                <div className="city">
                    <h2 className="city_name">{search}</h2>
                    <div className="city_temp">
                        <span><h3>{city.temp} °C</h3></span>
                        <span><h3>Min-Temperature:{city.temp_min} °C</h3></span>
                        <span><h3>Max-Temperature:{city.temp_max} °C</h3></span>
                    </div>

                </div>
            )}
            
        </div>
    )
}

export default TempBox
