"use strict";

var registerForm;
window.onload = function() {
  //create validation object and set field messages
  registerForm = new RegisterForm();
  registerForm.resetForm();

  $("register").onclick = function() {
    if (registerForm.validateForm()) {
      //$("registration_form").submit();
      var x = new Navigate();
      x.showResults();
    }
  };

  $("reset").onclick = function() {
    registerForm.resetForm();
  };

  $("back").onclick = function() {
    var i = new Navigate();
    i.showForm();
    registerForm.resetForm();
  };
};

