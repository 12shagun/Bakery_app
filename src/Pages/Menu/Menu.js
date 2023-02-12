import React, { useState } from 'react';
import Heading from '../../Components/Heading/Heading';
import MenuItem from '../../Components/MenuItems/MenuItem';
import './Menu.css';
import Input from '../../Components/Input/Input';
import PageHeader from '../../Components/PageHeader/PageHeader';
import truffle from '../../img/truffle_cake.webp'
import Kitkat from '../../img/Kitkat_cake.webp'
import half from '../../img/half_cake.webp'
import rasmalai from '../../img/rasmalai_cake.webp'
import fruit from '../../img/fruit_cake.webp'
import butterscotch from '../../img/butterscotch.webp'
import { useSelector ,useDispatch} from 'react-redux';

function Menu(props) {
    const allItems= [
        {
            image_source:truffle,
            name:'Chocolate truffle cake',
            price:450,
        },
        {
            image_source:Kitkat,
            name:'Chocolate Kitkat cake',
            price:550,
        },
        {
            image_source:half,
            name:'Vanilla Chocolate cake',
            price:450,
        },
        {
            image_source:butterscotch,
            name:'Butterscotch cake',
            price:400,
        },
        {
            image_source:rasmalai,
            name:'Rasmalai cake',
            price:550,
        },
        {
            image_source:fruit,
            name:'Fruit cake',
            price:500,
        }
    ];
    const selectedList = useSelector(state => state.selectedCartItems);
    const [showItem,setShowItem]=useState(allItems);
    const [cartCount,setCartCount] = useState(selectedList.length);


    const dispatch = useDispatch();
    const updateSelectedList=(item)=>{
        selectedList.push(item);
        return selectedList;
    }
    const searchHandler=(search_term)=>{
        const filtered_items = allItems.filter((item=> item.name.toLowerCase().includes(search_term.toLowerCase())));
        setShowItem(filtered_items)
    }
    return (
        <>
        <PageHeader cartCount={selectedList.length} />
            <div className='content-center padding-16'>
                <Heading size='medium' title="----- Menu -----"></Heading>
            </div>
            <div className='content-center padding-16'>
                <Input placeholder=" Search Dish ..." onChange={searchHandler}></Input>
            </div>
            <div className='menu-container'>
                {showItem.map((item,index)=> <div key={index} className='menu-item-container content-center'>
                    <MenuItem addToCart={()=>{
                        setCartCount(cartCount+1);
                        dispatch({type:'UPDATE_CART',payload:updateSelectedList(item)});}} product={item}></MenuItem>
                </div>)}
            
            </div>
        </>
    );
}

export default Menu;