const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');
let counter = false;
let ms=0 , s=0 , m=0;

start.addEventListener('click', () =>{
    if(!counter){
        counter = setInterval(function() {
            time.innerText = updatedTime();
            ms++;
            
            if(ms === 100){
                ms = 0;
                s++;
            }
            if(s === 60){
                s = 0;
                m++;
            }
        },10)
    }
})

stop.addEventListener('click', () =>{
    clearInterval(counter);
    counter = false;
})

reset.addEventListener('click', () =>{
    clearInterval(counter);
    counter = false;
    ms = 0; s = 0; m =0;
    time.innerText = updatedTime();
})


function updatedTime(){
    return m + ':' + s + ":" + ms;
}