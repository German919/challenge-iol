import { GET_FAV, DELETE_FAV } from '../../context/Types'

export default (state, action) => {

    switch (action.type) {
        case GET_FAV:{
            const res =  state.fav?.find((fav) => action.payload.id === fav.id)
            
            if(res === undefined){
                return {
                    ...state,
                    fav : [...state.fav, action.payload] 
                }
            }else{
                return { 
                    ...state
                }
            }
         
        }
        case DELETE_FAV:{
            return {
                ...state,
                fav : state.fav.filter( f => f.id !== action.payload.id )
            }
        }
        default:{
            return state
        }
    }
}