import { Component, OnInit } from '@angular/core';
import { City } from './service/City';
import { CityList } from './service/CityList';
import { Country } from './service/Country';
import { CountryList } from './service/CountryList';
import { ConfigService } from './service/config.service';
import { Observable,BehaviorSubject,Subscription} from 'rxjs';
@Component({
  selector: 'app-lab10',
  templateUrl: './lab10.page.html',
  styleUrls: ['./lab10.page.scss'],
})
export class Lab10Page implements OnInit {

  countrys = new CountryList();
  private configService = new ConfigService();
  private subscription: Subscription[]= [];

  cityList = new CityList(this.configService);
  country: Country = new Country();

  i = 0;
  constructor() { }
  ngOnInit() {
    const countSub = this.configService.country$
      .subscribe(()=>{this.country =this.configService.country$.value;});
      this.subscription.push(countSub);
  }
  
  nextCountry()
  {
    if(this.i<this.countrys.country.size-1){
      this.i++;
    }
    else this.i = 0;
    this.configService.setCountry(this.countrys.country.get(this.i));
  }

  addCity(name:any){
    let city = new City();
    city.name = name;
    city.city_id = this.country.id;
    this.cityList.add(city);
  }

  addCountry(c1: any){
    let c = new Country();
    c.id = this.countrys.country.size;
    c.name = c1;
    this.countrys.add(c);
  }
  ngOnDestroy(){
    this.subscription
      .forEach(s=>s.unsubscribe());
  }
}
