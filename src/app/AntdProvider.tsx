import { ConfigProvider } from "antd"

const AntdProvider = ({ children }: any) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00C55E",
          fontFamily: "Roboto",
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntdProvider
