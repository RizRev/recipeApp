import Nav from "../components/Navbar"
import Footer from "../components/Footer"
import style from "../styles/profil.module.css"
import Image from "next/image"
import axios from "axios"
import {useState, useEffect} from "react"
import { useSelector } from "react-redux"

function Profile() {
  const [data, setData] = useState(null);

  const user = useSelector((state) => state.user.user);
  let users = `http://localhost:3003/users/${user.id}`;

  useEffect(() => {
    axios
      .get(users)
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
    <Nav/>
    <Image className={style.muka} src="/profil.png" width={86} height={86}/>
    {/* <h4 className={style.nama}>Garneta Sharina</h4> */}
    <h4> {data ? data[0].name : "data not found"}</h4>
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