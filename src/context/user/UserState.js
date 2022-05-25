import { useReducer } from 'react';
import UserReducer from './UserReducer'
import { UserContext } from './UserContext'
import { getCharacters } from '../../services/axios';
import { GET_FAV, DELETE_FAV } from '../../context/Types'

const UserState = ( props ) => {

    const initialState = {
        fav : []
    }
    const [ state, dispatch ] = useReducer ( UserReducer, initialState ) 

    const getFav = async (id) => {
        const res = await getCharacters(`/character/${id}`)
        dispatch({
            type: GET_FAV,
            payload: res.data
        })
    }
    const deleteFav = async (id) => {
        const res = await getCharacters(`/character/${id}`)
        dispatch({
            type: DELETE_FAV,
            payload: res.data
        })
    }

    return (
        <UserContext.Provider value={{
            fav : state.fav,
            getFav,
            deleteFav
        }} >
            { props.children }
        </UserContext.Provider>
    )
}

export default UserState;
