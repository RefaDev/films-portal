import axios, { AxiosResponse } from 'axios'

const getFilms = (value: string | undefined): Promise<AxiosResponse> => {
   return axios.get(`https://api.tvmaze.com/shows${value}`)
}

export default getFilms
