//Loading Screen
var percentDisplay = document.querySelector('#loading-percent');
var loadingScreen = document.querySelector('#loading-container');
var body = document.querySelector('main')
var currentPercent = 0;

function percentText() {
    var percentCounter = setInterval( function(){
        currentPercent++;
        percentDisplay.textContent = currentPercent + "%";

        if (currentPercent === 100) {
            clearInterval(percentCounter);
            setTimeout(function(){
                percentDisplay.classList.add('percent-grow')
                body.classList.add('main-content');
            }, 100);
        }
    }, 25)

}

percentText();
