const getKeysMap = (keys) => {
    return keys.reduce((result, key) => {
        result[key] = new Audio(`./Sounds/${key.toUpperCase()}.mp3`);
        return result;
    }, {});
}
const eventHandler = (ev, getPressedElementId) => {
    const pressedElementId = getPressedElementId(ev);
    const audioSrc = keysMap[pressedElementId];
    if (audioSrc) audioSrc.play();
}

const keys = ["a","s","d","f","g","h","j","w","e","t","y","u"];
const keysMap = getKeysMap(keys);
document.addEventListener("click", (ev) => eventHandler(ev, (ev) => ev.target.id));
document.addEventListener("keydown", (ev) => eventHandler(ev, (ev) => ev.key));
document.addEventListener("touchstart", (ev) => eventHandler(ev, (ev) => ev.target.id));