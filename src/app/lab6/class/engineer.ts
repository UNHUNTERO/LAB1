import { IShow } from "../interface/ishow";
import { IWork } from "../interface/iwork";

export class Engineer implements IWork{
    constructor (public name:string,public age:number,public elvl:number,shower:IShow){
        shower.show("Name " + this.name + " Age " + this.age + " Engineer lvl " + this.elvl )
    }

    work(){
        return "Я працюю Інженером"
    }
    
}