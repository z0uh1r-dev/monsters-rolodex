import React from 'react';

import './search-box.style.css';

export const SearchBox = ({ placeholder, inputValue, handleChange }) => (
  <input 
    type="search"
    className="search"
    value={inputValue}
    onChange={handleChange}
    placeholder={placeholder}/>
)