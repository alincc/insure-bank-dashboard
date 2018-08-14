import { Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
    }
]