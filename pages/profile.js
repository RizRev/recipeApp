import Nav from "../components/Navbar"
import Footer from "../components/Footer"
import style from "../styles/profil.module.css"
import Image from "next/image"

const Profile = () => {
  return (

    <div>
    <Nav/>
    <Image className={style.muka} src="/profil.png" width={86} height={86}/>
    <h4 className={style.nama}>Garneta Sharina</h4>
    <div className={style.list}>
        <ul>
            My Recipe
        </ul>
        <ul>
            Saved Recipe
        </ul>
        <ul>
            Liked recipe
        </ul>

    </div>
    <hr />
    <div>
    <Image  className={style.gambar} src="/BananasPancake.jpg" width={185}  height={125}/>
    <Image  className={style.gambar} src="/BombChicken.jpg" width={185}  height={125}/>
    </div>

    <Footer/>
    </div>
  )
}

export default Profile