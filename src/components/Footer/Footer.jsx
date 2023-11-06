


import { FaMailchimp, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-5 text-base-content bg-base-100 border-solid border-2 border-gray-100">
        <aside className=''>
        <div className="flex items-center text-center">
    <img src='https://i.ibb.co/wy1tLVL/Logo.png'></img>
    
    
</div>
<div className=''>
<p className='font-mono text-black '>Yum Yum Tree Buffet & Restaurant is a culinary oasis that promises a delightful and diverse dining experience for all food enthusiasts. Nestled in a serene and inviting location, this establishment is a haven for those seeking an unforgettable journey through a world of flavors.</p>
</div>

          
        </aside> 
        <nav className='mx-8'>
          <header className="footer-title text-2xl text-black font-bold">Food Types</header> 
                
                 <Link to=""><a className="link link-hover text-black">Main Courses</a></Link> 
                 <Link to=""><a className="link link-hover text-black">Appetizers and Salads</a></Link>
                 <Link to=""><a className="link link-hover text-black">Accompaniments</a></Link>
                 <Link to=""><a className="link link-hover text-black">Desserts</a></Link>
        </nav> 
        <nav className='mx-8'>
          <header className="footer-title text-2xl text-black font-bold text-black">Company</header> 
          <Link to="about"><a className="link link-hover text-black">About us</a></Link>
          <Link to="/contact"><a className="link link-hover text-black">Contact</a></Link>
          <Link to="/faq"><a className="link link-hover text-black">Faq</a></Link>
          <Link to="/portfolio"><a className="link link-hover text-black">Portfolio</a></Link>
        </nav> 
        <aside className='mx-8 text-black font-bold'>
  <header className="footer-title text-2xl">Contact Us</header>

  <div className="flex items-center">
    <FaMapMarkerAlt size={20} className="mr-2" />
    <p className=''>SM Tower, 1st floor, Shaheed Abdul Jabbar Road<br/>Jwoleshwaritola, Bogura<br/>1206. Bogura. BD.</p>
  </div>

  <div className="flex items-center">
    <FaMobileAlt size={20} className="mr-2" />
    <p className='mt-1'>01713468694</p>
  </div>

  <div className="flex items-center">
    <FaMailchimp size={20} className="mr-2" />
    <p className='mt-1'>info@website.com</p>
  </div>
</aside>

      </footer>
      
    );
};

export default Footer;