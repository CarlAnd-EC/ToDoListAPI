/*----------------------------------------------------------
* Name: ExpressServer.js
* Alias: A basic library API hosted in an Express server.
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Luna
* Created: 06/05/2021       Updated: 13/05/2021
* Description:
 ----------------------------------------------------------*/
 const express = require('express');
 const path = require('path');
 const app = express();
 const PORT = 3000;
 const publicURL = path.join(__dirname+'/views');
 
 app.use(express.json());
 app.use(express.static('views'));
 
 app.get('/',(req,res)=>{
    res.sendFile(path.join(publicURL+'./index.html'));
 });
 
 app.listen(PORT,()=>{
     console.log(`Server running and listening on port: ${PORT}`);
 });