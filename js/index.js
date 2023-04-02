$("#home").show();
$("#education").hide();
$("#experience").hide();
$("#skills").hide();
$("#contactme").hide();
$("#githubproject").hide();
$("#githubproject").hide();

$("#homeLink").click(function () {
  $("#home").show();
  $("#education").hide();
  $("#experience").hide();
  $("#skills").hide();
  $("#contactme").hide();
  $("#githubproject").hide();
});
$("#educationLink").click(function () {
  $("#home").hide();
  $("#education").show();
  $("#experience").hide();
  $("#skills").hide();
  $("#contactme").hide();
  $("#githubproject").hide();
});
$("#experienceLink").click(function () {
  $("#home").hide();
  $("#education").hide();
  $("#experience").show();
  $("#skills").hide();
  $("#contactme").hide();
  $("#githubproject").hide();
});
$("#skillsLink").click(function () {
  $("#home").hide();
  $("#education").hide();
  $("#experience").hide();
  $("#skills").show();
  $("#contactme").hide();
  $("#githubproject").hide();
});

$("#contactmeLink").click(function () {
  $("#home").hide();
  $("#education").hide();
  $("#experience").hide();
  $("#skills").hide();
  $("#contactme").show();
  $("#githubproject").hide();
});

$("#githubprojectLink").click(function () {
  $("#home").hide();
  $("#education").hide();
  $("#experience").hide();
  $("#skills").hide();
  $("#contactme").hide();
  $("#githubproject").show();
});




