/*----------------------------------------------------------
* Name: todoC.js (routes)
* Alias: Controllers
* Author: Carlos Andrés Escalona Contreras 
* Proposed by: Javier Solís
* Created: 06/05/2021       Updated: 14/05/2021
* Description:
----------------------------------------------------------*/
const ToDo = require('../models/todoM');
const { isValidObjectId } = require('mongoose');
exports.add = (req,res)=>{
  try {
    ToDo.findOne({title:req.body.title},(err,todo)=>{
      if(err) throw err;
      if (todo){
        res.status(400);
        return res.send("Error 400: To-do already exists.");
      }
      else{
        const todo = new ToDo({
          ...req.body
        });
        ToDo.create(todo,(err,todo)=>{
          if(err){
            res.status(400);
            res.send('Error 400: To-do could not be created.');
            throw err;
          }
          res.status(201);
          const response = {
            message: 'Successful addition', 
            guid: todo._id
          }
          return res.send(response);
        });
      }
    });
  } catch (err) {return console.log(err);}
}
exports.searchAll = (req,res)=>{
  try {
    ToDo.find((err,todos)=>{
      if(err) throw err;
      if (todos.length===0){
        res.status(404);
        return res.send('Error 404: The library is empty.');
      }
      return res.send(todos);
    });
  } catch (error) {return console.error(error);}
}
exports.search = (req,res)=>{
  try {
    ToDo.findOne(req.params,(err,todo)=>{
      if(err) throw err;
      if (!todo){
        res.status(404);
        return res.send('Error 404: The to-do could not be found.');
      }
      return res.send(todo);
    });
  } catch (error) {console.error(error);} 
}
exports.update = (req,res)=>{
  try {
    if(req.params.id && isValidObjectId(req.params.id)){
      ToDo.findOne({_id:req.params.id},(err,todo)=>{
        if(err) throw err;
        if (!todo){
          res.status(404);
          return res.send('Error 404: The to-do could not be found.');
        }
        const modifiedTodo = {...req.body};
        ToDo.updateOne(modifiedTodo, (err,updatedTodo)=>{
          if(err) throw err;
          if (!updatedTodo){
            res.status(400);
            return res.send('Error 400: The to-do was not modified.');
          }
          const response = {
            message:'Successful update.',
            obj: deletedTodo
          }
          return res.send(response);
        });
      });
    }
  } catch (error) {console.error(error);}
}
exports.delete = (req,res)=>{
  try {
    if(req.params.id && isValidObjectId(req.params.id)){
      ToDo.findOne({_id:req.params.id},(err,todo)=>{
        if(err) throw err;
        if (!todo){
          res.status(404);
          return res.send('Error 404: The to-do could not be found.');
        }
        const modifiedTodo = {...req.body};
        ToDo.deleteOne(modifiedTodo, (err,deletedTodo)=>{
          if(err) throw err;
          if (!deletedTodo){
            res.status(400);
            return res.send('Error 400: The to-do was not deleted.');
          }
          const response = {
            message:'Successful deletion.',
            obj: deletedTodo
          }
          return res.send(response);
        });
      });
    }
  } catch (error) {console.error(error);}
}