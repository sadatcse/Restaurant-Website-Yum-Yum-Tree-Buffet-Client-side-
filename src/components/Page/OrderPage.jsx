import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const { user } = useContext(AuthContext);
    const menu = useLoaderData();
    const navigate = useNavigate();
    const [foodName, setFoodName] = useState(menu.Food_name);
    const [price, setPrice] = useState(menu.Food_price);
    const [quantity, setQuantity] = useState(1);
    const buyerName = user?.displayName;
    const buyerEmail = user?.email;
    const [buyingDate, setBuyingDate] = useState(new Date());
    const FoodOwner = menu.food_addedby;
    const FoodStock = menu.Food_quantity;

    const handlePurchase = async () => {
        if (quantity <= FoodStock && quantity > 0) {
            try {
                const response = await axios.post('http://localhost:5000/carts/', {
                    foodName,
                    price,
                    quantity,
                    buyerName,
                    buyerEmail,
                    buyingDate: buyingDate.toISOString(),
                    FoodOwner,
                });

                toast.success(`Order successful`);
               
                navigate(`/allfood`);
               
            } catch (error) {
                toast.error('Order failed. Please try again.');
                console.error('Error placing order:', error);
            }
        } else {
            toast.error(`Invalid quantity or not enough stock`);
            setQuantity(FoodStock);
        }
    };

    return (
        <div className="container mx-auto p-4">
          
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
                <div className="text-center text-2xl font-bold p-4 bg-gray-800 text-white">
                    Order Food
                </div>
                <div>
                {FoodStock == 0 && (
                <div className="bg-red-500 text-white p-4 mb-4 rounded">
                    Order item not available. Please choose another item.
                </div>
            )}
                </div>
                <form className="p-6">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Food Name:
                        </label>
                        <input
                            type="text"
                            value={foodName}
                            onChange={(e) => setFoodName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Price:
                        </label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Buyer Name:
                        </label>
                        <input
                            type="text"
                            value={buyerName}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Buyer Email:
                        </label>
                        <input
                            type="email"
                            value={buyerEmail}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Buying Date:
                        </label>
                        <input
                            type="text"
                            value={buyingDate.toISOString()}
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handlePurchase}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
                    >
                        <FiShoppingCart className="inline-block mr-2" />
                        Purchase
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrderPage;
