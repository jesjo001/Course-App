import express from 'express';
import {Express, Request, Response} from 'express';
import { 
    createUserHandler,
    createStudentHandler,
    createCounsellorHandler
} from '../../controller/user.controller';
import {
     userValidationRules,
     studentValidationRules, 
     sessionValidationRules, 
     counsellorValidationRules,
     validate 
} from '../../middleware/validation/validator'
import { 
    createUserSessionHandler, 
    getUserSessionsHandler, 
    invalidateUserSessionHandler
} from '../../controller/session.controller';
import requiresUser from "../../middleware/validation/requiresUser"

const UserRouter = express.Router();

UserRouter.post('/create', userValidationRules(), validate, createUserHandler)
//User session routes
UserRouter.post('/sessions', sessionValidationRules(), validate, createUserSessionHandler)
UserRouter.delete('/sessions', requiresUser, invalidateUserSessionHandler)
UserRouter.get('/sessions', requiresUser, getUserSessionsHandler )

UserRouter.post('/login', sessionValidationRules(), validate, createUserSessionHandler)
UserRouter.delete('/logout', requiresUser, invalidateUserSessionHandler)


//student user common routes
UserRouter.post('/student/create', studentValidationRules(), validate, createStudentHandler)
//counselor user common routes
UserRouter.post('/counselor/create', counsellorValidationRules(), validate, createCounsellorHandler)


//organization routes


export default UserRouter;
