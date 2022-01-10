import React from 'react'
import "../App.css"
import { IoCloseSharp } from 'react-icons/io5';

const Description = ({val,locationInfo,setLocationInfo}) => {
    return (

        <div className="description">
            <IoCloseSharp size="20px" className="close" onClick={()=>{setLocationInfo(!locationInfo)}}/>
          <h1>{val.title}</h1>
          <p >{val.geometries[0].date}</p>
            
        </div>
    )
}

export default Description