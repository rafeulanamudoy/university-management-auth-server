"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoute = void 0;
const express_1 = __importDefault(require("express"));
const projects_controller_1 = require("./projects.controller");
const router = express_1.default.Router();
exports.ProjectRoute = router;
router.post("/", projects_controller_1.ProjectController.createProject);
router.get("/", projects_controller_1.ProjectController.getProject);
