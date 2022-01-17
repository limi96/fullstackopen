import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = newObject => {
    return axios.post(baseURL, newObject)
}

const deletePerson = personId => {
    const deleteURL = baseURL.concat("/" + personId)
    return axios.delete(deleteURL)
}

export default {getAll, create, deletePerson}