import { useSelector, useDispatch } from "react-redux";
import { IoIosAddCircle } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
import { addToCart, removeFromCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/contents";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleAddItem = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeFromCart(item));
    };

    return (
        <div className="max-w-4xl mx-auto my-6 p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-4">🛒 My Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.card.info.id} className="border p-4 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img
                                    src={CDN_URL + item.card.info.imageId}
                                    alt={item.card.info.name}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <div>
                                    <h2 className="text-lg font-bold">{item.card.info.name}</h2>
                                    <p className="text-gray-700">{item.card.info.description}</p>
                                    <p className="text-green-600 font-semibold">
                                        ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    className="text-red-600 hover:text-red-800 text-2xl"
                                    onClick={() => handleRemoveItem(item)}
                                >
                                    <CiCircleRemove />
                                </button>
                                <span className="text-lg font-semibold">{item.quantity || 1}</span>
                                <button
                                    className="text-green-600 hover:text-green-800 text-2xl"
                                    onClick={() => handleAddItem(item)}
                                >
                                    <IoIosAddCircle />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
