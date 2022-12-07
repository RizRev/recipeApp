import style from '../styles/login.module.css'
import Link from 'next/link'
const Login = () => {
  return (

    <div className={style.perataan}>
    <h3 className={style.tittle}>Welcome</h3>
    <h4 className={style.log}>Log in into your exiting account</h4>
    <div className={style.perataan}>
    <label>E-mail</label>
    <input type="text"/>
    <label>Password</label>
    <input type="password"/>
    <label className={style.checkmark}>
    <input type="checkbox" /> I agree to terms & conditions
    </label>
    <Link href="/">
        Forgot Password ?
    </Link>
    <button type="submit">Log in</button>
    <div>
        Don't have an account?
        <Link href="/signup">
        Sign Up
        </Link>
    </div>
    <form>
    
    
    
    
    
    </form>
    </div>
    
    </div>
  )
}

export default Login