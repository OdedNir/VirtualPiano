function keyPress(keys, audioSrc) {
    document.addEventListener("keydown", (ev) => {
        if (keys.includes(ev.key.toUpperCase())) {
            let index = keys.indexOf(ev.key.toUpperCase());
            let sound = new Audio(audioSrc[index]);
            sound.play();
        }
    });
}

function mousePress(audioSrc) {
    let kbdKeys = document.querySelectorAll("kbd");
    let pressedElement;
    document.addEventListener("click", (ev) => {
        pressedElement = ev.target;
        for (let i = 0; i < kbdKeys.length; i++) {
            if (pressedElement === kbdKeys[i]) {
                let sound = new Audio(audioSrc[i]);
                sound.play();
                break;
            }
        }
    })
}

function touchPress(audioSrc) {
    let kbdKeys = document.querySelectorAll("kbd");
    let pressedElement;
    document.addEventListener("touchstart", (ev) => {
        pressedElement = ev.target;
        for (let i = 0; i < kbdKeys.length; i++) {
            if (pressedElement === kbdKeys[i]) {
                let sound = new Audio(audioSrc[i]);
                sound.play();
                break;
            }
        }
    })
}

let whiteKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
let audioSrcWhite = ["./A.mp3", "./S.mp3", "./D.mp3", "./F.mp3", "./G.mp3", "./H.mp3", "./J.mp3"];
keyPress(whiteKeys, audioSrcWhite);

let blackKeys = ['W', 'E', 'T', 'Y', 'U'];
let audioSrcBlack = ["./W.mp3", "./E.mp3", "./T.mp3", "./Y.mp3", "./U.mp3"];
keyPress(blackKeys, audioSrcBlack);
mousePress(audioSrcWhite.concat(audioSrcBlack));