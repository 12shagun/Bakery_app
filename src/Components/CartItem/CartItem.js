import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import './CartItem.css';

function CartItem({product,item_index}) {
    
    const selectedList = useSelector(state => state.selectedCartItems);

    const dispatch = useDispatch();
    const updateSelectedList=()=>{
        const updatedList=selectedList.filter((item,index)=>  item_index !== index);
        return updatedList;
    }
    return (
        <div className='content-between separator pr-4'>
        <div style={{display:'flex', alignItems:'center'}}>
        <img src={product.image_source} width='100px' height='100px' alt='cake' ></img>
        <div style={{display:'flex',flexDirection:'column'}}>
        <Heading size='small' title={product.name}></Heading>
        <Heading size='small' title={`Rs ${product.price}`}></Heading>
        </div>
        </div>
        <Icon onClick={()=>dispatch({type:'UPDATE_CART',payload:updateSelectedList()})} fontSize='30px' type='delete'></Icon>
    </div>
    );
}

export default CartItem;