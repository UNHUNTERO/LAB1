import { Polynomial } from "./polynomial";

export class Square_p extends Polynomial
{
    constructor(override naz: string, public n1: number ,public n2: number,public n3: number,public x:number)
    {
        super();
    }


S()

{
    let result;

    this.result = this.n1*this.x**2+this.n2*this.x+this.n3;
}
}