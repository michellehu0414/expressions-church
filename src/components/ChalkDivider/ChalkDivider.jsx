import React from 'react';
import './ChalkDivider.scss'; // Corrected import statement

const ChalkDivider = ({ variant, className }) => {
    const variantClass = variant ? `${variant}ChalkDivider` : '';
    return (
        <hr className={`chalkDivider ${className} ${variantClass}`}></hr>
    );
};

export default ChalkDivider;