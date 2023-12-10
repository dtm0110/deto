import Router from "next/router"
import { useState } from "react"
import useSWR from "swr"

export const useRouterLoading = () => {
  const [routerLoading, setRouterLoading] = useState(false)

  useSWR("route loading", () => {
    Router.events.on("routeChangeStart", () => setRouterLoading(true))
    Router.events.on("routeChangeComplete", () => setRouterLoading(false))
    Router.events.on("routeChangeError", () => setRouterLoading(false))
  })

  return setRouterLoading
}
