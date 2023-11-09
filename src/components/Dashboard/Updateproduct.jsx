import  { useContext, useState } from 'react';
import { AuthContext } from "../../providers/AuthProvider";
import toast from 'react-hot-toast';
import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';


const Updateproduct = () => {
  const { user } = useContext(AuthContext);
  const Menu_item = useLoaderData();
  console.log(Menu_item);
  const useremail = user?.email;
  
  const initialFormData = {
   
    Food_name: Menu_item.Food_name || '',
    Food_category: Menu_item.Food_category || '',
    Food_amount: Menu_item.Food_amount || '',
    Food_quantity: Menu_item.Food_quantity || '',
    Food_rating: Menu_item.Food_rating || '',
    Food_price: Menu_item.Food_price || '',
    order_count: Menu_item.order_count || "0",
    Food_image: Menu_item.Food_image || '',
    Food_madeby: Menu_item.Food_madeby || '',
    Food_origin: Menu_item.Food_origin || '',
    food_addedby: useremail || '',
    Food_shortdescription: Menu_item.Food_shortdescription || '',
  };
  
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formData);
  
    axios.patch(`https://yumyum-store-server.vercel.app/menus/${Menu_item._id}`, formData)
      .then((response) => {
        console.log(response.data);
        toast.success("Menu Updated Successfully");
        navigate(`/myadd/${useremail}`);
      })
      .catch((error) => {
        console.error('Error updating menu:', error);
        // Handle the error if needed
      });
  };

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,});};

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-5xl mb-8 text-center">Update Food item</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 relative border w-full py-2 px-4"
            type="text"
            name="Food_name"
            placeholder="Food name"
            value={formData.Food_name}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="mb-4 relative border w-full py-2 px-4"
            type="text"
            name="Food_category"
            placeholder="Food category"
            value={formData.Food_category}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="mb-4 relative border w-full py-2 px-4"
            type="text"
            name="Food_amount"
            placeholder="Food amount"
            value={formData.Food_amount}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="mb-4 relative border w-full py-2 px-4"
            type="text"
            name="Food_quantity"
            placeholder="Food quantity"
            value={formData.Food_quantity}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="mb-4 relative border w-full py-2 px-4"
            type="text"
            name="Food_rating"
            placeholder="Food rating"
            value={formData.Food_rating}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="mb-4 relative border w-full py-2 px-4"
            type="text"
            name="Food_price"
            placeholder="Food price"
            value={formData.Food_price}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="mb-4 relative border w-full py-2 px-4"
            type="text"
            name="Food_image"
            placeholder="Food image url"
            value={formData.Food_image}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="mb-4 relative border w-full py-2 px-4"
            type="text"
            name="Food_madeby"
            placeholder="Made by"
            value={formData.Food_madeby}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="mb-4 relative border w-full py-2 px-4"
            type="text"
            name="Food_origin"
            placeholder="Food origin Country"
            value={formData.Food_origin}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="mb-4 relative border w-full py-2 px-4"
            type="text"
            name="Food_shortdescription"
            placeholder="Short description"
            value={formData.Food_shortdescription}
            onChange={handleChange}
            required
          />
          <br />
          <input
            className="btn btn-secondary mb-4 w-full"
            type="submit"
            value="Update Food Items"
          />
        </form>
      </div>
    </div>
  );
};

export default Updateproduct;
