import mongoose from "mongoose";
import { COURSE_TYPE } from "../utils/Constants";

const courseDescriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    courseType: {
      type: String,
      enum: COURSE_TYPE,
      required: true,
    }
  },
  { timestamps: true }
);

export default courseDescriptionSchema
