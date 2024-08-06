

const http = require('http');
const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
const PORT = process.env.PORT || 5001
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

// This is a basic quote generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max) 
};


function quoteSelector (type) {
    const bizQuote = {
        1: {
          author: 'Colin Powell',
          quote: 'There are no secrets to success. It is the result of preparation, hard work, and learning from failure.'
        },
        2: {
          author: 'Sanford I. Well',
          quote: 'Details create the big picture.'
        },
        3: {
            author: 'Edward Gibbon',
            quote: 'Our work is the presentation of our capabilities.' 
        }
      }

      const inspoQuote = {
        1: {
          author: 'Theodore Roosevelt',
          quote: 'Believe you can and you\'re halfway there.'
        },
        2: {
          author: 'Eleanor Roosevelt',
          quote: 'Do one thing every day that scares you.'
        },
        3: {
            author: 'Michael Jordan',
            quote: 'Earn your leadership every day.'
        }
      }

        const weatherQuote = {
        1: {
            author: 'Anthony J. D\'Angelo',
            quote: 'Wherever you go, no matter what the weather, always bring your own sunshine.'
            },
        2: {
            author: 'Carl Reiner',
            quote: 'A lot of people like snow. I find it to be an unnecessary freezing of water.'
            },
        3: {
            author: 'Bill Bowerman',
            quote: 'There\'s no such thing as bad weather, just soft people.'
        }
    }
    /*let weatherQuotesDict = 
    {
        "Wherever you go, no matter what the weather, always bring your own sunshine.":"Anthony J. D'Angelo",
        "There's no such thing as bad weather, just soft people.":"Bill Bowerman",
        "The storm starts, when the drops start dropping. When the drops stop dropping then the storm starts stopping.":"Dr. Seuss",
        "A lot of people like snow. I find it to be an unnecessary freezing of water.":"Carl Reiner",
        "Summer in the deep South is not only a season, a climate, it's a dimension. Floating in it, one must be either proud or submerged.":"Eugene Walter"
    };

   /* let businessQuoteDict = 
    {
        "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.":"Colin Powell",
        "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.":"Jeff Bezos",
        "Details create the big picture.":"Sanford I. Well",
        "Our work is the presentation of our capabilities.":"Edward Gibbon",
        "The first responsibility of a leader is to define reality. The last is to say thank you. In between, the leader is a servant.":"Max de Pree"
    };*/



    let randomNum = getRandomInt(3);
    console.log(randomNum)

    if (type === "business") {
        return bizQuote[randomNum]
    } else if (type === "inspiration") {
        return inspoQuote[randomNum]
    } else {
        return weatherQuote[randomNum]
    }

}

app.get("/", function(req, res){
    res.send("HELLO WORLD - GET REQ")
})

app.post("/", function(req, res) {
    res.send("hello world! - post req")
}) 

app.get("/data", function(req, res){
    res.send("Hit Data Route")
})

app.post("/data", function(req, res) {
    
    //console.log(req)
    let data = req.body
    let arr = Object.keys(data)[0]
    console.log(arr)
    parsedJSON = JSON.parse(arr)
    console.log(parsedJSON["test"])
    let quoteData = quoteSelector()
    res.send(JSON.stringify(quoteData))

})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))