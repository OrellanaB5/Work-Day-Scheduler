$(function () {
  var currentHour = dayjs().format("H");
  console.log(currentHour);

  $(".saveBtn").on("click", function () {
    var parentId = $(this).parent().attr("id");
    console.log(parentId);
    var childId = $(this).siblings(".description").val();
    console.log(childId);
    localStorage.setItem(parentId, childId);
  });

  function applyColors() {
    $(".time-block").each(function () {
      var hourCard = parseInt(this.id.split("-")[1]);
      console.log(hourCard);
      $(this).toggleClass("past", hourCard < currentHour);
      $(this).toggleClass("present", hourCard == currentHour);
      $(this).toggleClass("future", hourCard > currentHour);
    });
  }

  $(".time-block").each(function () {
    var key = $(this).attr("id");
    var value = localStorage.getItem(key);
    $(this).children(".description").val(value);
  });

  function headerDate() {
    var dateEl = $("#currentDay");
    var currentDate = dayjs().format("dddd, MMMM D");
    dateEl.text(currentDate);
  }

  headerDate();
  applyColors();
});
