import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { regisUser } from '../redux/action/register'
import style from '../styles/login.module.css'
import Link from 'next/link'
import Image from 'next/image'

function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setFullname] = useState("");
  const [phonenumber, setPhone] = useState("");
  const [confirm, setConfirm] = useState("");

  const dispatch = useDispatch();

const postData = (e) => {

  e.preventDefault();
  console.log(name);
  console.log(email);
  console.log(phonenumber);
  console.log(password);
  let data = {
    name,
    email,
    phonenumber,
    password,
    confirm
  };
  dispatch(regisUser(data));
};

  return (
    <div className={style.besar}>
      <div>
      <Image src="/image15.png"  width={660} height={1244}/>
      </div>
      <div className={style.perataan}>
    <h3 className={style.tittle}>Let's Get Started!</h3>
    <h4 className={style.log}>Create new acccount to access all features</h4>
    <form onSubmit={postData}>
    <div className={style.ukuran}>
    <label>Name</label>
    
    <input 
    className={style.textarea}
    type="text"
    id="name"
    value={name}
    onChange={(e)=>setFullname(e.target.value)}
    />
    
    <label>E-mail address*</label>
    <div>
    <input 
    className={style.textarea}
    type="email"
    id="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    </div>
    <label>Phone Number</label>
    <div>
    <input className={style.textarea}
    type="number"
    id="phone"
    value={phonenumber}
    onChange={(e)=>setPhone(e.target.value)}
    />
    </div>
    <label>Create New Password</label>
    <div>
    <input className={style.textarea}
    type="password"
    id="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    </div>
    <label>New Password</label>
    <input type="password"
    className={style.textarea}
    id="password"
    value={confirm}
    onChange={(e)=>setConfirm(e.target.value)}/>
    <label className={style.checkmark}>
    <input type="checkbox" /> I agree to terms & conditions
    </label>
    <button className={style.tombol} type="submit">Register Account</button>
    <div style={{marginLeft:"50px",marginTop:"10px"}}>
        Already have account?
        <Link style={{marginLeft:"5px",color:"#EFC81A"}} href="/login">
        Log in Here
        </Link>
        </div>
    </div>
    </form>
    <form>
    </form>
    </div>
    </div>
  )
}

export default signup