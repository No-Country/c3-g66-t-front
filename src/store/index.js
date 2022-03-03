import user from "./slices/user"
import { createStore, combineReducers, applyMiddleware} from "redux"
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import SearchLocationReducer from "./slices/search/LocationReducer";
import SearchListHotelsReducer from "./slices/search/ListHotelsReducer";

const reducer = combineReducers({
    user:  user,
    SearchLocationReducer,
    SearchListHotelsReducer
})
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
export default store
