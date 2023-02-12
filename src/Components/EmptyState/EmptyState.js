import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyState.css'

function EmptyState({image_source,button_text,button_link}) {
    return (
        <div className='content-center-column'>
        <img src={image_source} alt="empty_cart" ></img>
        <Link to={button_link}>
        <button className='border-round hover-color-pink'>{button_text}</button>
        </Link>
        </div>
    );
}

export default EmptyState;