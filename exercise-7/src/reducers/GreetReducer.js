const initialState = {
  which: "",
  time: "",
};

const GreetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WHICH":
      return {
        ...state,
        which: action.payload,
      };
    case "AT":
      return {
        ...state,
        time: action.payload,
      };
    default:
      return state;
  }
};

export default GreetReducer;
