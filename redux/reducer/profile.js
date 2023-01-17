const initialState = {
    dataProfile: {
      id: "",
      email: "",
      name: "",
      photo: "",
      token: ""
    },
    isLoading: false,
  };
  
  const ProfileReducer = (state = initialState, action) => {
    if (action.type === "USER_PROFILE_PENDING") {
      return {
        ...state,
        isLoading: true,
      };
    } else if (action.type === "USER_PROFILE_SUCCESS") {
      return {
        ...state,
        dataProfile: action.payload,
        isLoading: false,
      };
    } else {
      return state;
    }
  };
  export default ProfileReducer;
  