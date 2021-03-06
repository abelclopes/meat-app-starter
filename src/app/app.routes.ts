import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {RestaurantesComponent} from './restaurantes/restaurantes.component'
import {RestaurantDatailComponent} from './restaurant-datail/restaurant-datail.component'
import {MenuComponent} from './restaurant-datail/menu/menu.component'
import { ReviewsComponent } from './restaurant-datail/reviews/reviews.component'
export const ROUTES: Routes = [
    {path:"", component: HomeComponent},
    {path:"restaurantes", component: RestaurantesComponent},
    {path:"restaurantes/:id", component: RestaurantDatailComponent,
        children:[
            {path:'', redirectTo: 'menu', pathMatch:'full'},
            {path:"menu", component: MenuComponent},
            {path:"reviews", component: ReviewsComponent},
        ]},
    {path:"about", component: AboutComponent}
];
