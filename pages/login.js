import react from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { regisUser } from '../redux/action/register'
import { loginUser } from '../redux/action/login'
import style from '../styles/login.module.css'
import Link from 'next/link'
import Image from 'next/image'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(loginUser(data));
  };
  return (
    <div className={style.besar}>
      <div className="row">
        <div className="col-6">
        <div >
      <Image src="/image15.png"  width={660} height={1244}/>
      </div>
        </div>
        <div className="col-4">
        <div className={style.perataan}>
    
    <h3 className={style.tittle}>Welcome</h3>
    <h4 className={style.log}>Log in into your exiting account</h4>
    {/* <div className={style.perataan}> */}
    <form onSubmit={postData}>
    <label>E-mail</label>
    <div className={style.ukuran}>
    <input type="text"
        id="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    
    <label>Password</label>
    <div className={style.ukuran}>
    <input type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    
    <label className={style.checkmark}>
    <input type="checkbox" /> I agree to terms & conditions
    </label>
    <Link href="/">
        Forgot Password ?
    </Link>
    <button className={style.tombol} type="submit">Log in</button>
    </form>
    <div>
        Don't have an account?
        <Link href="/signup">
        Sign Up
        </Link>
    </div>
    <form>
    </form>
    {/* </div> */}
    </div>
        </div>
      </div>
    </div>
  )
}

export default Login