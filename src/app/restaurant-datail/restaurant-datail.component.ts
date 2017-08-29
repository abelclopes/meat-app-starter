import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


import {RestaurantesService} from '../restaurantes/restaurantes.service'
import {Restaurant} from '../restaurantes/restaurant/restaurant.model'

@Component({
  selector: 'mt-restaurant-datail',
  templateUrl: './restaurant-datail.component.html'
})
export class RestaurantDatailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
