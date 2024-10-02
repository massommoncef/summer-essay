document.addEventListener("DOMContentLoaded",function(){

    const date = new Date();
    const hour= date.getHours;
    const minute= date.getMinutes;
    const second = date.getSeconds;
    const affichage = document.querySelector(".affichage");
     
    function getCurrentTime(){
        const date = new Date();
        const hour= date.getHours;
        const minute= date.getMinutes;
        const second = date.getSeconds;

        affichage.textContent= `${Math.hour}`;
    }

    setInterval(getCurrentTime,100);

});