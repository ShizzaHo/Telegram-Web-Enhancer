let chats = document.querySelectorAll("div.ListItem");

function activateChatLeft() {
    refactor()
    toLeft()
}

function chatclick() {
    document.getElementsByClassName("messages-container")[0].onDOMContentLoaded = toLeft();
}

function toLeft() {
    document.getElementsByClassName("messages-container")[0].style.margin = "0";

    let flexy = document.querySelector("#MiddleColumn > div.messages-layout > div.Transition > div")
    flexy.style.alignItems = "flex-start";

    chats = document.querySelectorAll("div.ListItem");
    refactor()
}

function refactor() {
    for (let i = 0; i < chats.length; i++) {
        const element = chats[i];
        element.addEventListener("click", chatclick);
    }
}