import React, { useCallback } from 'react';
import './Input.css'

const debounce = (callback,delay) =>{
    let timer;
    return (...args) =>{
        clearTimeout(timer);
        timer = setTimeout(()=> callback(args[0]),delay);
    }
}

function Input({placeholder,onChange}) {
    const debounce_search = useCallback(debounce(onChange,500),[]);
    return (
        <div className='content-center'>
            <input onChange={(e)=>debounce_search(e.target.value)} className='border-round' type="text" name="input" placeholder={placeholder} />
      </div>
    );
}

export default Input;