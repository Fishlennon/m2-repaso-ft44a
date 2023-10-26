import { ADD_FAVORITE, SET_USER, DELETE_FAVORITE } from "./action-types"

const initialState = {
    favoritos:[],
    usuarios:{},
}

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                user:action.payload
            }
        case ADD_FAVORITE : 
        return{
            ...state,
            favoritos: [...state.favoritos, action.payload]
        }
        case DELETE_FAVORITE :
            const filteredFavs = state.favoritos.filter(
                fav=> fav.id!==action.payload
            ) // crear una constante para no borrar del original
            return{
                ...state,
                favoritos: filteredFavs/*state.favoritos.filter(
                    fav=> fav.id!==action.payload*/
            }
        default:
            return state
    }
}

export default reducer