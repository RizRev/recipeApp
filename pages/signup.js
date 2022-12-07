import style from '../styles/login.module.css'
import Link from 'next/link'
const signup = () => {
  return (

    <div className={style.perataan}>
    <h3 className={style.tittle}>Let's Get Started!</h3>
    <h4 className={style.log}>Create new acccount to access all features</h4>
    <div className={style.perataan}>
    <label>Name</label>
    <input type="text"/>
    <label>E-mail address*</label>
    <input type="text"/>
    <label>Phone Number</label>
    <input type="text"/>
    <label>Create New Password</label>
    <input type="password"/>
    <label>New Password</label>
    <input type="password"/>
    <label className={style.checkmark}>
    <input type="checkbox" /> I agree to terms & conditions
    </label>
    <Link href="/">
        Forgot Password ?
    </Link>
    <button type="submit">Register Account</button>
    <div>
        Already have account?
        <Link href="/login">
        Log in Here
        </Link>
    </div>
    <form>
    
    
    
    
    
    </form>
    </div>
    
    </div>
  )
}

export default signup