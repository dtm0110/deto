import { API_URL } from "@/config/endpoints.config"
import { useUser } from "@/hooks/stores/useUser"
// import { useWeb3Store } from "@/hooks/stores/useWeb3Store"
import { message } from "antd"
import axios, { AxiosError, AxiosInstance } from "axios"
import jwtDecode from "jwt-decode"

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {},
})

axiosInstance.interceptors.request.use((config) => {
  const { token, login } = useUser.getState()
  // const { account, signer } = useWeb3Store.getState()

  const isTokenExpired = token ? jwtDecode<{ exp: number }>(token).exp * 1000 < Date.now() : true

  // if (account && token && isTokenExpired) {
  //   message.error("Session Expired")
  //   login?.(signer)
  // }
  config.headers["Authorization"] = "Bearer " + token
  return config
})

axiosInstance.interceptors.response.use(
  (response) => {
    const data = response.data.data
    if (Object.keys(data).length === 1) {
      response.data = data[Object.keys(data)[0]]
    } else {
      response.data = data
    }
    return Promise.resolve(response)
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
