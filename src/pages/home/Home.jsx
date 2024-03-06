import Slide from "../../components/ui/slide/Slide"
import Form from "../../components/ui/search-form/Form"
import RoomForm from "../../components/ui/search-form/RoomForm"
import RoomList from "../../components/ui/room-list/RoomList"
import { useEffect, useState } from "react";

const list = [
  { id: "1", url: "list/lux.png", roomType: "luxury", locationID: "0", StartDate: new Date("2024-01-10"), endDate: new Date("2024-03-05") },
  { id: "2", url: "list/standart.png", roomType: "standart", locationID: "1", StartDate: new Date("2024-01-11"), endDate: new Date("2024-03-05") },
  { id: "3", url: "list/royal.png", roomType: "royal", locationID: "2", StartDate: new Date("2024-01-15"), endDate: new Date("2024-03-06") },
  { id: "4", url: "list/lux2.png", roomType: "luxury", locationID: "0", StartDate: new Date("2024-01-10"), endDate: new Date("2024-03-05") },
  { id: "5", url: "list/standart2.png", roomType: "standart", locationID: "1", StartDate: new Date("2024-01-07"), endDate: new Date("2024-03-05") },
  { id: "6", url: "list/standart3.png", roomType: "standart", locationID: "2", StartDate: new Date("2024-01-15"), endDate: new Date("2024-03-06") }
];
const Home = () => {
  const [loading, SetLoading] = useState(false)
  useEffect(()=>{
    setTimeout(() => {
      SetLoading(true)
    }, 1000);
    },[])
  return (
    <>
      {loading &&
        <>  <Slide />
          <div className="py-8 grid grid-rows-1 gap-4 px-4 md:px-8 lg:px-32  sm:grid-cols-3 ">
            <div className="col-span-1 sm:grid-col-span-1">
              <div className=" col-span-1 sm:col-span-1 ">
                <Form />
              </div>
              <div className="  col-span-1 sm:col-span-1  mt-8">
                <RoomForm />
              </div>
            </div>
            <div className="grid col-span-1 sm:col-span-2  sm:grid-cols-2 xl:grid-cols-3 gap-8 ">
              {list.map(item =>
                <RoomList key={item.id} item={item} />)}
            </div>
          </div>
        </>}
    </>
  )
}

export default Home