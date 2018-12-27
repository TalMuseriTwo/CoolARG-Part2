function one() {
  var localtime = new Date();
  var year2069 = new Date(2069, 11, 24, 10, 33, 30, 0);
  if (localtime.getFullYear() == year2069.getFullYear()) {
      document.write("<center><font face='Arial'><a dir='ltr'>you/stupid/no/im/not/whats/9/plus/10/youstupid.html</a></font></center>");
      //document.write("<center><font face='Arial'><a dir='ltr'>%appdata%/local/google/chrome/user data/default/local storage<br>איפה אפי?</a></font></center>");
      //localstorage.setItem("efi", "SlashFoundEmSlash");
  } else {
    document.write("<center><font face='Arial'><a dir='rtl'>תקבלו את הרמז הבא עוד 50 שנה.</a></font></center>");
  }
}

function two() {
  final_password = prompt("כמעט סיימתם. כל מה שנשאר זה הסיסמה הזו. יש רמז אחד שקיבלתם במהלך המסע הקסום ועדיין לא השתמשתם בו.");
  if (final_password == "בצלאל המלך") {
    alert ("כל הכבוד!!! סיימתם!!!");
    alert ("תראו לליאור והוא יביא לכם את הפרס: כלום!");
  } else {
    alert ("סיסמה שגויה. תעשו ריפרש ותנסו שוב.");
  }
}
