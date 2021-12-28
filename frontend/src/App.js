import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart'
import Navbar from './components/Navbar';
import Stripe from './components/Stripe';
import StripeContainer from './components/StripeContainer';
function App() {
  return (
    <div>
      <StripeContainer>
      <Router>
    <Navbar />
        <Switch>
          <Route exact path="/">
          <AllProducts></AllProducts>
          </Route>

          <Route path="/cart">
          <Cart></Cart>
          </Route>
          <Route path="/checkout">
          <Stripe />
          </Route>

          <Route path="/products/:product_id" children={<SingleProduct />}>
          </Route>

          <Route exact path="*">
          <h1>Go Back To Homepage</h1>
          </Route>

        </Switch>
      </Router>
      </StripeContainer>
    </div>
  );
}

export default App;
