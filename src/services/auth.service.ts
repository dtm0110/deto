import { axiosInstance } from "@/helpers/axiosInstance"
import { api } from "@constants/api"

export class AuthService {
  getNonce(address: string) {
    return axiosInstance.get<string>(api.auth.getNonce, {
      params: {
        address,
      },
    })
  }

  login(address: string, sign: string) {
    return axiosInstance.post<{
      user_info: User
      token: string
    }>(api.auth.login, {
      address,
      sign,
    })
  }
}
