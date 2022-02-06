import './Header.css';

import React, { FC } from 'react';


/**
 * Header of the App
 * @returns Header
 */
const Header: FC = () => {

    return (
        <div className="header-container md:mt-2 flex items-center w-full pr-8 sm:mt-4 xxsm:mt-4">
            <h2 className="primary-txt  text-xl">Welcome to Student Panel</h2>
        </div>
    )
}

export { Header }
