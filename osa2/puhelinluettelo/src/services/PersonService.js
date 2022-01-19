import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseURL, newObject)
    return request.then(response => response.data)
}

const deletePerson = personId => {
    const deleteURL = baseURL.concat("/" + personId)
    return axios.delete(deleteURL)
}

const changeNumber = newObject => {
    const updateURL = baseURL.concat("/" + newObject.id)
    const request = axios.put(updateURL, newObject)
    return request.then(response => response.data)
}

export default {getAll, create, deletePerson, changeNumber}