import ItemListAccordian from "./ItemlistAccordian";

const RestaurantCategory = ({ data }) => {
    console.log(data)
    return (
        <>
            <div>
                <div className="w-[600px] ml-[450px] p-4 border shadow-md rounded-md">
                    <div className="flex justify-between">
                        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                        <span>↓</span>
                    </div>
                    <ItemListAccordian items={data.itemCards} />
                </div>
            </div>
        </>
    )
}

export default RestaurantCategory;