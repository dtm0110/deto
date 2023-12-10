import { ADDRESS_0, CURRECIES_CONFIG, GAS_FEE } from "@/constants/contracts"
import { useNativeTokenBalance } from "@/hooks/core/useNativeTokenBalance"
import { useTokenBalance } from "@/hooks/erc20/useTokenBalance"
import { useWeb3Store } from "@/hooks/stores/useWeb3Store"
import formatPrice from "@/utils/formatPrice"
import { getTokenImageUrl } from "@/utils/getTokenImageUrl"
import { showSymbol } from "@/utils/showSymbol"
import { formatUnits, parseUnits } from "ethers/lib/utils.js"
import { useEffect } from "react"
import { Address } from "wagmi"

const SwapInput = ({
  token,
  amount,
  setAmount,
  title,
  handleChange,
  setInsufficient,
}: {
  token?: {
    address: Address
    decimals: number
    name: string
    symbol: string
  }
  amount: string
  setAmount: (value: string) => void
  handleChange: (value: string) => void
  title: string
  setInsufficient?: (value: boolean) => void
}) => {
  const tokenAbalance = useTokenBalance(token?.address ?? ADDRESS_0)
  const ethBalance = useNativeTokenBalance()
  const { chain } = useWeb3Store()
  const handleMax = () => {
    const value =
      token?.address.toLowerCase() !== CURRECIES_CONFIG.WETH[chain.id].toLowerCase()
        ? tokenAbalance
          ? formatUnits(tokenAbalance, token?.decimals)
          : "0"
        : ethBalance
        ? +formatUnits(ethBalance.sub(parseUnits(GAS_FEE[chain.id], token.decimals)), token?.decimals) > 0
          ? formatUnits(ethBalance.sub(parseUnits(GAS_FEE[chain.id], token.decimals)), token?.decimals)
          : "0"
        : "0"
    setAmount(value)
    handleChange(value)
  }

  useEffect(() => {
    if (setInsufficient) {
      if (tokenAbalance && ethBalance && amount && token) {
        if (token.address.toLowerCase() == CURRECIES_CONFIG.WETH[chain.id].toLowerCase()) {
          if (+formatUnits(ethBalance.sub(parseUnits(amount, token.decimals)), token?.decimals) < 0) {
            setInsufficient(true)
          } else {
            setInsufficient(false)
          }
        } else if (+formatUnits(tokenAbalance.sub(parseUnits(amount, token.decimals)), token?.decimals) < 0) {
          setInsufficient(true)
        } else {
          setInsufficient(false)
        }
      } else {
        if (!amount) {
          setInsufficient(false)
        }
      }
    }
  }, [amount, tokenAbalance, ethBalance])

  if (!token) {
    return <div>Select token</div>
  }

  return (
    <div className="flex gap-2 flex-col">
      <div className="flex items-center justify-between">
        <div className="w-12">{title} </div>
        <div className="flex items-center gap-1 cursor-pointer p-1 border rounded-lg">
          <img src={getTokenImageUrl(token)} alt="" className="w-6 h-6 rounded-full" />
          {showSymbol(token)}
        </div>
      </div>
      <input
        value={amount}
        placeholder="Enter an amount"
        type="text"
        onPaste={(e) => e.preventDefault()}
        onChange={(el) => {
          const pattern = `^[0-9]+([.][0-9]{0,${token?.decimals}})?$`
          const regTest = new RegExp(pattern, "g")
          if (regTest.test(el.target.value) || el.target.value == "") {
            setAmount(el.target.value)
            handleChange(el.target.value)
          }
        }}
        onKeyPress={(e) => {
          if (!e.key || (amount.indexOf(".") > -1 && e.key == ".")) {
            e.preventDefault()
          }
        }}
      />
      <div className="flex items-center justify-between">
        Balance:
        {formatPrice(
          token?.address.toLowerCase() !== CURRECIES_CONFIG.WETH[chain.id].toLowerCase()
            ? tokenAbalance
              ? formatUnits(tokenAbalance, token?.decimals)
              : "0"
            : ethBalance
            ? formatUnits(ethBalance, token?.decimals)
            : "0"
        )}
        <div className="cursor-pointer" onClick={handleMax}>
          MAX
        </div>
      </div>
    </div>
  )
}

export default SwapInput
