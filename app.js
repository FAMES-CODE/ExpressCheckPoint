const express = require('express');
const app = express();
const http = require('http')
const port = process.env.PORT
const fs = require('fs');
const url = require('url');




app.get('/home', (req, res)=>{
    fs.readFile('page.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.write(data)
        res.end();
    });
});

app.get('/services', (req, res)=>{
    res.send('Welcome to Our Services');
});

app.get('/contact', (req, res)=>{
    res.send('Welcome to Contact us');
});

app.listen(3000);
console.log('Le serveur marche sur le port 3000');