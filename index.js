const express = require('express'); 
const app = express(); 


const port = 4000;
function handleListening() {
    console.log(`Listening on: http://localhost:${port}`);
}
function handleHome(req, res){
    res.send('hello from home');
}
function handleProfile(req, res){
    res.send('you are on my profile');
}
app.get("/", handleHome);
app.get('/profile', handleProfile);
app.listen(port, handleListening); 
