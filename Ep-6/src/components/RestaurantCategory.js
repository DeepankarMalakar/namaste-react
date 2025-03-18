import ItemListAccordian from "./ItemlistAccordian";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    console.log(data)


    const handleClick = () => {
        setShowIndex()
    }
    return (
        <>
            <div>
                <div className="w-[600px] ml-[450px] p-4 border shadow-md rounded-md">
                    <div className="flex justify-between">
                        <span className="font-bold text-lg cursor-pointer" onClick={handleClick}>{data.title} ({data.itemCards.length})</span>
                        <span className="w-8 text-xl">{!showItems ? "↓" : "↑"}</span>
                    </div>
                    { showItems && <ItemListAccordian items={data.itemCards} />}
                </div>
            </div>
        </>
    )
}

export default RestaurantCategory;