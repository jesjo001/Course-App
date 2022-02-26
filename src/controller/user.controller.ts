import { Request, Response } from 'express';
import { createUser, createStudent, createCounsellor } from '../service/users/createUser';
import { omit } from 'lodash'
import log from '../logger'

export const createUserHandler = async (req: Request, res: Response) => {

    try {
        const user = await createUser(req.body)
        return res.send(omit(user.toJSON(), 'password'));
    } catch (error) {
        const newError = error as any;
        log.error(newError);
        res.status(409).send(newError.message);
    }
}

export const createStudentHandler = async (req: Request, res: Response) => {

    try {
        const user = await createStudent(req.body)
        return res.send(omit(user.toJSON(), 'password'));
    } catch (error) {
        const newError = error as any;
        log.error(newError);
        res.status(409).send(newError.message);
    }
}

export const createCounsellorHandler = async (req: Request, res: Response) => {

    try {
        const user = await createCounsellor(req.body)
        return res.send(omit(user.toJSON(), 'password'));
    } catch (error) {
        const newError = error as any;
        log.error(newError);
        res.status(409).send(newError.message);
    }
}

export const createUserSessionHandler = async (req: Request, res: Response) => {

    try { 
        const user = await createUser(req.body)
        return res.send(omit(user.toJSON(), 'password'));
    } catch (error) {
        const newError = error as any;
        log.error(newError);
        res.status(409).send(newError.message);
    }
}