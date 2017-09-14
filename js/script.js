$(document).ready(function () {
  setTimeout(function () {
    $(".col-md-12").removeClass("col-md-12").addClass("col-md-4");
    $("img").removeClass("avatar");
    $(".img-circle").css("width","150px");
    $("#col-1").show();
    setTimeout(function () {
      $(".panel").show();
      setTimeout(function () {
        $(".carousel").show();
      },1000)
    },1000)
  },1000)
})