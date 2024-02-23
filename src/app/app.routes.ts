import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPagedComponent } from './not-found-paged/not-found-paged.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'details/:id', component: DetailsComponent, title: 'Home detail'
    },
    {
        path: '**', component: NotFoundPagedComponent
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
];
