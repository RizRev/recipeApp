/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import NavbarAfter from "../../components/NavbarAfter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export async function getServerSideProps(context) {
  try {
    const id_recipe = context.params.id_recipe;
    console.log(id_recipe);
    const res = await fetch(`http://localhost:3000/recipe/${id_recipe}`);
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

function detailRecipe({ data, id_recipe, token }) {
  const router = useRouter();
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [dataComment, setDataComment] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/recipe/comment/${id_recipe}`)
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
  const [postData, setPostData] = useState([]);
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };
  const handleData = async (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3000/recipe/add-comment/${id_recipe}`,
        postData,
        user
      )
      .then((result) => {
        console.log("Post comment success");
        console.log(result);
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
      recipe_id: id_recipe,
    };
    axios
      .post(`http://localhost:3000/recipe/saved-recipe/post-saved`, form, user)
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
      .post(`http://localhost:3000/recipe/like-recipe/post-like`, form, user)
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
      <NavbarAfter />
      <div className="container">
        <div
          className="row justify-content-center mt-4"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-4">
            <h1>{data.data[0].title}</h1>
          </div>
        </div>
        <div
          className="row justify-content-center mt-5"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-9">
            <img
              src={data.data[0].photo}
              style={{ width: "900px", height: "500px" }}
            />
            <div>
              <button
                type="submit"
                className="btn btn-warning"
                onClick={(e) => handleSave(e)}
                style={{
                  marginLeft: "700px",
                  marginRight: "50px",
                  marginTop: "-120px",
                }}
              >
                <img
                  src="/book.png"
                  alt=""
                  style={{ width: "20px", height: "25px" }}
                />
              </button>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={(e) => handleLike(e)}
                style={{ marginTop: "-120px" }}
              >
                <img
                  src="/jempol.png"
                  alt=""
                  style={{ width: "20px", height: "25px" }}
                />
              </button>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-start mt-5"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <h3>Ingredients</h3>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <p>{data.data[0].ingredients}</p>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <h3>Video Step</h3>
          </div>
        </div>
        {/* <video width="60%" controls>
          <source src={data.data[0].video} type="video/mp4" />
          Your browser does not support HTML video.
        </video> */}
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <button
              className="btn btn-warning"
              onClick={() =>
                router.push(`/detail-recipe/${data.data[0].id_recipe}`)
              }
              style={{ width: "190px", height: "45px" }}
            >
              <Image src="/vid.png" height={10} width={10} />
            </button>
          </div>
        </div>
        <div
          className="row justify-content-start mt-5"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-12">
            <textarea
              class="form-control bg-light"
              id="exampleFormControlTextarea1"
              rows="9"
              placeholder="Comment :"
              name="comment_text"
              onChange={(e) => handleChange(e)}
              value={postData.comment_text}
            ></textarea>
          </div>
        </div>
        <div
          className="row justify-content-center  mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-3">
            <button
              type="submit"
              onClick={(e) => handleData(e)}
              className="btn btn-warning text-white"
              style={{ width: "250px", height: "35px" }}
            >
              <h6>Send</h6>
            </button>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-2">
            <h3>Comment</h3>
          </div>
        </div>
        <div
          className="row justify-content-start mt-3"
          style={{ marginLeft: "50px" }}
        >
          {dataComment ? (
            dataComment.map((item) => (
              <>
                <div className="col-1">
                  <img
                    src={item.photo}
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="col-5">
                  <h6>{item.fullname_user}</h6>
                  <p>{item.comment_text}</p>
                </div>
              </>
            ))
          ) : (
            <h1>...Loading</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default detailRecipe;