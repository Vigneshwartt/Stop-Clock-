//we can get id s from html page
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset")

//we can initalize hr,min,sec,count=0

let hr=0;
let min=0;
let sec=0;
let count=0;
let timer=false;
//click panna function call panni time run aguthu
start.addEventListener('click',function(){
    timer=true;
    stopwatch();

})
//stop panna time stop aguthu
stop.addEventListener('click',function(){
    timer=false;
})
//reset na first la irunthu zero va initalize panrathu
reset.addEventListener('click',function(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById('hr').innerHTML=hr;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
    document.getElementById('count').innerHTML=count;
})

function stopwatch(){
    if(timer)
    {
        count++;
    }
    if(count==100)
    {
        sec++;
        count=0;
    }
    if(sec==60)
    {
        min++;
        sec=0;
    }
    if(min==60)
    {
        hr++;
        min=0;
        sec=0;
    }
let hrstr=hr;
let minstr=min;
let secstr=sec;
let countstr=count;
if(countstr<10)
{
    countstr="0"+countstr;
}
if(secstr<10)
{
    secstr="0"+secstr;
}
if(minstr<10)
{
    minstr="0"+minstr;
}
if(hrstr<10)
{
    hrstr="0"+hrstr;
}
document.getElementById('hr').innerHTML=hrstr
document.getElementById('min').innerHTML=minstr
document.getElementById('sec').innerHTML=secstr;
document.getElementById('count').innerHTML=countstr;
setTimeout(stopwatch,10);
}
