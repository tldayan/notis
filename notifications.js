"use strict"


function readAll() {

    let allRedDot = document.querySelectorAll(`.red_dot`) 

    let notiCount = document.querySelector(`.notification_count`)

    notiCount.innerHTML = 0

    allRedDot.forEach(dot => {
        dot.style.display = "none"
    });
}

function readNoti(noti_number) {

    let noti = document.querySelector(`.noti_`+ noti_number)

    let redDot = document.querySelector(`.red_dot`+ noti_number)

    let notiCounts = document.querySelector(`.notification_count`)



    if (parseInt(notiCounts.innerHTML) === 0) {
        return;
    }

    if (redDot.style.display === "none") {
        return;
    }
    
    notiCounts.innerHTML = notiCounts.innerHTML - 1


    noti.style.backgroundColor = "white"
    redDot.style.display = "none"


}
