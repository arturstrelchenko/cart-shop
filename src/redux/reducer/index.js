import {combineReducers} from "redux";

import cart from "./cart";
import filters from "./filter";
import pizzas from "./pizzas";


export const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
})
