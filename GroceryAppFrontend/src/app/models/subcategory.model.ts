import { ICategory } from "./category.model";

export interface ISubcategory{
    Id:number;
    SubcategoryName:string;
    Category:ICategory;
}