const FL=['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
const SC=[0,2,4,5,7,9,11];

// 🎷 Bebop Vocabulary: เน้น Enclosures, Chromatic Approaching และ Syncopation แบบแจ๊สแท้
const Q={
 m7:{s:[0,3,7,10],
  b:{mode:'Dorian',sc:[0,2,3,5,7,9,10],licks:[[5,2,3,7,10,9,7,3],[null,10,9,7,5,4,3,2],[0,2,3,7,10,9,7,5]]},
  a:{mode:'Dorian',sc:[0,2,3,5,7,9,10],licks:[
    [5,2,3,7,10,9,8,7],            // 1. Enclosure -> 5th (A->G#->G)
    [2,4,2,3,7,5,4,3],            // 2. Double Enclosure -> 3rd
    [10,12,11,10,7,5,4,3],         // 3. Chromatic Bebop Pass
    [3,5,7,10,9,8,7,3],            // 4. Arp Skip + Chromatic
    [7,10,9,7,5,2,1,0],            // 5. Enc -> Root
    [null,5,2,3,10,9,8,7],         // 6. Syncopated Enclosure (Off-beat)
    [null,2,4,3,7,null,4,3],       // 7. Syncopated Double Enc
    [10,null,9,8,7,5,2,3],         // 8. Syncopated Downward Pass
    [null,5,null,3,7,10,9,8],      // 9. Syncopated Push -> 5th
    [3,null,5,2,3,null,1,0]        // 10. Syncopated Rest & Enc
  ]}},
 '7':{s:[0,4,7,10],
  b:{mode:'Mixolydian',sc:[0,2,4,5,7,9,10],licks:[[12,11,10,9,7,5,4,2],[5,3,4,7,10,9,7,4],[null,2,4,5,7,10,9,7]]},
  a:{mode:'Mixolydian',sc:[0,2,4,5,7,9,10],licks:[
    [5,3,4,7,11,10,9,10],          // 1. Enc -> 3rd (F->D#->E)
    [11,9,10,7,5,3,4,0],           // 2. Enc -> b7 (B->A->Bb)
    [10,8,9,7,5,4,3,4],            // 3. Chromatic Surround
    [4,7,10,12,11,10,9,7],         // 4. Arp + Enc
    [12,10,9,7,5,3,4,0],           // 5. Classic Dominant Run
    [null,5,3,4,10,9,8,7],         // 6. Syncopated Enc -> 3rd
    [4,null,5,7,11,null,10,9],     // 7. Syncopated Double Push
    [null,10,8,9,7,5,3,4],         // 8. Syncopated Start -> 3rd
    [7,9,10,null,11,10,9,7],       // 9. Syncopated Chromatic
    [null,4,null,3,4,7,10,9]       // 10. Syncopated Off-beat
  ]}},
 'alt':{s:[0,4,8,10],
  b:{mode:'Altered',sc:[0,1,3,4,6,8,10],licks:[[10,8,6,4,3,1,0,-2],[0,1,3,4,6,8,10,8],[null,6,4,3,1,0,1,4]]},
  a:{mode:'Altered',sc:[0,1,3,4,6,8,10],licks:[
    [5,3,4,8,10,9,8,6],            // 1. Altered Enc (#9->b9->3)
    [11,9,10,8,6,4,3,1],           // 2. Enc -> b13
    [1,3,4,8,6,4,3,1],             // 3. Triplet-like Enc
    [8,10,9,8,6,4,3,1],            // 4. Tension Surround
    [10,8,6,4,3,1,2,3],            // 5. Resolution Approach
    [null,5,3,4,8,6,4,3],          // 6. Syncopated Enc
    [null,1,3,4,null,8,10,8],      // 7. Syncopated Altered Push
    [8,6,4,3,1,null,2,3],          // 8. Syncopated End Enc
    [1,3,4,6,8,10,null,9],         // 9. Syncopated Tension Drop
    [null,3,null,4,8,6,4,3]        // 10. Syncopated Off-beat Enc
  ]}},
 maj7:{s:[0,4,7,11],
  b:{mode:'Ionian',sc:[0,2,4,5,7,9,11],licks:[[4,7,9,11,12,11,9,7],[12,11,9,8,7,4,2,0],[5,3,4,7,11,9,7,4]]},
  a:{mode:'Lydian',sc:[0,2,4,6,7,9,11],licks:[
    [5,3,4,7,12,10,11,7],          // 1. Enc -> 3rd & Enc -> 7th
    [12,10,11,9,7,6,5,4],          // 2. Lydian #11 Enc
    [2,5,3,4,7,9,11,12],           // 3. Double Approach -> 3rd
    [11,9,7,6,4,2,3,4],            // 4. Downward Enc Finish
    [6,7,9,11,12,10,11,7],         // 5. High Lydian Enc
    [null,5,3,4,7,11,10,11],       // 6. Syncopated Enc (Off-beat)
    [null,4,6,7,null,12,10,11],    // 7. Syncopated Lydian Push
    [11,9,7,6,4,null,3,4],         // 8. Syncopated Drop Enc
    [6,7,9,11,12,null,10,11],      // 9. Syncopated #11 Enc
    [null,2,null,4,5,3,4,7]        // 10. Syncopated Low Enc
  ]}},
 m7b5:{s:[0,3,6,10],
  b:{mode:'Locrian',sc:[0,1,3,5,6,8,10],licks:[[5,2,3,6,10,8,6,3],[12,10,8,6,5,3,1,0],[0,3,6,10,12,10,6,3]]},
  a:{mode:'Locrian ♮2',sc:[0,2,3,5,6,8,10],licks:[
    [4,2,3,6,10,9,8,6],            // 1. Enc -> b3 & Enc -> b5
    [12,10,8,6,5,2,3,0],           // 2. Natural 2 Chromatic
    [2,4,2,3,6,5,4,3],            // 3. Double Enc -> b3
    [8,6,5,3,2,1,2,3],            // 4. Low Resolution Enc
    [3,6,10,12,10,8,7,6],          // 5. Arp Skip + Enc
    [null,4,2,3,6,10,8,6],         // 6. Syncopated Half-dim Enc
    [6,5,3,2,0,null,2,3],          // 7. Syncopated Drop Enc
    [null,3,5,6,8,10,null,9],      // 8. Syncopated Dual Off-beat
    [10,8,6,null,5,2,3,0],         // 9. Syncopated Mid Drop Enc
    [null,2,null,3,4,2,3,6]        // 10. Syncopated Low Push Enc
  ]}},
 aug:{s:[0,4,8,10],
  b:{mode:'Whole Tone',sc:[0,2,4,6,8,10],licks:[[0,2,4,6,8,10,12,10],[12,10,8,6,4,2,0,-2],[4,6,8,10,8,6,4,2]]},
  a:{mode:'Whole Tone',sc:[0,2,4,6,8,10],licks:[
    [5,3,4,8,10,8,6,4],            // 1. Enc -> 3rd (#5 Whole Tone)
    [12,10,8,6,4,3,4,8],           // 2. Whole Tone Enc
    [2,4,6,8,10,9,8,6],            // 3. Whole Step + Enc
    [10,8,6,4,2,3,4,0],            // 4. Down & Chromatic Up
    [4,8,10,12,10,8,6,4],          // 5. Aug Arp Skip
    [null,5,3,4,8,10,8,6],         // 6. Syncopated Aug Enc
    [null,10,8,6,4,null,3,4],      // 7. Syncopated Off-beat Enc
    [4,6,8,null,10,9,8,6],         // 8. Syncopated Center Drop
    [null,2,null,4,8,10,8,6],      // 9. Syncopated Push Enc
    [12,10,8,6,null,3,4,0]         // 10. Syncopated Downward Enc
  ]}},
 dim7:{s:[0,3,6,9],
  b:{mode:'Diminished (HW)',sc:[0,1,3,4,6,7,9,10],licks:[[0,1,3,4,6,7,9,10],[9,7,6,4,3,1,0,-3],[3,4,6,7,9,10,12,9]]},
  a:{mode:'Diminished (HW)',sc:[0,1,3,4,6,7,9,10],licks:[
    [2,4,2,3,5,7,5,6],            // 1. Double Enc Symmetrical
    [10,8,9,7,5,4,3,0],            // 2. HW Chromatic Enc
    [4,2,3,7,5,6,10,9],            // 3. Diminished Step Enc
    [9,7,6,4,3,2,1,0],            // 4. Downward Chromatic Run
    [1,3,4,6,7,9,8,9],            // 5. Upward HW Enc
    [null,2,4,2,3,6,5,6],          // 6. Syncopated Dim Enc
    [9,7,6,null,4,2,3,0],          // 7. Syncopated Drop Enc
    [null,3,4,6,7,9,null,8],       // 8. Syncopated Off-beat Dim
    [null,1,null,3,5,4,3,6],       // 9. Syncopated Push Dim
    [10,9,7,6,null,2,3,0]          // 10. Syncopated HW Finish
  ]}}
};

// แมปชนิดคอร์ดใหม่ให้ชี้ไปที่โครงสร้างสเกลใกล้เคียงกัน
Q.c13 = Q['7'];
Q.csus4 = Q['7'];
Q.cm9 = Q.m7;

const IDEAS=[
  {name:'1-3-5-7 (Arp)', fn:(s)=>[s[0],s[1],s[2],s[3]]},
  {name:'3-5-7-9 (Upper)', fn:(s)=>[s[1],s[2],s[3],s[0]+14]},
  {name:'Enc -> 3rd', fn:(s)=>[s[1]+2, s[1]-1, s[1], s[2]]},
  {name:'Enc -> Root', fn:(s)=>[s[0]+2, s[0]-1, s[0], s[1]]},
  {name:'Chr -> 3rd', fn:(s)=>[s[1]-2, s[1]-1, s[1], s[2]]},
  {name:'Chr -> 5th', fn:(s)=>[s[2]-2, s[2]-1, s[2], s[3]]},
  {name:'3-1-7-5 (Down)', fn:(s)=>[s[1],s[0],s[3]-12,s[2]-12]},
  {name:'7-1-3-5 (Bebop)', fn:(s)=>[s[3]-12,s[0],s[1],s[2]]},
  {name:'7-5-3-1 (Desc)', fn:(s)=>[s[3],s[2],s[1],s[0]]},
  {name:'Enc -> 7th', fn:(s)=>[s[3]+1, s[3]-1, s[3], s[2]]},
  {name:'5-3-2-1 (Scale)', fn:(s)=>[s[2],s[1],s[0]+2,s[0]]},
  {name:'1-7-3-5 (Skip)', fn:(s)=>[s[0],s[3]-12,s[1],s[2]]}
];

let DEG=[{d:2,q:'m7'},{d:7,q:'7'},{d:0,q:'maj7'}];
const $=s=>document.querySelector(s), nm=m=>FL[((m%12)+12)%12];
const md=(x,n)=>((x%n)+n)%n;
let tsN=4,tsD=4,adv=false,key=0,bpm=120,cur=-1,playing=false,good=0,bad=0,ac=null,timer=null,beat=0,nextT=0;
let startBar = 0;
let showIdeas = false;
let playStyle = 'swing';

const held=new Set(), lk={m7:0,'7':0,alt:0,maj7:0,m7b5:0,aug:0,dim7:0,c13:0,csus4:0,cm9:0};

function audio(){
  if(!ac){ ac = new (window.AudioContext || window.webkitAudioContext)(); }
  if(ac.state === 'suspended'){ ac.resume(); }
  return ac;
}

// ==========================================
// ระบบตรวจจับโน้ตจากไมโครโฟน (Pitchy / Pitch Detection)
// ==========================================
let micStream = null;
let micAnalyser = null;
let pitchDetector = null;
let isMicOn = false;
let currentMicNote = null;

async function toggleMic() {
  const micBtn = $('#micBtn');
  const ctx = audio();

  if (!isMicOn) {
    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = ctx.createMediaStreamSource(micStream);
      micAnalyser = ctx.createAnalyser();
      micAnalyser.fftSize = 2048;
      source.connect(micAnalyser);

      if (typeof Pitchy !== 'undefined') {
        pitchDetector = Pitchy.PitchDetector.forFloat32Array(micAnalyser.fftSize);
      }

      isMicOn = true;
      if (micBtn) micBtn.textContent = '🎙️ ปิดไมค์';
      detectMicPitch();
      console.log('เปิดไมค์ตรวจจับโน้ตสำเร็จ!');
    } catch (err) {
      alert('ไม่สามารถเปิดไมค์ได้: ' + err.message);
    }
  } else {
    isMicOn = false;
    if (micStream) micStream.getTracks().forEach(t => t.stop());
    if (currentMicNote !== null) {
      noteOff(currentMicNote);
      currentMicNote = null;
    }
    if (micBtn) micBtn.textContent = '🎤 เปิดไมค์';
  }
}


