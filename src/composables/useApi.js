/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://digimon-api.vercel.app/api/digimon',
})

const useApi = () => {
  return { instance }
}

export default useApi
