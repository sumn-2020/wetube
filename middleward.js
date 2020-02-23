import routes from "./routes";

export const  localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTue";
    res.locals.routes = routes;
    //next() = 다음함수로 넘어간다 (코드사이에 있어서 next(써줘야함 ))
    next();
};