// JavaScript Document
/*spinner of whole page*/
function loadingView(flag) {
  $('#loading-view').remove();
  if(!flag) return;
  $('<div id="loading-view" />').appendTo('body');
}
$(function(){
 loadingView(true);
})

$(window).load(function() {
 loadingView(false);
})

function loadingView(flag) {
  $('#loading-view').remove();
  if(!flag) return;
  $('<div id="loading-view" />').appendTo('body');
}