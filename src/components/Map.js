import React, { useState,useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { IoMdFlame } from 'react-icons/io';
import { GiSmokingVolcano } from 'react-icons/gi';
import Description from './Description.js';
// import LocationInfoBox from './LocationInfoBox';
import "../App.css"
import axios from 'axios'
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
function Map() {
  const [info,setInfo] = useState([])
  const [infosec,setInfosec] = useState([]);
  const [locationInfo, setLocationInfo] = useState("")
  useEffect(()=>{
      axios.get("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8")
      .then((res)=>{
        setInfo(res.data.events);
        // console.log(res.data.events);
      })
      .catch((error)=>console.log(error));

  },[])
  useEffect(()=>{
    axios.get("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/12")
    .then((res)=>{
      setInfosec(res.data.events);
      // console.log(res.data.events);
    })
    .catch((error)=>console.log(error));

},[])
  const [viewport, setViewport] = useState({
    latitude: 22.5726,
    longitude: 88.3639,
    zoom: 5,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "91vh",
  });

  return (
    <>
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/dark-v10"
      mapboxApiAccessToken={"pk.eyJ1IjoiYW5vbWljMzAiLCJhIjoiY2tydnFkcTgyMDk5bjJ1bzJhOGRwdHdyYSJ9.sdeq4wN8AvZxrehZ12pazQ"}
      {...viewport}

      onViewportChange={(viewport) => setViewport(viewport)}


    >
      {info.map((val)=>{
        return <div key={val.id}>
        <Marker  latitude={val.geometries[0].coordinates[1]} longitude={val.geometries[0].coordinates[0]} offsetLeft={-20} offsetTop={-10}>
        <IoMdFlame  size= "20px"
className="icon" onClick={()=>setLocationInfo(val.id)}/>
{locationInfo===`${val.id}`?<Description val={val} locationInfo={locationInfo} setLocationInfo={setLocationInfo}/> :<></>}
  
      </Marker>
      </div>
      })}
           {infosec.map((value)=>{
        return <div key={value.id}>
        {(value.geometries[0].coordinates[1])?<Marker  latitude={value.geometries[0].coordinates[1]} longitude={value.geometries[0].coordinates[0]} offsetLeft={-20} offsetTop={-10}>
        <GiSmokingVolcano size= "20px"
className="icon2" onClick={()=>setLocationInfo(value.id)}/>
{locationInfo===`${value.id}`?<Description val={value} locationInfo={locationInfo} setLocationInfo={setLocationInfo} /> :<></>}
      </Marker>:<></>}

      </div>
      })}
  
    </ReactMapGL>
    {/* {locationInfo && <LocationInfoBox info={locationInfo} />} */}
    </>
  );
}
export default Map;