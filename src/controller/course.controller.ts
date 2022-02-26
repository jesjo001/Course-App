import { throws } from "assert";
import { Request, Response } from "express";
import { get, omit } from "lodash";
import log from "../logger";
import  {
    createCourse,
    findCourse,
    findAllCourses,
    findAndUpdateCourse,
    deleteCourse,
    createModule,
    findModule,
    findAllModules,
    findAndUpdateModule,
    deleteModule,
    findCourseModule
} from "../service/courses/courses.services";

export const createCourseHandler = async (req: Request, res: Response) => {
    try {
        const name = get(req, "body.courseName")
        const owner = get(req, "body.createdBy")

        const course = await findCourse({ courseName: name, createdBy: owner})

        if(course){
            return res.status(403).json({ 
                status: 403,
                message: `A Course with the title ${name} has already has already been created by you`
            })
        }

        const newCourse = await createCourse(req.body);

        return res.status(200).json({
            status: 200,
            course: omit(newCourse.toJSON(), "studentSubscribed")
        })

    } catch (error) {
        log.error(error);
        return res.status(500).json({
            status: 500,
            message: "Ops something went wrong. Please try again later!!",
        });
    }
}


export const getCourseHandler = async (req: Request, res: Response) => {
    try {
        
        const courseId = get(req, "params.id")

        const course = await findCourse({ _id: courseId})

        if (!course) return res.status(404).json({
            status: 404,
            message: "Course not found.",
        });

        const modules = await findCourseModule({ courseId: courseId }, { 
            sort: {
                'moduleName': 1 //Sort by Date Added DESC
            }}
        )

        return res.status(200).json({
            status: 200,
            course,
            modules
        });
        
    } catch (error) {
        log.error(error);
        return res.status(500).json({
            status: 500,
            message: "Ops something went wrong. Please try again later!!",
        });
    }
}


export const deleteCourseHandler = async (req: Request, res: Response) => {
    try {
        

        
    } catch (error) {
        log.error(error);
        return res.status(500).json({
            status: 500,
            message: "Ops something went wrong. Please try again later!!",
        });
    }
}


export const getAllCoursesHandler = async (req: Request, res: Response) => {
    try {
        const courses = await findAllCourses()

        if (!courses) return res.status(404).json({
            status: 404,
            message: "Courses not found.",
        });

        return res.status(200).json({
            status: 200,
            courses
        });
        
    } catch (error) {
        log.error(error);
        return res.status(500).json({
            status: 500,
            message: "Ops something went wrong. Please try again later!!",
        });
    }
}







// Module
export const createModuleHandler = async (req: Request, res: Response) => {
    try {
        const name = get(req, "body.moduleName")
        const courseId = get(req, "body.courseId")

        const module = await findModule({ moduleName: name, courseId})

        if(module){
            return res.status(403).json({ 
                status: 403,
                message: `A Module with the same title ${name} has already been created by you`
            })
        }

        const newModule = await createModule(req.body);

        return res.status(200).json({
            status: 200,
            module: newModule
        })

    } catch (error) {
        log.error(error);
        return res.status(500).json({
            status: 500,
            message: "Ops something went wrong. Please try again later!!",
        });
    }
}
