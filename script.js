const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]
const weekDays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
]
const numbers = document.querySelectorAll('.number');
const futureDate = new Date(2023, 12, 1, 1, 30, 0)
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
function myFunction() {
    const currentDate = new Date().getTime();
    const t = futureDate - currentDate;
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinuite = 60*1000;
    const oneSecond = 1000;
    let days = t/oneDay;
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour) / oneMinuite)
    let seconds = Math.floor((t % oneMinuite) / 1000)
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if(item<10) {
            return item = `0${item}`
        }
        return item;
    }
    numbers.forEach((item, index)=>{
        item.innerHTML = format(values[index]);
    })
}
let countdown = setInterval(myFunction, 1000);
myFunction()