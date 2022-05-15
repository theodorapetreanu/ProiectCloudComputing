const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const contactsRouter = require('./contactsRouter');
const groupchatsRouter = require('./groupchatsRouter');
const messagesRouter = require('./messagesRouter');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/contacts",contactsRouter);
app.use("/groupchats",groupchatsRouter);
app.use("/messages",messagesRouter);

const port = process.env.PORT || 8080;



app.listen(port,() => {
    console.log('Cloud computing app is listening!')
});