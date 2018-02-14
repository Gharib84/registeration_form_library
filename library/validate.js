"use strict";
class Validate {
  constructor() {
    this.month = 0;
    this.year = 0;
  }
  isBlank(text) {
    return (text === "");
  }

  isMatch(text1, text2) {
    return (text1 === text2);
  }

  isEmail(text) {
    if (text.length === 0) return false;
    var parts = text.split("@");
    if (parts.length !== 2) return false;
    if (parts[0].length > 64) return false;
    if (parts[1].length > 255) return false;
    var address =
      "(^[\\w!#$%&'*+/=?^`{|}~-]+(\\.[\\w!#$%&'*+/=?^`{|}~-]+)*$)";
    var quotedText = "(^\"(([^\\\\\"])|(\\\\[\\\\\"]))+\"$)";
    var localPart = new RegExp(address + "|" + quotedText);
    if (!parts[0].match(localPart)) return false;
    var hostnames =
      "(([a-zA-Z0-9]\\.)|([a-zA-Z0-9][-a-zA-Z0-9]{0,62}[a-zA-Z0-9]\\.))+";
    var tld = "[a-zA-Z0-9]{2,6}";
    var domainPart = new RegExp("^" + hostnames + tld + "$");
    if (!parts[1].match(domainPart)) return false;
    return true;
  }

  isZip(text) {
    return /^\d{5}(-\d{4})?$/.test(text);
  }

  isCC(text) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(text);
  }

  isDate(text) {
    if (!/^[01]\d\/\d{4}$/.test(text)) return false;
    var dateParts = text.split("/");
    this.month = parseInt(dateParts[0]);
    this.year = parseInt(dateParts[1]);
    if (this.month < 1 || this.month > 12) return false;
    return true;
  }

  hasExpired(text) {
    if (this.isDate(text)) {
      var now = new Date();
      var exp = new Date(this.year, this.month);
      return (now > exp);
    } else {
      return false;
    }
  }
};