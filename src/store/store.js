import { legacy_createStore as createStore } from "redux"
import contactReducer from "../reducers/contactReducer"

const store = createStore(contactReducer)

store.subscribe(() => {
    console.log(store.getState())
})

export default store


