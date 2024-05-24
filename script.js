const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
;

let seconds=5;
let timeLeft=seconds;
let timer;



const paraEl=document.getElementById('sentence');
const btnEl=document.getElementById('start-btn');
const inputEl=document.getElementById('input');
const timerEl=document.getElementById('timer');

const resultEl=document.getElementById('result');
const speedEl=document.getElementById('speed');
const AccuracyEl=document.getElementById('accuracy');

const retryEl=document.getElementById('retry-btn');
speedEl.textContent='4';
AccuracyEl.textContent='90';




startTest();
 function startTest(){
 btnEl.addEventListener('click',()=>{
  paraEl.textContent=sentences;
  inputEl.disabled=false;
  btnEl.disabled=true;
  startTimer();
})
 
function startTimer(){
  setInterval(()=>{
    seconds--;

    timerEl.textContent=`00:${seconds}`;

    if(seconds<=0){
      endTimer();
      inputEl.disabled=true;
      resultEl.style.display = 'block';
    }
  },1000)
}

function endTimer(){
  clearInterval(timer);
  timerEl.textContent='00:00';
}
 }


 retryEl.addEventListener('click',()=>{
  clearInterval(timer);
  inputEl.value='';
  inputEl.disabled=true;
  paraEl.textContent='';
  paraEl.style.display='none';
  resultEl.style.display='none';
  timerEl.textContent='';
  btnEl.disabled=false;
  timeLeft=seconds;
})
