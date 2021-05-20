/*----------------------------------------------------------
* Name: todoM.js (models)
* Alias: MongoDB Schema for To-Dos
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Solís
* Created: 06/05/2021       Updated: 14/05/2021
* Description:
----------------------------------------------------------*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ToDoSchema = new Schema({
  title:{type:String, required:true}, 
  description:{type:String, required:true},
  deadline:{type:Date},
  important:{type:Boolean}
});

module.exports = mongoose.model('ToDo',ToDoSchema);