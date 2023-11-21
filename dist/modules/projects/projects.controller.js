"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const projects_service_1 = require("./projects.service");
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const project = req.body;
    const result = yield projects_service_1.ProjectService.createProject(project);
    try {
        res.status(200).json({
            status: "success",
            project: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            error: "couldn't create the project",
        });
    }
});
const getProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projects_service_1.ProjectService.getProject();
    try {
        res.status(200).json({
            status: "success",
            project: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            error: "couldn't get the project",
        });
    }
});
exports.ProjectController = {
    createProject,
    getProject,
};
