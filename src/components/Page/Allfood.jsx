import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from '../Card/RestaurantCard';
import { FaSearch } from 'react-icons/fa';

const Allfood = () => {
  const [Menusdata, setMenusdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make an API request to fetch data
    axios.get('http://localhost:5000/menusearch/all')
      .then((response) => {
        setMenusdata(response.data); // Assuming the response data is an array
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-1">
        <div className="..."></div>
        <div className="col-span-2 ...">
          <div className="flex items-center space-x-2 my-6 text-center">
            <FaSearch className="text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search your food"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
        </div>
      </div>

      <div>
        {loading ? (
          <p className="text-center text-4xl font-bold text-black my-10">Loading...</p>
        ) : Menusdata.length === 0 ? (
          <div className="text-center">
            <p className="text-center text-4xl font-bold text-black my-10">
              No Menu Found On this Restaurant. Please Try Again later.
            </p>
          </div>
        ) : (
          <div className="grid gap-2 ms-5 sm:grid-cols-1 md:grid-cols-3">
            {Menusdata.map((product) => (
              <RestaurantCard food={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Allfood;
