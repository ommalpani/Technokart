
import { Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Products from './Products'
import Navbar from './Navbar'
import PushProducts from './PushProducts'
import ProductDetail from './ProductDetail'
import Register from './Register'
import Cart from './Cart'
import Checkout from './Checkout'
import { toast } from 'react-toastify'
import Profile from './Profile'
import WishList from './WishList'
import BillingDetails from './BillingDetails'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { getProducts } from '../actions'
import { useDispatch } from 'react-redux';

toast.configure();
function App() {
    const dispatch  = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

  return (
    <div>

    <Navbar></Navbar>
   

    <Route path='/' exact component = {Home}></Route>
    <Route path = "/profile" exact component = {Profile}></Route>
    <Route path='/products' exact  component = {Products}></Route>
    <Route path='/login'  exact component = {Login}></Route>
    <Route path='/pushproducts'  exact component = {PushProducts}></Route>
    <Route path='/register'  exact component = {Register}></Route>
    <Route path = "/productdetail" exact component = {ProductDetail}></Route>
    <Route path = "/cart" exact component = {Cart}></Route>
    <Route path = "/checkout" exact component = {Checkout}></Route>
    <Route path = "/shipping" exact component = {BillingDetails}></Route>
    <Route path = "/wishlist" exact component = {WishList}></Route>





    </div>
  );
}

export default App;
