## NESTJS GraphQL APi

<p align="center">
 <img src="https://i.ibb.co/tppN4yG/Group-2.png" alt="Group-2" border="0" />
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A <a href="https://graphql.org/" target="_blank">GraphQL</a> APi for Bop-Consulting application.</p>
    <p align="center">


## Bop500 proposed architecture

<img src="https://i.ibb.co/PZSkRWG/Nest-JS-APi-Architect-2.png" alt="Nest-JS-APi-Architect-2" border="0"><br />

<h3>NestJS GraphQL APi architecture link:</h3>
<a href="https://www.figma.com/file/qWNWiM5jmFhmCXHFp4pAhn/NestJS-APi-Architect?node-id=0%3A1"><img src="https://i.ibb.co/VCbKgyy/Group-3-1.png" alt="Group-3-1" border="0"></a>

## GraphQL service browser
<a href="https://bop-consulting.herokuapp.com/graphql" target="_blank">https://bop-consulting.herokuapp.com/graphql</a>

## TYPES (CitiesModel):

```graphql
type CitiesModel {
  city_id: Float!
  city_name: String!
  state_id: Float!
  state_code: String!
  city_nominatim: String!
  state_name: String!
  country_id: Float!
  country_code: String!
  country_name: String!
  city_latitude: Float!
  city_longitude: Float!
  city_wikiDataId: String!
  bop_wikiDataId: String!
  city_population: String!
  city_osm_id: Float!
  city_administrative_level: Float
}
```

## GET ENDPOINTS on GraphQL (Query)

```graphql
type Query {
  // getAllCities query will return CitiesModel type data 
  getAllCities: [CitiesModel!]!
  // (city: String) is used as an argument on query which then filter out city that will be provided to the query
  getCity(city: String!): CitiesModel
}
```

## Query examples

<p>You can copy and paste the following examples to query</p>
<a href="https://bop-consulting.herokuapp.com/graphql" target="_blank">https://bop-consulting.herokuapp.com/graphql</a>

### Example 1 (get all city and country data query)

```graphql
query {
  getAllCities {
    country_name
    city_name
    city_latitude
    city_longitude
    city_population
    city_id
    country_id
    country_code
    city_osm_id
    city_nominatim
    city_wikiDataId
    city_administrative_level
    state_id
    state_code
    state_name
  }
}
```

### Example 2 (get one city detail query)

```graphql
query {
  getCity(city: "Seattle") {
    country_name
    city_name
    city_latitude
    city_longitude
    city_population
    city_id
    country_id
    country_code
    city_osm_id
    city_nominatim
    city_wikiDataId
    city_administrative_level
    state_id
    state_code
    state_name
  }
}
```

## Installation

```bash
$ npm install or yarn install
```

## Running the app

```bash
# development
$ npm run start or yarn start

# watch mode
$ npm run start:dev or yarn start:dev

# production mode
$ npm run start:prod or yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test or yarn test

# e2e tests
$ npm run test:e2e or yarn test:e3e

# test coverage
$ npm run test:cov or yarn test:cov
```