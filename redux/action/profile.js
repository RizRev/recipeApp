import axios from "axios";
import Router from "next/router";

export const GetProfileUser = () => async (dispatch) => {
  try {
    dispatch({ type: "USER_PROFILE_PENDING" });
    let token = localStorage.getItem("token")
    const result = await axios.get(`http://localhost:3003/users/detail`,{headers:{
        "Authorization" : `Bearer ${token}`
      }});
    const dataProfile = result.data.data;
    console.log(dataProfile);
    dispatch({ type: "USER_PROFILE_SUCCESS", payload: dataProfile });
    Router.push("/profile");
    console.log("User Proses Success");
    return console.log("sudah cukup")

  } catch (err) {
    console.log("User Proses Fail");
    console.log(err);
  }
};
