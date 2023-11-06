

const RestaurantBanner = () => {
    const img1 = 'https://i.ibb.co/X7dT9fP/365288552-674591751374737-664827083578302103-n.jpg';
    const img2 = 'https://yumyumtreebuffet.com/wp-content/uploads/2022/05/Yum-Yum-Tree-Buffet-Restaurant-Bogura-23-1.jpg';
    const img3 = 'https://yumyumtreebuffet.com/wp-content/uploads/2022/05/Yum-Yum-Tree-Buffet-Restaurant-Bogura-18.jpg';
    const img4= 'https://yumyumtreebuffet.com/wp-content/uploads/2022/05/Yum-Yum-Tree-Buffet-Restaurant-Bogura-15.jpg';
  return (
    <div className="carousel w-full h-[600px]">
    <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-20 w-1/2'>
            <h2 className="text-6xl font-bold">Delicious Dining Experience</h2>
            <p>Discover a world of flavors and culinary delights.</p>
            <div>
              <button className="btn btn-primary mr-5">View Menu</button>
              <button className="btn btn-outline btn-secondary">Book a Table</button>
            </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-20 w-1/2'>
            <h2 className="text-6xl font-bold">Savor the Flavors</h2>
            <p>Experience culinary artistry.</p>
            <div>
              <button className="btn btn-primary mr-5">View Menu</button>
              
            </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-20 w-1/2'>
            <h2 className="text-6xl font-bold ">Culinary Excellence</h2>
            <p>A feast for the senses awaits you.</p>
            <div>
             
              <button className="btn btn-outline btn-secondary">Chefs Specials</button>
            </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-20 w-1/2'>
            <h2 className="text-6xl font-bold">Satisfy Your Cravings</h2>
            <p>Unforgettable dining experiences, one plate at a time.</p>
            <div>
              <button className="btn btn-primary mr-5">Explore Menu</button>
             
            </div>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/4">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    </div>
</div>
  );
};

export default RestaurantBanner;