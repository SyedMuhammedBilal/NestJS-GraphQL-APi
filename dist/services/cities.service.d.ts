export declare class CitiesService {
    findAll(): {
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
    }[];
    findOneByName(cityName: string): {
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
    };
}
