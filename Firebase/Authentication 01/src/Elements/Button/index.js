import React from 'react';

const Button = ({ className, type, onClick, children }) =>
    <button type={type} onClick={onClick} className={className}>{children}</button>

export default Button;