import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import style from '../styles/login.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const postData = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(process.env.URL_BACKEND)
    let data = {
      email,
      password,
    };
    const config = {
      withCredentials: true,
    };
    const result = await axios.post(
      `${process.env.URL_BACKEND}/users/login`,
      // "http://localhost:3003/users/login",
      data,
      config
    );
    const token = result.data.data.token;
    console.log(result.data.data.token)
    const id_user = result.data.data.id_user;
    const dataToken = {
      token: token,
      id_user: id_user,
    };
    const cookie = await fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToken),
    });
    const checkToken = await cookie.json();
    if (!checkToken) {
      return Swal.fire("Warning", "Login Failed", "error");
    }
    Swal.fire("Success", "Login Success", "success");
    console.log(dataToken);
    router.push("/profile");
  };
  const router = useRouter();
  return (
    <div className={style.besar}>
        <div >
      <Image src="/image15.png"  width={660} height={1244}/>
      </div>

        <div className={style.perataan}>
    
    <h3 className={style.tittle}>Welcome</h3>
    <h4 className={style.log}>Log in into your exiting account</h4>
    {/* <div className={style.perataan}> */}
    <form onSubmit={postData} >
    <div className={style.ukuran}>
    <label>E-mail</label>
    <input type="text"
        className={style.textarea}
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>

    
    <label>Password</label>

    <input type="password"
            className={style.textarea}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        
    
    <label className={style.checkmark}>
    <input type="checkbox" /> I agree to terms & conditions
    </label>
    </div>
    <div className={style.row}>
    <button className={style.tombol} type="submit">Log in</button>
    <Link href="/" style={{marginLeft: "190px",marginTop: "10px",color: "#696F79"}}>
        Forgot Password ?
    </Link>
    </div>

    </form>
    <div style={{marginLeft:"46%",marginTop:"10px",color:"#696F79"}}>
        Don't have an account?
        <Link style={{marginLeft:"5px",color:"#EFC81A"}} href="/signup">
        Sign Up
        </Link>
    </div>
    <form>
    </form>
    {/* </div> */}
    </div>
    </div>
  )
}
export default Login;