function detectMicPitch() {
  if (!isMicOn || !micAnalyser) return;

  const buf = new Float32Array(micAnalyser.fftSize);
  micAnalyser.getFloatTimeDomainData(buf);

  let rms = 0;
  for (let i = 0; i < buf.length; i++) {
    rms += buf[i] * buf[i];
  }
  rms = Math.sqrt(rms / buf.length);

  let pitch = -1;
  let clarity = 0;

  // วิเคราะห์ความถี่จริงจากเสียงไมโครโฟน
  if (rms > 0.01) {
    if (pitchDetector) {
      [pitch, clarity] = pitchDetector.findPitch(buf, ac.sampleRate);
    } else {
      // Autocorrelation ใช้ได้แม้ไม่ได้โหลดไลบรารี Pitchy
      const sampleRate = ac.sampleRate;
      const minFreq = 70;
      const maxFreq = 1000;
      const minLag = Math.floor(sampleRate / maxFreq);
      const maxLag = Math.min(
        Math.floor(sampleRate / minFreq),
        buf.length - 1
      );

      let bestLag = -1;
      let bestCorrelation = 0;

      for (let lag = minLag; lag <= maxLag; lag++) {
        let sum = 0;
        let normA = 0;
        let normB = 0;

        for (let i = 0; i < buf.length - lag; i++) {
          const a = buf[i];
          const b = buf[i + lag];
          sum += a * b;
          normA += a * a;
          normB += b * b;
        }

        const correlation =
          normA > 0 && normB > 0
            ? sum / Math.sqrt(normA * normB)
            : 0;

        if (correlation > bestCorrelation) {
          bestCorrelation = correlation;
          bestLag = lag;
        }
      }

      if (bestLag > 0 && bestCorrelation > 0.75) {
        pitch = sampleRate / bestLag;
        clarity = bestCorrelation;
      }
    }
  }

  if (pitch > 0 && clarity > 0.75) {
    const midiNote = Math.round(
      69 + 12 * Math.log2(pitch / 440)
    );

    if (midiNote >= LO && midiNote <= HI) {
      if (currentMicNote !== midiNote) {
        if (currentMicNote !== null) {
          noteOff(currentMicNote);
        }

        noteOn(midiNote);
        currentMicNote = midiNote;
      }
    } else if (currentMicNote !== null) {
      noteOff(currentMicNote);
      currentMicNote = null;
    }
  } else {
    if (currentMicNote !== null) {
      noteOff(currentMicNote);
      currentMicNote = null;
    }
  }

  requestAnimationFrame(detectMicPitch);
}

const micBtnEl = $('#micBtn');
if (micBtnEl) micBtnEl.onclick = toggleMic;

// ==========================================
// ระบบโหลดและเล่น MIDI คอร์ดเปียโนจากโฟลเดอร์ chord/ (Transpose อัตโนมัติ)
// ==========================================
const pianoMidiMap = {};
const midiChordFiles = ['cmaj7', 'cm7', 'c7', 'cm7b5', 'cdim7', 'calt', 'caug', 'cm6', 'c13', 'csus4', 'cm9'];

