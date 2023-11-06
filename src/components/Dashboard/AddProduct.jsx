import React from 'react';
import toast from 'react-hot-toast';
const AddProduct = () => {

    const handleRegister = e => {

    e.preventDefault();
    const Model = e.target.Model.value;
    const Brand = e.target.Brand.value;
    const category = e.target.category.value;
    const name = e.target.name.value;
    const Specification = e.target.Specification.value;
    const regularPrice = e.target.regularPrice.value
    const Special =e.target.Special.value
    const ratingsaverage =e.target.ratingsaverage.value
    const ratingscount =e.target.ratingscount.value
    const Feature1 =e.target.Feature1.value
    const Feature2 =e.target.Feature2.value
    const Feature3 =e.target.Feature3.value
    const ButtonColor =e.target.ButtonColor.value
    const image =e.target.image.value


    const product = {        
        Model: Model,
        Brand: Brand,
        category: category,
        name: name,
        Specification: Specification,
        "Regular Price": regularPrice,
        "Special Price": Special,
        ratings: {
            average: ratingsaverage,
            count: ratingscount,
        },
        features: {
            "Feature 1": Feature1,
            "Feature 2": Feature2,
            "Feature 3":Feature3,
        },
        ButtonColor: ButtonColor,
        image: image,
    };
    fetch('https://h-technology-server-c72odg8xe-sadatcses-projects.vercel.app/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            // Product successfully deleted
            toast.success('Product Add to Database'); }
            else {
              // Handle errors here, e.g., product not found, server error, etc.
              toast.error('Product Failed to add');
            }


          })
        ;

    }
    return (
<div className="bg-gray-100 min-h-screen flex items-center justify-center">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 className="text-5xl mb-8 text-center">Add Product </h2>
    <form onSubmit={handleRegister} >
      <input
        className="mb-4 relative border w-full py-2 px-4"
        type="text"
        name="Model"
        placeholder="Product Model"
        id="promodel"
        required/>
      <br />
      <input className="mb-4 relative border w-full  py-2 px-4" 
      type="text" 
      name="name" 
      placeholder="Product Name" 
      id="proname"/>
      <br />
      <div className="mb-4 relative border">
        <label htmlFor="Brand">Brand:</label>
        <select
          id="Brand"
          name="Brand"
          className="w-full py-2 px-4"
          required
        >
          <option value="" disabled selected>
            Select Brand
          </option>
          <option value="apple">apple</option>
          <option value="amazon">amazon</option>
          <option value="samsung">samsung</option>
          <option value="sony">sony</option>
          <option value="google">google</option>
          <option value="intel">intel</option>
          
        </select>
      </div>
      <br />
      <div className="mb-4 relative border">
        <label htmlFor="Brand">Category:</label>
        <select
          id="category"
          name="category"
          className="w-full py-2 px-4"
          required
        >
          <option value="" disabled selected>
            Select Category
          </option>
          <option value="Mobile">Mobile</option>
          <option value="TV">TV</option>
          <option value="Laptop">Laptop</option>
          <option value="Camera">Camera</option>
          <option value="Accessories">Accessories</option>
         
          
        </select>
      </div>
      <br />
      <input
        className="mb-4 relative border w-full py-2 px-4"
        type="text"
        name="Specification"
        placeholder="Specification"
        id="specification"
        required
      />
      <br />
      <input
        className="mb-4 relative border w-full py-2 px-4"
        type="text"
        name="regularPrice"
        placeholder="Regular Price"
        id="RegularPricea"
        required
      />
      <br />
      <input
        className="mb-4 relative border w-full py-2 px-4"
        type="text"
        name="Special"
        placeholder="Special Price"
        id="RegularPrice"
        required
      />
      <br />
      <div className="mb-4">
      <input className="mb-2 relative border w-full py-2 px-4" type="text" name="ratingsaverage" placeholder="rating average" id="streetnamereg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="ratingscount" placeholder="ratings count" id="streetnumberreg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="Feature1" placeholder="Feature 1" id="streetnamereg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="Feature2" placeholder="Feature 2" id="streetnumberreg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="Feature3" placeholder="Feature 3" id="areareg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="ButtonColor" placeholder="ButtonColor" id="townreg" required />
        <br />
        <input className="mb-2 relative border w-full py-2 px-4" type="text" name="image" placeholder="image" id="postcodereg" required />
      </div>
      <br />
      <input className="btn btn-secondary mb-4 w-full" type="submit" value="Add Product" />
    </form>

  </div>
</div>
    );
};

export default AddProduct;