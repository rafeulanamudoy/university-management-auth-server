"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const projects_route_1 = require("../modules/projects/projects.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/projects",
        route: projects_route_1.ProjectRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.routes = router;
