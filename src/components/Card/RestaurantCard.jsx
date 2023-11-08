import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ food }) => {
  return (
    <div className="col-span-1" key={food._id}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80" src={food.Food_image} alt={food.Food_name} />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="card-title">{food.Food_name}</h2>
              <p>Category: {food.Food_category}</p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2 text-primary">
                Price: ${food.Food_price}
              </p>
              
            </div>
          </div>
          <div className="mt-4">
          <p className="text-lg font-semibold mb-2 text-red-500">
                Avaliable Quanity: {food.Food_quantity}
              </p>
            <div className="flex items-center space-x-4">
              <Link to={`/menus/${food._id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
