import { Resolver, Query, Args } from '@nestjs/graphql';
import { CitiesModel } from 'src/models/cities.model';
import { CitiesService } from 'src/services/cities.service';

@Resolver()
export class CitiesResolvers {
  constructor(private readonly citiesService: CitiesService) {}

  @Query(() => [CitiesModel])
  async getAllCities() {
    return this.citiesService.findAll();
  }

  @Query(() => CitiesModel, { nullable: true })
  async getCity(@Args('city') value: string) {
    return this.citiesService.findOneByName(value);
  }
}
