import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import config from "config";
import log from './logger' //logger doesnt block I/O like console.log does
import connect from './db/connect';
import  deserializeUser  from './middleware/validation/deserializeUser'
dotenv.config();


import Route from './routes/routes'
// const PORT = process.env.PORT as number
// const HOST = process.env.HOST as string

const HOST = config.get("host") as string;
const PORT = config.get("port") as number;


const app = express();
app.use(deserializeUser);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/', Route)
app.get('/', (req, res) => res.status(200).send("Welcome to Course App"))
app.get('*', (req, res) => res.status(404).send("Page not found"))

app.listen(PORT, HOST, ()=> {
    log.info(`Server listening at http://${HOST}:${PORT}`)
    connect();
});

 