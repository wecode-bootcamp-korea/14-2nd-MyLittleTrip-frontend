import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import userInfoReducer from "./userInfoReducer";

export default combineReducers({loginReducer, userInfoReducer});