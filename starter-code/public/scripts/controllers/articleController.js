'use strict';

(function(module) {
  const articleController = {}
  articleController.render = function() {
  Article.fetchAll(articleView.initIndexPage);


  };
  // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:


  module.articleController = articleController;
})(window);
