import { Polynomial } from "./polynomial";

export class Qube_p extends Polynomial
{
    constructor(override naz: string, public n1: number ,public n2: number,public n3: number,public n4: number,public x:number)
    {
        super();
    }


S()

{
    let result;
    this.result = this.n1 * this.x ** 3 + this.n2 * this.x ** 2 + this.n3 * this.x + this.n4;
}
}