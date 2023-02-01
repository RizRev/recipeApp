import Nav from "../../components/Navbar"
import Footer from "../../components/Footer"
import style from "../../styles/detailrecipe.module.css"
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export async function getServerSideProps(context) {
  try {
    const id_recipe = context.params.id_recipe;
    console.log(id_recipe);
    const res = await fetch(`${process.env.URL_BACKEND}/recipe/recipe-details/${id_recipe}`);
    const data = await res.json();
    console.log(data);
    const { token } = context.req.cookies;
    return {
      props: {
        data,
        id_recipe,
        token: token,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
function DetailRecipe({ data, id_recipe, token }) {
  const router = useRouter();
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [datacomment, setDataComment] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.URL_BACKEND}/recipe/comment-get/${id_recipe}`)
      .then((res) => {
        console.log("Get comment by recipe success");
        console.log(res.data);
        res.data && setDataComment(res.data.data);
      })
      .catch((err) => {
        console.log("Get comment by recipe fail");
        console.log(err);
      });
  }, []);
  const [postData, setPostData] = useState("");
  const handleChange = (e) => {
    setPostData(
      {
      ...postData,
      [e.target.name]: e.target.value,
    }
    );
  };
  const handleData = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.URL_BACKEND}/recipe/comment-post/${id_recipe}`,
        postData,
        user
      )
      .then((result) => {
        console.log("Post comment success");
        console.log(result.comment);
        Swal.fire("Success", "Post comment success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Post comment fail");
        console.log(err);
        Swal.fire("Warning", "Post comment failed", "error");
      });
  };
  const handleSave = async (e) => {
    e.preventDefault();
    let form = {
    };
    axios
      .get(`${process.env.URL_BACKEND}/recipe/save/${id_recipe}`, user)
      .then((res) => {
        console.log("Add save recipe success");
        console.log(res);
        Swal.fire("Success", "Add save recipe success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Add save recipe fail");
        console.log(err);
        Swal.fire("Warning", "Add save recipe fail", "error");
      });
  };
  const handleLike = async (e) => {
    e.preventDefault();
    let form = {
      recipe_id: id_recipe,
    };
    axios
      .get(`${process.env.URL_BACKEND}/recipe/like/${id_recipe}`, user)
      .then((res) => {
        console.log("Add like recipe success");
        console.log(res);
        Swal.fire("Success", "Add like recipe success", "success");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log("Add like recipe fail");
        console.log(err);
        Swal.fire("Warning", "Add like recipe fail", "error");
      });
  };
  return (
    <div>
      <Nav/>
      <div>
        <h1 className={style.title}>{data.data[0].name_recipe}</h1>
        <div className={style.gambar}>
        <img  src={data.data[0].photo} alt="" />
        </div>
        <div className={style.tombolsl}>
        <button
                type="submit"
                className="btn btn-warning"
                onClick={(e) => handleSave(e)}
              >
                <img
                  src="/saved.png"
                  alt=""
                  style={{ width: "20px", height: "25px" }}
                />
              </button>
              <button
                type="submit"
                className="btn btn-warning"
                onClick={(e) => handleLike(e)}
              >
                <img
                  src="/liked.png"
                  alt=""
                  style={{ width: "20px", height: "25px" }}
                />
              </button>
        </div>
        <div className={style.ingredients}>
        <h4>Ingredients</h4>
        <p>{data.data[0].ingredients}</p>
        <h4>Video Step</h4>
        </div>
      </div>
      <hr />
      <div>
      <div
          className={style.comment}
        >
          <div className={style.input}>
            <textarea
              style={{width:"500px",height:"75px",borderRadius:"7px"}}
              id="exampleFormControlTextarea1"
              placeholder="Comment Please, hehe!"
              name="comment"
              onChange={(e) => handleChange(e)}
              value={postData.comment}
            ></textarea>
          </div>
          
          <div>
          <button
              type="submit"
              onClick={(e) => handleData(e)}
              className={style.tombol}
            >
              <h6>Send Comment!</h6>
            </button>
            </div>
            <div>
            
            </div>
            
          </div>
          <div style={{marginLeft: "40px"}}>
          {datacomment ? (
            datacomment.map((item) => (
              <>
                <div>
                  <img
                    src={item.photo}
                  />
                </div>
                <div>
                  <h6>{item.name}</h6>
                  <p>{item.comment}</p>
                </div>
              </>
            ))
          ) : (
            <h1>...Loading</h1>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DetailRecipe
