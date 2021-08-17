const { Router } = require('express');
const asyncMiddleware = require('./utils/asyncMiddleware');

const router = Router();;

router.get('/', asyncMiddleware(async (req, res, next) => {
  try {
    const todoListItems = await req.context.models.TodoListItem.findAll();
    return res.json({success: true, todoListItems, response: "All todo list items found!"});
  } catch (error) {
    console.log(error);
    return res.json({success: false, response: 'Error!'}); 
  };
}));

router.post('/', asyncMiddleware(async (req, res) => {
  try {
    const todoListItem = await req.context.models.TodoListItem.create({
      text: req.body.text,
      done: false,
    });
    return res.json({success: true, todoListItem, response: "Todo List item posted!"});
  } catch (error) {
    console.log(error);
    return res.json({success: false, response: 'Error!'}); 
  };
}));

router.patch('/:todoListItemId', asyncMiddleware(async (req, res) => {
  try {
    const result = await req.context.models.TodoListItem.update({
      text: req.body.text,
    },{
      where: { id: req.params.todoListItemId },
      returning: true,
      plain: true,
    });
    return res.json({success: result ? true : false, response: result ? "Todo List item updated!" : "Todo List item not found!"});
  } catch (error) {
    console.log(error);
    return res.json({success: false, response: 'Error!'}); 
  };
}));

router.patch('/markdone/:todoListItemId', asyncMiddleware(async (req, res) => {
  try {
    const result = await req.context.models.TodoListItem.update({
      done: req.body.done,
    },{
      where: { id: req.params.todoListItemId },
      returning: true,
      plain: true,
    });
    return res.json({success: result ? true : false, response: result ? "Todo List item updated!" : "Todo List item not found!"});
  } catch (error) {
    console.log(error);
    return res.json({success: false, response: 'Error!'}); 
  };
}));

router.delete('/:todoListItemId', asyncMiddleware(async (req, res) => {
  try {
    const result = await req.context.models.TodoListItem.destroy({
      where: { id: req.params.todoListItemId },
    });
    return res.json({success: result ? true : false, response: result ? "Todo List item deleted!" : "Todo List item not found!"});
  } catch (error) {
    console.log(error);
    return res.json({success: false, response: 'Error!'}); 
  };
}));

module.exports = router;