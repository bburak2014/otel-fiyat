
const RoomList = ({item}) => {
    return (
        <div className="card bg-white rounded-lg shadow-md col-span-1">
            <img src={item.url} className="w-full h-48 object-cover" alt="Oda Resmi" />
            <div className="p-4">
                <h3 className="text-gray-700 font-semibold">Room Type:{item.roomType}</h3>
                <p className="text-gray-500">Lokasyon: {item.locationID}</p>
                <p className="text-gray-500">Boş Tarihler: 15-20 Mart</p>
            </div>
        </div>
    )
}

export default RoomList