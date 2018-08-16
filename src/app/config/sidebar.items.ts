import { ISidebar } from "../components/sidebar/sidebar.component";



export const sideBarItems: ISidebar = {
    logo: '../assets/img/logo-small.png',
    title: 'Insure Bank',
    items: [
        {
            item: 'dashboard',
            icon: 'nc-icon nc-bank'
        },
        {
            item: 'companies',
            icon: 'nc-icon nc-tile-56'
        },
        {
            item: 'policies',
            icon: 'nc-icon nc-tile-56'
        },
        {
            item: 'users',
            icon: 'nc-icon nc-single-02'
        }
    ]
}