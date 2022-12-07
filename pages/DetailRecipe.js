import Nav from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"
const DetailRecipe = () => {
  return (
    <div>
      <Nav/>
      <div>
        <h1>Loream Sandwich</h1>
        <Image src="/makanan1.png" width={541} height={350}/>
        <h4>Ingredients</h4>
        <ul>
        -2 Eggs
        </ul>
        <ul>
        -2 Tbsp Mayonnaise
        </ul>
        <ul>
        -3 Slices Bread
        </ul>
        <ul>
        -A Little Butter
        </ul>
        <ul>
        -1/3 Carton Of Cress
        </ul>
        <ul>
        -2-3 Slices Of Tomato Or A Lettuce Leaf And A Slice Of Ham Or Cheese
        </ul>
        <ul>
        -Crisps, To Serve
        </ul>
        <h4>Video Step</h4>

      </div>
      <Footer/>
    </div>
  )
}

export default DetailRecipe
