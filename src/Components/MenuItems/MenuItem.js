import React from 'react';
import Heading from '../Heading/Heading';
import './MenuItem.css';

function MenuItem({product:item,addToCart}) {

    return (
        <div >
            <img src={item.image_source} width='400px' height='350px' alt='cake' ></img>
            <div className='content-between seprator' >
            <Heading size='small' title={item.name}></Heading>
            <Heading size='small' title={`Rs ${item.price}`}></Heading>
            </div>
            <div className='content-center' >
            <button onClick={addToCart} className='border-round hover-color m-2' >Add to cart</button>
            </div>
        </div>
    );
}

export default MenuItem;