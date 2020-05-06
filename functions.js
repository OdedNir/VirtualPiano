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
let audioSrcWhite = ["./Sounds/A.mp3", "./Sounds/S.mp3", "./Sounds/D.mp3", "./Sounds/F.mp3", "./Sounds/G.mp3", "./Sounds/H.mp3", "./Sounds/J.mp3"];
keyPress(whiteKeys, audioSrcWhite);

let blackKeys = ['W', 'E', 'T', 'Y', 'U'];
let audioSrcBlack = ["./Sounds/W.mp3", "./Sounds/E.mp3", "./Sounds/T.mp3", "./Sounds/Y.mp3", "./Sounds/U.mp3"];
keyPress(blackKeys, audioSrcBlack);
mousePress(audioSrcWhite.concat(audioSrcBlack));
touchPress(audioSrcWhite.concat(audioSrcBlack));