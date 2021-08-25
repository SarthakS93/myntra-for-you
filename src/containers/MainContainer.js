import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../components/Pages/Home/Home';
import ReusableStore from '../components/Pages/ReusableStore/ReusableStore';
import SharingStore from '../components/Pages/SharingStore/SharingStore';
import BuybackStore from '../components/Pages/BuybackStore/BuybackStore';
import PDP from '../components/Pages/PDP/PDP';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainContainer() {
    return (
      <div>
        <Router>
          <Header />

          <Switch>
            <Route path="/reusable-store">
              <ReusableStore />
            </Route>
            <Route path="/sharing-center">
              <SharingStore />
            </Route>
            <Route path="/buyback-store">
              <BuybackStore />
            </Route>
            <Route path="/pdp">
              <PDP />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    );
}
  
export default MainContainer;
  