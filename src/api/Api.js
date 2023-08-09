import axios from 'axios'

const token = JSON.parse(localStorage.getItem("user"))?.token || '';
console.log("this is your token", token)
const url = "http://localhost/firstproject/wp-json/wc/v3/"


export const api = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

