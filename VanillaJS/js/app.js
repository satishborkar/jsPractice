/*eslint-disable */
(function(window) {
  "use strict";

  function Todo(name) {
    this.store = new app.Store(name);
    this.model = new app.Model(this.store);
    this.template = new app.Template();
    this.view = new app.View(this.template);
    this.controller = new app.Controller(this.model, this.view);
  }
  var todo = new Todo("todos-vanillajs");
  console.log(todo);
})(window);

/*eslint-disable */
