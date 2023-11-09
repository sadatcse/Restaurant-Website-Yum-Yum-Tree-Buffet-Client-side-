import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCard from '../Card/RestaurantCard';
import { Link } from 'react-router-dom';

const Toporder = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://yumyum-store-server.vercel.app/menusort/');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const slicedData = data.slice(0, 6);

    return (
<div className='my-10'>
<div className='my-5'>
    <h1 className='text-center text-3xl font-bold'>Our Top-selling Food Items</h1>
</div>
<div className="grid gap-2 ms-10 sm:grid-cols-1 md:grid-cols-3">
            {slicedData.map((product) => <RestaurantCard food={product} key={product.id} />)}
</div>
<div className='my-5 text-center'>
<Link to="/allfood"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    See All Food
                </button></Link> 
            </div>
</div>
    );
}

export default Toporder;