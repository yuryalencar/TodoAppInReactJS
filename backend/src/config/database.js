// Map Javascript Objects for documents and Create connection with mongo and run commands (insert, delete ..)
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // For use the global Promises.
module.exports = mongoose.connect('mongodb://localhost/todo');