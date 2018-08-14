
// import { Roles } from "../guards";


//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
    profile?: string[];
}


export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}



//Menu Items
export const ROUTES: RouteInfo[] = [{
            path: '/dashboard',
            title: 'Dashboard',
            type: 'link',
            icontype: 'dashboard',
            // profile: Roles.dashboard
        },
        {
            path: '/accounts',
            title: 'Registration',
            type: 'link',
            icontype: 'group',
            // profile: Roles.registrations
        },
        {
            path: '/claims',
            title: 'Remitance Payable',
            type: 'link',
            icontype: 'equalizer',
            // profile: Roles.claims
        },
        {
            path: '/user-management',
            title: 'User Management',
            type: 'link',
            icontype: 'person',
            // profile: Roles.users
        },
        {
            path: '/reports',
            title: 'Reports',
            type: 'sub',
            icontype: 'assignment',
            collapse: 'forms',
            // profile: Roles.reports,
            children: [
                { path: '/successful-payments', title: 'Successful Payments', ab: 'SP' },
                { path: '/registrations-report', title: 'Registrations', ab: 'RR' },
                { path: '/commisions-report', title: 'Commisions', ab: 'CR'},
                { path: '/users-report', title: 'Users', ab: 'UR'},
            ]
        }
];
