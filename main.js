// https://www.magtek.com/content/documentationfiles/d99800004.pdf

document.addEventListener("DOMContentLoaded", () => {
    
    const magstripeInput = document.querySelector("#magstripe-input");
    const activateButton = document.querySelector("#activate-button");
    const amountInput = document.querySelector("#amount-input");
    const response = document.querySelector("#response");

    const amountStatus = document.querySelector("#amount-status");
    const swiperStatus = document.querySelector("#swiper-status");
    const validation = document.querySelector("#validation")

    activateButton.disabled = true;

    amountInput.onkeyup = () => {

        if(parseFloat(amountInput.value) >= 0) {
            response.innerHTML = "<b>INFO</b>: Click on the activate button";
            amountStatus.style.color = "black";
            activateButton.disabled = false;
        } else {
            response.innerHTML = "<b>INFO</b>: Enter a valid amount";
            amountStatus.style.color = "lightgrey";
            activateButton.disabled = true;
        }
    };

    activateButton.onclick = () => {
        magstripeInput.value = '';
        activateButton.disabled = true;
        swiperStatus.style.color = "black";
        response.innerHTML = "<b>INFO</b>: Do not type anything";
        activateButton.innerText = `Charging $${parseFloat(amountInput.value).toFixed(2)}, press ENTER to cancel`;
        setInterval(() => {
            magstripeInput.focus()
        }, 100);
    };

    magstripeInput.onkeypress = (event) => {
        if (event.key == "Enter") {
            if (magstripeInput.value == '') {
                activateButton.innerText = "CANCELLED";
                response.innerHTML = "<b>INFO</b>: Cancelled card swipe";
                swiperStatus.style.color = "lightgrey";
            } else {
                activateButton.innerText = "COMPLETE";
                response.innerHTML = "<b>INFO</b>: Swipe was successful";
                validation.style.color = "black";
            }
            setTimeout(() => window.location = window.location, 2000);
        }
    };
});