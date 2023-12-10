import { routers } from "@/constants/app"
import Link from "next/link"
import { useRouter } from "next/router"
import { twMerge } from "tailwind-merge"

const LayoutApp = ({ children }: any) => {
  const router = useRouter()
  const _renderHeader = () => {
    return (
      <div className="h-16 px-6 flex justify-between items-center bg-white">
        <img src="/logo/logo.png" className="h-12" alt="" />
        <div className="flex items-center gap-20">
          {routers.map((value) => (
            <Link href={value.link} key={value.title}>
              <div
                className={twMerge("text-xl text-black", router.pathname.indexOf(value.link) > -1 && "text-red-500")}
              >
                {value.title}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl">MT Quynh </div>
            <img src="/images/avatar.png" alt="" />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="59" viewBox="0 0 60 59" fill="none">
            <path d="M12.5 17.5H47.5" stroke="#33363F" strokeWidth="2" strokeLinecap="round" />
            <path d="M12.5 30H47.5" stroke="#33363F" strokeWidth="2" strokeLinecap="round" />
            <path d="M12.5 42.5H47.5" stroke="#33363F" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    )
  }

  const _renderPage = () => {
    return <div className="flex-1">{children}</div>
  }

  const _footerPage = () => {
    return (
      <div className="h-16 justify-between flex items-center bg-white px-6 text-black text-xl">
        <div>Bản quyền thuộc về nhóm De-to</div>
        <div>Liên hệ : deto123@gmail.com | 0123456789 </div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col min-h-screen bg-[url(/images/bofy.png)] bg-no-repeat bg-cover bg-center`}>
      {_renderHeader()}
      {_renderPage()}
      {_footerPage()}
    </div>
  )
}
export default LayoutApp
