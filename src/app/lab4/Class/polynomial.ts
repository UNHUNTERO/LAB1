export abstract class Polynomial {
    naz!: string;
    result!: number;
    constructor() {}
        show(){
            return "Назва=" + this.naz + " Результат=" + this.result;
        }
        abstract S(): any;
    }