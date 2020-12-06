
const INITIAL_STATE = false;

const loginReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
}

export default loginReducer;