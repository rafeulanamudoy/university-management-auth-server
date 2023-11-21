import { Request, Response } from "express";
import { ProjectService } from "./projects.service";

const createProject = async (req: Request, res: Response) => {
  const project = req.body;
  const result = await ProjectService.createProject(project);
  try {
    res.status(200).json({
      status: "success",
      project: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "couldn't create the project",
    });
  }
};
const getProject = async (req: Request, res: Response) => {
  const result = await ProjectService.getProject();
  try {
    res.status(200).json({
      status: "success",
      project: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: "couldn't get the project",
    });
  }
};

export const ProjectController = {
  createProject,
  getProject,
};
