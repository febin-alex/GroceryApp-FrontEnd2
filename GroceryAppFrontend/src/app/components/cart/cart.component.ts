import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart = [];
  public _image_url =  'http://rjtmobile.com/grocery/images/';

 

  constructor(private router:Router) { }

//To Calculate Total Price of items in cart
  getTotalPrice(): number {

    const cartItems = this.getCartItems();

    let totalPrice = 0;

    for (const item of cartItems) {

      totalPrice += item.DiscountedPrice;
    }
     return totalPrice;

  }
  

  
 

  ngOnInit(): void {
    this.cart =  JSON.parse(localStorage['cart']);
    console.log(this.cart);
  }

  private cartKey='cart';
  removeFromCart(index: number) { 
    
    let cartItems = this.getCartItems(); 
  
    cartItems.splice(index, 1); 
    

    localStorage.setItem(this.cartKey, JSON.stringify(cartItems)); 
    location.reload();

  } 

  getCartItems() { 
    let cartItems = localStorage.getItem(this.cartKey); 
    return cartItems ? JSON.parse(cartItems) : []; 
  } 
    clearCart() { 
      
      localStorage.removeItem(this.cartKey); 
    this.router.navigateByUrl("buy")}

}
