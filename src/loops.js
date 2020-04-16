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



  document.getElementById("time-start").addEventListener("click", (e) => {
    Tone.Transport.start();
  });

  document.getElementById("play1").addEventListener("click", (e) => {
    Tone.Transport.start();
    loop.start();
  });

  document.getElementById("stop1").addEventListener("click", (e) => {
    loop.stop();
  });

  document.getElementById("play2").addEventListener("click", (e) => {
    loop2.start();
  });

  document.getElementById("stop2").addEventListener("click", (e) => {
    loop2.stop();
  });

  document.getElementById("play3").addEventListener("click", (e) => {
    loop3.start();
  });

  document.getElementById("stop3").addEventListener("click", (e) => {
    loop3.stop();
  });

  document.getElementById("play4").addEventListener("click", (e) => {
    loop4.start();
  });

  document.getElementById("stop4").addEventListener("click", (e) => {
    loop4.stop();
  });

  document.getElementById("play5").addEventListener("click", (e) => {
    loop5.start();
  });

  document.getElementById("stop5").addEventListener("click", (e) => {
   loop5.stop();
  });

  document.getElementById("play6").addEventListener("click", (e) => {
    loop6.start();
  });

  document.getElementById("stop6").addEventListener("click", (e) => {
    loop6.stop();
  });

  document.getElementById("play7").addEventListener("click", (e) => {
    loop7.start();
  });

  document.getElementById("stop7").addEventListener("click", (e) => {
    loop7.stop();
  });

  document.getElementById("play8").addEventListener("click", (e) => {
    loop8.start();
  });

  document.getElementById("stop8").addEventListener("click", (e) => {
    loop8.stop();
  });

  document.getElementById("play9").addEventListener("click", (e) => {
    loop9.start();
  });

  document.getElementById("stop9").addEventListener("click", (e) => {
    loop9.stop();
  });

}