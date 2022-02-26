import express from 'express';
import {Request, Response} from 'express';
import UserRouter from './users/routes';
import PostRouter from './post/routes';
const Router = express.Router();

Router.use('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

//Routes
Router.use('/user', UserRouter);
Router.use('/post', PostRouter);

export default Router;