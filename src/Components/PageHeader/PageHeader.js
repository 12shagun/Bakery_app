import React from 'react';
import Heading from './../Heading/Heading';
import Icon from '../Icon/Icon';
import './PageHeader.css';
import { Link } from 'react-router-dom';

function PageHeader ({cartCount}) {
    console.log(cartCount);
    return (
      <div>
         <Link to='/'>
         <Icon customClass='header-icon' type='home'></Icon>
        </Link>
        <Link to='/checkout'>
            <Icon showCount={cartCount} customClass='checkout-icon header-icon' type='shopping_cart'></Icon>
        </Link>
            <div className='content-center padding-16'>
            <Heading color='logo' title="Mama's Bakery"></Heading>
            </div>
      </div>
    )
  }

export default PageHeader;
