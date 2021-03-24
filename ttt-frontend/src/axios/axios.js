import axios from "axios";

const baseUrlDevelopment = "http://localhost:4000";
const baseUrlProduction = "https://ttt-mrhashcoder.herokuapp.com";

const instance = axios.create({
    baseURL : baseUrlProduction
});

export default instance;