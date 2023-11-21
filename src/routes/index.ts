import express from "express";
import { ProjectRoute } from "../modules/projects/projects.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/projects",
    route: ProjectRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const routes = router;
