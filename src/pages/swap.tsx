import ConfigModal from "@/components/swap/ConfigModal"
import SwapInput from "@/components/swap/SwapInput"
import { CURRECIES_CONFIG } from "@/constants/contracts"
import { useConnectWallet } from "@/hooks/core/useConnectWallet"
import useFactory from "@/hooks/factory/useFactory"
import { useWeb3Store } from "@/hooks/stores/useWeb3Store"
import useSwap from "@/hooks/swap/useSwap"
import { showSymbol } from "@/utils/showSymbol"
import { Button } from "antd"
import { formatUnits } from "ethers/lib/utils.js"
import { useEffect, useState } from "react"

const SwapPage = () => {
  const { chain, account } = useWeb3Store()
  const { connect } = useConnectWallet()

  const [inputA, setInputA] = useState("")
  const [inputB, setInputB] = useState("")
  const [tokenA, setTokenA] = useState(CURRECIES_CONFIG.WETH[chain.id])
  const [tokenB, setTokenB] = useState(CURRECIES_CONFIG.TOKEN[chain.id])
  const [insufficient, setInsufficient] = useState(false)

  useEffect(() => {
    setTokenA(CURRECIES_CONFIG.TOKEN[chain.id])
    setTokenB(CURRECIES_CONFIG.WETH[chain.id])
  }, [chain])

  const { pairAddress, isLiquidity, tokenADetail, tokenBDetail } = useFactory({ tokenA, tokenB })
  const { getAmountsOut, getAmountsIn, swapToken } = useSwap()

  const handleGetAmountsOut = async (value: string) => {
    if (tokenADetail && tokenBDetail && value) {
      const tx = await getAmountsOut({ amount: value, tokenA: tokenADetail, tokenB: tokenBDetail })
      if (tx) {
        setInputB(formatUnits(tx, tokenBDetail.decimals))
        return
      }
    } else {
      setInputB("0")
    }
  }

  const handleGetAmountsIn = async (value: string) => {
    if (tokenADetail && tokenBDetail && value) {
      const tx = await getAmountsIn({ amount: value, tokenA: tokenADetail, tokenB: tokenBDetail })
      if (tx) {
        setInputA(formatUnits(tx, tokenADetail.decimals))
        return
      }
    } else {
      setInputA("0")
    }
  }

  const handleSwapToken = async () => {
    if (tokenADetail && tokenBDetail) {
      await swapToken({ amountInput: inputA, amountOutput: inputB, tokenA: tokenADetail, tokenB: tokenBDetail })
      setInputA("")
      setInputB("")
    }
  }

  const _renderButton = () => {
    if (!account) {
      return <Button onClick={connect}>connect wallet</Button>
    }
    if (insufficient) {
      return "insufficient " + showSymbol(tokenADetail) + " balance"
    }
    return <Button onClick={handleSwapToken}>Swap</Button>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div>Swap</div>
        <ConfigModal />
      </div>
      <SwapInput
        title="From: "
        token={tokenADetail}
        amount={inputA}
        setAmount={setInputA}
        handleChange={handleGetAmountsOut}
        setInsufficient={setInsufficient}
      />
      <div className="h-4"></div>
      <SwapInput
        title="To: "
        token={tokenBDetail}
        amount={inputB}
        setAmount={setInputB}
        handleChange={handleGetAmountsIn}
      />
      <div className="h-5"></div>
      {_renderButton()}
    </div>
  )
}

export default SwapPage
