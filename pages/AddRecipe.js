import Nav from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../styles/Home.module.css"
import style from "../styles/addrecipe.module.css"

const AddRecipe = () => {
  return (

    <div>
    <Nav/>
    <div className={styles.container}>
        <input className={style.form3} type="text"/>
        <input className={style.form} type="text" placeholder="Tittle" />
        <input className={style.form2} type="text" placeholder="Ingredients" />
        <input className={style.form} type="text" placeholder="Video" />
    </div>
    <Footer/>
    </div>
  )
}

export default AddRecipe