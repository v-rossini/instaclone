const express = require ('express');
const mongoose = require ('mongoose');
const path = require ('path');
const cors = require('cors');

const app = express();

const server = require('http').server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://blerg:TaICk8rgqANLlg8x@cluster0.u2ixg.mongodb.net/Cluster0?retryWrites=true&w=majority', 
{ useNewUrlParser: true});

app.use((req, res, next) => {
    req.io = io
    next();
} );



app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

app.listen(3333);