async function loadPianoMidiFiles() {
  if (typeof Midi === 'undefined') return;
  for (const q of midiChordFiles) {
    try {
      const midi = await Midi.fromUrl(`chord/${q}.mid`);
      pianoMidiMap[q] = midi;
      console.log(`โหลดไฟล์ MIDI เปียโน chord/${q}.mid สำเร็จ!`);
    } catch (e) {
      console.warn(`ไม่พบไฟล์ chord/${q}.mid (จะใช้เสียงสังเคราะห์สำรองแทน)`);
    }
  }
}
loadPianoMidiFiles();

function playMidiPianoChord(chordObj, startTime, beatDuration) {
  const qType = chordObj.q;
  const midiName = qType === 'c13' ? 'c13' :
                   qType === 'csus4' ? 'csus4' :
                   qType === 'cm9' ? 'cm9' :
                   qType === 'maj7' ? 'cmaj7' :
                   qType === 'm7' ? 'cm7' :
                   qType === '7' ? 'c7' :
                   qType === 'm7b5' ? 'cm7b5' :
                   qType === 'dim7' ? 'cdim7' :
                   qType === 'alt' ? 'calt' :
                   qType === 'aug' ? 'caug' : 'cm7';

  // เสียงสังเคราะห์สำรอง
  const synth = () => voicing(chordObj).forEach(n =>
    ep(n, startTime, beatDuration * Math.min(chordObj.len, 4) * (tsD === 8 ? 1 : 0.55), 0.07));

  const midiData = pianoMidiMap[midiName];
  const allNotes = (midiData && midiData.tracks) ? midiData.tracks.flatMap(t => t.notes) : [];
  if (!allNotes.length) { synth(); return; }

  const ppq = (midiData.header && midiData.header.ppq) || 480;
  const sig = (midiData.header && midiData.header.timeSignatures && midiData.header.timeSignatures[0]);
  const ts = (sig && sig.timeSignature) || [4, 4];
  const barQ = ts[0] * 4 / ts[1];

  const firstQ = Math.min(...allNotes.map(n => n.ticks)) / ppq;
  const leadQ = Math.floor((firstQ + 0.5) / barQ) * barQ;

  const secPerQ = 60 / bpm;
  // คำนวณความยาวสูงสุดตามจำนวนจังหวะจริงของคอร์ดที่ระบุไว้ในวงเล็บ (เช่น chordObj.len = 6)
  const maxSec = chordObj.len * beatDuration;
  const transposeDelta = chordObj.r > 5 ? chordObj.r - 12 : chordObj.r;

  let played = 0;
  allNotes.forEach(note => {
    const offQ = note.ticks / ppq - leadQ;
    if (offQ < -0.5) return;
    const off = Math.max(0, offQ * secPerQ);
    if (off >= maxSec - 0.001) return;
    const dur = Math.min(note.durationTicks / ppq * secPerQ, maxSec - off);
    ep(note.midi + transposeDelta, startTime + off, dur, note.velocity || 0.08);
    played++;
  });

  if (!played) {
    synth();
  }
}
playMidiPianoChord.logged = {};

// ==========================================
// ระบบเล่นไฟล์กลอง (รองรับ 4/4, 6/8 และ Ballad แบบ Continuous Loop)
// ==========================================
let drumBuffer = null;        // drum-loop.wav (4/4)
let drumBuffer68 = null;      // drum-loop68.wav (6/8)
let drumBufferBallad = null;  // drum-loop-ballad.wav (Ballad)
let activeDrumSource = null;
let isDrumLoopPlaying = false;

async function loadDrumLoops() {
  const ctx = audio();
  try {
    const res = await fetch('drum-loop.wav');
    const arrayBuffer = await res.arrayBuffer();
    drumBuffer = await ctx.decodeAudioData(arrayBuffer);
  } catch (err) {}

  try {
    const res68 = await fetch('drum-loop68.wav');
    const arrayBuffer68 = await res68.arrayBuffer();
    drumBuffer68 = await ctx.decodeAudioData(arrayBuffer68);
  } catch (err) {}

  try {
    const resBallad = await fetch('drum-loop-ballad.wav');
    const arrayBufferBallad = await resBallad.arrayBuffer();
    drumBufferBallad = await ctx.decodeAudioData(arrayBufferBallad);
  } catch (err) {}
}
loadDrumLoops();

function startContinuousDrum(startTime = 0) {
  const drumCheck = $('#onD');
  
  const is68 = (tsN === 6 && tsD === 8);
  let targetBuffer = drumBuffer;

  if (playStyle === 'ballad' && drumBufferBallad) {
    targetBuffer = drumBufferBallad;
  } else if (is68 && drumBuffer68) {
    targetBuffer = drumBuffer68;
  }

  if (!targetBuffer || (drumCheck && !drumCheck.checked)) return;

  stopDrumSound();

  const ctx = audio();
  const source = ctx.createBufferSource();
  const gainNode = ctx.createGain();

  source.buffer = targetBuffer;
  source.loop = true;

  const originalBpm = 120;
  source.playbackRate.value = bpm / originalBpm;

  gainNode.gain.setValueAtTime(playStyle === 'ballad' ? 0.5 : 0.8, ctx.currentTime);
  source.connect(gainNode);
  gainNode.connect(ctx.destination);

  const t = startTime || ctx.currentTime;
  source.start(t);
  activeDrumSource = source;
  isDrumLoopPlaying = true;
}
// โหลดเสียงปิดท้ายเมื่อฝึกครบจำนวนรอบ
let endBuffer = null;

async function loadEndSound() {
  try {
    const response = await fetch('end.wav');

    if (!response.ok) {
      throw new Error('ไม่สามารถโหลด end.wav ได้');
    }

    const arrayBuffer = await response.arrayBuffer();
    endBuffer = await audio().decodeAudioData(arrayBuffer);

    console.log('โหลด end.wav สำเร็จ');
  } catch (error) {
    console.error('โหลด end.wav ไม่สำเร็จ:', error);
  }
}

loadEndSound();

function playEndSound() {
  if (!endBuffer) return false;

  const ctx = audio();
  const source = ctx.createBufferSource();

  source.buffer = endBuffer;
  source.connect(ctx.destination);

  source.onended = () => {
    showSessionResult();
  };

  source.start();
  return true;
}

function stopDrumSound() {
  if (activeDrumSource) {
    try { activeDrumSource.stop(); } catch(e) {}
    activeDrumSource = null;
  }
  isDrumLoopPlaying = false;
}

function triggerDrumMidi(time, barDuration) {
  const drumCheck = $('#onD');

  if (drumCheck && !drumCheck.checked) {
    stopDrumSound();
    return;
  }

  if (!isDrumLoopPlaying && playing) {
    startContinuousDrum(time);
  }

  if (activeDrumSource) {
    activeDrumSource.playbackRate.setValueAtTime(bpm / 120, time);
  }
}

const drumCheckEl = $('#onD');
if (drumCheckEl) {
  drumCheckEl.onchange = (e) => {
    if (e.target.checked) {
      if (playing) startContinuousDrum();
    } else {
      stopDrumSound();
    }
  };
}

const hz=n=>440*2**((n-69)/12);
function tone(n,t,dur,vol,type,atk=0.005){
  const ctx = audio();
  const o=ctx.createOscillator(),g=ctx.createGain();
  o.type=type;o.frequency.value=hz(n);
  g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(vol,t+atk);
  g.gain.exponentialRampToValueAtTime(0.001,t+dur);
  o.connect(g).connect(ctx.destination);o.start(t);o.stop(t+dur+0.05);
}

// ===== เสียงเบส (upright-ish): triangle + sawtooth ผ่าน low-pass + ฮาร์โมนิกส์ที่ 2 =====
function bassTone(n,t,dur,vol,atk=0.008){
  const ctx=audio(), f=hz(n);
  const out=ctx.createGain(), lp=ctx.createBiquadFilter();
  lp.type='lowpass'; lp.Q.value=0.7;
  lp.frequency.setValueAtTime(Math.min(3000,f*16),t);                       // เปิดสว่างตอนดีด
  lp.frequency.exponentialRampToValueAtTime(Math.max(350,f*4),t+Math.max(0.12,dur*0.6));
  [['triangle',1,1],['sawtooth',1,0.30],['sine',2,0.22]].forEach(([type,m,gv])=>{
    const o=ctx.createOscillator(),g=ctx.createGain();
    o.type=type;o.frequency.value=f*m;g.gain.value=gv;
    o.connect(g).connect(lp);o.start(t);o.stop(t+dur+0.06);
  });
  const e=out.gain;
  e.setValueAtTime(0.0001,t);
  e.linearRampToValueAtTime(vol,t+atk);
  e.exponentialRampToValueAtTime(vol*0.45,t+dur*0.7);                       // ค้างเสียงให้ต่อเนื่อง
  e.exponentialRampToValueAtTime(0.0001,t+dur);
  lp.connect(out);out.connect(ctx.destination);
}

