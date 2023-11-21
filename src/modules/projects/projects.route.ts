import express from "express";
import { ProjectController } from "./projects.controller";

const router = express.Router();

export const ProjectRoute = router;

router.post(
  "/",

  ProjectController.createProject
);

router.get("/", ProjectController.getProject);
