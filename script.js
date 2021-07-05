// LIVE CASES API
let dataResult = document.getElementById('dataResult');

async function currentInfo(){
  let url = fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(data => console.log(data.Countries[182])) //accessed countries within the object. UK is no.182
  console.log(url) //accesses covid api object

  // const totalCases = url.TotalConfirmed;
  // const totalRecovery = url.TotalRecovered;
  // const totalDeaths = url.TotalDeaths
  // console.log(url)

  // let tableData1 = document.createElement = ('td');
  // let tableData2 = document.createElement = ('td');
  // let tableData3 = document.createElement = ('td');

  // dataResult.appendChild(tableData1);
  // dataResult.appendChild(tableData2);
  // dataResult.appendChild(tableData3);
  
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



