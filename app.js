import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookeParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from "./routes";

const app = express();
const port = 4000;


//pug라는 이름을 가진 view engine을 세팅한다. 
app.set("view engine", "pug");

//middleware
//쿠키를 받아서 사용할 수 있도록 만들어주는 미들웨어 (사용자 인증 같은 곳에서 쿠키를 검사할 때 사용)
app.use(cookeParser());
//사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어(request 정보에서  form이나 json형태로 된 body를 검사)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
//application이 더 안전하도록 만들어주는 미들웨어
app.use(helmet());
//application에서 발생하는 모든 일들을 logging하는 미들웨어
app.use(morgan("dev"));



//routers
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;