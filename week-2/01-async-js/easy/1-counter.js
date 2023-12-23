setInterval(() => {
  console.clear();
  const currDate = new Date();
  const currSecond = currDate.getSeconds();
  const currMinute = currDate.getMinutes();
  const currHour = currDate.getHours() > 12 ? currDate.getHours() - 12 : currDate.getHours();
  const notation = currDate.getHours() > 12 ? "PM" : "AM";
  console.log(currHour + " : " + currMinute + " : " + currSecond + " " + notation);
}, 1000);