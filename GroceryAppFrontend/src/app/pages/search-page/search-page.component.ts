import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

  productName:any;
  allProducts:IProduct[]=[];
constructor(private dataService:DataService,private activatedRoute:ActivatedRoute){
  this.productName= activatedRoute.snapshot.paramMap.get('productName');
  this.dataService.getProductsBySearch(this.productName).subscribe((response:any)=>{
     
    this.allProducts=response;
  
  
  });
}
}




