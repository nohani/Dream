import * as Tone from "tone";

export const polySynth = new Tone.PolySynth(1).toMaster();

const mouseDownHandlerSynth3 = (e) => {
  polySynth.triggerAttack(e.target.dataset.note);
};

const mouseUpHandlerSynth3 = (e) => {
  polySynth.triggerRelease();
};

const keyDownHandlerSynth3 = (e) => {
  switch (e.key) {
    case "d":
      return polySynth.triggerAttack("C4");
    case "r":
      return polySynth.triggerAttack("C#4");
    case "f":
      return polySynth.triggerAttack("D4");
    case "t":
      return polySynth.triggerAttack("D#4");
    case "g":
      return polySynth.triggerAttack("E4");
    case "h":
      return polySynth.triggerAttack("F4");
    case "u":
      return polySynth.triggerAttack("F#4");
    case "j":
      return polySynth.triggerAttack("G4");
    case "i":
      return polySynth.triggerAttack("G#4");
    case "k":
      return polySynth.triggerAttack("A4");
    case "o":
      return polySynth.triggerAttack("A#4");
    case "l":
      return polySynth.triggerAttack("B4");
    default:
      return;
  }
};

const keyUpHandlerSynth3 = (e) => {
  polySynth.triggerRelease();
};


export const synth3 = () => {
  const keyboard = document.getElementById("keyboard");

  keyboard.addEventListener("mousedown", mouseDownHandlerSynth3);

  keyboard.addEventListener("mouseup", mouseUpHandlerSynth3);

  document.addEventListener("keydown", keyDownHandlerSynth3);

  document.addEventListener("keyup", keyUpHandlerSynth3);
};

export const remPolyListeners = () => {
  const keyboard = document.getElementById("keyboard");

  keyboard.removeEventListener("mousedown", mouseDownHandlerSynth3);

  keyboard.removeEventListener("mouseup", mouseUpHandlerSynth3);

  document.removeEventListener("keydown", keyDownHandlerSynth3);

  document.removeEventListener("keyup", keyUpHandlerSynth3);
};
