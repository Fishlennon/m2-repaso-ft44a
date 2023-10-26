import * as actionTypes from "./action-types"

//reducer solo funciones puras, axios en actions

export const setUser = (data)=>{
    return{
        type: actionTypes.SET_USER,
        payload: data
    }
}

export const addFavorites = (episode)=>{
    return{
        type: actionTypes.ADD_FAVORITE,
        payload: episode
    }
}

export const deleteFavorite = (episode)=>{
    return{
        type: actionTypes.DELETE_FAVORITE,
        payload: episode
    }
}

export const ratingFavorite = ({id, rating} /*data*/)=>{
    return{
        type: actionTypes.RAITING_FAVORITE,
        payload: {id, rating} /*data*/
    }
}

export const completeFavorite = (id)=>{
    return{
        type: actionTypes.COMPLETE_FAVORITE,
        payload: id
    }
}