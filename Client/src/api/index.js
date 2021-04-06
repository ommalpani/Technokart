
import axios from 'axios'

// const url = "http://localhost:5000"

const url = "https://technokart.herokuapp.com"

export const pushProducts = (product)=> {
    axios.post(`${url}/product` , product)
}

export const getProducts = () => axios.get(`${url}/product`)
export const register  = (user)=>axios.post(`${url}/register` , user)
export const login = (user) => axios.post(`${url}/login`, user)
export const updateData = (user) => axios.post(`${url}/update` , user)