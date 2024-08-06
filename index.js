const express = require('express')
const app = express()
const PORT = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested, Content-Type, Accept Authorization"
    )
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "POST, PUT, PATCH, GET, DELETE"
      )
      return res.status(200).json({})
    }
    next()
  })


async function getQuote() {
        const url = "https://quote-app-nmcc-126cfc367283.herokuapp.com/data";
        try {
            const response = await fetch(url, {
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                method: 'POST',
                mode: 'cors'
            });
        
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const json = await response.json();
            return json
        } catch (error) {
            console.error(error.message);
        }
        
    }

getQuote().then((data => console.log(data)))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})