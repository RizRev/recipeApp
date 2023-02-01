import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import style from "../styles/search.module.css"
import Nav from "../components/Navbar"
function search() {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");
    useEffect(() => {
axios.get(
            `${process.env.URL_BACKEND}/recipe?name=${search}`
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
      }, [search]);  
  return (

    <div>
        <Nav/>
        <h1 className={style.title}>Search What You Will Cook</h1>
        <div className={style.perataan}>
        <input className={style.input} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Recipe Here!' />
        </div>
      <div>
        {data ? (
            data.map((item) => (
                <div 
                className={style.isi}
                key={item.id_recipe} onClick={() =>
                    router.push(`/recipe/${item.id_recipe}`)
                  }>
                    <div className={style.daftar}>
                    <img src={item.photo} style={{width: "200px",height:"200px" }} alt="" />
                    <h3 style={{fontSize: "30px",verticalAling: "middle"}}>{item.name_recipe}</h3>
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

export default search
