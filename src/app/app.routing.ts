import { Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'companies',
        loadChildren: './pages/companies/companies.module#CompaniesModule'
    }
]