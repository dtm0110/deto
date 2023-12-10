import { Service } from "@/services/app.service"
import { useState } from "react"
import useSWR from "swr"

const useTrending = () => {
  // const {token} = useUser()
  const [offset, setOffset] = useState(0)
  const { data: listTrending } = useSWR(["listTrending", offset], async () => {
    if(true) {}
    
    const res = await Service.user.trending({ limit: 6, offset })
    return res?.data
  } )
  return {
    listTrending,
    offset,
    setOffset,
  }
}

export default useTrending
