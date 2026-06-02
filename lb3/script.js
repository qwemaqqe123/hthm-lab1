// Обробка форми контактів

const tourForm = document.getElementById("tourForm");

if (tourForm) {
    tourForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;

        const result = document.getElementById("formResult");

        result.innerHTML =
            "Дякуємо, " + name + "!<br>" +
            "Ваше повідомлення прийнято.<br>" +
            "Email для зв’язку: " + email + "<br>" +
            "Дата поїздки: " + date;
    });
}




function showTextWithSize() {
    const text = document.getElementById("textInput").value;
    const size = document.getElementById("sizeInput").value;
    const result = document.getElementById("fontResult");

    result.textContent = text;
    result.style.fontSize = size + "px";
}




let imageTimer = null;

function startMovingImage() {
    const image = document.getElementById("movingImage");
    const area = document.querySelector(".image-area");

    clearInterval(imageTimer);

    imageTimer = setInterval(function () {
        const maxLeft = area.clientWidth - image.clientWidth;
        const maxTop = area.clientHeight - image.clientHeight;

        const randomLeft = Math.floor(Math.random() * maxLeft);
        const randomTop = Math.floor(Math.random() * maxTop);

        image.style.left = randomLeft + "px";
        image.style.top = randomTop + "px";
    }, 1000);
}

function stopMovingImage() {
    clearInterval(imageTimer);
}

function changeParagraphsSize() {
    const paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].setAttribute("style", "font-size: 15px;");
    }
}


function updateClock() {
    const clock = document.getElementById("clock");

    if (!clock) {
        return;
    }

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    clock.textContent = hours + ":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);
updateClock();

let wipeTimer = null;

function startWipeEffect() {
    const block = document.getElementById("wipeBlock");
    let opacity = 1;
    let width = 100;

    clearInterval(wipeTimer);

    wipeTimer = setInterval(function () {
        opacity = opacity - 0.05;
        width = width - 5;

        block.style.opacity = opacity;
        block.style.width = width + "%";

        if (opacity <= 0 || width <= 0) {
            clearInterval(wipeTimer);
            block.style.display = "none";
        }
    }, 150);
}

function resetWipeEffect() {
    const block = document.getElementById("wipeBlock");

    clearInterval(wipeTimer);

    block.style.display = "block";
    block.style.opacity = "1";
    block.style.width = "100%";
}



function changeSquareColor() {
    const color = document.getElementById("colorSelect").value;
    const square = document.getElementById("colorSquare");

    square.style.backgroundColor = color;
}




let mouseX = 0;
let mouseY = 0;
let pressedKey = "-";

function updateEventInfo() {
    const eventInfo = document.getElementById("eventInfo");

    if (!eventInfo) {
        return;
    }

    eventInfo.innerHTML =
        "Координати мишки: X = " + mouseX + ", Y = " + mouseY + "<br>" +
        "Натиснута клавіша: " + pressedKey;
}

document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    updateEventInfo();
});

document.addEventListener("keydown", function (event) {
    pressedKey = event.key + " / код: " + event.code;
    updateEventInfo();
});




let currentFontSize = 18;

function setCookie(name, value, days) {
    const date = new Date();

    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring((name + "=").length, cookie.length);
        }
    }

    return "";
}

function applySavedFontSize() {
    const text = document.getElementById("resizableText");

    if (!text) {
        return;
    }

    const savedSize = getCookie("fontSize");

    if (savedSize !== "") {
        currentFontSize = Number(savedSize);
    }

    text.style.fontSize = currentFontSize + "px";
}

function increaseFont() {
    currentFontSize = currentFontSize + 2;

    const text = document.getElementById("resizableText");
    text.style.fontSize = currentFontSize + "px";

    setCookie("fontSize", currentFontSize, 7);
}

function decreaseFont() {
    currentFontSize = currentFontSize - 2;

    if (currentFontSize < 10) {
        currentFontSize = 10;
    }

    const text = document.getElementById("resizableText");
    text.style.fontSize = currentFontSize + "px";

    setCookie("fontSize", currentFontSize, 7);
}

applySavedFontSize();




function calculateCredit() {
    const S = 1000000;
    const p = 10;
    const years = 5;

    const pereplata = S * (p / 100) * years;

    document.getElementById("creditResult").textContent =
        "Переплата по кредиту становить: " + pereplata + " грн.";
}