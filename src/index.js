import * as Tone from "tone";
import { synth1, remDuoListeners, duoSynth } from "./duoSynth";
import { synth2, remMonoListeners, monoSynth} from './monoSynth';
import { synth3, remPolyListeners, polySynth } from './polySynth';
import { loops } from './loops';
import {metalSynth} from './metalSynth';


// let instrumentState;
// const synthButtons = document.getElementsByClassName('synth-buttons')
// const sbArray = Array.from(synthButtons);

// let instrumentState = "duosynth";

// for(let i=0; i < sbArray.length; i++){
//   let button = sbArray[i]
//   button.addEventListener("click", e => {
//     instrumentState = e.target.dataset.synth
//   })
// }



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



})


