/** Routes */
export interface MenuItemsConfig {
    id: string;
    link: string;
    label: string;
    activate: string;
    hover: string;
}


/** Aside Menu items */
export function menuItems(): MenuItemsConfig[] {
    return [
        {
            id: 'menu-1',
            label: 'Dashboard',
            link: '/dashboard',
            activate: 'txt-light-blue',
            hover: 'txt-light-blue',
        }
    ]
}
