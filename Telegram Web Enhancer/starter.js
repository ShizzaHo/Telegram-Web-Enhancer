function loadPlugin() {
    if(localStorage.getItem('TWE_FirstTime') == null){
        firstTimeSettings()
    } else {
        activateFunctional()
    }
}

function firstTimeSettings() {
    localStorage.setItem('TWE_ChatLeft', false);
    localStorage.setItem('TWE_TireChange', false);
    localStorage.setItem('TWE_Color', false);
    localStorage.setItem('TWE_ColorValue', "#766ac8");

    localStorage.setItem('TWE_FirstTime', "This is not the first time");
    loadPlugin();
}

function activateFunctional() {
    if (localStorage.getItem('TWE_ChatLeft') == "true") {
        activateChatLeft();
    }
    if (localStorage.getItem('TWE_Color') == "true") {
        activateColor();
    }
}

setTimeout(() => {
    loadPlugin()
}, 1000);

document.addEventListener('keydown', function(event) {
    if (event.code == 'NumpadMultiply' && (event.ctrlKey || event.metaKey)) {
        openWindow();
    }
});

function openWindow() {
    localStorage.setItem('test', 1);

    document.body.innerHTML = `
        <div class="TWE__Window">
            <h1 class="TWE__Title">Telegram Web Enhancer | панель управления</h1>
            <button class="TWE__Button" id="chatleft">Сдвигать чат влево [`+localStorage.getItem('TWE_ChatLeft')+`]</button><br>
            <button class="TWE__Button" id="tirechange">Заменять -- на — [`+localStorage.getItem('TWE_TireChange')+`]</button><br>
            <p>Чтобы тире заменялось, вам необходимо нажать на сообщение еще раз, и поменять хотябы один символ, такое решение необходимо из-за тонкостей Telegram</p>
            <button class="TWE__Button" id="colorchange">Заменять акцентный цвет [`+localStorage.getItem('TWE_Color')+`]</button>
            <input type="text" id="colorchangeValue" class="TWE__TextBox" placeholder="#766ac8" value="`+localStorage.getItem('TWE_ColorValue')+`">
            <p>После завершения манипуляций с панелью управления, обновите страницу</p>
        </div>
    `;

    document.getElementById("chatleft").onmousedown = (event) => {
        if(localStorage.getItem('TWE_ChatLeft') == "true"){
            localStorage.setItem('TWE_ChatLeft', false);
        } else {
            localStorage.setItem('TWE_ChatLeft', true);
        }
        event.target.innerHTML = "Сдвигать чат влево ["+localStorage.getItem('TWE_ChatLeft')+"]"
    };

    document.getElementById("tirechange").onmousedown = (event) => {
        if(localStorage.getItem('TWE_TireChange') == "true"){
            localStorage.setItem('TWE_TireChange', false);
        } else {
            localStorage.setItem('TWE_TireChange', true);
        }
        event.target.innerHTML = "Заменять -- на — ["+localStorage.getItem('TWE_ChatLeft')+"]"
    };

    document.getElementById("colorchange").onmousedown = (event) => {
        if(localStorage.getItem('TWE_Color') == "true"){
            localStorage.setItem('TWE_Color', false);
        } else {
            localStorage.setItem('TWE_Color', true);
        }
        event.target.innerHTML = "Заменять акцентный цвет ["+localStorage.getItem('TWE_ChatLeft')+"]"
    };

    document.getElementById("colorchangeValue").addEventListener("change", ()=>{
        localStorage.setItem('TWE_ColorValue', document.getElementById('colorchangeValue').value);
    });
}

