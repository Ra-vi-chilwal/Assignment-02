import React from "react";
import Profile from "./components/Profile"
import "./styles.css";



export default function App() {
 

  return (
    <div className="App">
    <div className=" p-5">
    <div className="row">
      <div className="col-xl-4 col-md-12 p-2">
      <Profile />
      </div>
  
      <div className="col-xl-4 col-md-12 p-2">
      <Profile />
      </div>
   
      <div className="col-xl-4 col-md-12 p-2">
      <Profile />
      </div>
    </div>
    </div>
   
    

    
    </div>
  );
};

