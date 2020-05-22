import * as Tone from "tone";
import { synth1, remDuoListeners, duoSynth } from "./duoSynth";
import { synth2, remMonoListeners, monoSynth} from './monoSynth';
import { synth3, remPolyListeners, polySynth } from './polySynth';
import { loops } from './loops';



document.addEventListener("DOMContentLoaded", () => {

  loops();

  document.getElementById('synth-buttons').addEventListener('click', (e) => {
    const buttonId = e.target.getAttribute("id");
    switch (buttonId) {
      case "duoSynth":
        remPolyListeners();
        remMonoListeners();
        synth1();
        break;
      case "monoSynth":
        remPolyListeners();
        remDuoListeners();
        synth2();
        break;
      case "polySynth":
        remMonoListeners();
        remDuoListeners();
        synth3();
        break;
      default:
        return;
    }
  })

  document.querySelector(".close-modal").addEventListener("click", (e) => {
    let modal = document.querySelector(".modal");
    modal.classList.add('hidden');
    Tone.Transport.start();
  })
})


