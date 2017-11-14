// Tasks

$(document).ready(function() {

  // 1. Add the “selected” class to the first element of the menu

  $("#menu li:first").addClass("selected");

  // 2. Add the “middle” class to the middle articles in the <section> tags

  $("section article:not(:first-child):not(:last-child)").addClass("middle")

  // 3. Add the “highlighted” class to the .list-item even elements

  $(".list-item:even").addClass("highlighted");

  // 4. Add a “1px solid #eee” border to the last .list-item element

  $(".list-item:last").css("border", "1px solid red");

  // 5. In the form, change the border color of the focused input

  $("form input:focus").css("border", "1px solid red");

});