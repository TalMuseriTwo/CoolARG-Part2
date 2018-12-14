function one() {
  var localtime = new Date();
  var year2069 = new Date(2069, 11, 24, 10, 33, 30, 0);
  if (localtime.getFullYear() == year2069.getFullYear()) {
      document.write("<center><font face='Arial'><a dir='ltr'>%appdata%/local/google/chrome/user data/default/local storage<br>איפה אפי?</a></font></center>");
      localstorage.setItem("efi", "SlashFoundEmSlash");
  } else {
    document.write("<center><font face='Arial'><a dir='rtl'>תקבלו את הרמז הבא עוד 50 שנה.</a></font></center>");
  }
}
