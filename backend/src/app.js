import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import fileupload from 'express-fileupload';
import cors from 'cors';


const app = express();
dotenv.config();

//morgan
if(process.env.NODE_ENV!=='production'){
    app.use(morgan('dev'));
}

//helmet
app.use(helmet());

//Parse json request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Sanitize data
app.use(mongoSanitize());

//Enable Cookie parser
app.use(cookieParser());

//gzip compression
app.use(compression());

//file upload
app.use(fileupload({
    useTempFiles: true
}));

//cors
app.use(cors({
    origin: 'http://localhost:3000'
}));

export default app;