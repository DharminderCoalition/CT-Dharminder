const hoursEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const timeEl = document.querySelector('.time');
const dayEl = document.querySelector('.day');
const toggle = document.querySelector('.toggle');


const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

const months=["jan","feb","mar","apr","may","june","july","aug","sep","nov","dec"]

toggle.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    const body = document.querySelector('body')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTMl = 'Dark Mode'
        body.style.background = 'White'
    }else{
        html.classList.add('dark')
        e.target.innerHTMl = 'Light Mode'
        body.style.background = 'black'
    }
});

setInterval(function setTime(){
    const time =new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const day =time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds();
    const nenosec = time.getMilliseconds();

    hoursEl.style.transform = `translate(-50% , -100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`;
    minuteEl.style.transform = `translate(-50% , -100%) rotate(${scale(minutes,0,59,0,360)}deg)`;
    secondsEl.style.transform = `translate(-50% , -100%) rotate(${scale(seconds,0,59,0,360)}deg)`;

    timeEl.innerHTML = `${hoursForClock < 10 ? `0${hoursForClock}` : hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`
    dayEl.innerHTML = `${days[day]} , ${months[month]} <span>${date}</span>`

},1)


const scale = (num,in_min,in_max,out_min,out_max)=>{
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}