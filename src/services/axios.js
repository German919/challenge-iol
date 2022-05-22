import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api'

export const getCharacters = async (endpoint, method = 'GET') => {

    if (method === 'GET') {
        return  await axios.get(endpoint);
    }
 };