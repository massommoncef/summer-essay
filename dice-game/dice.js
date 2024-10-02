


document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundImage = "url('../image/hand-throwing-dice-luck-concept.jpg')";

    const submit = document.querySelector(".submit");
    const result = document.querySelector(".result");
    const images = document.querySelector(".imgs");
    const results = document.querySelector(".results");
    const input = document.querySelector("#numofdice");
    const text = document.querySelector(".text");
    submit.addEventListener("click",function(){
        
        const nbofdice = parseInt(document.querySelector("#numofdice").value);
        const values = [];
        const imgs = [];
        for(let i=1;i<=nbofdice;i++){
            const random = Math.floor(Math.random()*6 ) + 1;
            values.push(random);
            imgs.push(`<img class="dices" src="../image/${random}.png">`);

        }
        
        results.style.display = "flex";
        result.textContent = `dices   :  ${values.join(' , ')}`;
        images.innerHTML = imgs.join('');
       

    });


});