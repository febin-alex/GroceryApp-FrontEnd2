import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products:IProduct[]=[];
  catId:any;
  subCatId:any;
  productName:any;
  allProducts:IProduct[]=[];
  allCategoryProducts:IProduct[]=[];
counter:any;
  constructor(private dataService:DataService,private activatedRoute:ActivatedRoute){
this.counter=0;
  this.catId = activatedRoute.snapshot.paramMap.get('catId');
  this.subCatId = activatedRoute.snapshot.paramMap.get('subCatId');



  this.dataService.getAllProducts().subscribe((response:any) =>{
    this.allProducts=response;
    console.log(response);
    for(let pdt in this.allProducts){
     if(this.allProducts[pdt].CategoryId==this.catId){
      this.allCategoryProducts[this.counter]=this.allProducts[pdt];
      this.counter++;


     }
    
    }
    console.log(this.allProducts)
  })


    this.dataService.getProductsByCatIdAndSubCatId(this.catId,this.subCatId).subscribe((response:any)=>{
      this.allCategoryProducts=response;
      console.log()
    })


  
  }

  }
