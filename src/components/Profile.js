import React, { useEffect,useState } from "react";
import "./Profile.css";
import axios from "axios";


function Profile(props){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://www.justwravel.com/otherPages/month_trip_api/February/all").then((result)  => {
            result.json().then((resp)=>{
                setData(resp.data)
            })
        })
    },[])
    console.warn(data)

   
    return(
        <>
   
     <div>
         
             
             {
           data.map((item)=>{
               return(
              
                <div className="card position-relative ">
<img src={item.image} className="img-fluid"/>
<span className="price">{item.price}</span>
<h6 className="head-date p-2">6 Feb,12Feb ,18Feb,12mar,23Mar,23Mar</h6>
<div className="d-flex justify-content-between">
<h6 className="location p-2">{item.pick_drop}</h6>
<h6 className="location p-2">{}</h6>
</div>
<div className="position-absolute">
<h4 className="track">{item.title}</h4>
       


</div>
           
</div>
               )
        } )
       }
     

      
 
           
      
           </div>

        </>
    )
}
export default Profile;