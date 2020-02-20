import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookeParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

const handleHome = (req, res) => res.send('hello from home');
const handleProfile = (req, res) =>  res.send('you are on my profile');

app.use(cookeParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(helmet());
app.use(morgan("combined"));

const middleware = (req, res, next) => {
    res.send("not happening");
}


app.get("/",  handleHome);
app.get('/profile', handleProfile);

export default app;