import React from 'react';
import './Icon.css';

function Icon({type,customClass='',fontSize='50px',onClick,showCount}) {
    return (
        <div class="icon-with-count">
        <i onClick={onClick} className={`material-icons ${customClass}`} style={{fontSize:fontSize}} role="button">{type}</i>
       { showCount?<span class="cart-count">{showCount}</span>:''}
        </div>
    );
}

export default Icon;