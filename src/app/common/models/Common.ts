
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
        },
        {
            id: 'menu-2',
            label: 'Create Course',
            link: '/createCourse',
            activate: 'txt-light-blue',
            hover: 'txt-light-blue',
        }
    ]
}

/**
 * DOTS: this used for pagination
 */
export const DOTS = '...';

/**
 * Button model: styled component button model 
 */
export interface ButtonModel {
    width?: string;
    height?: string;
    bg?: string;
    color?: string;
    formValue: any;
    clickEvent?: any;
    disable?: boolean | undefined;
    style?: any;
  }
  