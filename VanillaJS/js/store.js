/*eslint-disable */
(function(window) {
  "use strict";

  /**
   * Function Name: Store
   * Create new client side storage object and will create an empty 
   * collection if no collection is found
   * @constructor
   * @param {string} name The name of the DB we want to create / use
   * @param {function} callback Our fake DB uses callback because in real life / application 
   * we probably would be making AJAX calls. 
   */

  function Store(name, callback) {
    callback = callback || function() {};
    this._dbName = name;

    if (!localStorage[name]) {
      var data = {
        todos: []
      };

      localStorage[name] = JSON.stringify(data);
    }
    callback.call(this, JSON.parse(localStorage[name]));
  }

  /**
   * Function Name:Find
   * Find the items based on the given query as JS object
   * @param {object} query The query to matched against (e.g {foo:'bar'})
   * @param {function} callback The callback is fired when query has been completed running
   * @example
   * db.find({foo:'bar', hello:'World'}, function(data){
   *    //data will return any items that have foo:bar and hello:world in their properties
   * })
   */
  Store.prototype.find = function(query, callback) {
    if (!callback) {
      return;
    }

    var todos = JSON.parse(localStorage[this._dbName]).todos;

    callback.call(
      this,
      todos.filter(function(todo) {
        for (var q in query) {
          if (query[q] !== todo[q]) {
            return false;
          }
          return true;
        }
      })
    );
  };

  /**
   * Function Name : FindAll
   * Will retirve all the data from todos collection
   * @param {function} callback The callback fired after data is retrived.
   */
  Store.prototype.findAll = function(callback) {
    callback = callback || function() {};
    callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
  };

  /**
   * Function Name :Save
   * Will save new item to the todos, if no item already exist it will create new item,
   * otherwise update the existing item's properties.
   * @param {object} updatedData The data to be saved or update.
   * @param {function} callback The callback function to be fire after data is saved.
   * @param {number} id An optional parameter to enter an ID of an item to update.
   */
  Store.prototype.save = function(updatedData, callback, id) {
    var data = JSON.parse(localStorage[this._dbName]);
    var todos = data.todos;

    callback = callback || function() {};

    if (id) {
      for (var j = 0; j < todos.length; j++) {
        if (todos[j].id === id) {
          for (var key in updatedData) {
            todos[j][key] = updatedData[key];
          }
          break;
        }
      }
    } else {
      //generate an ID
      updatedData.id = new Date().getTime();
      todos.push(updatedData);
      localStorage[this._dbName] = JSON.stringify(data);
      callback.call(this, [updatedData]);
    }
  };

  /**
   * Function Name : Remove
   * Will remove item from todos based on its ID
   * @param {function} id The ID of item to be removed.
   * @param {function} callback The callback function to be fired after saving.
   */
  Store.prototype.remove = function(id, callback) {
    var data = JSON.parse(localStorage[this._dbName]);
    var todos = data.todos;
    for (var k = 0; k < todos.length; k++) {
      if (todos[k].id == id) {
        todos.splice(k, 1);
        break;
      }
    }
    localStorage[this._dbName] = JSON.stringify(data);
    callback.call(this, todos);
  };

  /**
   * Function Name:Drop
   * Will drop all data and start fresh
   * @param {function} callback will fire after dropping the data
   */
  Store.prototype.drop = function(callback) {
    var data = { todos: [] };

    localStorage[this._dbName] = JSON.stringify(data);
    callback.call(this, data.todos);
  };

  // Export to window
  window.app = window.app || {};
  window.app.Store = Store;
})(window);

// TO disabled ESLINT use following with commented
/*eslint-disable */
