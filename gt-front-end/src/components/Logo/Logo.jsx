import React from 'react';

const logo = require('./src/assets/assets/logo-header.svg');
const Logo = () => {
    return (
        <>
        <img src={logo} alt="Digital Store Logo" width={253} height={44} />
        </>
    );
}

export default Logo;