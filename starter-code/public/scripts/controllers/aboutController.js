'use strict';

(function(module) {
  const aboutController = {};
console.log('About controller');
  // DONE : Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.hideCont = function()
  {  $('#articles').hide;
     $('#about').show
  };
  module.aboutController = aboutController;
})(window);
