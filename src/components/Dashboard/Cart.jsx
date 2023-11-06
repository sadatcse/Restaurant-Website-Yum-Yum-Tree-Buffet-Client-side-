import React, { useState, useEffect, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
const Cart = () => {
    const { user} = useContext(AuthContext);
    const CartProduct = useLoaderData();
    const UserEmail = user?.email;
    const [userCart, setUserCart] = useState(null);


    //Filter cart data by User 

    useEffect(() => {
        const foundCart = CartProduct.find(item => item.userEmail === UserEmail);
        setUserCart(foundCart);
    }, [CartProduct, UserEmail]);



    const handleDelete = (productId, userEmail) => {
        // Create a request object to send to the server
        const requestObject = {
          userEmail: userEmail,
          productId: productId,
        };
      
        fetch('https://h-technology-server-c72odg8xe-sadatcses-projects.vercel.app/cart/delete', {
          method: 'POST', // Use POST method for deleting
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestObject),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              // Product successfully deleted
              toast.success('Product removed from cart');

              const updatedCart = CartProduct.find((item) => item.userEmail === UserEmail);
              setUserCart(updatedCart);
           window.location.reload();
            } else {
              // Handle errors here, e.g., product not found, server error, etc.
              toast.error('Failed to remove product from cart');
            }
          });
      };

    return (
        <div>
            {userCart ? (
                <div>
                    <h2>Total Products: {userCart.cart.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Product ID</th>
                                    <th>Quantity</th>
                                    <th>Product Title</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userCart.cart.map((product, index) => (
                                    <tr key={index}>
                                        <th>{index+1}</th>
                                        <td>{product.productId}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.ProductName}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(product.productId,UserEmail)}
                                                className="btn"
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div>User not found</div>
            )}
        </div>
    );
};

export default Cart;
