import React from 'react';
import './Heading.css';

function Heading({title,size='large',color='primary'}) {
    return (<span className={` heading heading-${size} heading-${color}` }>{title.charAt(0).toUpperCase() + title.slice(1)}</span>);
}

export default Heading;