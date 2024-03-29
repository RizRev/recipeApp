import Nav from "../components/Navbar"
import Footer from "../components/Footer"
import style from "../styles/profil.module.css"
import Image from "next/image"
import axios from "axios"
import {useState, useEffect} from "react"
import { useRouter } from "next/router"

export const getServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  console.log(token);
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      isLogin: true,
      token: token,
    },
  };
};

function Profile({token}) {
  const [data, setData] = useState(null);
  const [key, setKey] = useState("myrecipe");
  const router = useRouter();
  useEffect(() => {
    axios
      .get(`${process.env.URL_BACKEND}/users/detail`, {
        headers: { Authorization: `Bearer ${token}`},
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);  
  const [recipe, setRecipe] = useState(null);
  const [save, setSave] = useState(null);
  const [like, setLike] = useState(null);
  const myrecipe = `${process.env.URL_BACKEND}/users/created`;
  useEffect(() => {
    axios
      .get(myrecipe, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setRecipe(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  const saved = `${process.env.URL_BACKEND}/users/saved/`;
  useEffect(() => {
    axios
      .get(saved, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setSave(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  const liked = `${process.env.URL_BACKEND}/users/liked`;
  useEffect(() => {
    axios
      .get(liked, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("get data success");
        console.log(res.data);
        res.data && setLike(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  return (

    <div>
    <Nav/>
    <Image className={style.muka} src="/profil.png" alt="ini" width={86} height={86}/>
    <a href="">
    <Image className={style.pensil} src="/pensil.png" alt="itu" width={10} height={10}/>
    </a>
    <div className={style.nama}>

    <h4> {data ? data.name : "data not found"}</h4>
    </div>
    
    <p className={style.subtittle}>My Recipe</p>
    <div className={style.list}>
        <div className={style.my}>
                    {recipe ? (
                      recipe.map((item) => (
                        <div
                          className={{margin:"10px"}}
                          key={item.id_recipe}
                          onClick={() =>
                            router.push(`/recipe/${item.id_recipe}`)
                          }
                        >
                          <img
                            src={item.photo}
                            alt=""
                            style={{ height: "150px", width: "150px" }}
                          />
                          <h4
                            style={{
                              marginTop: "-40px",
                              marginLeft: "13px",
                              color: "white",
                            }}
                          >
                            {item.name_recipe}
                          </h4>
                        </div>
                      ))
                    ) : (
                      <h1>...Loading</h1>
                    )}
                  </div>
    </div>
    <hr />
    <p className={style.subtittle}>Saved Recipe</p>

    <div className={style.my}>
                    {save ? (
                      save.map((item) => (
                        <div
                          key={item.id_recipe}
                          onClick={() =>
                            router.push(`/recipe/${item.id_recipe}`)
                          }
                        >
                          <img
                            src={item.photo}
                            alt=""
                            style={{ height: "150px", width: "150px" }}
                          />
                          <h4
                            style={{
                              marginTop: "-40px",
                              marginLeft: "13px",
                              color: "white",
                            }}
                          >
                            {item.name_recipe}
                          </h4>
                        </div>
                      ))
                    ) : (
                      <h1>...Loading</h1>
                    )}
                </div>
                <hr />
                <p className={style.subtittle}>Liked Recipe</p>
                <div className={style.my}>
                    {like ? (
                      like.map((item) => (
                        <div
                          key={item.recipe_id}
                          onClick={() =>
                            router.push(`/recipe/${item.recipe_id}`)
                          }
                        >
                          <img
                            src={item.photo}
                            alt=""
                            style={{ height: "150px", width: "150px" }}
                          />
                          <h4
                            style={{
                              marginTop: "-40px",
                              marginLeft: "13px",
                              color: "white",
                            }}
                          >
                            {item.name_recipe}
                          </h4>
                        </div>
                      ))
                    ) : (
                      <h1>...Loading</h1>
                    )}
                  </div>

    <div>
    </div>
    <Footer/>
    </div>
  )

}

export default Profile