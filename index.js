const dict={

}



const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const p=new URLSearchParams(window.location.search)

// let value = params;

// const welcomeBlock=document.querySelector("#welcome-string")
// const welcomeWedBlock=document.querySelector("#welcome-wed")
// if(dict[params["guest"]]){
//     let guest = dict[params["guest"]]
// welcomeBlock.innerHTML=guest.welcome
// }

// if(guest.wedding){
//     welcomeWedBlock.innerHTML = guest.wedding
// }

// Установите дату, до которой мы ведем обратный отсчет
const countDownDate = new Date("June 14, 2025 15:00:00").getTime();
const countdownElement=  document.getElementById("countdown")
const day=  document.getElementById("day")
const hour=  document.getElementById("hour")
const minute=  document.getElementById("minute")
const second=  document.getElementById("second")

// Обновляйте обратный отсчет каждые 1 секунду
const x = setInterval(function() {

  // Получить сегодняшнюю дату и время
  let now = new Date().getTime();

  // Найдите расстояние между моментом сейчас и датой обратного отсчета
  let distance = countDownDate - now;

  // Расчеты времени для дней, часов, минут и секунд
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Выведите результат в виде элемента с id="demo"
//   countdownElement.innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

  // Если обратный отсчет закончился, напишите какой-нибудь текст
  if (distance < 0) {
    clearInterval(x);
    countdownElement.innerHTML = "The event was held";
  }
}, 1000);
