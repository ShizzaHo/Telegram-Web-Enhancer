let sendButton = document.querySelectorAll("#MiddleColumn > div.messages-layout > div.Transition.slide > div > div.middle-column-footer > div.Composer.shown > button");

sendButton[0].addEventListener('mouseenter', e => {
    if (localStorage.getItem('TWE_TireChange') == "true") {
        replaceTire()
    }
});

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

function replaceTire() {
    let messageBox = document.getElementById("editable-message-text");

    messageBox.innerHTML = replaceAll(messageBox.innerHTML,"--","—")
}

