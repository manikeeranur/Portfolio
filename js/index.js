$("#home").show();
$("#education").hide();
$("#experience").hide();
$("#skills").hide();
$("#contactme").hide();

$("#homeLink").click(function () {
  $("#home").show();
  $("#education").hide();
  $("#experience").hide();
  $("#skills").hide();
  $("#contactme").hide();
});
$("#educationLink").click(function () {
  $("#home").hide();
  $("#education").show();
  $("#experience").hide();
  $("#skills").hide();
  $("#contactme").hide();
});
$("#experienceLink").click(function () {
  $("#home").hide();
  $("#education").hide();
  $("#experience").show();
  $("#skills").hide();
  $("#contactme").hide();
});
$("#skillsLink").click(function () {
  $("#home").hide();
  $("#education").hide();
  $("#experience").hide();
  $("#skills").show();
  $("#contactme").hide();
});

$("#contactmeLink").click(function () {
  $("#home").hide();
  $("#education").hide();
  $("#experience").hide();
  $("#skills").hide();
  $("#contactme").show();
});
