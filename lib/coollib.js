module.exports = function($) {
  return function(name) {
    return $('<div>'+name+'</div>')
  };
};