cal_id = "pmtthq7beefrulnrjbd9nj9e5s@group.calendar.google.com";
api_key = "AIzaSyDCdsXt9s_kxJp3SUjzzHng1Flgbao7jpc";
$.ajax({
  url:
    "https://www.googleapis.com/calendar/v3/calendars/" +
    cal_id +
    "/events?key=" +
    api_key,
  success: function(data) {
    console.log(data);
  }
});
