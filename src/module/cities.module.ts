import { Module } from '@nestjs/common';
import { CitiesResolvers } from 'src/resolvers/cities.resolvers';
import { CitiesService } from 'src/services/cities.service';

@Module({
  providers: [CitiesService, CitiesResolvers],
})
export class CitiesModule {}
