import React from 'react';
import './ChalkDivider.scss'; // Corrected import statement

const ChalkDivider = ({ variant, className, height }) => {
    const variantClass = variant ? `${variant}ChalkDivider` : '';
    const heightStyle = height ? { height: `${height}rem` } : {};
    return (
        <hr className={`chalkDivider ${className} ${variantClass}`} style={heightStyle}></hr>
    );
};

export default ChalkDivider;

{/* <ChalkDivider variant="black" className= height={ } /> */ }