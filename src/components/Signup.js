import React,{useState} from 'react'
let style={
    color:'Black',
    backgroundColor:'#CCD1E4',
    padding:'2rem'
}
//import { useHistory } from 'react-router-dom';
const Signup = (props) => {

    const [credentials, setCredentials] = useState({name:"" ,email: "", password: "",cpassword:""}) 
  // let history = useHistory();
 
     const handleSubmit = async (e) => {
         e.preventDefault();
      const {name,email,password}= credentials;
         const response = await fetch("http://localhost:5000/api/auth/createuser", {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({name,email, password})
         });
         const json = await response.json()
         console.log(json);
       if(json.success){
             // Save the auth token and redirect
             localStorage.setItem('token', json.authtoken); 
            //history.push("/");
 
         }
         else{
           props.showAlert("Invalid","danger")
         }
         
     }
 
     const onChange = (e)=>{
         setCredentials({...credentials, [e.target.name]: e.target.value})
     }
 

    return (
        <div className="container" style={style}>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp"/>
    </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Signup

/*import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


const Signup = () => {
    const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
    e.preventDefault();
   const  {name,email,password}= credentials;
    //destructureing
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
       
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
        // Save auth token and redirect --
        localStorage.setItem('token', json.authtoken); 
        history.push("/");

    }
    else{
        alert("Invalid credentials");
    }
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
    return (
        <div>
               <form  onSubmit={handleSubmit}>
               <div className="mb-3">
                    <label htmlFor="email" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name"onChange={onChange} aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control"  onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  name="password" id="password" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control"  name="cpassword" id="cpassword" onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
*/