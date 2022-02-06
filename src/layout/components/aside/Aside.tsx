import './Aside.css';

import React, { FC } from 'react';
import { BsReverseLayoutSidebarInsetReverse } from 'react-icons/bs';
import { MdOutlineDashboard } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import { menuItems, MenuItemsConfig } from '../../../app/common/models/Common';



const Aside: FC<any> = ({ toggleAsideMenu }) => {

    const menuItem: MenuItemsConfig[] = menuItems();

    const getMenuIcon = (menuId: string) => {
        switch (menuId) {
            case 'menu-1':
                return <MdOutlineDashboard />
            default:
                break;
        }
    }
    return (

        <>
            <div className='toggle-menu float-left'>
                <div className='aside aside-fixed aside-style'>
                    <div className="relative ">
                        <div className="absolute inset-y-0 left-0 ">
                            <div className="aside-logo">
                                <img src='./images/student-panel.png' alt='Student panel' />
                            </div>
                            <div className='profile-container'>
                                <img src='./images/avatar.jpg' className='profile-img' alt='avatar' />
                                <div className='flex flex-col mt-1 ml-4'>
                                    <span className='username'>Admin</span>
                                    <span className='email'>admin@mainteny.com</span>
                                </div>
                            </div>
                            <div className="aside-menu hover-scroll-overlay-y">
                                <div className="menu menu-column ">

                                    {
                                        menuItem.map(item => {
                                            return <div key={`${item.id}`} className="menu-item">
                                                <NavLink activeClassName={`${item.activate}`} activeStyle={{ borderLeft: '4px solid #175269' }} className="menu-link" to={`${item.link}`}>

                                                    <span className='mr-3'>{getMenuIcon(item.id)}</span>

                                                    <span className='text-decoration-none'>{item.label}</span>
                                                </NavLink>
                                            </div>
                                        })
                                    }
                                </div>
                                <div>
                                    <button type="button"
                                        onClick={toggleAsideMenu}
                                        className='flex items-center sidebar-toggle-custom toggle-menu-button'
                                    >
                                        <BsReverseLayoutSidebarInsetReverse /> <span className='ml-3'>Toggle sidebar</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Aside }