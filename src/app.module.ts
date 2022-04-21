import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CitiesModule } from './module/cities.module';

@Module({
  imports: [
    CitiesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './schema/schema.gql',
      introspection: true,
      playground: true,
    }),
  ],
})
export class AppModule {}
