document.addEventListener("DOMContentLoaded", function() {

    const inc = document.querySelector(".increase");
    const dec = document.querySelector(".decrese");
    const reset = document.querySelector(".reset");
    const resultat = document.querySelector(".text-erea");
    let num = 0;

    inc.addEventListener("click", function() {
        num += 1; 
        resultat.textContent = num;
    });

    reset.addEventListener("click", function() {
        num = 0; 
        resultat.textContent = num;
    });

    dec.addEventListener("click", function() {
        num -= 1; 
        resultat.textContent = num;
    });

});
