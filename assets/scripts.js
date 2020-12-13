document.addEventListener("DOMContentLoaded", function (event) {

    // set initial count
    let currentCount = 0;

    // select counter
    let counterNumber = document.querySelector(".counterNumber");
    console.log(counterNumber);
    let allButtons = document.querySelectorAll(".btn");

    allButtons.forEach(function (allButtons) {
        allButtons.addEventListener("click", function (e) {
            let btn = e.currentTarget.classList;

            if (btn.contains("fa-minus")) {
                currentCount--;
            }
            if (btn.contains("fa-plus")) {
                currentCount++;
            }
            if (btn.contains("fa-redo-alt")) {
                currentCount = 0;
            }

            if (currentCount > 0) {
                counterNumber.style.color = "green";
            } else if (currentCount < 0) {
                counterNumber.style.color = "red";
            } else {
                counterNumber.style.color = "slateblue";
            }

            counterNumber.textContent = currentCount;
        });
    });
});
