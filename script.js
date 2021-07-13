// LIVE CASES API
let dataResult = document.getElementById('dataResult');

async function currentInfo(){
  let url = fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => data.Countries[182])
  .then(uk => {
    console.log(url)
    let totalCases = uk.TotalConfirmed;
    let totalRecovery = uk.TotalRecovered;
    let totalDeaths = uk.TotalDeaths;
    console.log(totalDeaths)

   let td = document.createElement('td');
   let td1 = document.createElement('td');
   let td2 = document.createElement('td');
  
   console.log(td)
  
   td.innerText = totalCases;
   dataResult.appendChild(td);

   td1.innerText = totalRecovery;
   dataResult.appendChild(td1);

   td2.innerText = totalDeaths;
   dataResult.appendChild(td2);
    
  
  }) 
};

currentInfo();
  
// time
const hours = document.getElementById('hours');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
let time = document.querySelector('.time')

function currentTime() {
    let currentHour = new Date().getHours();
    let currentMin = new Date().getMinutes();
    let currentSec = new Date().getSeconds();
    
    hours.innerText = currentHour;
    seconds.innerText = currentMin;
    minutes.innerText = currentSec;
    time = hours + ':' + seconds + ':' + minutes;
    console.log(time)
}
currentTime();
setInterval(currentTime, 1000);


// Video Control

const video = document.getElementById('video');

function videoPlay(){
    if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
};

video.addEventListener('click', videoPlay);



