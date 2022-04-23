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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesModel = void 0;
const graphql_1 = require("@nestjs/graphql");
let CitiesModel = class CitiesModel {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CitiesModel.prototype, "city_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CitiesModel.prototype, "city_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CitiesModel.prototype, "state_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CitiesModel.prototype, "state_code", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CitiesModel.prototype, "city_nominatim", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CitiesModel.prototype, "state_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CitiesModel.prototype, "country_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CitiesModel.prototype, "country_code", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CitiesModel.prototype, "country_name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CitiesModel.prototype, "city_latitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CitiesModel.prototype, "city_longitude", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CitiesModel.prototype, "city_wikiDataId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CitiesModel.prototype, "bop_wikiDataId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CitiesModel.prototype, "city_population", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CitiesModel.prototype, "city_osm_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], CitiesModel.prototype, "city_administrative_level", void 0);
CitiesModel = __decorate([
    (0, graphql_1.ObjectType)()
], CitiesModel);
exports.CitiesModel = CitiesModel;
//# sourceMappingURL=cities.model.js.map