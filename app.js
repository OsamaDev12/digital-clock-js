function clock(){
    



    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = "AM"

    if (h == 0){
        h = 12
    }
    else if(h > 12){
        am = "PM"
        h = h - 12

    }


     
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    document.getElementById("am").innerHTML = am;

    

    
    }
    var interval = setInterval(clock, 1000);
     