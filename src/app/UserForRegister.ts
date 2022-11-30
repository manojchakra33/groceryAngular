import Address from "./Address";
import Login from "./Login";

export default class UserForRegister{
    constructor(public userId:number,public name:string,public mobileNumber:string,public address:Address,public login:Login){

    }
}