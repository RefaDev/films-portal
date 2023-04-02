import axios, { AxiosResponse } from 'axios'

const getFilmsMain = (value: string | undefined): Promise<AxiosResponse> => {
   return axios.get(`https://api.tvmaze.com/search/shows${value}`)
}

export default getFilmsMain
