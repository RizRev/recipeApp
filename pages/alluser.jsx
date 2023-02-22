import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import style from "../styles/alluser.module.css"


function Alluser() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(
                    `${process.env.URL_BACKEND}/users/alluser`
                  )
                .then((res) => {
                    console.log("get data success");
                    console.log(res.data);
                    res.data && setData(res.data.data);
                  })
                  .catch((err) => {
                    console.log("get data fail");
                    console.log(err);
                  });
              }, []);  
  return (
    <div>
      ini all user
      <div>
        <div className={style.gaya1}>
        {data ? (
            data.map((item) => (
                <div 
                key={item.id}>
                    <div className={style.gaya2}>
                    {/* <img src={item.photo} style={{width: "200px",height:"200px" }} alt="" /> */}
                    <h3 style={{fontSize: "30px",verticalAling: "middle"}}>{item.name}</h3>
                    <p>Hp : {item.phonenumber}</p>
                    <p>Email : {item.email}</p>
                    </div>
                </div>
            ))
        ) : (
            <h1>loading</h1>
        )}
        </div>
        
      </div>
    </div>
  )
}

export default Alluser
