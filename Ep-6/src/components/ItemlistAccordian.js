import { CDN_URL } from "../utils/contents";
const ItemListAccordian = ({ items }) => {
    console.log(items)
    return (
        <div className="flex flex-col">
            {items.map((item) => (
                <div key={item.card.info.id} className="my-2 border p-4 text-start rounded-sm flex">
                    <div className = "overflow-hidden text-ellipsis whitespace-nowrap">
                        <span className="font-bold text-md">{item.card.info.name}</span>
                        <span className="font-bold text-slate-800"> ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        <div className="w-[600px]">
                        <p className="my-2 text-slate-800 text-sm">{item.card.info.description}</p>
                        </div>
                    </div>
                    <div className="my-4">
                        <img src={CDN_URL + item.card.info.imageId} alt="" className="w-52 rounded-md ml-[14px]" />
                        <div className="text-center my-1 ml-4">
                            <button className="bg-amber-400 font-bold text-white hover:bg-amber-300 hover:font-bold hover:text-black px-4 py-2 cursor-pointer rounded-md">ADD+</button>
                        </div>
                    </div>
                </div>
            )

            )}
        </div>
    )
}

export default ItemListAccordian;