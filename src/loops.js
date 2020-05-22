import * as Tone from "tone";
import { duoSynth } from "./duoSynth";
import { monoSynth } from "./monoSynth";
import { polySynth } from "./polySynth";
import { metalSynth } from "./metalSynth";
import { membraneSynth } from './membraneSynth';



export const loops = () => {


  const loop = new Tone.Loop(function (time) {
    monoSynth.triggerAttackRelease("C3", "4n");
  }, "16n");

  const loop2 = new Tone.Loop(function (time) {
    duoSynth.triggerAttackRelease("B2", "8n");
  }, "4n");

  const loop3 = new Tone.Loop(function (time) {
    polySynth.triggerAttackRelease("E4", "4n");
  }, "4n");

  const loop4 = new Tone.Loop(function(time) {
    metalSynth.triggerAttackRelease("G2", "8n")
  }, "4n")

  const loop5 = new Tone.Loop(function (time) {
    metalSynth.triggerAttackRelease("G5", "8n");
  }, "4n");

  const loop6 = new Tone.Loop(function (time) {
    metalSynth.triggerAttackRelease("C4", "8n");
  }, "4n");

  const loop7 = new Tone.Loop(function (time) {
    membraneSynth.triggerAttackRelease("G2", "8n");
  }, "4n");

  const loop8 = new Tone.Loop(function (time) {
    membraneSynth.triggerAttackRelease("D3", "8n");
  }, "4n");

  const loop9 = new Tone.Loop(function (time) {
    membraneSynth.triggerAttackRelease("C2", "4n");
  }, "8n");


  let play1 = document.getElementById("play1");
  let stop1 = document.getElementById("stop1");
  
  play1.addEventListener("click", (e) => {
    loop.start();
    play1.classList.add('hidden');
    stop1.classList.remove('hidden');
  });

  stop1.addEventListener("click", (e) => {
    loop.stop();
    play1.classList.remove('hidden');
    stop1.classList.add('hidden');
  });

  let play2 = document.getElementById("play2");
  let stop2 = document.getElementById("stop2");
  
  play2.addEventListener("click", (e) => {
    loop2.start();
    play2.classList.add('hidden');
    stop2.classList.remove('hidden');
  });

  stop2.addEventListener("click", (e) => {
    loop2.stop();
    play2.classList.remove('hidden');
    stop2.classList.add('hidden');
  });

  let play3 = document.getElementById("play3");
  let stop3 = document.getElementById("stop3");
  
  play3.addEventListener("click", (e) => {
    loop3.start();
    play3.classList.add('hidden');
    stop3.classList.remove('hidden');
  });

  stop3.addEventListener("click", (e) => {
    loop3.stop();
    play3.classList.remove('hidden');
    stop3.classList.add('hidden');
  });

  let play4 = document.getElementById("play4");
  let stop4 = document.getElementById("stop4");
  
  play4.addEventListener("click", (e) => {
    loop4.start();
    play4.classList.add('hidden');
    stop4.classList.remove('hidden');
  });

  stop4.addEventListener("click", (e) => {
    loop4.stop();
    play4.classList.remove('hidden');
    stop4.classList.add('hidden');
  });

  let play5 = document.getElementById("play5");
  let stop5 = document.getElementById("stop5");
  
  play5.addEventListener("click", (e) => {
    loop5.start();
    play5.classList.add('hidden');
    stop5.classList.remove('hidden');
  });

  stop5.addEventListener("click", (e) => {
    loop5.stop();
    play5.classList.remove('hidden');
    stop5.classList.add('hidden');
  });

  let play6 = document.getElementById("play6");
  let stop6 = document.getElementById("stop6");
  
  play6.addEventListener("click", (e) => {
    loop6.start();
    play6.classList.add('hidden');
    stop6.classList.remove('hidden');
  });

  stop6.addEventListener("click", (e) => {
    loop6.stop();
    play6.classList.remove('hidden');
    stop6.classList.add('hidden');
  });

  let play7 = document.getElementById("play7");
  let stop7 = document.getElementById("stop7");

  play7.addEventListener("click", (e) => {
    loop7.start();
    play7.classList.add('hidden');
    stop7.classList.remove('hidden');
  });

  stop7.addEventListener("click", (e) => {
    loop7.stop();
    play7.classList.remove('hidden');
    stop7.classList.add('hidden');
  });

  let play8 = document.getElementById("play8");
  let stop8 = document.getElementById("stop8");
  
  play8.addEventListener("click", (e) => {
    loop8.start();
    play8.classList.add('hidden');
    stop8.classList.remove('hidden');
  });

  stop8.addEventListener("click", (e) => {
    loop8.stop();
    play8.classList.remove('hidden');
    stop8.classList.add('hidden');
  });

  let play9 = document.getElementById("play9");
  let stop9 = document.getElementById("stop9");
  
  play9.addEventListener("click", (e) => {
    loop9.start();
    play9.classList.add('hidden');
    stop9.classList.remove('hidden');
  });

  stop9.addEventListener("click", (e) => {
    loop9.stop();
    play9.classList.remove('hidden');
    stop9.classList.add('hidden');
  });

}