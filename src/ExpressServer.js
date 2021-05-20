/*----------------------------------------------------------
* Name: ExpressServer.js
* Alias: A basic To Do List API hosted in an Express server.
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Solís
* Created: 06/05/2021       Updated: 14/05/2021
* Description:
 ----------------------------------------------------------*/
const express = require('express');
const todo = require('./routes/todoR');
const path = require('path');
const app = express();
const PORT = 3000;
const publicURL = __dirname.replace('src','public');
const views = path.join(publicURL,'/views');

//Mongoose Configuration
const mongoose = require('mongoose');
const db_url = 'mongodb+srv://user:<password>@cluster0.wj9y4.mongodb.net/ToDoListAPI?retryWrites=true&w=majority';
mongoose.connect(db_url,{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error',console.error.bind(console,"Connection error"));

app.use(express.json());
app.use(express.static(views));
app.use('/images', express.static(path.join(publicURL,'/images')));
app.use('/todos', todo);
 
 app.get('/',(req,res)=>{
    res.sendFile(path.join(views,'/index.html'));
 });
 
 app.listen(PORT,()=>{
     console.log(`Server running and listening on port: ${PORT}`);
 });