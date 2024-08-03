const http = require('http');
const express = require('express')

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/quote-gen', function(req, res) {
    async function getData() {
        console.log("this is a test")
    }
})