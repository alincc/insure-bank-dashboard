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
    },
    {
        path: 'policies',
        loadChildren: './pages/policies/policies.module#PoliciesModule'
    },
    {
        path: 'users',
        loadChildren: './pages/users/users.module#UsersModule'
    },
    {
        path: 'subscriptions',
        loadChildren: './pages/subscriptions/subscriptions.module#SubscriptionsModule'
    },
    {
        path: 'deductions',
        loadChildren: './reports/deductions/deductions.module#DeductionsModule'
    }
]