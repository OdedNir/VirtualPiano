const getKeysMap = (keys) => {
    return keys.reduce((result, key) => {
        result[key] = new Audio(`./NewSounds/${key.toUpperCase()}.wav`);
        return result;
    }, {});
};
const eventHandler = (ev, getPressedElementId) => {
    const pressedElementId = getPressedElementId(ev);
    const audioSrc = keysMap[pressedElementId];
    if (audioSrc) {
        audioSrc.currentTime = 0;
        audioSrc.play();
    }
};

const keys = ["a", "w", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "o", "l", "p", ";"];
const keysMap = getKeysMap(keys);
document.addEventListener("click", (ev) => eventHandler(ev, (ev) => ev.target.id));
document.addEventListener("keydown", (ev) => eventHandler(ev, (ev) => ev.key));
document.addEventListener("touchstart", (ev) => eventHandler(ev, (ev) => ev.target.id));

