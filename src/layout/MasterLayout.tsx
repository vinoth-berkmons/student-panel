import './MasterLayout.css';

import React, { FC, useEffect, useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import { Aside } from './components/aside/Aside';

import { Header } from './components/header/Header';
import useWindowDimensions from '../app/common/helpers/Utils';
import { Content } from './components/content/Content';
import { useDispatch } from 'react-redux';
import { doLogout } from '../app/store/auth/thunks';


/**
 * Master Layout holds the entire application except Auth flow. To make it reusable for the entire app
 * Ex: Header / Footer / Sidebar
 * All the Base layout components placed it in MasterLayout
 * 
 * @param param0 
 * @returns 
 */

const MasterLayout: FC = ({ children }) => {
    const { width } = useWindowDimensions();
    const isMobAside = width < 1024;
    const [toggleMenu, setToggle] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        if (width < 1023) {
            setToggle(false)
        }
    }, [width])


    const closeToggle = () => {
        if (isMobAside) {
            setToggle(false)
        }
    }

    const logout = () => {
        dispatch(doLogout())
    }

    return (
        <>

            <div className="app-wrapper">
                {
                    toggleMenu ?
                        <>
                            <Aside toggleAsideMenu={() => setToggle(!toggleMenu)} />
                        </>
                        :
                        <div className="flex items-center hamBurger">
                            <button className="outline-none toggle-menu-button" type='button' onClick={() => setToggle(!toggleMenu)}>
                                <GiHamburgerMenu />
                            </button>
                        </div>
                }

                <div className="wrapper" style={{
                    paddingLeft: toggleMenu ? '260px' : '0px'
                }}
                    onClick={closeToggle}>
                    <div className='header-wrapper' style={{
                        left: toggleMenu ? '260px' : '0px',
                        paddingLeft: toggleMenu ? '35px' : '100px'
                    }}>
                        <Header logoutAdmin={() => logout()} />
                    </div>
                    <div>
                        <Content> {children} </Content>
                    </div>
                </div>
            </div>
        </>
    )
}

export { MasterLayout }

