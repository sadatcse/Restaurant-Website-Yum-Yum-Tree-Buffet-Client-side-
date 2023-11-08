
import { useLoaderData } from 'react-router-dom';
import RestaurantCard from '../Card/RestaurantCard';

const Allfood = () => {
    const Menusdata = useLoaderData();
    return (
        <div>
       
        
        {Menusdata.length === 0 ? (
            <div className='text-center'>
                <p className='text-center text-4xl font-bold text-black my-10'>No Menu Found On this Restrurant. Please Try Again later.</p>
            </div>
        ) : (
            <div className="grid gap-2 ms-5 sm:grid-cols-1 md:grid-cols-3">
                {Menusdata.map((product) => <RestaurantCard food={product} key={product.id} />)}
            </div>
        )}
    </div>
    );
};

export default Allfood;