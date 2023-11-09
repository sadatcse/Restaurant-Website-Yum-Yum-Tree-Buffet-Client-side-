import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Myadded = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [myaddeditem, setMyaddeditem] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const UserEmail = user?.email;

    const handleDelete = (menuid) => {
        const apiUrl = `https://yumyum-store-server.vercel.app/menus/${menuid}`;

        axios
            .delete(apiUrl)
            .then((response) => {
                toast.success('Food item Delete successful');
            })
            .catch((error) => {
                toast.error('Food item Delete unsuccessful');
            });
    }

    const handleEdit = (menuid) => {
        navigate(`/updatemenu/${menuid}`);
    }

    useEffect(() => {
        const fetchUrl = `https://yumyum-store-server.vercel.app/menuse/${UserEmail}`;

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
            <h2 className='text-center text-bold'>Total Your Menu: {myaddeditem.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Food Name</th>
                            <th>Quantity</th>
                            <th>Food amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myaddeditem.map((menu, index) => (
                            <tr key={menu._id}>
                                <td>{index + 1}</td>
                                <td>{menu.Food_name}</td>
                                <td>{menu.Food_quantity}</td>
                                <td>{menu.Food_amount}</td>
                                <td>
                                    <button
                                        onClick={() => handleEdit(menu._id)}
                                        className="btn mr-2">
                                        <FaEdit /> Edit
                                    </button>
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

export default Myadded;