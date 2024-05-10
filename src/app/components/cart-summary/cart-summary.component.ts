import { Component } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  cartItems:CartItem[] = [];
  
  constructor(private cartService:CartService){}

  ngOnInit():void{
    this.getCart();
  }

  getCart(){
    this.cartItems = this.cartService.list();
  }
}
