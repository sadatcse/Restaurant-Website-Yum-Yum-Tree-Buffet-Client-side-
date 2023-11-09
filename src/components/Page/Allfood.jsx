import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantCard from '../Card/RestaurantCard';
import { FaSearch } from 'react-icons/fa';


const Allfood = () => {
 
  const [Menusdata, setMenusdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('all');
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const handleSearch = () => {
    const searchURL = `https://yumyum-store-server.vercel.app/menusearch/${searchText}`;

    axios.get(searchURL)
      .then((response) => {
        setMenusdata(response.data);
        setCount(response.data.length); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };


  const updateMenusData = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagedMenus = Menusdata.slice(startIndex, endIndex);
    return pagedMenus;
  };

  useEffect(() => {
    handleSearch();
    setSearchText('');
  }, [searchText]); 

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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
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
            {updateMenusData().map((product) => (
              <RestaurantCard food={product} key={product.id} />
            ))}
          </div>
        )}
      </div>

      <div className='pagination flex items-center justify-center mt-4 space-x-4'>
        <p className='text-gray-600'>Current Page: {currentPage + 1}</p>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`px-2 py-1 rounded ${currentPage === 0 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        {[...Array(numberOfPages)].map((_, index) => (
          <button
            onClick={() => setCurrentPage(index)}
            key={index}
            className={`px-2 py-1 rounded ${currentPage === index ? 'bg-yellow-500' : 'bg-gray-300 hover:bg-gray-400'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`px-2 py-1 rounded ${currentPage === numberOfPages - 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          disabled={currentPage === numberOfPages - 1}
        >
          Next
        </button>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(0);
          }}
          className='px-2 py-1 border border-gray-300 rounded'
        >
          <option value='9'>9</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
        </select>
      </div>
    </div>
  );
};

export default Allfood;
