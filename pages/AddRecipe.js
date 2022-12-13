import Nav from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../styles/Home.module.css"
import style from "../styles/addrecipe.module.css"
import { useDispatch } from "react-redux";
import { addRecipeData } from "../redux/action/add-recipe";

function AddRecipe()  {
  const [name_recipe, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");



  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(name_recipe);
    console.log(ingredients);

    let data = {
      name_recipe,
      ingredients
    };
    dispatch(addRecipeData(data));
  };
  return (

    <div>
    <Nav/>
    <div className={styles.container}>
      <form onSubmit={postData}>
      <input className={style.form3} type="text"/>
        <input className={style.form} type="text" 
        id="title"
        value={name_recipe}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Tittle" />
        <input className={style.form2} type="text" 
        id="ingerdients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients" />
        <input className={style.form} type="text" placeholder="Video" />
      </form>

    </div>
    <Footer/>
    </div>
  )
}

export default AddRecipe