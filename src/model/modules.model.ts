import mongoose from "mongoose";
import { COURSE_TYPE } from "../utils/Constants";
import moduleDetails from './courseDescription.model'

export interface ModuleDocument extends mongoose.Document {
  courseId: string;
  createdBy: string;
  moduleName: string;
  modules: Array<string>;
  moduleType: string;
  studentSubscribed: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

const moduleSchema = new mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    moduleName: {
      type: String,
      required: true,
    },
    modules: [moduleDetails],
    moduleType: {
      type: String,
      enum: COURSE_TYPE,
      required: true,
    }
  },
  { timestamps: true }
);

const Module = mongoose.model<ModuleDocument>("Module", moduleSchema);
export default Module;
