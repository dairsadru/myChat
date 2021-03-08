const noMessageEl = document.querySelector(".noMessage");
const messagesEl = document.querySelector(".messages");
const textareaEl = document.querySelector("textarea");
const nameInputEl = document.getElementById("inp");
const errorTextareaEl = document.querySelector(".errorTextarea");
const errorInputEl = document.querySelector(".errorInput");
const sentBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");

const messageElClassName = "message";

sentBtn.addEventListener("click", function () {
    if (textareaEl.value === "") {
        errorTextareaEl.textContent = "Сообщение не может быть пустым";
    } else {
        errorTextareaEl.textContent = "";
    }
    if (nameInputEl.value === "") {
        errorInputEl.textContent = "Введите имя"
        return;
    } else {
        errorInputEl.textContent = "";
    }
    hideNoMessagesText();

    const messageMarkup = getMessageMarkup(textareaEl.value, nameInputEl.value, getTime());
    messagesEl.insertAdjacentHTML("beforeend", messageMarkup);
})

function getMessageMarkup(text, author, time) {
    return `<div class="${messageElClassName}">
                <div>Сообщение:${text}</div>
                <div>Автор:${author}</div>
                <div>Время:${time}</div>
            </div>`;
}

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}


function hideNoMessagesText() {
    noMessageEl.style.display = "none";
}

function showNoMessagesText() {
    noMessageEl.style.display = "block";
};

clearBtn.addEventListener("click", function () {
    showNoMessagesText();
    textareaEl.value = "";
    nameInputEl.value = "";
    const messagesElems = document.querySelectorAll("." + messageElClassName);
    messagesElems.forEach(function (message) {
        message.remove();
    })
})