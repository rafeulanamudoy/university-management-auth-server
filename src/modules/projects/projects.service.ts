import { IProject } from "./projects.interface";
import { Project } from "./projects.model";

const createProject = async (project: IProject): Promise<IProject | null> => {
  const createdCow = await Project.create(project);
  return createdCow;
};
const getProject = async (): Promise<IProject[]> => {
  const result = await Project.find({});
  return result;
};

export const ProjectService = {
  createProject,
  getProject,
};
