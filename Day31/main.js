var counter = document.querySelector(".counter");
counter.innerText = +"30";
var i = 5;


setInterval(function() {
    if(i >0 ){
        i--;
        counter.innerText = i;
    }else{
        clearInterval()
    }
}, 500);
