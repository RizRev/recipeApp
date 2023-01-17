import axios from "axios";
import Router from "next/router";

export const loginUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(`http://localhost:3003/users/login`, data);
    const user = result.data.data;
    console.log(user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("name", user.name);

    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    Router.push("/profile");
    console.log("User Login Success");
  } catch (err) {
    console.log("User Login Fail");
    console.log(err);
  }
};
