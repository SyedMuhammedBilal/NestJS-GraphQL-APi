import { CitiesService } from 'src/services/cities.service';
export declare class CitiesResolvers {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    getAllCities(): Promise<{
        _id: {
            $oid: string;
        };
        city_id: number;
        city_name: string;
        state_id: number;
        state_code: string;
        city_nominatim: string;
        state_name: string;
        country_id: number;
        country_code: string;
        country_name: string;
        city_latitude: number;
        city_longitude: number;
        city_wikiDataId: string;
        bop_wikiDataId: string;
        city_population: string;
        city_osm_id: number;
        city_administrative_level: number;
        __v: number;
    }[]>;
    getCity(value: string): Promise<{
        _id: {
            $oid: string;
        };
        city_id: number;
        city_name: string;
        state_id: number;
        state_code: string;
        city_nominatim: string;
        state_name: string;
        country_id: number;
        country_code: string;
        country_name: string;
        city_latitude: number;
        city_longitude: number;
        city_wikiDataId: string;
        bop_wikiDataId: string;
        city_population: string;
        city_osm_id: number;
        city_administrative_level: number;
        __v: number;
    }>;
}
