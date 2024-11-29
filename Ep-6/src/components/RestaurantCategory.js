const RestaurantCategory = ({data}) => {
    console.log(data)
    return (
        <div className="w-[600px] ml-[450px] p-4 border shadow-md rounded-md flex justify-between">
            <span className="font-semibold">{data.title}</span>
            <span className="font-semibold">↓</span>
        </div>
    )
}

export default RestaurantCategory;