import { DataLocations } from "../../../assets/utils/Enum"
const RoomList = ({ item }) => {
    const roomType = item.roomType.charAt(0).toUpperCase() + item.roomType.slice(1) || "";

    return (
        <div className="card bg-white rounded-lg shadow-md col-span-1 cursor-pointer flex flex-col gap-4 hover:bg-gray-100 opacity-85 hover:opacity-100">
            <img src={item.url} className="w-full h-48 object-cover rounded-t-lg" alt="Oda Resmi" />
            <div className="p-4 flex flex-col gap-1">
                <h3 className="text-gray-700 font-semibold">Room Type: {roomType}</h3>
                <p className="text-gray-500">Location: {DataLocations[item.locationID]}</p>
                <p className="text-gray-500">Empty Dates: {`${new Date(item.StartDate).getMonth() + 1}/${new Date(item.StartDate).getDate()} - ${new Date(item.endDate).getMonth() + 1}/${new Date(item.endDate).getDate()}`}</p>
            </div>
        </div>
    )
}

export default RoomList

 