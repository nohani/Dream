import * as Tone from "tone";

export const duoSynth = new Tone.DuoSynth().toMaster();

const mouseDownHandlerSynth1 = (e) => {
    duoSynth.triggerAttack(e.target.dataset.note);
  };

const mouseUpHandlerSynth1 = (e) => {
    duoSynth.triggerRelease();
  }

const keyDownHandlerSynth1 = (e) => {
    switch (e.key) {
      case "d":
        return duoSynth.triggerAttack("C4");
      case "r":
        return duoSynth.triggerAttack("C#4");
      case "f":
        return duoSynth.triggerAttack("D4");
      case "t":
        return duoSynth.triggerAttack("D#4");
      case "g":
        return duoSynth.triggerAttack("E4");
      case "h":
        return duoSynth.triggerAttack("F4");
      case "u":
        return duoSynth.triggerAttack("F#4");
      case "j":
        return duoSynth.triggerAttack("G4");
      case "i":
        return duoSynth.triggerAttack("G#4");
      case "k":
        return duoSynth.triggerAttack("A4");
      case "o":
        return duoSynth.triggerAttack("A#4");
      case "l":
        return duoSynth.triggerAttack("B4");
      default:
        return;
    }
  };

const keyUpHandlerSynth1 = (e) => {
    duoSynth.triggerRelease();
  };

export const synth1 = () => {
  const keyboard = document.getElementById("keyboard");

  keyboard.addEventListener("mousedown", mouseDownHandlerSynth1);

  keyboard.addEventListener("mouseup", mouseUpHandlerSynth1);

  document.addEventListener("keydown", keyDownHandlerSynth1);

  document.addEventListener("keyup", keyUpHandlerSynth1);
};


export const remDuoListeners = () => {
  const keyboard = document.getElementById("keyboard");

  keyboard.removeEventListener("mousedown", mouseDownHandlerSynth1);

  keyboard.removeEventListener("mouseup", mouseUpHandlerSynth1);

  document.removeEventListener("keydown", keyDownHandlerSynth1);

  document.removeEventListener("keyup", keyUpHandlerSynth1);
};

