Summary

This is the corresponding code for a microservice that takes in an HTTP request and submits.

Requirements
- DO NOT ALTER quote_gen.js file IN ANY WAY!
- This file is only included as a REFERENCE for you. If you alter this file you risk breaking the microservice!
- Do not change the headers in index.js either (what is in the app.use() function).
- Have Node.js installed on computer
- Install node module for Express.js wherever you are making your call to the microservice server (once you pull-in the files in the repo just run ‘npm install’ to install all packages specified in the packages.json file)
- Make sure request header is : {'Content-Type':'application/x-www-form-urlencoded'}


How to Request Data

1. From the root directory, after installing the appropriate node modules, call ‘npm run dev’ to start your index.js file (client-side server).
    a. Note that if you want to make requests to this server, you need to put the getQuote() function in a router like app.get(“/”, function(req, res) { getQuote() } and then use a form to send http req’s to this route/function.
2. Now the index.js server will make a call to the Heroku-hosted microservice application. If you want to specify the type of quote, alter the body of the fetch request in the ‘getQuote()’ function to have the type be either “inspirational” or “business”. Otherwise, if no body is sent, you will receive a general weather quote.
3. This completes the data request. Again, if you put this function in a route, the request will be made to the microservice server once you request to your index.js server.

How to Receive Data

1. The request is tied up in an asynchronous function. As such, the ‘getQuote()’ function will not return anything until the promise is fulfilled.
2. So, to receive data, all you need to do is wait for the getQuote() function to return and store the value of the return statement in a variable.
3. This is already in the index.js file for you in the line: getQuote().then((data => console.log(data))). This line stores the result of the function call in a variable called ‘data’.
From here, you can use ‘data’ like you would any JSON object. You should be able to extract the quote and author quite easily.

![UML diagram](https://github.com/user-attachments/assets/d77151c5-d498-40fa-b9b6-fc1bc794ed4e)
