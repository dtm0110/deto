import { Service } from "@/services/app.service"
import useSWR from "swr"

const useGetListLike = (pagination: any) => {
  // const {token} = useUser()
  const { data: listLike } = useSWR(["getListLike"], async () => {
    const res = await Service.user.trending(pagination)
    return res?.data
  })
  return {
    listLike,
  }
}

export default useGetListLike
