import React from 'react';

//Form Control - Bootstrapped
const Input = ({ placeholder, type, onChange, className }) =>
    <input type={type} className={className} onChange={onChange} placeholder={placeholder} />

export default Input;