import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
import Detail from './components/Detail';
//import NoteState from './context/notes/noteState';
import  Alert  from './components/Alert';
//import Signup from './components/Signup';
//import Login from './components/Login';
//import { useState } from 'react';

function App() {
  let style={
    color:'Black',
    backgroundColor:'grey'
}
  const [alert,setAlert] = useState(null);
  const [user, setUser] = useState(false);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
    <>
    <NoteState style={style}>
        <Router>
          <Navbar user={user} setUser={setUser} />
          <Alert alert={alert}/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert} user={user}  />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/detail">
                <Detail />
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert} user={user} setUser={setUser}  />
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert}/>
              </Route>
            </Switch>
          </div>
        </Router>
        </NoteState>
    </>
  );
}

export default App