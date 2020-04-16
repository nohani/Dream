import * as Tone from "tone";

export const monoSynth = new Tone.MonoSynth().toMaster();

const mouseDownHandlerSynth2 = (e) => {
    monoSynth.triggerAttack(e.target.dataset.note);
  };

const mouseUpHandlerSynth2 = (e) => {
    monoSynth.triggerRelease();
  };

const keyDownHandlerSynth2 = (e) => {
    switch (e.key) {
      case "d":
        return monoSynth.triggerAttack("C4");
      case "r":
        return monoSynth.triggerAttack("C#4");
      case "f":
        return monoSynth.triggerAttack("D4");
      case "t":
        return monoSynth.triggerAttack("D#4");
      case "g":
        return monoSynth.triggerAttack("E4");
      case "h":
        return monoSynth.triggerAttack("F4");
      case "u":
        return monoSynth.triggerAttack("F#4");
      case "j":
        return monoSynth.triggerAttack("G4");
      case "i":
        return monoSynth.triggerAttack("G#4");
      case "k":
        return monoSynth.triggerAttack("A4");
      case "o":
        return monoSynth.triggerAttack("A#4");
      case "l":
        return monoSynth.triggerAttack("B4");
      default:
        return;
    }
  }

const keyUpHandlerSynth2 = (e) => {
    monoSynth.triggerRelease();
  }

export const synth2 = () => {
  const keyboard = document.getElementById("keyboard");

  keyboard.addEventListener("mousedown", mouseDownHandlerSynth2);

  keyboard.addEventListener("mouseup", mouseUpHandlerSynth2);

  document.addEventListener("keydown", keyDownHandlerSynth2);

  document.addEventListener("keyup", keyUpHandlerSynth2);
};

export const remMonoListeners = () => {
  const keyboard = document.getElementById("keyboard");

  keyboard.removeEventListener("mousedown", mouseDownHandlerSynth2);

  keyboard.removeEventListener("mouseup", mouseUpHandlerSynth2);

  document.removeEventListener("keydown", keyDownHandlerSynth2);

  document.removeEventListener("keyup", keyUpHandlerSynth2);
};
