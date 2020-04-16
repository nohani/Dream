import * as Tone from "tone";

export const metalSynth = new Tone.DuoSynth().toMaster({
  frequency : 200 ,
  envelope : {
  attack : 0.01 ,
  decay : 0.4 ,
  release : 0.2
  } ,
  harmonicity : 10 ,
  modulationIndex : 19 ,
  resonance : 995 ,
  octaves : 1.4
});
