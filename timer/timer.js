
document.addEventListener("DOMContentLoaded", function() {
    const affichage = document.querySelector(".affichage");

    function getCurrentTime() {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        // let currentTime=hour + minute + second;
        const currentTime = hour.toString().padStart(2,'0')+ ':' + minute.toString().padStart(2,'0')+ ':'  + second.toString().padStart(2,'0') ;
        // console.log(`${currentTime}`);
        affichage.textContent= currentTime;
        
    }

    function timeAffiched(){
        if(second==0){
            minute-=1;
        }
    }

    setInterval(getCurrentTime, 1000);
});