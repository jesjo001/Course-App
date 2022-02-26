import mongoose from "mongoose";
import { COURSE_TYPE } from "../utils/Constants";

export interface CourseDocument extends mongoose.Document {
  courseName: string;
  createdBy: string;
  thumbNail: string;
  coverImg: string;
  courseType: string;
  studentSubscribed: Array<string>;
  stars: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    thumbNail: {
      type: String,
      required: false,
    },
    coverImg: {
      type: String,
      required: true,
    },
    courseType: {
      type: String,
      enum: COURSE_TYPE,
      required: true,
    },
    studentSubscribed: {
      type: Array,
      required: false,
    },
    stars:{
      type: Array,
      required: false
    }
  },
  { timestamps: true }
);

const Course = mongoose.model<CourseDocument>("Course", courseSchema);
export default Course;
