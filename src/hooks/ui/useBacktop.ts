import { useEffect, useState } from "react"

export const useBackTop = () => {
  const [visible, setVisible] = useState(false)

  const backTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setVisible(window.scrollY > 10)
    })
  }, [])

  return { visible, backTop }
}
