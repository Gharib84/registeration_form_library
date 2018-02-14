"use strict";
var $ = function(id) {
  return document.getElementById(id);
};

class Navigate {
  showForm() {
    $("registration_form").setAttribute("class", "show");
    $("registration_result").setAttribute("class", "hide");
  }
  showResults() {
    $("registration_form").setAttribute("class", "hide");
    $("registration_result").setAttribute("class", "show");
  }
};
