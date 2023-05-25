import { Injectable } from '@angular/core';
import { Country } from './Country';
import { CountryList } from './CountryList';
import { Observable,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentcountry=DEFAULT_COUNTRY;
  country$: BehaviorSubject<Country> = new BehaviorSubject<Country>(DEFAULT_COUNTRY);
  setCountry(country:Country){
    console.log("Є зміни");
    this.country$.next(country);
  }
  constructor() { }
}
var countryList = new CountryList();
const DEFAULT_COUNTRY=countryList.country.get(0);