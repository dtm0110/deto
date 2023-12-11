import useTrending from "@/hooks/user/trending";
import useGetListLike from "@/hooks/user/use-get-list-like"
import { useEffect, useState } from "react"

const KetQuaPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { listTrending,offset,setOffset } = useTrending();

  const [trending, setTrending] = useState(0)
  // let trending = 0;


  console.log(listTrending);
  
  const handlePaginationTrending = (type: number) => {
    console.log("trending ban dau", trending);
    
      if(type === 1 && trending > 1){
        setTrending(trending - 1)
        // trending -= 1
      }
      if(type === 2  && trending < listTrending.data.length - 1){
        setTrending(trending + 1)
          // trending += 1
      }

      console.log("trending sau ", trending);
      
  }

  const handlePagination = (type:any) => {
    if(type == 1){
        setCurrentPage(1);
        setOffset((currentPage  - 1 ) * 6)
    }
    if(type === 2){
      if(currentPage > 1){
      setCurrentPage(currentPage - 1);
      setOffset((currentPage  - 1 ) * 6)
      }
    }
    
    if(type === 3){
      if(currentPage < Math.floor(listTrending.total / 6 + 1)){
        setCurrentPage(currentPage + 1);
        setOffset((currentPage - 1) * 6)
      }
    }
    if(type == 4){
      setCurrentPage(Math.floor(listTrending.total / 6 + 1));
      setOffset((currentPage - 1) * 6)

      console.log("4 t", listTrending.total / 6 + 1);
      console.log((currentPage - 1) * 6);
      
      
    }

    console.log("current page: " + currentPage);

  }

  useEffect(() => {

  }, [offset, trending])


  return (
    <div>
      <div className=" flex text-white text-xl font-bold items-center px-6 h-11 bg-[linear-gradient(90deg,_#353434_16.7%,_rgba(255,_66,_66,_0.74)_54.6%,_rgba(255,_105,_108,_0.00)_99.88%);]">
        De xuat
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center max-w-[100rem] mx-auto my-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-20" viewBox="0 0 12 12" fill="none" onClick={() => handlePaginationTrending(1)} style={{cursor:"pointer"}}>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4685 0.414376C11.7919 0.673133 11.8444 1.1451 11.5856 1.46855L7.96044 6.00003L11.5856 10.5315C11.8444 10.855 11.7919 11.3269 11.4685 11.5857C11.145 11.8444 10.6731 11.792 10.4143 11.4685L6.41432 6.46855C6.19519 6.19464 6.19519 5.80542 6.41432 5.53151L10.4143 0.531506C10.6731 0.20806 11.145 0.155619 11.4685 0.414376Z"
              fill="black"
            />
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.46849 0.414376C5.79194 0.673133 5.84438 1.1451 5.58562 1.46855L1.96044 6.00003L5.58562 10.5315C5.84438 10.855 5.79194 11.3269 5.46849 11.5857C5.14505 11.8444 4.67308 11.792 4.41432 11.4685L0.414321 6.46855C0.19519 6.19464 0.19519 5.80542 0.414321 5.53151L4.41432 0.531506C4.67308 0.20806 5.14505 0.155619 5.46849 0.414376Z"
              fill="black"
            />
          </svg>
          <div className="flex items-center gap-10">
            <img src={listTrending?.data[trending].avatar} className="h-80 w-56 object-fill" alt="" />
            <div className="p-2 flex flex-col gap-2">
              <div>
              {listTrending?.data[trending].fullname} <span className="h-3 w-3 rounded-full inline-block bg-green-500"></span>
              </div>
              <div>{listTrending?.data[trending].age}</div>
              <div>{listTrending?.data[trending].city_name}</div>
              <div>{listTrending?.data[trending].description}</div>
              <div className="flex items-center gap-6 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.27598 13.8336L11.1306 20.4158C11.3768 20.6523 11.5 20.7706 11.6463 20.7982C11.7075 20.8097 11.7703 20.8097 11.8315 20.7982C11.9778 20.7706 12.101 20.6523 12.3472 20.4158L19.2018 13.8336C21.0819 12.0282 21.3113 9.10082 19.7355 7.02461L19.3752 6.54989C17.4617 4.02886 13.5541 4.44545 12.2152 7.31321C12.0264 7.71757 11.4514 7.71757 11.2626 7.31321C9.92365 4.44545 6.01609 4.02886 4.10264 6.54989L3.74233 7.02461C2.1665 9.10082 2.39593 12.0282 4.27598 13.8336Z"
                    fill="#222222"
                    stroke="#222222"
                    strokeWidth="2"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.99979 10.4C2.99979 8.15979 2.99979 7.03969 3.43576 6.18404C3.81926 5.43139 4.43118 4.81947 5.18383 4.43597C6.03947 4 7.15958 4 9.39979 4H14.5998C16.84 4 17.9601 4 18.8158 4.43597C19.5684 4.81947 20.1803 5.43139 20.5638 6.18404C20.9998 7.03969 20.9998 8.15979 20.9998 10.4V11.6C20.9998 13.8402 20.9998 14.9603 20.5638 15.816C20.1803 16.5686 19.5684 17.1805 18.8158 17.564C17.9601 18 16.84 18 14.5998 18H7.26828C6.99925 18 6.74157 18.1084 6.55345 18.3007L4.6494 20.2471C4.02269 20.8877 2.93457 20.444 2.93457 19.5478V18V13.0326C2.93457 13.0146 2.94917 13 2.96718 13C2.98519 13 2.99979 12.9854 2.99979 12.9674V10.4ZM8.80414 8C8.25185 8 7.80414 8.44772 7.80414 9C7.80414 9.55228 8.25185 10 8.80414 10H14.6737C15.226 10 15.6737 9.55228 15.6737 9C15.6737 8.44772 15.226 8 14.6737 8H8.80414ZM8.80414 12C8.25185 12 7.80414 12.4477 7.80414 13C7.80414 13.5523 8.25185 14 8.80414 14H11.7389C12.2912 14 12.7389 13.5523 12.7389 13C12.7389 12.4477 12.2912 12 11.7389 12H8.80414Z"
                    fill="#222222"
                  />
                </svg>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-20" viewBox="0 0 12 12" fill="none" style={{cursor:"pointer"}} onClick={() => handlePaginationTrending(2)}>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
              fill="black"
            />
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.53151 0.414376C6.20806 0.673133 6.15562 1.1451 6.41438 1.46855L10.0396 6.00003L6.41438 10.5315C6.15562 10.855 6.20806 11.3269 6.53151 11.5857C6.85495 11.8444 7.32692 11.792 7.58568 11.4685L11.5857 6.46855C11.8048 6.19464 11.8048 5.80542 11.5857 5.53151L7.58568 0.531506C7.32692 0.20806 6.85495 0.155619 6.53151 0.414376Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="grid grid-cols-6 gap-6 max-w-[100rem] mx-auto"  >
          {listTrending?.data.map((value: any, index:any) => (
            <div key={index} className="border border-solid border-black">
              <img src={value.avatar} className="w-full aspect-square object-cover mb-2" alt="" />
              <div className="p-2 flex flex-col gap-2">
                <div>
                  {value.fullname} <span className="h-3 w-3 rounded-full inline-block bg-green-500"></span>
                </div>
                <div>{value.age}</div>
                <div>{value.city_name || "Ha noi"} </div>
                <div>{value.description || "default"} </div>
                <div className="flex items-center gap-6 w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4.27598 13.8336L11.1306 20.4158C11.3768 20.6523 11.5 20.7706 11.6463 20.7982C11.7075 20.8097 11.7703 20.8097 11.8315 20.7982C11.9778 20.7706 12.101 20.6523 12.3472 20.4158L19.2018 13.8336C21.0819 12.0282 21.3113 9.10082 19.7355 7.02461L19.3752 6.54989C17.4617 4.02886 13.5541 4.44545 12.2152 7.31321C12.0264 7.71757 11.4514 7.71757 11.2626 7.31321C9.92365 4.44545 6.01609 4.02886 4.10264 6.54989L3.74233 7.02461C2.1665 9.10082 2.39593 12.0282 4.27598 13.8336Z"
                      fill="#222222"
                      stroke="#222222"
                      strokeWidth="2"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.99979 10.4C2.99979 8.15979 2.99979 7.03969 3.43576 6.18404C3.81926 5.43139 4.43118 4.81947 5.18383 4.43597C6.03947 4 7.15958 4 9.39979 4H14.5998C16.84 4 17.9601 4 18.8158 4.43597C19.5684 4.81947 20.1803 5.43139 20.5638 6.18404C20.9998 7.03969 20.9998 8.15979 20.9998 10.4V11.6C20.9998 13.8402 20.9998 14.9603 20.5638 15.816C20.1803 16.5686 19.5684 17.1805 18.8158 17.564C17.9601 18 16.84 18 14.5998 18H7.26828C6.99925 18 6.74157 18.1084 6.55345 18.3007L4.6494 20.2471C4.02269 20.8877 2.93457 20.444 2.93457 19.5478V18V13.0326C2.93457 13.0146 2.94917 13 2.96718 13C2.98519 13 2.99979 12.9854 2.99979 12.9674V10.4ZM8.80414 8C8.25185 8 7.80414 8.44772 7.80414 9C7.80414 9.55228 8.25185 10 8.80414 10H14.6737C15.226 10 15.6737 9.55228 15.6737 9C15.6737 8.44772 15.226 8 14.6737 8H8.80414ZM8.80414 12C8.25185 12 7.80414 12.4477 7.80414 13C7.80414 13.5523 8.25185 14 8.80414 14H11.7389C12.2912 14 12.7389 13.5523 12.7389 13C12.7389 12.4477 12.2912 12 11.7389 12H8.80414Z"
                      fill="#222222"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between my-10 max-w-[100rem] mx-auto">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2" onClick={() => handlePagination(1)}  style={{cursor:"pointer"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.4685 0.414376C11.7919 0.673133 11.8444 1.1451 11.5856 1.46855L7.96044 6.00003L11.5856 10.5315C11.8444 10.855 11.7919 11.3269 11.4685 11.5857C11.145 11.8444 10.6731 11.792 10.4143 11.4685L6.41432 6.46855C6.19519 6.19464 6.19519 5.80542 6.41432 5.53151L10.4143 0.531506C10.6731 0.20806 11.145 0.155619 11.4685 0.414376Z"
                  fill="black"
                />
                <path
                  opacity="0.4"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.46849 0.414376C5.79194 0.673133 5.84438 1.1451 5.58562 1.46855L1.96044 6.00003L5.58562 10.5315C5.84438 10.855 5.79194 11.3269 5.46849 11.5857C5.14505 11.8444 4.67308 11.792 4.41432 11.4685L0.414321 6.46855C0.19519 6.19464 0.19519 5.80542 0.414321 5.53151L4.41432 0.531506C4.67308 0.20806 5.14505 0.155619 5.46849 0.414376Z"
                  fill="black"
                />
              </svg>
              Đầu tiên
            </div>
            <div className="flex items-center gap-2"  onClick={() => handlePagination(2)} style={{cursor:"pointer"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.46849 0.414376C5.79194 0.673133 5.84438 1.1451 5.58562 1.46855L1.96044 6.00003L5.58562 10.5315C5.84438 10.855 5.79194 11.3269 5.46849 11.5857C5.14505 11.8444 4.67308 11.792 4.41432 11.4685L0.414321 6.46855C0.195189 6.19464 0.195189 5.80542 0.414321 5.53151L4.41432 0.531506C4.67308 0.20806 5.14505 0.155619 5.46849 0.414376Z"
                  fill="black"
                />
              </svg>
              Trước
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2"  onClick={() => handlePagination(3)} style={{cursor:"pointer"}}>
              Tiếp theo
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2"  onClick={() => handlePagination(4)} style={{cursor:"pointer"}}>
              Cuối cùng
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                  fill="black"
                />
                <path
                  opacity="0.4"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.53151 0.414376C6.20806 0.673133 6.15562 1.1451 6.41438 1.46855L10.0396 6.00003L6.41438 10.5315C6.15562 10.855 6.20806 11.3269 6.53151 11.5857C6.85495 11.8444 7.32692 11.792 7.58568 11.4685L11.5857 6.46855C11.8048 6.19464 11.8048 5.80542 11.5857 5.53151L7.58568 0.531506C7.32692 0.20806 6.85495 0.155619 6.53151 0.414376Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KetQuaPage
