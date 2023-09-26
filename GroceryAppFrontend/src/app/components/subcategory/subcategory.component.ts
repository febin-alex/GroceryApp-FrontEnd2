import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubcategory } from 'src/app/models/subcategory.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent {



  catId: any; subcategories: ISubcategory[]=[]; 
  constructor(private dataservice: DataService, private activatedroute: ActivatedRoute){ 


    this.catId = this.activatedroute.snapshot.paramMap.get('catId'); 
    this.dataservice.getSubCategoryByCatId(this.catId).subscribe((response: any)=>{
       this.subcategories = response; }) 
      
      
      }


       
}
