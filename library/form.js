"use strict";
/*var RegisterForm = function() { };
RegisterForm.prototype = new Validate(); //inherit*/
class RegisterForm extends Validate {
  constructor() {
    super();
  }

  // Method to validate individual field
  validateField(fieldName, text) {
    var field = fields[fieldName];
    if (field.required) {
      if (super.isBlank(text)) {
        throw new Error(field.required);
      }
    }
    if (field.noMatch) {
      if (!super.isMatch(text, $(field.noMatch[1]).value)) {
        throw new Error(field.noMatch[0]);
      }
    }
    if (field.isEmail) {
      if (!super.isEmail(text)) {
        throw new Error(field.isEmail);
      }
    }
    if (field.isZip) {
      if (!super.isZip(text)) {
        throw new Error(field.isZip);
      }
    }
    if (field.isCC) {
      if (!super.isCC(text)) {
        throw new Error(field.isCC);
      }
    }
    if (field.isDate) {
      if (!super.isDate(text)) {
        throw new Error(field.isDate);
      }
    }
    if (field.expired) {
      if (super.hasExpired(text)) {
        throw new Error(field.expired);
      }
    }
  }

  // Error message methods
  setError(fieldName, message) {
    $(fieldName + "_error").setAttribute("class", "error");
    $(fieldName + "_error").firstChild.nodeValue = message;
  }
  clearError(fieldName, message) {
    $(fieldName + "_error").setAttribute("class", "");
    $(fieldName + "_error").firstChild.nodeValue = message || "";
  }

  // Form methods
  resetForm() {
    for (var fieldName in fields) {
      this.clearError(fieldName, fields[fieldName].message);
      $(fieldName).value = ""; //clear corresponding textbox
    }
  }
  validateForm() {
    var isOK = true;
    for (var fieldName in fields) {
      this.clearError(fieldName);
      try {
        this.validateField(fieldName, $(fieldName).value);
      } catch (error) {
        isOK = false;
        this.setError(fieldName, error.message);
      }
    }
    return isOK;
  }
};