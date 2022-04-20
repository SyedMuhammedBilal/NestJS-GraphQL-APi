import { Injectable } from '@nestjs/common';
import * as cities from '../static/Bop500_City.json';

@Injectable()
export class CitiesService {
  findAll() {
    return cities;
  }

  findOneByName(cityName: string) {
    return cities.find((city: any) => city.city_name === cityName);
  }
}
