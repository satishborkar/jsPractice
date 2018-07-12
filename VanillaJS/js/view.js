(function(window) {
  "use strict";
  function View(template) {
    this.template = template;
  }

  window.app = window.app || {};
  window.app.View = View;
})(window);
