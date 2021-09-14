import {createStore} from "redux";
import {headerStatusReducer} from "../reducers/headerStatusReducer";

export let store = createStore(headerStatusReducer);