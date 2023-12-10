import { SIGN_MESSAGE } from "@/constants/auth"
import { Service } from "@/services/app.service"
import { modal } from "@/utils/modal"
import { storageKeys } from "@constants/storage"
import { message, Modal } from "antd"
import jwtDecode from "jwt-decode"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useUser = create<Partial<User>>()(
  persist(
    (set, get) => ({
      reset() {
        set({
          token: undefined,
          address: undefined,
        })
      },

      async login(signer) {
        // Check connection
        if (!signer) {
          return false
        }
        const account = await signer.getAddress()
        const { address } = get()
        // Check if changed account
        const isChangedAccount = account && address && address?.toLowerCase() !== account.toLowerCase()
        if (isChangedAccount) {
          get().reset?.()
        }
        // Check token exp
        const { token } = get()
        const isTokenValid = token && jwtDecode<{ exp: number }>(token).exp * 1000 > Date.now()
        if (isTokenValid) {
          return true
        }
        get().reset?.()
        const { data: nonce } = await Service.auth.getNonce(account)
        // Check nonce
        if (!nonce) {
          message.error("Failed to get nonce")
          return false
        }
        try {
          modal.loading("Please confirm the sign message on your wallet to log in")
          const sign = await signer.signMessage(`${SIGN_MESSAGE} ${nonce}`)
          const { data, statusText } = await Service.auth.login(account, sign)
          if (!data) {
            message.error(statusText)
            return false
          }
          message.success("Logged in successfully")
          const { user_info, token } = data
          set({ ...user_info, token })
          return true
        } catch (error) {
          console.log(error)
          message.error("Sign message failed")
          return false
        } finally {
          Modal.destroyAll()
        }
      },

      logout() {
        get().reset?.()
      },
    }),
    {
      name: storageKeys.user,
    }
  )
)
