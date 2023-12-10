import { Service } from "@/services/app.service"
import { useState } from "react"

export const useSearch = () => {
  // const {token} = useUser()
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState({})
  const [listResult, setListResult] = useState<any>(null)
  const handleSubmitSearch = async (data: any) => {
    try {
      const res = await Service.user.search({ ...data })

      setListResult(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    listResult,
    offset,
    setOffset,
    setData,
    submitSearch: handleSubmitSearch,
  }
}

export default useSearch
