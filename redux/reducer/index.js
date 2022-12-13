import { combineReducers } from "redux";
import UserReducer from "./user";
// import RecipeReducers from "./recipe";
// import otpReducers from "./otp";

const RootReducers = combineReducers({
  user: UserReducer,
//   recipe: RecipeReducers,
//   otp: otpReducers,
});

export default RootReducers;
