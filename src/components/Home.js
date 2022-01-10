import React ,{useState} from "react";
import Map from './Map'
export const Home = ({user}) => {
   const [myStyle,setmyStyle]=useState(
   {
    color:'grey',
    backgroundColor:'white'
   })
   const [btntext,setBtntext ] = useState("DARK")
const toggleStyle=()=>{
    if (myStyle.color==='grey'){
        setmyStyle({
            color:'white',
            backgroundColor:'grey'
               
        })
        setBtntext("LIGHT")
    }
    else{
        setmyStyle({
            color:'grey',
            backgroundColor:'white'
    })   
    setBtntext("DARK")
    }
}

    return (
        <div className="container" style={myStyle}>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center', marginBottom:'2rem'}}>
        <h1>WELCOME TO DISASTER-TRACKER</h1>
        </div>
        {user && <Map/>}
        
     <div className="container my-2" >
           <button onClick={toggleStyle}  type="button" className="btn btn-primary d-none">{btntext}</button>
            </div>
        </div>
        
    )
    }