
const INITIAL_STATE = null;

const userInfoReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case "SET USER":
      return action.payload;
    case "REMOVE USER":
      return null;
    default:
      return state;
  }
}

export default userInfoReducer;