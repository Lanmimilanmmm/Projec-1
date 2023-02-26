// const hourEl =document.querySelector(".hour")
// const minuteEl =document.querySelector(".minute")
// const secondEl =document.querySelector(".second")

// function updateClock(){
//     const currentDate = new Date();
//    setTimeout (updateClock,1000);
//    const hour = currentDate.getHours();
//    const minute = currentDate.getMinutes();
//    const second = currentDate.getSeconds();
//    console.log(hour,minute,second);
   
// const hourDeg = (hour / 12) * 360;
// hourEl.style.transform = `rotate (${hourDeg}deg)`;

// const minuteDeg = (minute / 60)* 360;
// minuteEl.style.transform = `rotate (${minuteDeg}deg)`;


// const secondDeg = (second / 60) * 360;
// secondEl.style.transform = `rotate (${secondDeg}deg)`;

// }

// updateClock();

// setInterval(updateClock,1000)

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;

  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);