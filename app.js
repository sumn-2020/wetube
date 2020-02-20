import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookeParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';



const app = express();
const port = 4000;

app.use(cookeParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(helmet());
app.use(morgan("dev"));

app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/video', videoRouter);

export default app;