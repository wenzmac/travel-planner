// creates todays date then formats it so the month and day have 2 digits and as yyyy-mm-dd
// from todays date it calls on the addDays function to create the date in 16 days
function dateRestrict() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const dateToday = yyyy+'-'+mm+'-'+dd;
  const dateFuture = addDays(today, 16);
  const ddFuture = String(dateFuture.getDate()).padStart(2, '0');
  const mmFuture = String(dateFuture.getMonth() + 1).padStart(2, '0');
  const yyyyFuture = dateFuture.getFullYear();
  const dateMax = yyyyFuture+'-'+mmFuture+'-'+ddFuture;
  document.getElementById('date').min = dateToday;
  document.getElementById('date').max = dateMax;
}

// adds days to a date format
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export {addDays, dateRestrict}
