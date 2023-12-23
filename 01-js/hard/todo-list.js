/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.result = [];
  }

  add(todo) {
    this.result.push(todo);
  }

  remove(indexOfTodo) {
    this.result = this.result.filter((todo) => {
      return indexOfTodo !== this.result.indexOf(todo);
    });
  }

  update(index, updatedTodo) {
    if (this.result.length > index) 
    this.result[index] = updatedTodo;
  }

  getAll() {
    return this.result;
  }

  get(indexOfTodo) {
    if (this.result.length <= indexOfTodo) return null; 
    return this.result[indexOfTodo];
  }

  clear() {
    this.result = [];
  }
}

module.exports = Todo;
