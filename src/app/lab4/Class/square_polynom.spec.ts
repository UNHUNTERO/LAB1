import { Square_p } from "./square_polynom";

describe("тестування класу Square_p",() => {
    let sq_p:Square_p;
    beforeEach(()=>{
        sq_p = new Square_p("Square_p", 2 , 2, 2 ,2)
    })

    it("Створення екземпляру класу",()=>{
        expect(sq_p).toBeTruthy();
    })

    it("Розрахунок багаточлена з коефіціентами 2,2,2 та x = 2, очікуваний результат 14", ()=>{
        sq_p.S();
        let res = sq_p.result;
        let res2 = 2*2**2+2*2+2;
        expect(res).toBe(res2);
    })
})