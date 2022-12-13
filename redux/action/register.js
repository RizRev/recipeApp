import axios from "axios";
import Router from "next/router";

export const regisUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `http://localhost:3003/users/create`,
      data
    );
    const user = result.data.data;
    console.log(user);
    // localStorage.setItem("token", user.token);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    // Router.push("/otp");
    console.log("User Register Success");
  } catch (err) {
    console.log("User Register Fail");
    console.log(err);
  }
};