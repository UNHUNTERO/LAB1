import {ConfigService} from './config.service';
import {City} from "./City"

export class CityList
{
    private cityList = new Array();
    private searchCity= new Array();

    searchCityResult:string[] = [];

    countrySub = this.configService.country$
        .subscribe(()=>{

        let country = this.configService.country$.value;
        this.search(country.id);
        });
        constructor(private configService:ConfigService)
        {
            let city = new City();
            city.name= "Київ"
            city.city_id=0;
            this.add(city);
            let city1 = new City();
            city1.name= "Лос-Аеджелес"
            city1.city_id=1;
            this.add(city1);
         this.search(0)
        }

    add(city: City){
        this.cityList.push(city);
        this.search(city.city_id);
    }
    search(id_city:number){
        this.searchCity=this.cityList.filter((city)=>{
            return city.city_id == id_city; 
        })
        this.searchCityResult = [];
        this.searchCity.forEach(el => {
            this.searchCityResult.push('Назва:' + el.name);
        });
    }
}