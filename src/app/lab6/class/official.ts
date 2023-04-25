import { IShow } from "../interface/ishow";
import { IWork } from "../interface/iwork";
import { person } from "./person";
export class Official extends person implements IWork{
    constructor(override name:string,override age:number,public wname: string, shower:IShow){
        super();
        shower.show("Name " + this.name + " Age " + this.age + " Work name " + this.wname )
    }
    
    work(){
        return "Я працюю офіціально"
    }
    
}