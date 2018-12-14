function one() {
  var localtime = new Date();
  var year2069 = new Date(2069, 11, 24, 10, 33, 30, 0);
  if (localtime.getFullYear() == year2069.getFullYear()) {
      localstorage.setItem("efi", "SlashFoundEmSlash");
  } else {
    document.write("<center><font face='Arial'><a dir='rtl'>תקבלו את הרמז הבא עוד 50 שנה.</a></font></center>");
  }
}