// ===== เสียงเปียโน =====
const PIANO_VOL = 2.5;
const PIANO_BANK = 'MusyngKite';
let pianoSF = null, _pianoBus = null;
const liveNodes = [];

function pianoBus() {
  if (!_pianoBus) {
    const ctx = audio();
    _pianoBus = ctx.createGain();
    _pianoBus.gain.value = PIANO_VOL;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4; comp.knee.value = 12;
    _pianoBus.connect(comp); comp.connect(ctx.destination);
  }
  return _pianoBus;
}

function pianoTone(n, t, dur, vol, type) {
  const ctx = audio();
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.value = hz(n);
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(pianoBus()); o.start(t); o.stop(t + dur + 0.05);
  const nowT = ctx.currentTime;
  for (let i = liveNodes.length - 1; i >= 0; i--) if (liveNodes[i].end < nowT) liveNodes.splice(i, 1);
  liveNodes.push({ source: o, end: t + dur + 0.1 });
}
const epSynth = (n, t, d, v) => { pianoTone(n, t, d, v, 'triangle'); pianoTone(n + 12, t, d * 0.6, v * 0.25, 'sine'); };

function loadPianoSF() {
  if (typeof Soundfont === 'undefined') return;
  Soundfont.instrument(audio(), 'acoustic_grand_piano', { soundfont: PIANO_BANK, destination: pianoBus() })
    .then(p => { pianoSF = p; })
    .catch(e => console.warn(e));
}

const ep = (n, t, d, v) => {
  if (!pianoSF) return epSynth(n, t, d, Math.min(v, 0.1));
  const now = audio().currentTime;
  for (let i = liveNodes.length - 1; i >= 0; i--) if (liveNodes[i].end < now) liveNodes.splice(i, 1);
  const node = pianoSF.play(n, t, { duration: Math.max(0.05, d), gain: Math.min(1, 0.4 + v), release: 0.35 });
  if (node) liveNodes.push({ source: node.source, end: t + d + 0.5 });
};

function cutPiano() {
  if (!_pianoBus) return;
  const now = audio().currentTime, g = _pianoBus.gain;
  g.cancelScheduledValues(now);
  g.setValueAtTime(g.value, now);
  g.linearRampToValueAtTime(0, now + 0.02);
  g.setValueAtTime(PIANO_VOL, now + 0.05);
  liveNodes.splice(0).forEach(nd => { try { nd.source.stop(now + 0.03); } catch (e) {} });
}
loadPianoSF();

function horn(n,t,dur,vol){
  const ctx = audio();
  const o=ctx.createOscillator(),f=ctx.createBiquadFilter(),g=ctx.createGain();
  o.type='sawtooth';o.frequency.value=hz(n);
  o.detune.setValueAtTime(-35,t);o.detune.linearRampToValueAtTime(0,t+0.06);
  f.type='lowpass';f.frequency.setValueAtTime(900,t);f.frequency.linearRampToValueAtTime(2200,t+0.05);f.frequency.exponentialRampToValueAtTime(1100,t+dur);
  g.gain.setValueAtTime(0.0001,t);g.gain.linearRampToValueAtTime(vol,t+0.02);
  g.gain.setValueAtTime(vol,t+Math.max(0.03,dur-0.06));g.gain.linearRampToValueAtTime(0.0001,t+dur);
  o.connect(f).connect(g).connect(ctx.destination);o.start(t);o.stop(t+dur+0.02);
}

function phrase(cell,s,sc,nx3){
  const W=set=>{const r=[];for(let w=-5;w<=19;w++)if(set.includes(((w%12)+12)%12))r.push(w);return r};
  const cs=W(s.map(x=>x%12)),ss=W(sc);
  const near=(arr,x)=>arr.reduce((a,w)=>Math.abs(w-x)<Math.abs(a-x)?w:a,arr[0]);
  const last=cell[3],T=near(W([nx3]).filter(w=>w>=-2&&w<=14),last),dir=T>=last?1:-1;
  const c4=cs.filter(w=>w!==last&&(w-last)*dir>0);
  const i4=c4.length?near(c4,last):near(cs.filter(w=>w!==last),last);
  const up=ss.filter(w=>w>T);let i6,i7;
  if(up.length&&up[0]<=15){i6=up[0];i7=T-1}else{i6=ss.filter(w=>w<T).pop();i7=T+1}
  const g=i6-i4;let i5;
  if(Math.abs(g)<=1)i5=i4>=i6?i4+1:i4-1;
  else if(Math.abs(g)===2)i5=i4+Math.sign(g);
  else{const st=ss.filter(w=>(w-i4)*Math.sign(g)>0);i5=Math.sign(g)>0?st[0]:st[st.length-1]}
  return cell.concat([i4,i5,i6,i7]);
}

function pats(qn,s,sc,nx3){
  const t=qn==='m7'?[s[1],s[2],s[3],s[0]+2]:s;
  return IDEAS.map(idea=>{
    const rawCell = idea.fn(t);
    const cell = rawCell.map(v=>((v%12)+12)%12);
    return { name: idea.name, cell, lick: phrase(cell,s,sc,nx3) };
  });
}

function prog(){
  return DEG.map((c,i)=>{
    const r=(key+c.d)%12,q=Q[c.q]||Q['7'],m=adv?q.a:q.b,nd=DEG[(i+1)%DEG.length],nx3=md((key+nd.d)%12+(Q[nd.q]||Q['7']).s[1]-r,12);
    const pp=adv?null:pats(c.q,q.s,m.sc,nx3);
    const chordName = c.q === 'c13' ? FL[r]+'13' : c.q === 'csus4' ? FL[r]+'sus4' : c.q === 'cm9' ? FL[r]+'m9' : FL[r]+(c.q==='alt'?'7alt':c.q==='dim7'?'dim7':c.q==='aug'?'aug':c.q==='m7b5'?'m7b5':c.q);
    return{i,len:c.len||tsN,r,q:c.q,n:chordName,mode:m.mode,s:q.s,sc:m.sc,cells:pp&&pp.map(x=>x.cell),licks:m.licks,patsInfo:pp,tones:q.s.map(i=>(r+i)%12)};
  });
}

const shown=()=>playing&&cur>=0?cur:startBar;
const nLicks=c=>(!adv&&c.patsInfo)?c.patsInfo.length:c.licks.length;
const patName=c=>(!adv&&c.patsInfo)?c.patsInfo[lk[c.q]%c.patsInfo.length].name:'Custom';

// controls
$('#key').innerHTML=FL.map((k,i)=>`<option value="${i}">${k}</option>`).join('');
$('#key').onchange=e=>{key=+e.target.value;render()};

$('#mode').onchange=e=>{
  adv = e.target.value === '1';
  document.documentElement.style.setProperty('--bg', adv ? '#ACC5A6' : '#F4F4F1');
  render();
};

$('#ts').onchange = e => {
  [tsN, tsD] = e.target.value.split('/').map(Number);
  beat = 0;
  if (playing) {
    const ctx = audio();
    startContinuousDrum(ctx.currentTime + 0.02);
  }
  render();
};

const styleSelect = $('#styleSelect');
if (styleSelect) {
  styleSelect.onchange = (e) => {
    playStyle = e.target.value;
    if (playStyle === 'ballad') {
      setBpm(70);
    } else if (playStyle === 'bebop') {
      setBpm(180);
    } else {
      setBpm(120);
    }
    if (playing) {
      const ctx = audio();
      startContinuousDrum(ctx.currentTime + 0.02);
    }
  };
}

