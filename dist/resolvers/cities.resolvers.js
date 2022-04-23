"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesResolvers = void 0;
const graphql_1 = require("@nestjs/graphql");
const cities_model_1 = require("../models/cities.model");
const cities_service_1 = require("../services/cities.service");
let CitiesResolvers = class CitiesResolvers {
    constructor(citiesService) {
        this.citiesService = citiesService;
    }
    async getAllCities() {
        return this.citiesService.findAll();
    }
    async getCity(value) {
        return this.citiesService.findOneByName(value);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [cities_model_1.CitiesModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CitiesResolvers.prototype, "getAllCities", null);
__decorate([
    (0, graphql_1.Query)(() => cities_model_1.CitiesModel, { nullable: true }),
    __param(0, (0, graphql_1.Args)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CitiesResolvers.prototype, "getCity", null);
CitiesResolvers = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [cities_service_1.CitiesService])
], CitiesResolvers);
exports.CitiesResolvers = CitiesResolvers;
//# sourceMappingURL=cities.resolvers.js.map