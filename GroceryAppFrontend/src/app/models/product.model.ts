export interface IProduct{
    Id:number;
    ProductName:string;
    Description:string;
    UnitPrice:number;
    DiscountedPrice:number;
    UnitsinStock:number;
    UnitType:string;
    Discontinued:number;
    CategoryId:number;
    SubcategoryId:number;
    CreatedDate:Date;
    ModifiedDate:Date;
    ProductUrl:string;
}