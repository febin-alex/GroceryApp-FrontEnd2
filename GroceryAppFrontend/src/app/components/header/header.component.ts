import { Component } from '@angular/core';
import { CategoryHeader } from 'src/app/models/CategoryHeader.model';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

 

CategoryHeaderList :CategoryHeader[]=[];
  constructor(){
    this.CategoryHeaderList=[

    {CategoryTitle:"Don’t forget to stock up on the essentials.",CategoryDesc: "Get Foodgrains, oils and masalas",CategoryUrl: "https://static8.depositphotos.com/1001669/861/i/450/depositphotos_8613173-stock-photo-seeds-of-mustard-flax-coriander.jpg",CategoryOffer:45,CategoryRouterLink:"/category/102"},
    {CategoryTitle:"Life is uncertain. Eat   dessert first.",CategoryDesc: "Cakes , Pasteries & more",CategoryUrl:"https://static3.depositphotos.com/1002962/213/i/600/depositphotos_2136796-stock-photo-cake-buffet-with-various-cakes.jpg",CategoryOffer:50,CategoryRouterLink:"/category/103"},
    {CategoryTitle:"Not eating meat is a decision. Eating meat is an instinct.",CategoryDesc:"Live life. Eat meat.",CategoryUrl:"https://www.nih.gov/sites/default/files/news-events/research-matters/2019/20180107-red-meat.jpg",CategoryOffer:25,CategoryRouterLink:"/category/104"},
    {CategoryTitle: "Sip back and relax",CategoryDesc: "Keep calm and drink soft drinks.",CategoryUrl:"https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2018/02/23/30149-coca-cola-beverages-reuters.jpg?itok=JUr8kPS6",CategoryOffer:10,CategoryRouterLink:"/category/105"},
    ]
  }
 
}
