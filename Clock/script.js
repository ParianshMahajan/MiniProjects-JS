
//Synchronous functions
let element=document.getElementById('time')

setInterval(()=>{
    //code written in this will repeat itself after a particular time
    let date=new Date();
    let hours=date.getHours()
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()

    let time=`${hours}:${minutes}:${seconds}`


    //accessing element through dom

    element.innerHTML=time;



},1000)