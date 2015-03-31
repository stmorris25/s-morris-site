function toggle(element) {
  var e = document.getElementById(element);
  if(e.style.display == "block") {
    e.style.display = "none";
  } else {
    e.style.display = "block";
  }
};

$('#name').tooltip({'trigger':'focus', 'title': "What is your name?"});
$('#email').tooltip({'trigger':'focus', 'title': "What is your email?"});
$('#comment').tooltip({'trigger':'focus', 'title': "Please comment?"});