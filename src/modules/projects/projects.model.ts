import { Schema, model } from "mongoose";
import { IProject } from "./projects.interface";
const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },
    fronEndLink: {
      type: String,
      required: true,
    },
    backendLink: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Project = model<IProject>("Project", projectSchema);
