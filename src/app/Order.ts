import Product from "./Product";
import User from "./User";


export default class Order{
    constructor(public orderId:number,public product:Product[],public user:User[],public totalCost:number){
        
    }
}