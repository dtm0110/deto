import { useState } from "react"

const InputNumber = () => {
  const [amount, setAmount] = useState("")
  return (
    <input
      value={amount}
      placeholder="Enter an amount"
      type="text"
      onPaste={(e) => e.preventDefault()}
      onChange={(el) => {
        const pattern = `^[0-9]+([.][0-9]{0,${8}})?$`
        const regTest = new RegExp(pattern, "g")
        if (regTest.test(el.target.value) || el.target.value == "") {
          setAmount(el.target.value)
        }
      }}
      onKeyPress={(e) => {
        if (!e.key || (amount.indexOf(".") > -1 && e.key == ".")) {
          e.preventDefault()
        }
      }}
    />
  )
}

export default InputNumber
