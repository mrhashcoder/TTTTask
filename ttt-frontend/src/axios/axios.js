import axios from "axios";

const baseUrlProduction = "https://ttt-mrhashcoder.herokuapp.com";
const baseUrlDevelopment = "http://localhost:4000"

const instance = axios.create({
    baseURL : baseUrlProduction
});

export default instance;