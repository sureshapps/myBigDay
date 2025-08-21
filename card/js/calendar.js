var event_date = document.getElementById("event_date").value;
var language = document.getElementById("language").value;

const events = [
    {
      start: event_date,
      end: event_date
    }
];

if (language == 'en') {
  new Calendar({
    id: "#color-calendar",
    theme: "basic",
    eventsData: events,
    customMonthValues: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    customWeekdayValues: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    disableMonthYearPickers: true,
    disableDayClick: true,
    disableMonthArrowClick: true
  }).setDate(event_date);
}
else {
  new Calendar({
    id: "#color-calendar",
    theme: "basic",
    eventsData: events,
    customMonthValues: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogs', 'Sep', 'Okt', 'Nov', 'Dis'],
    customWeekdayValues: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
    disableMonthYearPickers: true,
    disableDayClick: true,
    disableMonthArrowClick: true
  }).setDate(event_date);
}  