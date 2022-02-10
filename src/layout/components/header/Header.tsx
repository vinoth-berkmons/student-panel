import './Header.css';

import React, { FC } from 'react';
import { FiLogOut } from 'react-icons/fi';

/**
 * Header of the App
 * @returns Header
 */
const Header: FC<any> = ({ logoutAdmin }) => {

    return (
        <div className="header-container mt-2 flex items-center w-full pr-8 sm:mt-4 xxsm:mt-4">

            <div className="header-search  md:flex-1 items-center  md:flex">
                <h2 className="primary-txt mt-2 text-xl xxsm:text-lg">Student Panel</h2>
            </div>
            <div className="flex items-center flex-1 justify-end">
                <div className="logout-btn-container flex">
                    <button className="md:hidden sm:flex " onClick={logoutAdmin}>
                        <FiLogOut />
                    </button>
                    <button className="logout-btn sm:hidden xxsm:hidden md:flex" onClick={logoutAdmin}>
                        <span className="logout-btn-txt">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export { Header }
