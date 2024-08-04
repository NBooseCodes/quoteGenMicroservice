const http = require('http');
const express = require('express');

const app = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
const PORT = process.env.PORT || 5001


// This is a basic quote generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max) 
};


function quoteSelector (type) {
    
    
    let weatherQuotesDict = 
    {
        "Wherever you go, no matter what the weather, always bring your own sunshine.":"Anthony J. D'Angelo",
        "There's no such thing as bad weather, just soft people.":"Bill Bowerman",
        "The storm starts, when the drops start dropping. When the drops stop dropping then the storm starts stopping.":"Dr. Seuss",
        "A lot of people like snow. I find it to be an unnecessary freezing of water.":"Carl Reiner",
        "Summer in the deep South is not only a season, a climate, it's a dimension. Floating in it, one must be either proud or submerged.":"Eugene Walter"
    };

    let businessQuoteDict = 
    {
        "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.":"Colin Powell",
        "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.":"Jeff Bezos",
        "Details create the big picture.":"Sanford I. Well",
        "Our work is the presentation of our capabilities.":"Edward Gibbon",
        "The first responsibility of a leader is to define reality. The last is to say thank you. In between, the leader is a servant.":"Max de Pree"
    };

    let inspirationalQuotesDict = 
    {
        "Believe you can and you're halfway there.":"Theodore Roosevelt",
        "Do one thing every day that scares you.":"Eleanor Roosevelt",
        "If you can dream it, you can do it.":"Walt Disney",
        "Even if you are on the right track, you'll get run over if you just sit there.":"Will Rogers",
        "Earn your leadership every day.":"Michael Jordan"
    }
    let randomNum = getRandomInt(4);

    if (type === "business") {
        let quoteObj = {quote: businessQuoteDict[randomNum], author: businessQuoteDict[randomNum]} 
        return quoteObj
    }

    if (type === "inspiration") {
        let quoteObj = {quote: inspirationalQuotesDict[randomNum], author: inspirationalQuotesDict[randomNum]};
        return quoteObj;
    }

    let quoteObj = {quote: weatherQuotesDict[randomNum], author: weatherQuotesDict[randomNum]};

    

}

app.get("/", function(req, res) {
    console.log(req.body)
    let quoteType = req.body.type
    console.log(quoteType)
    let response = quoteSelector(quoteType)
    res.send(response);
    return quoteType
}) 

app.post("https://quote-app-nmcc-126cfc367283.herokuapp.com/data", function(req, res) {
    console.log(req.body)
    res.send(req.body)
    return req.body
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))