import { configSWR } from "@/config/swr.config"
import { SWRConfig } from "swr"
import AntdProvider from "./AntdProvider"
import { GlobalHooks } from "./GlobalHook"

export const Provider = ({ children }: any) => {
  return (
    <SWRConfig value={configSWR}>
      <GlobalHooks />
      <AntdProvider>{children}</AntdProvider>
    </SWRConfig>
  )
}
