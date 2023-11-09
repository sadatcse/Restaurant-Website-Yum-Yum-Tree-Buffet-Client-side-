import React from 'react';

const Welcome = () => {
    return (
<div>  <div className='mt-10'>
            <h1 className='text-center text-3xl	'>Welcome To <span className='text-red-500'>Yum Yum Tree Buffet & Restaurant</span> </h1>
        </div>
        <div>
            <div className="grid grid-cols-2 gap-4 mx-10">
            <div className="mt-10">
        <div className="text-lg mb-6">
          <h2 className="text-3xl font-bold mb-2">WHO WE ARE</h2>
          <p>
            The taste of Royalty is here. The well-reputed Royal Cuisine caters events, occasions and its customers with exclusive, healthy and amazingly tasty dishes.
          </p>
        </div>

        <div className="text-lg mb-6">
          <h2 className="text-3xl font-bold mb-2">OUR VISION</h2>
          <p>
            Ensure quality, healthy, hygienic and nutritious food for all of our honorable guests.
          </p>
        </div>

        <div className="text-lg mb-6">
          <h2 className="text-3xl font-bold mb-2">OUR MISSION</h2>
          <p>
            Our mission is to satisfy the customers in response to their various food demands and needs considering their socio-economic status and to maintain food quality in all aspects.
          </p>
        </div>

        <div className="text-lg mb-6">
          <h2 className="text-3xl font-bold mb-2">OUR SPECIALITY</h2>
          <ul>
            <li>Everyday buffet lunch and dinner with 100+ items of food</li>
            <li>300 Sitting Arrangement</li>
            <li>Open Sky View</li>
            <li>Open Night view of Uttara Mega City</li>
            <li>Live Bar-B-Q and live kitchen</li>
            <li>Live Kitchen</li>
            <li>Live view of aircrafts landing and taking off</li>
            <li>Children Play Zone</li>
          </ul>
        </div>
      </div>

      <div className=" mt-10 pl-6">
        <img src="https://i.ibb.co/0JQZN1M/evening.png" alt="Evening View" className="w-full h-full rounded-lg" />
       
         
        
        </div>
      </div>

  </div>
        </div>
       
    );
};

export default Welcome;