import LayoutApp from "@/app/Layout"
import { Provider } from "@/app/Provider"
import "antd/dist/reset.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useEffect, useState } from "react"
import "../styles/styles.scss"

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const _renderMeta = () => (
    <Head>
      <title>{"De-to"}</title>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

      <meta itemProp="name" content={"De-to"} />
      <meta itemProp="description" content={"Description"} />
      <meta itemProp="image" content="/thumbnail.png" />
      <meta property="og:url" content={"https://"} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={"De-to"} />
      <meta property="og:description" content={"Description"} />
      <meta property="og:image" content="/thumbnail.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={"De-to"} />
      <meta name="twitter:description" content={"Description"} />
      <meta name="twitter:image" content="/thumbnail.png"></meta>

      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )

  return (
    <>
      {_renderMeta()}
      <Provider>
        {mounted ? (
          <LayoutApp>
            <Component {...pageProps} />
          </LayoutApp>
        ) : null}
      </Provider>
    </>
  )
}
