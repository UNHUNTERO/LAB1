import { IShow } from "../interface/ishow";
import { IWork } from "../interface/iwork";

export class Worker implements IWork{
    constructor (public name:string,public age:number,shower:IShow){
        shower.show("Name " + this.name + " Age " + this.age)
    }
   
    work(){
        return "Я працюю "
    }
    
}