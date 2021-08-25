import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';

import ElegantDress from '../components/ProductCards/ElegantDress/ElegantDress';
import ProductCard from '../components/ProductCards/Products/ProductCard';
import WhiteDress from '../components/ProductCards/WhiteDress/WhiteDress';
import ShinyDress from '../components/ProductCards/ShinyDress/ShinyDress';
import RedDress from '../components/ProductCards/RedDress/RedDress';
import Products from '../components/ProductCards/Products/Products';


import { products } from "../data/products";

function MainContainer() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="wrapper">
          <div className="section">
              <ElegantDress />
              <ProductCard product={products[3]} />
              <WhiteDress />
          </div>
        </div>
        <div className="wrapper">
          <div className="section">
            <ShinyDress />
            <RedDress />
          </div>
        </div>
        {/* <Collections /> */}
        <Products />
        <Footer />
      </div>
    );
}
  
export default MainContainer;
  