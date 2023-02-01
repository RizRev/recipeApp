import Nav from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../styles/Home.module.css"
import style from "../styles/addrecipe.module.css"
import { useDispatch } from "react-redux";
import { addRecipeData } from "../redux/action/add-recipe";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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

function AddRecipe({token})  {
  const [name_recipe, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [photo, setPhoto] = useState("");
  const [video, setVideo] = useState("");

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleVideo = (e) => {
    setVideo(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  // const dispatch = useDispatch();

  const postData = async (e) => {
    e.preventDefault();
    console.log(name_recipe);
    console.log(ingredients);
    console.log(photo);
    console.log(video);
    let data = {
      name_recipe,
      ingredients,
      photo,
      video,
    };
    const user = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    await axios.post(`${process.env.URL_BACKEND}/recipe/create`, data, user);
    Swal.fire("Success", "Add Recipes Success", "success");
    // dispatch(addRecipeData(data));
  };
// onChange={(e) => setTitle(e.target.value)}
  return (

    <div>
    <Nav/>
    <div className={styles.container}>
      <form onSubmit={postData}>
      <input className={style.form3} onChange={handlePhoto}
      accept="image/*"
      name="photo"
      type="file"/>
        <input className={style.form} type="text" 
        id="title"
        value={name_recipe}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tittle" />
        <input className={style.form2} type="text" 
        id="ingerdients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients" />
        <input className={style.form} onChange={handleVideo} accept="video/*"
        name="video" type="file" placeholder="Video" />
        <div className={styles.center}>
        <button className={styles.tombol} type="submit">submit</button>
        </div>

      </form>
    </div>
    <Footer/>
    </div>
  )
}

export default AddRecipe