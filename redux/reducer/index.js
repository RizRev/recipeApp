import { combineReducers } from "redux";
import UserReducer from "./user";
import ProfileReducer from "./profile";
// import RecipeReducers from "./recipe";
// import otpReducers from "./otp";

const RootReducers = combineReducers({
  user: UserReducer,
  profile: ProfileReducer
//   recipe: RecipeReducers,
//   otp: otpReducers,
});

export default RootReducers;