const PRE={'ii-V-I':'Dm7 G7 Cmaj7','I-vi-ii-V':'Cmaj7 Am7 Dm7 G7','Autumn Leaves':'Dm7 G7 Cmaj7 Fmaj7 Bm7b5 E7 Am7 Am7','ii-V-I (alt)':'Dm7 G7alt Cmaj7','Jazz Blues':'C7 F7 C7 C7 F7 F7 C7 C7 Dm7 G7 C7 G7','Diminished Pass':'Cmaj7 C#dim7 Dm7 G7','Augmented V':'Dm7 Gaug Cmaj7'};
const HINT=$('#chErr').textContent;
$('#preset').innerHTML='<option value="">เลือกโปรเกรชัน…</option>'+Object.keys(PRE).map(k=>`<option>${k}</option>`).join('');

// ==========================================
// ระบบอ่านคอร์ดแบบกำหนดจำนวนจังหวะในวงเล็บได้ เช่น Dm7(6)
// ==========================================
function applyProg(txt){
  const R={C:0,D:2,E:4,F:5,G:7,A:9,B:11},out=[];
  for(const t of txt.split(/[\s,|]+/).filter(Boolean)){
    const m=t.match(/^([A-Ga-g])([#b]?)(maj7|M7|Δ|m7b5|halfdim|ø|dim7|fullydim|dim|°|aug7|aug|\+|m9|-9|m7|-7|7alt|alt|13|7sus4|sus4|11|m11|9|7)(?:\((\d{1,2})\))?$/);
    if(!m){
      $('#chErr').textContent='อ่านคอร์ด "'+t+'" ไม่ได้ (ใส่จำนวนจังหวะได้ เช่น Dm7(6))';
      return;
    }
    const rawQ=m[3];
    const q = /^13$/.test(rawQ) ? 'c13' :
              /^(sus4|7sus4)$/.test(rawQ) ? 'csus4' :
              /^(m9|-9)$/.test(rawQ) ? 'cm9' : /^(7alt|alt)$/.test(rawQ) ? 'alt' :
              /^(maj7|M7|Δ)$/.test(rawQ) ? 'maj7' :
              /^(m7b5|halfdim|ø)$/.test(rawQ) ? 'm7b5' :
              /^(dim7|fullydim|dim|°)$/.test(rawQ) ? 'dim7' :
              /^(aug7|aug|\+)$/.test(rawQ) ? 'aug' :
              /^(m7|-7)$/.test(rawQ) ? 'm7' : '7';

    // ดึงค่าจังหวะในวงเล็บ m[4] ถ้าไม่มีให้ใช้ค่าเริ่มต้นตาม Time Signature
    out.push({d:(R[m[1].toUpperCase()]+(m[2]==='#'?1:m[2]==='b'?-1:0)+12)%12,q,len:m[4]?Math.min(16,Math.max(1,+m[4])):null});
  }
  if(!out.length||out.length>16){$('#chErr').textContent='ใส่คอร์ดได้ 1–16 ตัว';return}
  $('#chErr').textContent=HINT;DEG=out;cur=-1;startBar=0;if(playing)jumpToBar(0);render();
}
$('#apply').onclick=()=>applyProg($('#chords').value);
$('#chords').onkeydown=e=>{if(e.key==='Enter')applyProg(e.target.value)};
$('#preset').onchange=e=>{const v=PRE[e.target.value];if(v){$('#chords').value=v;applyProg(v)}};
// piano
const LO=48,HI=84,piano=$('#piano'),keys={};
const isBlack=n=>[1,3,6,8,10].includes(n%12);
let wc=0;for(let n=LO;n<=HI;n++)if(!isBlack(n))wc++;
const W=100/wc;let wi=0;
for(let n=LO;n<=HI;n++){
  const k=document.createElement('div');
  if(!isBlack(n)){k.className='w';k.style.left=wi*W+'%';k.style.width=W+'%';wi++}
  else{k.className='b';k.style.left=(wi*W-W*0.3)+'%';k.style.width=W*0.6+'%'}
  k.onpointerdown=e=>{e.preventDefault();audio();noteOn(n)};
  k.onpointerup=k.onpointerleave=()=>noteOff(n);
  piano.append(k);keys[n]=k;
}

function playLick(lick,base,t0,d){
  lick.forEach((x,i)=>{
    if(x===null)return;
    const up=i%2===1,t=t0+Math.floor(i/2)*d+(up?d*0.667:0)+(Math.random()-0.5)*0.016;
    const dur=i===lick.length-1?d*1.6:(up?d*0.45:d*0.72);
    horn(base+x,t,dur,up?0.2:0.15);
  });
}
const inRange=(pc,lo)=>lo+md(pc-lo,12);
function voicing(c){const e=c.q==='alt'?1:c.q==='7'?9:c.q==='aug'?8:2,f5=c.q==='alt'?8:c.s[2];
  return[c.s[1],c.s[3],e,f5].map(i=>inRange(c.r+i,55))}

// ═══════════ Walking Bass ═══════════
// จังหวะ 1 = รูท · จังหวะกลาง = สลับ "โน้ตผ่านตามสเกล" กับ "โน้ตคอร์ด" ไหลไปทางเดียวกัน
// จังหวะสุดท้าย = approach โน้ตครึ่งเสียงเข้าหารูทคอร์ดถัดไป · ต่อเนื่องข้ามห้องและไม่กระโดดไกล
const BASS_LO=33, BASS_HI=50;            // A1 – D3
const BASS_VOL=0.22;                     // วัดแล้วดังกว่าเสียงเบสเดิมประมาณ +4 dB
let bassPrev=null, bassLine=[];
const bassNear=(pc,ref)=>{
  let best=null;
  for(let n=BASS_LO;n<=BASS_HI;n++){
    if(md(n,12)!==md(pc,12))continue;
    if(best===null||Math.abs(n-ref)<Math.abs(best-ref))best=n;
  }
  return best;
};
const bassTones=(c,offs)=>{
  const out=[];
  for(let n=BASS_LO;n<=BASS_HI;n++)if(offs.some(i=>md(n-c.r,12)===md(i,12)))out.push(n);
  return out;
};
function walkLine(c,nx,steps,ref){
  const root=bassNear(c.r,ref==null?40:ref);
  const line=[root];
  if(steps<2)return line;
  const T=bassNear(nx.r,root);
  const ch=bassTones(c,c.s), sc=bassTones(c,c.sc);
  let dir=Math.sign(T-root)||(Math.random()<0.5?1:-1);
  if(Math.random()<0.25)dir=-dir;                              // บางครั้งเดินสวนทิศเพื่อความหลากหลาย
  for(let k=1;k<=steps-2;k++){
    const prev=line[k-1];
    if(prev>=BASS_HI-3)dir=-1; else if(prev<=BASS_LO+3)dir=1;
    const useChord=k%2===0||Math.random()<0.3;                 // จังหวะ 3 = โน้ตคอร์ด · จังหวะ 2 = ก้าวตามสเกล
    const w=k/(steps-1), lastMid=k===steps-2;
    // โน้ตสุดท้ายก่อน approach เลือกได้ทั้งโน้ตคอร์ดและสเกล เพื่อให้เดินเข้าหาเป้าหมายได้ไม่กระโดดไกล
    const pool=(lastMid?[...ch,...sc]:(useChord?ch:sc)).filter(n=>n!==prev&&Math.abs(n-prev)<=(useChord||lastMid?7:3));
    let best=null,bs=-1e9;
    for(const n of pool){
      const d=n-prev, ad=Math.abs(d);
      let sc2=(Math.sign(d)===dir?1.5:0)-(ad>2?(ad-2)*0.3:0)-Math.abs(n-T)*(0.1+0.25*w);
      if(lastMid&&Math.abs(n-T)>5)sc2-=6;                      // ต้องเดินเข้า approach ได้ไม่ไกล
      if(k>=2&&n===line[k-2])sc2-=1.2;                         // กันเดินไปกลับซ้ำโน้ตเดิม
      sc2+=Math.random()*0.9;
      if(sc2>bs){bs=sc2;best=n}
    }
    if(best===null)best=sc.filter(n=>n!==prev).sort((a,b)=>Math.abs(a-prev)-Math.abs(b-prev))[0];
    line.push(best);
  }
  const x=line[steps-2];
  const cand=[T-1,T+1].filter(n=>n>=BASS_LO&&n<=BASS_HI&&n!==x);
  const ap=cand.length?cand.reduce((a,b)=>{
    const da=Math.abs(a-x),db=Math.abs(b-x);
    return da<db||(da===db&&Math.random()<0.5)?a:b;
  }):T-1;
  line.push(ap);
  return line;
}
// สร้างเส้นเบสทั้งคอร์ด เก็บเป็น bassLine[จังหวะ] = เลขโน้ต
function buildBass(c,nx,L){
  const line=[], cmp=tsD===8, ref=bassPrev;
  if(playStyle==='ballad'){                                     // two-feel: รูท … โน้ตที่ 5
    const root=bassNear(c.r,ref==null?40:ref), mid=cmp?3:2;
    line[0]=root;
    if(L>mid)line[mid]=bassNear(c.r+c.s[2],root);
    bassPrev=line[L>mid?mid:0];
  } else {
    const steps=cmp?Math.max(1,Math.ceil(L/3)):L;
    const w=walkLine(c,nx,steps,ref);
    w.forEach((n,k)=>{line[cmp?k*3:k]=n});
    bassPrev=w[w.length-1];
  }
  return line;
}

// ==========================================
// ระบบนับจังหวะ (เล่นจังหวะตามความยาวคอร์ด c.len)
// ==========================================
function playBeat(b,t){
  const P=prog(),tot=P.reduce((s,x)=>s+x.len,0);
  let pos=b%tot,ci=0;
  while(pos>=P[ci].len){pos-=P[ci].len;ci++}
  const bt=pos,c=P[ci],L=c.len,nx=P[(ci+1)%P.length],d=60/bpm/(tsD===8?2:1);
  
  if(bt===0){
    const ctx = audio();
    cur = ci;
    setTimeout(()=>{barNotes.clear();render()},Math.max(0,(t-ctx.currentTime)*1000));
    triggerDrumMidi(t, d * L);
    bassLine=buildBass(c,nx,L);
  }

  if($('#onB').checked){
    const n=bassLine[bt];
    if(n!=null){
      const cmp=tsD===8, ballad=playStyle==='ballad';
      const dur=ballad?d*(cmp?2.8:1.9):d*(cmp?2.7:0.93);
      const strong=cmp?bt%6===0:bt%2===0;
      const vol=BASS_VOL*(ballad?0.9:1)*(bt===0?1.06:strong?1:0.88)*(0.95+Math.random()*0.1);
      bassTone(n,t+Math.random()*0.008,dur,vol,ballad?0.02:0.008);
    }
  }

  // เล่นคอร์ดเปียโนเมื่อเริ่มจังหวะแรกของห้อง (bt === 0)
  if($('#onP').checked){
    if(bt===0) {
      playMidiPianoChord(c, t, d);
    }
  }
}

function sched() {
  const ctx = audio();

  while (playing && nextT < ctx.currentTime + 0.15) {
    // ครบจำนวนรอบแล้ว หยุดเล่นและสรุปผล
    if (beat >= sessionEndBeat) {
      finishSession();
      break;
    }

    playBeat(beat, nextT);

    nextT += 60 / bpm / (tsD === 8 ? 2 : 1);
    beat++;
  }
}
function jumpToBar(barIdx){
  const P = prog();
  startBar = barIdx;
  let offsetBeat = 0;
  for(let k = 0; k < barIdx && k < P.length; k++){
    offsetBeat += P[k].len;
  }
  beat = offsetBeat;
  cur = barIdx;
  const ctx = audio();
  if (playing) cutPiano();
  nextT = ctx.currentTime + (playing ? 0.06 : 0.02);

  if (playing) {
    startContinuousDrum(nextT);
  }
}

/* ───────── นับถอยหลัง 3-2-1 ก่อนเริ่มฝึก ───────── */
let countTimer=null;
function countEl(){
  let e=document.getElementById('countdown');
  if(!e){
    e=document.createElement('div');
    e.id='countdown';
    e.setAttribute('aria-live','assertive');
    document.body.appendChild(e);
  }
  return e;
}
let sessionRounds = 2;
let sessionEndBeat = Infinity;
let sessionFinished = false;

function showSessionResult() {
  const total = good + bad;
  const accuracy = total
    ? Math.round((good / total) * 100) + '%'
    : '–';

  $('#resultGood').textContent = good;
  $('#resultBad').textContent = bad;
  $('#resultPct').textContent = accuracy;
  $('#resultSummary').textContent =
    `ฝึกครบ ${sessionRounds} รอบแล้ว`;

  $('#resultModal').hidden = false;
}

function finishSession() {
  if (sessionFinished) return;

  sessionFinished = true;
  playing = false;

  if (timer) clearInterval(timer);
  timer = null;

  stopDrumSound();
  cutPiano();

  cur = -1;
  $('#start').textContent = '▶ เริ่มฝึก';
  render();

  // เล่นเสียงปิดท้าย แล้วค่อยแสดงผล
  if (!playEndSound()) {
    showSessionResult();
  }
}

$('#closeResult').onclick = () => {
  $('#resultModal').hidden = true;
};
function hideCount(){
  if(countTimer){clearTimeout(countTimer);countTimer=null}
  const e=document.getElementById('countdown');
  if(e){e.classList.remove('show');e.textContent=''}
}
function startPlay() {
  let rounds = Number.parseInt($('#rounds').value, 10);

  if (!Number.isFinite(rounds)) rounds = 2;

  sessionRounds = Math.max(1, Math.min(20, rounds));
  $('#rounds').value = sessionRounds;

  playing = true;
  sessionFinished = false;
  good = bad = 0;
  score();

  bassPrev = null;
  bassLine = [];

  jumpToBar(startBar);

  const totalBeats = prog().reduce(
    (sum, chord) => sum + chord.len,
    0
  );

  sessionEndBeat = beat + totalBeats * sessionRounds;

  sched();
  timer = setInterval(sched, 25);

  $('#start').textContent = '■ หยุด';
}
function countdownThenStart(n){
  const e=countEl();
  $('#start').textContent='✕ ยกเลิก';
  const step=k=>{
    if(k===0){hideCount();startPlay();return}
    e.innerHTML='<span>'+k+'</span>';   // สร้าง span ใหม่ทุกเลข เพื่อให้แอนิเมชันเล่นซ้ำ
    e.classList.add('show');
    countTimer=setTimeout(()=>step(k-1),1000);
  };
  step(n);
}

$('#start').onclick=()=>{
  audio();                                   // ปลดล็อกเสียงตอนกดปุ่ม (ก่อนนับถอยหลัง)
  if(countTimer){                            // กดซ้ำระหว่างนับ = ยกเลิก
    hideCount();
    $('#start').textContent='▶ เริ่มฝึก';
    return;
  }
  if(!playing){
    countdownThenStart(3);
  } else {
    playing=false;
    clearInterval(timer);
    stopDrumSound();
    cutPiano();
    cur=-1;
    $('#start').textContent='▶ เริ่มฝึก';
    render();
  }
};

function lickBase(c){return 55+md(c.r-55,12)}
function lickOf(c){
  if(!adv&&c.patsInfo)return c.patsInfo[lk[c.q]%c.patsInfo.length].lick;
  return c.licks[lk[c.q]%c.licks.length];
}

function render(){
  const P=prog(),i=shown(),c=P[i],nx=P[(i+1)%P.length];
  $('#prog').innerHTML=P.map((x,j)=>`<div class="ch ${playing&&j===cur?'cur':(!playing&&j===startBar?'sel-only':'')}" data-j="${j}">${x.n}<small>${FL[x.r]+' '+x.mode} · ${x.len} จังหวะ</small></div>`).join('');
  
  $('#prog').querySelectorAll('.ch').forEach(el=>{
    el.onclick=()=>{
      const j = +el.dataset.j;
      jumpToBar(j);
      render();
    };
  });

  $('#sugName').textContent=c.n;
  const g3=nm(c.r+c.s[1]),g7=nm(c.r+c.s[3]),nx3=nm(nx.r+nx.s[1]);
  const TN=adv?({'7':[2,9],alt:[1,3,6,8],maj7:[6],m7:[2,5,9],m7b5:[2,5],aug:[2,6],dim7:[1,4,7,10]})[c.q]||[]:[];
  $('#guide').innerHTML=`<span class="chip g">3rd: ${g3}</span><span class="chip g">7th: ${g7}</span>`+TN.map(x=>`<span class="chip a">${deg(x,c.q)}: ${nm(c.r+x)}</span>`).join('');
  
  const lick=lickOf(c),base=lickBase(c);

  // =========================================================
  // เพิ่มเฉพาะส่วนนี้: ตรวจจับและเติม class "g" เพื่อไฮไลท์โน้ตที่เป็น Chord Tone เป็นสีเหลือง
  // =========================================================
  $('#lick').innerHTML=lick.map(x=>{
    if(x===null) return '<span class="chip">·</span>';
    const notePitch = (base + x) % 12;
    const chordPitches = c.s.map(tone => (c.r + tone) % 12);
    const isChordTone = chordPitches.includes(notePitch);
    return `<span class="chip ${isChordTone ? 'g' : ''}">${nm(base+x)}</span>`;
  }).join('');

  const tips={alt:`เล่นสเกล ${nm(c.r)} ${c.mode} · ${g3} กับ ${g7} คือโน้ตหลัก ส่วน b9 #9 #11 b13 คือโน้ตสร้างความตึงเครียดที่ควรคลายไปคอร์ดถัดไป`,
    m7b5:`เล่นสเกล ${nm(c.r)} ${c.mode} เน้น ${g3} กับ ${g7} · ${nm(c.r+6)} (b5) คือโน้ตสำคัญของคอร์ดนี้`,
    m7:`เล่นสเกล ${nm(c.r)} ${c.mode} เน้น ${g3} กับ ${g7} เวลาจบประโยค`,
    '7':`เล่นสเกล ${nm(c.r)} ${c.mode} · ${g3} คือโน้ตที่บอกว่าเป็นคอร์ด V จบที่ ${g7} ได้สวย`,
    maj7:`เล่นสเกล ${nm(c.r)} ${c.mode} เน้น ${g3} กับ ${g7} เลี่ยงหยุดนานบนโน้ตที่ 4 (${nm(c.r+5)})`,
    aug:`เล่นสเกล Whole Tone บนโน้ต ${nm(c.r)} · เน้น ${nm(c.r+8)} (#5) เพื่อสร้างสีสันตึงเครียดของคอร์ด Augmented`,
    dim7:`เล่นสเกล Diminished (Half-Whole) บนโน้ต ${nm(c.r)} · สเกลนี้มีสมมาตรสลับครึ่งเสียง-เต็มเสียง`};
  const ax=adv?({m7b5:' · ขั้นสูง: Locrian ♮2 ได้ 9 แทน b9 ฟังนุ่มกว่า Locrian','7':' · ขั้นสูง: ใช้ 9 และ 13 ได้อิสระ ถ้าอยากเล่นโน้ตตึงเครียด (b9 #9 #11 b13) ให้พิมพ์คอร์ดเป็น '+nm(c.r-key)+'7alt',maj7:' · ขั้นสูง: Lydian ใช้ #11 เป็นสีสัน',m7:' · ขั้นสูง: ใช้ 9, 11, 13 ได้อิสระ',aug:' · ขั้นสูง: สเกล Whole Tone ให้ความรู้สึกไม่สิ้นสุด ไม่มีศูนย์กลางแน่นอน',dim7:' · ขั้นสูง: Diminished scale สามารถขยับทีละ minor 3rd (3 ครึ่งเสียง) ได้เรื่อยๆ'})[c.q]||'':'';
  $('#tip').textContent=(tips[c.q]||`เล่นสเกล ${nm(c.r)} ${c.mode}`)+ax+` · อยากเชื่อมไปคอร์ดถัดไป (${nx.n}) ให้ลงโน้ต ${nx3}`+(!adv?` · เล่นรูปแบบ ${patName(c)} แล้วต่อด้วยแนวทางเดินโน้ตเข้าหาเป้าหมายคอร์ดถัดไป`:'');
  Object.values(keys).forEach(k=>k.classList.remove('sug'));
  lick.forEach(x=>x!==null&&keys[base+x]&&keys[base+x].classList.add('sug'));
  
  if (!showIdeas) {
    $('#patList').innerHTML = '';
  } else {
    const curIdx = lk[c.q] % nLicks(c);
    if (adv) {
      const L = c.licks[curIdx];
      $('#patList').innerHTML = `<button class="sm pat on" data-j="${curIdx}">Bebop Line ${curIdx + 1} · ${L.map(x=>x===null?'·':nm(base+x)).join(' ')}</button>`;
    } else {
      const L = c.cells[curIdx];
      const pInfo = c.patsInfo ? c.patsInfo[curIdx] : null;
      const nameLabel = pInfo ? pInfo.name : 'Pattern ' + (curIdx + 1);
      $('#patList').innerHTML = `<button class="sm pat on" data-j="${curIdx}">${nameLabel} · ${L.map(x=>nm(base+x)).join(' ')}</button>`;
    }
  }
  
  $('#patList').querySelectorAll('button').forEach(b=>b.onclick=()=>{lk[c.q]=+b.dataset.j;render();$('#hear').click()});
  refreshHeld();
}

$('#dice').onclick=()=>{
  showIdeas = true;
  const c=prog()[shown()];
  lk[c.q]=(lk[c.q]+1)%nLicks(c);
  render();
};

$('#hear').onclick=()=>{
  audio();const c=prog()[shown()],base=lickBase(c),d=60/bpm,t0=ac.currentTime+0.05;
  const L=lickOf(c);playLick(L.length===4?L.concat(L):L,base,t0,d);
};

function status(n){
  const c=prog()[shown()],x=md(n-c.r,12);
  if(c.s.includes(x))return'chord';
  if(c.sc.includes(x))return[1,3,6,8].includes(x)?'alt':'scale';
  if(adv&&OKU[c.q]&&OKU[c.q].includes(x))return'alt';
  return'out';
}
function deg(x,q){const D=q==='dim7';return['1','b9','9',D?'b3':(q==='7'||q==='alt'||q==='aug')?'#9':'b3','3','11',q.startsWith('m7')||D?'b5':'#11','5',q==='aug'?'#5':q.startsWith('m7')?'b6':q==='maj7'?'#5':'b13',D?'bb7':'13','b7','7'][x]}
const OK={
  '7':{Mixolydian:[0,2,4,5,7,9,10],'Mixo b9 b13':[0,1,4,5,7,8,10],Altered:[0,1,3,4,6,8,10],'Lydian dom':[0,2,4,6,7,9,10],'Whole tone':[0,2,4,6,8,10],'Half-whole':[0,1,3,4,6,7,9,10]},
  m7:{Dorian:[0,2,3,5,7,9,10],Aeolian:[0,2,3,5,7,8,10]},
  maj7:{Ionian:[0,2,4,5,7,9,11],Lydian:[0,2,4,6,7,9,11]},
  m7b5:{Locrian:[0,1,3,5,6,8,10],'Locrian ♮2':[0,2,3,5,6,8,10]},
  aug:{'Whole tone':[0,2,4,6,8,10]},
  dim7:{'Diminished (HW)':[0,1,3,4,6,7,9,10]}
};
OK.alt=OK['7'];
const OKU=Object.fromEntries(Object.entries(OK).map(([q,o])=>[q,[...new Set(Object.values(o).flat())]]));
const hist=[],barNotes=new Set();let lastT=0;
const pulse=()=>60/bpm/(tsD===8?2:1);
function fit(c){
  if(!adv||!OK[c.q]){$('#fitMsg').textContent='';return}
  const ok=Object.entries(OK[c.q]).filter(([,sc])=>[...barNotes].every(x=>sc.includes(x))).map(([k])=>k);
  $('#fitMsg').textContent=ok.length?'เข้ากับสเกล: '+ok.join(', '):'โน้ตในห้องนี้ชนกัน ไม่มีสเกลที่รองรับทั้งหมด';
}
function trackNote(n){
  const now=performance.now()/1000,c=prog()[shown()],s=status(n);
  if(now-lastT>3)barNotes.clear();
  lastT=now;
  hist.push({n,t:now,c,pl:playing,st:s==='out'?'pend':s});
  if(hist.length>64)hist.splice(0,hist.length-32);
  if(s!=='out'){barNotes.add(md(n-c.r,12));fit(c)}
  settle();setTimeout(settle,pulse()*1000+40);
}
function settle(){
  const now=performance.now()/1000,w=pulse()*1.05;
  const tgt=y=>y.c.s.includes(md(y.n-y.c.r,12));
  hist.forEach((x,i)=>{
    if(x.st!=='pend')return;
    const a=hist[i+1],b=hist[i+2],p=hist[i-1];let r=null;
    if(!a){if(now-x.t>w)r='out';else return}
    else if(a.t-x.t>w)r='out';
    else if(tgt(a)&&Math.abs(a.n-x.n)===1)
      r=p&&x.t-p.t<=w&&Math.abs(p.n-a.n)<=2&&Math.sign(p.n-a.n)!==Math.sign(x.n-a.n)?'enclosure':'approach';
    else if(a.st==='pend'){
      if(!b){if(now-a.t>w)r='out';else return}
      else r=b.t-a.t<=w&&tgt(b)&&Math.abs(a.n-x.n)===1&&Math.abs(b.n-a.n)===1?'approach':'out';
    }else r='out';
    x.st=r;
    if(x.pl){r==='out'?bad++:good++;score()}
    const k=keys[x.n];
    if(k&&held.has(x.n)){k.classList.remove('pend');k.classList.add(r==='out'?'out':'enc')}
    $('#noteMsg').textContent=r==='out'?'':(r==='enclosure'?'Enclosure ✓':'Approach note ✓');
  });
}
function setKey(n){
  const k=keys[n];if(!k)return;
  const c=prog()[shown()];
  k.classList.remove('chord','scale','alt','out');
  const s=status(n);k.classList.remove('pend','enc');k.classList.add(s==='out'?'pend':s);k.textContent=deg(md(n-c.r,12),c.q);
}
function refreshHeld(){held.forEach(setKey);show()}
function noteOn(n){
  if(held.has(n))return;held.add(n);
  tone(n,audio().currentTime,0.9,0.12,'sawtooth');
  setKey(n);trackNote(n);
  if(playing&&status(n)!=='out'){good++;score()}
  show();
}
function noteOff(n){
  if(!held.has(n))return;held.delete(n);
  const k=keys[n];if(k){k.classList.remove('chord','scale','alt','out','pend','enc');k.textContent=''}
  show();
}
const CH={maj7:[0,4,7,11],m7:[0,3,7,10],'7':[0,4,7,10],m7b5:[0,3,6,10],aug:[0,4,8,10],dim7:[0,3,6,9]};
function detect(){
  const pcs=[...new Set([...held].map(n=>n%12))];
  if(pcs.length<3)return'—';
  for(const r of pcs){
    const rel=pcs.map(p=>md(p-r,12)).sort((a,b)=>a-b);
    for(const[nmq,sh]of Object.entries(CH))
      if(sh.length===rel.length&&sh.every((v,i)=>v===rel[i]))return FL[r]+nmq;
  }
  return'?';
}
function show(){
  $('#detected').textContent=detect();
  const c=prog()[shown()],ns=[...held].sort((a,b)=>a-b);
  const hdr=`<div class="lab" style="width:100%">เทียบกับ ${c.n} · สเกล ${nm(c.r)} ${c.mode}</div>`;
  const T={chord:'โน้ตคอร์ด',alt:'เทนชัน',scale:'โน้ตสเกล',out:'นอกสเกล'};
  $('#heldInfo').innerHTML=hdr+(ns.length?ns.map(n=>{const x=md(n-c.r,12),i=c.sc.indexOf(x),s=status(n);
    return`<span class="chip t-${s}"><b>${nm(n)}</b> ${deg(x,c.q)}${i>=0?' · ตัวที่ '+(i+1)+' ของสเกล':''} · ${T[s]}</span>`}).join(''):'<span class="lab">กดโน้ตเพื่อดูว่าเป็นตัวที่เท่าไหร่ของสเกล</span>');
}
function score(){
  $('#good').textContent=good;$('#badc').textContent=bad;
  $('#pct').textContent=good+bad?Math.round(good/(good+bad)*100)+'%':'–';
}

const KM={a:60,w:61,s:62,e:63,d:64,f:65,t:66,g:67,y:68,h:69,u:70,j:71,k:72};
addEventListener('keydown',e=>{if(e.repeat||e.ctrlKey||e.metaKey||e.altKey||/SELECT|INPUT/.test(e.target.tagName))return;audio();const n=KM[e.key.toLowerCase()];if(n)noteOn(n)});
addEventListener('keyup',e=>{const n=KM[e.key.toLowerCase()];if(n)noteOff(n)});
addEventListener('blur',()=>[...held].forEach(noteOff));

(async()=>{
  try{
    if(!navigator.requestMIDIAccess)throw 0;
    const m=await navigator.requestMIDIAccess();
    const bind=()=>{m.inputs.forEach(i=>i.onmidimessage=({data:[s,n,v]})=>{
      audio();
      const c=s&0xf0;if(c===0x90&&v>0)noteOn(n);else if(c===0x80||c===0x90)noteOff(n)});
      const cnt=[...m.inputs.values()].length,p=$('#midiState');
      p.textContent=cnt?'MIDI: เชื่อมต่อแล้ว ('+cnt+')':'MIDI: ไม่พบอุปกรณ์';p.classList.toggle('on',!!cnt)};
    m.onstatechange=bind;bind();
  }catch(e){$('#midiState').textContent='MIDI: ไม่รองรับ (ใช้เปียโนบนจอแทน)'}
})();

render();

// ───────── BPM: พิมพ์เองได้ 50–300 (ปุ่ม − / + ครั้งละ 5) ─────────
const BPM_MIN=50, BPM_MAX=300;
const bpmInput=$('#bpmv');
function syncDrumRate(){
  if(playing&&activeDrumSource&&ac) activeDrumSource.playbackRate.setValueAtTime(bpm/120, ac.currentTime);
}
const setBpm=v=>{
  v=(v===''||v==null)?NaN:Math.round(+v);
  if(!Number.isFinite(v)) v=bpm;               // ช่องว่าง/ค่าเพี้ยน → คืนค่าเดิม
  bpm=Math.max(BPM_MIN,Math.min(BPM_MAX,v));
  bpmInput.value=bpm;
  syncDrumRate();
};
// ระหว่างพิมพ์: ถ้าเลขอยู่ในช่วงแล้ว ให้เปลี่ยนความเร็วทันที (ยังไม่ดัดค่าที่พิมพ์ค้างอยู่)
bpmInput.addEventListener('input',()=>{
  const v=bpmInput.valueAsNumber;
  if(Number.isFinite(v)&&v>=BPM_MIN&&v<=BPM_MAX){bpm=Math.round(v);syncDrumRate()}
});
bpmInput.addEventListener('change',()=>setBpm(bpmInput.value));   // ออกจากช่อง → ปรับเข้าช่วง 50–300
bpmInput.addEventListener('keydown',e=>{if(e.key==='Enter'){setBpm(bpmInput.value);bpmInput.blur()}});
bpmInput.addEventListener('focus',()=>bpmInput.select());
$('#bpmDown').onclick=()=>setBpm(bpm-5);
$('#bpmUp').onclick=()=>setBpm(bpm+5);
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{
  const s=$('#mode');s.value=b.dataset.m;s.dispatchEvent(new Event('change'));
  document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('on',x===b));
});