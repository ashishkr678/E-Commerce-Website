import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../customers/components/Cart/Cart';
import Footer from '../customers/components/Footers/Footer';
import Product from '../customers/components/Product/Product';
import ProductDetails from '../customers/components/ProductDetails/ProductDetails';
import CheckOut from '../customers/components/checkout/CheckOut';
import Navigation from '../customers/components/navigation/Navigation';
import Order from '../customers/components/order/Order';
import OrderDetails from '../customers/components/order/OrderDetails';
import HomePages from '../customers/pages/Homepage/HomePages';

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation/>
            </div>
            <Routes>
                <Route path='/login' element={<HomePages/>}/>
                <Route path='/register' element={<HomePages/>}/>
                <Route path='/' element={<HomePages/>}/>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<CheckOut/>}/>
                <Route path='/account/order' element={<Order/>}/>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}/>
             
            </Routes>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default CustomerRouters;