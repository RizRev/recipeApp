import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

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
        {data ? (
            data.map((item) => (
                <div 
                className={style.isi}
                key={item.id}>
                    <div className={style.daftar}>
                    {/* <img src={item.photo} style={{width: "200px",height:"200px" }} alt="" /> */}
                    <h3 style={{fontSize: "30px",verticalAling: "middle"}}>{item.name}</h3>
                    </div>
                </div>
            ))
        ) : (
            <h1>loading</h1>
        )}
      </div>
    </div>
  )
}

export default Alluser
