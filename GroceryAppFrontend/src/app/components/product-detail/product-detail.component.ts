import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product:any;
  productId:any;
  
  cart:IProduct[]=[];
  constructor(private dataService:DataService,private activatedRoute:ActivatedRoute){
    
   

    this.productId= activatedRoute.snapshot.paramMap.get('productId');
    this.dataService.getProductsById(this.productId).subscribe((response:any)=>{
      this.product=response;
      
    })
  }
  


  textMess='';
  alertClass='';

  
private cartKey='cart';

addToCart(item: any) { 
  let cartItems = this.getCartItems(); 
  cartItems.push(item); 
  localStorage.setItem(this.cartKey, JSON.stringify(cartItems)); 
  this.textMess="Added to cart";
  this.alertClass="alert alert-success"
  
} 
  removeFromCart(index: number) { 
    let cartItems = this.getCartItems(); 
    cartItems.splice(index, 1); 
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems)); 
  } 

    getCartItems() { 
      let cartItems = localStorage.getItem(this.cartKey); 
      return cartItems ? JSON.parse(cartItems) : []; 
    } 
      clearCart() { 
        localStorage.removeItem(this.cartKey); }
  

}
