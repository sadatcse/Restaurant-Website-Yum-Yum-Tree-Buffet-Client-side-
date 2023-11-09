import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import toast from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider';
import { FaTrash } from 'react-icons/fa';

const Myorderfood = () => {
    const { user } = useContext(AuthContext);

    const [myaddeditem, setMyaddeditem] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const UserEmail = user?.email;

    const handleDelete = (menuid) => {
        const apiUrl = `https://yumyum-store-server.vercel.app/carts/${menuid}`;

        axios
            .delete(apiUrl)
            .then((response) => {
                toast.success('Food item Delete successful');
            })
            .catch((error) => {
                toast.error('Food item Delete unsuccessful');
            });
    }

    useEffect(() => {
        const fetchUrl = `https://yumyum-store-server.vercel.app/carts/${UserEmail}`;

        axios.get(fetchUrl)
            .then((response) => {
                if (response.status === 200) {
                    setMyaddeditem(response.data);
                } else {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [UserEmail]);

    return (
<div>
    {isLoading ? (
        <div>Loading...</div>
    ) : myaddeditem.length > 0 ? (
        <div>
            <h2 className='text-center text-bold'>Total Your item: {myaddeditem.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Food Name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>BuyingDate</th>
                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myaddeditem.map((menu, index) => (
                            <tr key={menu._id}>
                                <td>{index + 1}</td>
                                <td>{menu.foodName}</td>
                                <td>{menu.price}</td>
                                <td>{menu.quantity}</td>
                                <td>{menu.buyingDate}</td>
                              
                                <td>
                                    <button
                                        onClick={() => handleDelete(menu._id)}
                                        className="btn"
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    ) : (
        <h1 className='text-center text-5xl mt-5'>No Menu found, Add Some Food item</h1>
    )}
</div>
    );
};

export default Myorderfood;