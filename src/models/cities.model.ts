import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CitiesModel {
  @Field()
  readonly city_id: number;

  @Field()
  readonly city_name: string;

  @Field()
  readonly state_id: number;

  @Field()
  readonly state_code: string;

  @Field()
  readonly city_nominatim: string;

  @Field()
  readonly state_name: string;

  @Field()
  readonly country_id: number;

  @Field()
  readonly country_code: string;

  @Field()
  readonly country_name: string;

  @Field()
  readonly city_latitude: number;

  @Field()
  readonly city_longitude: number;

  @Field()
  readonly city_wikiDataId: string;

  @Field()
  readonly bop_wikiDataId: string;

  @Field()
  readonly city_population: string;

  @Field()
  readonly city_osm_id: number;

  @Field({ nullable: true })
  readonly city_administrative_level: number;
}
