import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from "../../providers/AuthProvider";
import { displayStars as ratings } from '../Utilis/Start';
import toast from 'react-hot-toast';
const DetailsPage  = () => {
    const menu = useLoaderData();
    console.log(menu);
    const { user} = useContext(AuthContext);

    const useremail = user?.email;

    const ratingString = ratings(menu.Food_rating);

    const handleAddToCart = () => {

     console.log(useremail)
      toast.success(`Added ${menu.Food_name} to the cart`);
    };


  return (

    <div className="flex p-4 border rounded-lg shadow-md bg-white m-4">
      <div className="w-1/2 p-4">
        <img src={menu.Food_image} alt={menu.Food_name} className="max-w-full" />
      </div>
      <div className="w-1/2 p-4">
     
        <h1 className="text-2xl font-bold mb-2">{menu.Food_name}</h1>
        <p className="text-gray-600 mb-4">{menu.Food_shortdescription}</p>
        <div className="text-sm text-gray-700">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Category:</p>
              <p>{menu.Food_category}</p>
            </div>
            <div>
              <p className="font-semibold">Origin:</p>
              <p>{menu.Food_origin}</p>
            </div>
            <div>
              <p className="font-semibold">Made by:</p>
              <p>{menu.Food_madeby}</p>
            </div>
            <div>
              <p className="font-semibold">Price:</p>
              <p>${menu.Food_price}</p>
            </div>
            <div>
              <p className="font-semibold">Amount:</p>
              <p>{menu.Food_amount}</p>
            </div>
            <div>
              <p className="font-semibold">Quantity:</p>
              <p>{menu.Food_quantity}</p>
            </div>
            <div>
              <p className="font-semibold">Rating:</p>
              <p>{ratingString}</p>
            </div>
            <div>
              <p className="font-semibold">Added by:</p>
              <p>{menu.food_addedby}</p>
            </div>
            <div>
              <p className="font-semibold">Order Count:</p>
              <p>{menu.order_count}</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>

  );
};

export default DetailsPage;
