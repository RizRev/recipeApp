import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'

const Nav = () => {
  return (
    <div >
        <div className={styles.color}>
        <Link href="/">Home</Link>
        <Link className={styles.link} href="/AddRecipe">Add Recipe</Link>
        <Link className={styles.link} href="/profile">Profile</Link>
        <Link className={styles.login} href="/login">Login</Link>
        </div>
        <div>

        </div>
    </div>
    
  )
}

export default Nav
