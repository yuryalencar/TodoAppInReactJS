const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
 // This action not is realized in default option - For receive new  register in update cases and validate updates
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;