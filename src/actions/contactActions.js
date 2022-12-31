import { ADD_CONTACT, DELETE_CONTACT } from "../constants/contants"


export const addAction = (contact) => {
    return {
        type: ADD_CONTACT,
        contact
    }
}

export const deleteAction = (id) => {
    return {
        type: DELETE_CONTACT,
        id
    }
}