let color = localStorage.getItem('TWE_ColorValue');

function activateColor() {
    document.documentElement.style.setProperty("--color-primary", color);
    document.documentElement.style.setProperty("--color-primary-opacity", color);
    document.documentElement.style.setProperty("-color-primary-shade", color);
    document.documentElement.style.setProperty("--color-primary-shade-rgb", color);
    document.documentElement.style.setProperty("--color-background-own", color);
    document.documentElement.style.setProperty("--color-background-own-apple", color);
    document.documentElement.style.setProperty("--color-background-own-selected", color);
    document.documentElement.style.setProperty("--color-chat-active", color);
    document.documentElement.style.setProperty("--color-dividers", color);
    document.documentElement.style.setProperty("--color-green", color);
    document.documentElement.style.setProperty("--color-text-meta-colored", color);
    document.documentElement.style.setProperty("--color-reply-own-hover", color);
    document.documentElement.style.setProperty("--color-reply-own-hover-apple", color);
    document.documentElement.style.setProperty("--color-code", color);
    document.documentElement.style.setProperty("--color-message-reaction-own", color);
    document.documentElement.style.setProperty("--color-message-reaction-hover-own", color);
        
    if (localStorage.getItem('TWE_ChatLeft') == "true") {
        activateChatLeft();
    }
}

