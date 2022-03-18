    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var body = document.getElementById("gradient");
    var test= document.querySelector('h3');

    function setGradient() {
        body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";   
        test.textContent='(à droite' + color1.value + ', à gauche' + color2.value + ')';
    }

    color1.addEventListener("input", setGradient)
    color2.addEventListener("input", setGradient)