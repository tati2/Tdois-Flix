import axios from "axios"

const apiFilmes = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=f5e33b7872870b499cdef685aff18b48&language=pt-BR"
})

export default apiFilmes