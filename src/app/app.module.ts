import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { RestaurantComponent } from './restaurantes/restaurant/restaurant.component'
import { RestaurantesService } from './restaurantes/restaurantes.service'
import { RestaurantDatailComponent } from './restaurant-datail/restaurant-datail.component';
import { MenuComponent } from './restaurant-datail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-datail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-datail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-datail/reviews/reviews.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestaurantComponent,
    RestaurantDatailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
