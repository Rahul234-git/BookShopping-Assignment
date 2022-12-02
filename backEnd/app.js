const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const port = 4000;
const cors = require('cors');
const router = require('./Routes/router');


const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use('/api',router);

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST");
    res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization");
    next();
})

mongoose.connect(
    "mongodb://127.0.0.1:27017/latestAssignment",
    {UseUnifiedTopology:true}
).then(success => {
    console.log("Connected");
    app.listen(port,(req,res) => {
        console.log(`Server is running on ${port}`);
    });
}).catch(error => {
    console.log(error);
});
