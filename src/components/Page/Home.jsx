import RestaurantBanner from "../Homepage/Banner/Banner";
import Welcome from "../Homepage/Banner/Welcome";
import Fresh from "../Homepage/Fresh";
import Toporder from "../Homepage/Toporder";




const Home = () => {
    return (
        <div>
       <RestaurantBanner></RestaurantBanner>
       <Welcome></Welcome>
       <Toporder></Toporder>
       <Fresh></Fresh>

        </div>
       

        
    );
};

export default Home;