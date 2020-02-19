import express from "express";
const app = express();
const port = 4000;



const handleListening = () =>console.log(`Listening on: http://localhost:${port}`);
const handleHome = (req, res) => res.send('hello from home');
const handleProfile = (req, res) =>  res.send('you are on my profile');

app.get("/", handleHome);
app.get('/profile', handleProfile);
app.listen(port, handleListening); 
