import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import directoryReducer from "./directory/directory-reducer";
import ShopReducer from "./Shop/ShopReducer";

const persistConfiq={
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer= combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:ShopReducer
})

export default persistReducer(persistConfiq,rootReducer)