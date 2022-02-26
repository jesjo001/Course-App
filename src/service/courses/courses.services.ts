import { omit } from "lodash";
import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Course, { CourseDocument } from "../../model/courses.model";
import Module, { ModuleDocument } from "../../model/modules.model";

//services for courses

export const createCourse = async ( input: DocumentDefinition<CourseDocument>) => {
    return await Course.create(input);
}

export const findCourse = async (  
    query: FilterQuery<CourseDocument>,
    options: QueryOptions = { lean: true }
    ) => {
    return Course.findOne(query, {}, options)
}

export function findAllCourses() {
  return Course.find({});
}

export const findAndUpdateCourse = (
  query: FilterQuery<CourseDocument>,
  update: UpdateQuery<CourseDocument>,
  options: QueryOptions
) => {
  return Course.findOneAndUpdate(query, update, options);
};

export function deleteCourse(query: FilterQuery<CourseDocument>) {
  return Course.deleteOne(query);
}


//Services for modules
export const createModule = async ( input: DocumentDefinition<ModuleDocument>) => {
    return await Module.create(input);
}

export const findModule = async (  
    query: FilterQuery<ModuleDocument>,
    options: QueryOptions = { lean: true }
    ) => {
    return Module.findOne(query, {}, options)
}

export const findCourseModule = async (  
    query: FilterQuery<ModuleDocument>,
    options: QueryOptions = { lean: true }
    ) => {
    return Module.find(query, {}, options)
}

export function findAllModules() {
  return Module.find({});
}

export const findAndUpdateModule = (
  query: FilterQuery<ModuleDocument>,
  update: UpdateQuery<ModuleDocument>,
  options: QueryOptions
) => {
  return Module.findOneAndUpdate(query, update, options);
};

export function deleteModule(query: FilterQuery<ModuleDocument>) {
  return Module.deleteOne(query);
}
