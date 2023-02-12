import React from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import Heading from '../../Components/Heading/Heading';
import PageHeader from '../../Components/PageHeader/PageHeader';
import { useSelector } from 'react-redux';
import './Cart.css';
import empty_cart from '../../img/empty_cart.webp'
import EmptyState from '../../Components/EmptyState/EmptyState';

function Cart(props) {
    const selectedList = useSelector(state => state.selectedCartItems);
    const getTotal = ()=>{
        let total = 0;
        selectedList.forEach(item => {
           total+=item.price; 
        });
        return total;
    }
    return (
        <>
        <PageHeader cartCount={selectedList.length} />
            <div className='content-center padding-16'>
                <Heading size='medium' title="----- Cart -----"></Heading>
            </div>
            {selectedList.length?
                       <div className='cart-center-column'>
                       <div className='cart-container' >
                <div>
                {selectedList.map((item,index)=>
                    <CartItem key={index} item_index={index} product={item}></CartItem>)}
                </div>
                <div className='content-between seprator'>
                    <Heading size='small' title='Total'></Heading>
                    <Heading size='small' title={'Rs '+getTotal()}></Heading>
                </div>
            </div>
            <button
            className='hover-color'
             onClick={
            ()=>{
            const total = getTotal();
            console.log('Payload',selectedList);
            console.log("Total" , total);
            }}
            >Checkout</button>
            </div>:<EmptyState image_source={empty_cart} button_text='Go to Home' button_link="/" />}
        </>
    );
}

export default Cart;