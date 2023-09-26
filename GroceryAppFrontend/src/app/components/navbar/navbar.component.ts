import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { ICategory } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { IProduct } from 'src/app/models/product.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  categories:ICategory[]=[];
  products:IProduct[]=[];

  
isLoggedIn:any;

  constructor(private dataService:DataService,private authService:AuthGuardService,private router:Router){
    


this.isLoggedIn=this.authService.checkToken();
    this.dataService.getCategories().subscribe((response:any)=>{
      this.categories=response;
    })
  }

  onLogin(){

    this.router.navigateByUrl('login')

  }

  onLogout(){

    
      this.authService.logout();

      this.router.navigateByUrl('login')

      this.isLoggedIn=false;

      this.isLoggedIn=this.authService.checkToken();

  }

  onSearchHandler(name:string){
    console.log(name);
  if(name!=""){
   // this.router.navigateByUrl("product/"+name);
   this.router.navigate(["search/"+name]).then(()=>{
    window.location.reload();
   })
  
  }
  }

    
  }


  
 









