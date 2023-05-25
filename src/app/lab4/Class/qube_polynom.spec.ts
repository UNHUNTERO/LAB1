import { Qube_p } from "./qube_polynom";

describe("тестування класу Qube_p",() => {
    let qb_p:Qube_p;
    beforeEach(()=>{
        qb_p = new Qube_p("Qube_p", 2 , 2, 2 ,2, 2)
    })

    fit("Створення екземпляру класу",()=>{
        expect(qb_p).toBeTruthy();
    })

    fit("Розрахунок багаточлена з коефіціентами 2,2,2,2 та x = 2, очікуваний результат 30", ()=>{
        qb_p.S();
        let res = qb_p.result;
        let res2 = 2*2**3+2*2**2+2*2+2;
        expect(res).toBe(res2);
    })
})