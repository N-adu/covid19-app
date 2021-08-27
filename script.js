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
  
   td.innerText = numberWithCommas(totalCases);
   dataResult.appendChild(td);

   td1.innerText = numberWithCommas(totalRecovery);
   dataResult.appendChild(td1);

   td2.innerText = numberWithCommas(totalDeaths);
   dataResult.appendChild(td2);

   function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
    
  
  }) 
};
  currentInfo();

// TIME
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

    // if(currentMin < 10){
    //   seconds.innerText = '0' + seconds;
    // }
}
currentTime();
setInterval(currentTime, 1000);


// VIDEO CONTROL

const video = document.getElementById('video');

function videoPlay(){
    if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
};

video.addEventListener('click', videoPlay);

//Bookings form

const bookBtn = document.querySelector('.book-btn');

const small = document.querySelectorAll('small');
const bookingForm = document.querySelector('.b-form');


const checkInputs = () => {
  const formInput = document.getElementsByTagName('input');
  for(let i = 0; i < formInput.length; i++){
    if(formInput[i].value === ""){
      formInput[i].classList.add('error');
      small[i].classList.add('error');
      small[i].innerText = 'Field cannot be Empty!';  
    }
  }
  
}

//EVENT LISTENER
bookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  checkInputs();
  
});

