import { useSwapConfig } from "@/hooks/stores/useSwapConfig"
import { Modal } from "antd"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

export enum SlippageError {
  InvalidInput = "InvalidInput",
  RiskyLow = "RiskyLow",
}

const ConfigModal = () => {
  const [openModal, setOpenModal] = useState(false)
  const { setSlippage, slippage, deadline, setDeadline } = useSwapConfig()

  const [error, setError] = useState<string | null>(null)
  const [value, setValue] = useState<string>(slippage)

  useEffect(() => {
    try {
      const rawValue = Number(value)
      if (!Number.isNaN(rawValue) && rawValue >= 0.1 && rawValue < 50) {
        if (rawValue >= 10 && rawValue < 50) {
          setError(SlippageError.RiskyLow)
        } else if (rawValue > 0 && rawValue < 0.5) {
          setError(SlippageError.RiskyLow)
        } else {
          setError(null)
        }
        setSlippage(value)
      } else {
        setError(SlippageError.InvalidInput)
      }
    } catch {
      setError(SlippageError.InvalidInput)
    }
  }, [setError, setSlippage, value])

  return (
    <>
      <div className="cursor-pointer" onClick={() => setOpenModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path
            d="M20.7439 16.2206L20.1043 15.8289V15.8289L20.7439 16.2206ZM19.7894 17.7794L20.429 18.1711V18.1711L19.7894 17.7794ZM3.25609 8.77942L2.61648 8.38775H2.61648L3.25609 8.77942ZM4.21064 7.22057L4.85025 7.61223L4.21064 7.22057ZM6.81852 6.56172L7.1771 5.903L7.1771 5.903L6.81852 6.56172ZM3.95487 11.2383L3.59629 11.897H3.59629L3.95487 11.2383ZM17.1815 18.4383L16.8229 19.097L16.8229 19.097L17.1815 18.4383ZM20.0451 13.7617L19.6866 14.4204V14.4205L20.0451 13.7617ZM4.21064 17.7794L3.57103 18.1711L3.57103 18.1711L4.21064 17.7794ZM3.25609 16.2206L3.8957 15.8289L3.8957 15.8289L3.25609 16.2206ZM19.7894 7.22058L20.429 6.82892V6.82892L19.7894 7.22058ZM20.7439 8.77943L20.1043 9.17109V9.17109L20.7439 8.77943ZM20.0451 11.2383L20.4037 11.897L20.0451 11.2383ZM17.1815 6.56174L17.5401 7.22046V7.22046L17.1815 6.56174ZM3.95487 13.7617L4.31345 14.4205H4.31345L3.95487 13.7617ZM6.81851 18.4383L6.45994 17.7795L6.45993 17.7795L6.81851 18.4383ZM17.08 6.61698L16.7214 5.95825L17.08 6.61698ZM6.92 6.61697L6.56142 7.27569L6.56142 7.27569L6.92 6.61697ZM17.08 18.383L17.4386 17.7243L17.4386 17.7243L17.08 18.383ZM6.92 18.383L7.27858 19.0418L7.27858 19.0418L6.92 18.383ZM11.0455 4.25H12.9545V2.75H11.0455V4.25ZM12.9545 20.75H11.0455V22.25H12.9545V20.75ZM11.0455 20.75C10.3631 20.75 9.88635 20.2389 9.88635 19.7H8.38635C8.38635 21.1493 9.61906 22.25 11.0455 22.25V20.75ZM14.1136 19.7C14.1136 20.2389 13.6369 20.75 12.9545 20.75V22.25C14.3809 22.25 15.6136 21.1493 15.6136 19.7H14.1136ZM12.9545 4.25C13.6369 4.25 14.1136 4.76107 14.1136 5.3H15.6136C15.6136 3.85071 14.3809 2.75 12.9545 2.75V4.25ZM11.0455 2.75C9.61906 2.75 8.38635 3.85071 8.38635 5.3H9.88635C9.88635 4.76107 10.3631 4.25 11.0455 4.25V2.75ZM20.1043 15.8289L19.1498 17.3878L20.429 18.1711L21.3835 16.6122L20.1043 15.8289ZM3.8957 9.17108L4.85025 7.61223L3.57103 6.82891L2.61648 8.38775L3.8957 9.17108ZM4.85025 7.61223C5.15889 7.1082 5.88055 6.90506 6.45993 7.22045L7.1771 5.903C5.93027 5.22428 4.31676 5.61109 3.57103 6.82891L4.85025 7.61223ZM4.31345 10.5795C3.75746 10.2769 3.6043 9.64696 3.8957 9.17108L2.61648 8.38775C1.85352 9.63373 2.32606 11.2055 3.59629 11.897L4.31345 10.5795ZM19.1498 17.3878C18.8411 17.8918 18.1195 18.0949 17.5401 17.7795L16.8229 19.097C18.0697 19.7757 19.6832 19.3889 20.429 18.1711L19.1498 17.3878ZM21.3835 16.6122C22.1465 15.3663 21.6739 13.7945 20.4037 13.103L19.6866 14.4205C20.2425 14.7231 20.3957 15.353 20.1043 15.8289L21.3835 16.6122ZM4.85025 17.3878L3.8957 15.8289L2.61648 16.6122L3.57103 18.1711L4.85025 17.3878ZM19.1498 7.61225L20.1043 9.17109L21.3835 8.38777L20.429 6.82892L19.1498 7.61225ZM20.1043 9.17109C20.3957 9.64697 20.2425 10.2769 19.6866 10.5795L20.4037 11.897C21.6739 11.2055 22.1465 9.63374 21.3835 8.38777L20.1043 9.17109ZM17.5401 7.22046C18.1195 6.90507 18.8411 7.10822 19.1498 7.61225L20.429 6.82892C19.6832 5.6111 18.0697 5.22429 16.8229 5.90301L17.5401 7.22046ZM3.8957 15.8289C3.6043 15.353 3.75746 14.7231 4.31345 14.4205L3.59629 13.103C2.32606 13.7945 1.85352 15.3663 2.61648 16.6122L3.8957 15.8289ZM3.57103 18.1711C4.31675 19.3889 5.93027 19.7757 7.1771 19.097L6.45993 17.7795C5.88055 18.0949 5.15889 17.8918 4.85025 17.3878L3.57103 18.1711ZM17.4386 7.2757L17.5401 7.22046L16.8229 5.90301L16.7214 5.95825L17.4386 7.2757ZM6.45993 7.22045L6.56142 7.27569L7.27858 5.95824L7.1771 5.903L6.45993 7.22045ZM17.5401 17.7795L17.4386 17.7243L16.7214 19.0417L16.8229 19.097L17.5401 17.7795ZM6.56142 17.7243L6.45994 17.7795L7.17709 19.097L7.27858 19.0418L6.56142 17.7243ZM3.59629 11.897C4.07404 12.1571 4.07404 12.8429 3.59629 13.103L4.31345 14.4205C5.83498 13.5922 5.83498 11.4078 4.31345 10.5795L3.59629 11.897ZM7.27858 19.0418C7.77798 18.7699 8.38635 19.1314 8.38635 19.7H9.88635C9.88635 17.9934 8.06035 16.9084 6.56142 17.7243L7.27858 19.0418ZM15.6136 19.7C15.6136 19.1314 16.222 18.7699 16.7214 19.0417L17.4386 17.7243C15.9397 16.9083 14.1136 17.9934 14.1136 19.7H15.6136ZM20.4037 13.103C19.926 12.8429 19.926 12.1571 20.4037 11.897L19.6866 10.5795C18.165 11.4078 18.165 13.5922 19.6866 14.4204L20.4037 13.103ZM6.56142 7.27569C8.06035 8.09165 9.88635 7.00663 9.88635 5.3H8.38635C8.38635 5.8686 7.77798 6.2301 7.27858 5.95824L6.56142 7.27569ZM16.7214 5.95825C16.222 6.23011 15.6136 5.86861 15.6136 5.3H14.1136C14.1136 7.00663 15.9397 8.09166 17.4386 7.2757L16.7214 5.95825ZM14.25 12.5C14.25 13.7426 13.2426 14.75 12 14.75V16.25C14.0711 16.25 15.75 14.5711 15.75 12.5H14.25ZM12 14.75C10.7574 14.75 9.75001 13.7426 9.75001 12.5H8.25001C8.25001 14.5711 9.92894 16.25 12 16.25V14.75ZM9.75001 12.5C9.75001 11.2574 10.7574 10.25 12 10.25V8.75C9.92894 8.75 8.25001 10.4289 8.25001 12.5H9.75001ZM12 10.25C13.2426 10.25 14.25 11.2574 14.25 12.5H15.75C15.75 10.4289 14.0711 8.75 12 8.75V10.25Z"
            fill="#ACB0B6"
          />
        </svg>
      </div>
      <Modal open={openModal} footer={[]} onCancel={() => setOpenModal(false)} closeIcon={<></>}>
        <div className="bg-gray-900 p-6 rounded-xl flex flex-col gap-2 text-white">
          <div>Slippage</div>
          <input
            value={value}
            className="text-black"
            placeholder="Enter an amount"
            type="text"
            onPaste={(e) => e.preventDefault()}
            onChange={(el) => {
              const pattern = `^[0-9]+([.][0-9]{0,${8}})?$`
              const regTest = new RegExp(pattern, "g")
              if (regTest.test(el.target.value) || el.target.value == "") {
                setValue(el.target.value)
              }
            }}
            onKeyPress={(e) => {
              if (!e.key || (value.indexOf(".") > -1 && e.key == ".")) {
                e.preventDefault()
              }
            }}
          />
          {error && (
            <div
              className={twMerge("mt-2", error === SlippageError.InvalidInput ? "text-error-500" : "text-warning-500")}
            >
              {error === SlippageError.InvalidInput
                ? "Enter a valid slippage percentage"
                : error === SlippageError.RiskyLow
                ? "Your transaction may fail"
                : "Your transaction may be frontrun"}
            </div>
          )}
          <div>Deadline (seconds)</div>
          <input
            value={deadline}
            className="text-black"
            placeholder="Enter an amount"
            type="text"
            onPaste={(e) => e.preventDefault()}
            onChange={(el) => {
              const pattern = `^[0-9]+([.][0-9]{0,${8}})?$`
              const regTest = new RegExp(pattern, "g")
              if (regTest.test(el.target.value) || el.target.value == "") {
                setDeadline(el.target.value)
              }
            }}
            onKeyPress={(e) => {
              if (!e.key || (value.indexOf(".") > -1 && e.key == ".")) {
                e.preventDefault()
              }
            }}
          />
        </div>
      </Modal>
    </>
  )
}

export default ConfigModal
