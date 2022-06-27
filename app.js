require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT;

cors();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('Hola')
})

app.get('/Hola', (req, res)=>{
    res.send('Hola')
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});