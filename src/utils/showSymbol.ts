import { Token } from "@/@interfaces/token"
import { CURRECIES_CONFIG, NATIVE_SYMBOL } from "@/constants/contracts"
import { useWeb3Store } from "@/hooks/stores/useWeb3Store"

export const showSymbol = (token?: Token) => {
  const { chain } = useWeb3Store.getState()
  if (token) {
    if (token.address.toLowerCase() == CURRECIES_CONFIG.WETH[chain.id].toLowerCase()) {
      return NATIVE_SYMBOL[chain.id]
    }
    return token.symbol
  }
  return ""
}
