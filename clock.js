//let date = new Date();

//console.log(date.getHours(), date.getMinutes(), date.getSeconds() );


function currentTime(params) {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(hour, minutes, seconds );

    hour = updateTime( hour );
    minutes = updateTime (minutes);
    seconds = updateTime ( seconds );

    document.querySelector('#clock').textContent = `${hour} : ${minutes} : ${seconds}`;


    let time = setTimeout(() => currentTime() ,1000);
}

function updateTime( num ) {
   
    if (num < 10){
        return "0" + num; // i.e 03
    } else {
        return num;
    }
}

currentTime();