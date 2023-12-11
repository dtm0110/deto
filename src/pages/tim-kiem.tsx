import { useSearch } from "@/hooks/user/search"
import { Button, Checkbox, Select } from "antd"
import { useEffect, useState } from "react"

const TimKiemPage = () => {
  const { listResult, submitSearch } = useSearch()

  console.log({listResult})

  const [hobby, setHobby] = useState([])
  const [city, setCity] = useState(1)
  const [ageStart, setAgeStart] = useState(20)
  const [ageEnd, setAgeEnd] = useState(20)
  const [gender, setGender] = useState(1)
  const options: any = [
    {
      label: "Đọc sách",
      value: 1,
    },
    {
      label: "Xem phim",
      value: 2,
    },
    {
      label: "Nghe nhạc",
      value: 3,
    },
    {
      label: "Ca hát ",
      value: 4,
    },
    {
      label: "Chơi game",
      value: 5,
    },
    {
      label: "Thể thao ",
      value: 6,
    },
    {
      label: "Cafe",
      value: 7,
    },
    {
      label: "Chó ",
      value: 8,
    },
    {
      label: "Mèo ",
      value: 9,
    },
  ]


  const handleChangeGender = (value: string) => {
    setGender(+value)
  }

  const handleChangeAgeStart = (value: string) => {
    console.log(`selected ${value}`)
    setAgeStart(+value)
  }

  const handleChangeAgeEnd = (value: string) => {
    console.log(`selected ${value}`)
    setAgeEnd(+value)
  }

  const handleChangeCity = (value: string) => {
    console.log(`selected ${value}`)
    setCity(+value)
  }

  const handleSubmit = () => {
    submitSearch({
      gender: gender,
      age_from: ageStart,
      age_to: ageEnd,
      city: city,
      favorite: hobby,
    })
  }

  useEffect(() => {}, [])

  return (
    <div className="p-6">
      <div className=" flex text-green-500 text-xl font-bold items-center px-6 h-11 bg-[linear-gradient(90deg,_#353434_16.7%,_rgba(255,_66,_66,_0.74)_54.6%,_rgba(255,_105,_108,_0.00)_99.88%);]">
        Tìm kiếm nâng cao
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-end">
          <img src="/images/reload.png" alt="" />
        </div>
        <div className="border-b border-solid border-black text-2xl leading-tight pl-6 mb-8">Giới tính , độ tuổi </div>
        <div className="pl-6 flex items-center gap-28 mb-10">
          <div className="flex flex-col">
            <div>Tôi tìm</div>
            <Select
              defaultValue="1"
              style={{ width: 100 }}
              options={[
                { value: "1", label: "Nam" },
                { value: "2", label: "Nữ" },
              ]}
              value={gender.toString()}
              onChange={handleChangeGender}
            />
          </div>
          <div className="flex flex-col">
            <div>Tuổi</div>
            <div>
              <Select
                defaultValue="20"
                style={{ width: 70 }}
                options={[
                  { value: "15", label: "15" },
                  { value: "20", label: "20" },
                  { value: "30", label: "30" },
                ]}
                value={ageStart.toString()}
                onChange={handleChangeAgeStart}
              />
              <Select
                defaultValue="30"
                style={{ width: 70 }}
                options={[
                  { value: "20", label: "20" },
                  { value: "30", label: "30" },
                  { value: "40", label: "40" },
                ]}
                value={ageEnd.toString()}
                onChange={handleChangeAgeEnd}
              />
            </div>
          </div>
        </div>
        <div className="border-b border-solid border-black text-2xl leading-tight pl-6 mb-8">Địa chỉ đang sống </div>
        <div className="pl-6 flex items-center gap-28 mb-10">
          <div className="flex flex-col">
            <div>Tỉnh/Thành phố </div>
            <Select
              defaultValue="1"
              style={{ width: 100 }}
              options={[
                { value: "1", label: "Hà Nội " },
                { value: "2", label: "TP HCM " },
                { value: "3", label: "Đà Năng " },
                { value: "4", label: " Hải Phòng" },
                { value: "5", label: "Bình Dương " },
                { value: "6", label: "Ninh Bình " },
              ]}
              value={city.toString()}
              onChange={handleChangeCity}
            />
          </div>
        </div>
        <div className="border-b border-solid border-black text-2xl leading-tight pl-6 mb-8">Sở thích </div>
        <div className="">
          {/* <Checkbox>Bất kỳ</Checkbox> */}
          <Checkbox.Group
            options={options}
            onChange={(checkedValue) => setHobby(checkedValue as any)}
            value={hobby}
            className="pl-6 grid grid-cols-5 items-center gap-10 w-4/5 mb-14"
          />
          {/* <Checkbox onChange={(e) => onChange(e, 1)}>Đọc sách </Checkbox>
          <Checkbox onChange={(e) => onChange(e, 2)}> Xem phim </Checkbox>
          <Checkbox onChange={(e) => onChange(e, 3)}>Nghe nhạc </Checkbox>
          <Checkbox onChange={(e) => onChange(e, 4)}>Ca hát </Checkbox>

          <Checkbox onChange={(e) => onChange(e, 5)}>Chơi game </Checkbox>
          <Checkbox onChange={(e) => onChange(e, 6)}>Thể thao </Checkbox>
          <Checkbox onChange={(e) => onChange(e, 7)}>Cafe </Checkbox>
          <Checkbox onChange={(e) => onChange(e, 8)}>Chó </Checkbox>
          <Checkbox onChange={(e) => onChange(e, 9)}>Mèo </Checkbox> */}
        </div>
        <div className="flex items-center justify-center">
          <Button type="primary" size="large" className="bg-green-500" onClick={() => handleSubmit()}>
            Xác nhận{" "}
          </Button>
        </div>
      </div>


     
      {
        
        listResult?.total > 0 ?
        <>
         <div style={{marginBottom:"20px"}} className=" flex text-green-500 text-xl font-bold items-center px-6 h-11 bg-[linear-gradient(90deg,_#353434_16.7%,_rgba(255,_66,_66,_0.74)_54.6%,_rgba(255,_105,_108,_0.00)_99.88%);]">
        Kêt quả Tìm kiếm
      </div>
        <div className="grid grid-cols-6 gap-6 max-w-[100rem] mx-auto">
        {listResult?.data.map((value: any, index:any) => (
          <div key={index} className="border border-solid border-black">
            <img src={value.avatar} className="w-full aspect-square object-cover mb-2" alt="" />
            <div className="p-2 flex flex-col gap-2">
              <div>
                {value.fullname} <span className="h-3 w-3 rounded-full inline-block bg-green-500"></span>
              </div>
              <div>{value.age}</div>
              <div>{value.city_name || "Ha Noi"} </div>
              {/* <div>{value.gender == 1 ? "Nam" : "Nu" } </div> */}
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
        </>
      : <>
        
      </>
      }
    </div>
  )
}

export default TimKiemPage
