var session5ConductorControls = (JSON.parse(JSON.stringify(window.tweak.conductor))); 
session5ConductorControls[0].x.value = 58; // ch1 vol
session5ConductorControls[1].x.value = 30;
session5ConductorControls[2].x.value = 22;
session5ConductorControls[3].x.value = 16;
session5ConductorControls[4].x.value = 25;
session5ConductorControls[5].x.value = 30;
session5ConductorControls[6].x.value = 16; // ch7 vol - 100

session5ConductorControls[7].x.value = 140; // tempo

session5ConductorControls[10].x.value = 0; // ch1 bar offest
session5ConductorControls[11].x.value = 8;
        session5ConductorControls[12].x.value = 8;
session5ConductorControls[13].x.value = 18;
session5ConductorControls[14].x.value = 26;
session5ConductorControls[15].x.value = 38;
session5ConductorControls[16].x.value = 40; //48

session5ConductorControls[17].x.value = 56; // ch8 (conductor) bar offset - 100
session5ConductorControls[18].x.value = 48; // general kickout bars // 64

//console.log('s5conductCtrl: ', session5ConductorControls); // smpPrgChangeSavePattern



var patternSeqOff = (JSON.parse(JSON.stringify(aikeWebsynthControls))); 
//patternSeqOff[6].x.value = 0; // 0: patternSeq off - old: patternSeqOff[5]

//console.log('patternSeqOff: ', patternSeqOff);

window.insConf5 = [ 

{ sessionName: 'NDW2016', // Ep #6 Electropixel #6
  channelName: 'Ch1 Bass guitar',  
  trackSet: 0, 

  defaultPattern: 1, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"TaLaLi Bassline A (synkoped)","classs":"channel","id":"81c22550-6675-11e6-b5e9-51d55022d761","tracks":[[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0]]},
    {"name":"TaLaLi Bassline B (continuous)","classs":"channel","id":"128a5ad0-6676-11e6-b509-c753c06f4910","tracks":[[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0]]},
    {"name":"calme ta basse","classs":"channel", "id":"a61d9d90-667e-11e6-a6fa-97a17043872f","tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0]]}
    //{"name":"4/4","classs":"channel","id":"85d646b0-71e9-11e6-ae6b-cbeced753752","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]} 
  ],  

  conf: [{ 
    type: 'samples', 
    instrumentName: 'Sampler', 
    name: 'c1-c2 (3 notes) - Bass guitar', 
    kitNumber: 0, 
    color: 'rgba(0, 171, 157, 1)',
    tracks: [{ name: 'C2', sampleUrl: 'Basse/C2.wav'}, /*{ name: 'B1', sampleUrl: 'Basse/B1.wav'}, { name: 'A1', sampleUrl: 'Basse/A1.wav'}, */ { name: 'G1', sampleUrl: 'Basse/G1.wav'}, /*{ name: 'F1', sampleUrl: 'Basse/F1.wav'}, { name: 'E1', sampleUrl: 'Basse/E1.wav'}, { name: 'D1', sampleUrl: 'Basse/D1.wav'}, */ { name: 'C1', sampleUrl: 'Basse/C1.wav'} ], 
    //tracks: [{ name: 'C4', sampleUrl: 'Guitar/C4.wav'},/* { name: 'B3', sampleUrl: 'Guitar/B3.wav'}, { name: 'A3', sampleUrl: 'Guitar/A3.wav'},*/ { name: 'G3', sampleUrl: 'Guitar/G3.wav'},/* { name: 'F3', sampleUrl: 'Guitar/F3.wav'}, { name: 'E3', sampleUrl: 'Guitar/E3.wav'}, { name: 'D3', sampleUrl: 'Guitar/D3.wav'},*/ { name: 'C3', sampleUrl: 'Guitar/C3.wav'} ],
    controls: smpPrgChangeSavePattern
  }] 
}, 



{ channelName: 'Ch8 Conductor',
  trackSet: 0, 
  conf: [ { 
    type: 'control', 
    instrumentName: 'Conductor', 
    name: 'Conductor Ctrl 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: session5ConductorControls
  }] 
}, 



{ channelName: 'Ch2 Synth bass', 
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [
    {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"},
    {"name":"Baonlle","classs":"channel","controls":{"1":10,"2":"2","3":46,"4":"1","5":76,"6":0,"7":10,"8":11,"9":16,"10":40,"11":68,"12":26,"13":25,"14":51,"15":20,"16":12},"id":"4f802750-667e-11e6-89c6-9b6aaf4bf5b7"},
    {"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}}        
    /*{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"double osc bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d0000","controls":{1:40, 2:1, 3:100, 4:0, 5:0, 6:0, 7:15, 8:0, 9:0, 10:66, 11:20, 12:35, 13:0, 14:30, 15:80, 16:0}},*/
  ],

  defaultPattern: 1, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"tri_note_mellow","classs":"channel","id":"8577ef70-6677-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
    {"name":"Pois sauteurs","classs":"channel",  "id":"70c15650-667e-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
  ], 

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(0, 161, 0, 1)',
    name: 'c1 > c2', 
    kitNumber: 0,      
    tracks: window.draw.c1_c2_penta_minor,
    controls: aikeWebsynthControlsReduced           
  }] 
}, 



{ channelName: 'Ch3 Guitar/Piano/Drums',  
  trackSet: 0, 

  defaultPattern: 1, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"GuitarMellow","classs":"channel","id":"5d67c810-6678-11e6-afb2-e793ea1788a6","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0],[0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0]]},
    {"name":"jazzy piano","classs":"channel","id":"6c57d720-667d-11e6-afb2-e793ea1788a6","tracks":[[0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    //{"name":"4/4","classs":"channel","id":"85d646b0-71e9-11e6-ae6b-cbeced753752","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}  
  ],  

  conf: [
    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Guitar - c3-c4 (3 notes)', 
      kitNumber: 0, 
      color: 'rgba(149, 55, 166, 1)', //color: 'rgba(253, 206, 31, 0.75)', 'rgba(237, 49, 104, 0.9)',
      tracks: [{ name: 'C4', sampleUrl: 'Guitar/C4.wav'},/* { name: 'B3', sampleUrl: 'Guitar/B3.wav'}, { name: 'A3', sampleUrl: 'Guitar/A3.wav'},*/ { name: 'G3', sampleUrl: 'Guitar/G3.wav'},/* { name: 'F3', sampleUrl: 'Guitar/F3.wav'}, { name: 'E3', sampleUrl: 'Guitar/E3.wav'}, { name: 'D3', sampleUrl: 'Guitar/D3.wav'},*/ { name: 'C3', sampleUrl: 'Guitar/C3.wav'} ],
      controls: window.launch.sample_prg
    },

    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Piano - c4-c5 (3 notes)', 
      kitNumber: 1, 
      color: 'rgba(149, 55, 166, 0.5)', //color: 'rgba(253, 206, 31, 0.75)',
      tracks: [{ name: 'C5', sampleUrl: 'Piano/C5.wav'},/* { name: 'B4', sampleUrl: 'Piano/B4.wav'}, { name: 'A4', sampleUrl: 'Piano/A4.wav'},*/ { name: 'G4', sampleUrl: 'Piano/G4.wav'},/* { name: 'F4', sampleUrl: 'Piano/F4.wav'}, { name: 'E4', sampleUrl: 'Piano/E4.wav'}, { name: 'D4', sampleUrl: 'Piano/D4.wav'},*/ { name: 'C4', sampleUrl: 'Piano/C4.wav'} ], 
      controls: window.launch.sample_prg
    },

    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Drumkit 01', 
      kitNumber: 2, 
      color: 'rgba(149, 55, 166, 0.5)', 
      tracks: [{name: 'Snare', sampleUrl: 'LINN/snare.wav'}, {name: 'Hihat', sampleUrl: 'breakbeat13/hihat.wav'}, {name: 'Kick', sampleUrl: 'Kit8/kick.wav'} ], 
      controls: window.launch.sample_prg
    }    

        
  ] 
}, 



{ channelName: 'Ch4 Synth (c2>c3)', // MidFreq
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [    
    {"name":"DyaWowoySND","classs":"channel","controls":{"1":53,"2":"0","3":30,"4":"1","5":93,"6":11,"7":8,"8":34,"9":51,"10":59,"11":75,"12":39,"13":78,"14":25,"15":50,"16":63},"id":"79398eb0-6679-11e6-aa2f-73993aa5fd3f"},
    {"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}}        
  ],

  defaultPattern: 1, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"DyaWowoyMellow","classs":"channel","id":"a9be3630-6679-11e6-aa2f-73993aa5fd3f","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
  ], 

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(253, 118, 8, 1)',
    name: 'c2 > c3', 
    kitNumber: 0,      
    tracks: window.draw.c2_c3_penta_minor,
    controls: aikeWebsynthControlsReduced           
  }] 
}, 



{ channelName: 'Ch5 Hang/Flute',  
  trackSet: 0, 

  defaultPattern: 1, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}, 
    {"name":"pontec","classs":"channel","id":"63753dd0-667a-11e6-82ff-f7a50cae174e","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0]]},
    {"name":"pontec 2","classs":"channel","id":"d41d0bb0-667c-11e6-82ff-f7a50cae174e","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]]}
  ],  

  conf: [
    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Hang - c4-c5 (3 notes)', 
      kitNumber: 0, 
      color: 'rgba(253, 206, 31, 1)', // 'rgba(226, 0, 6, 1)'
      tracks: [{ name: 'C5', sampleUrl: 'spacedrum/Chro13C5.mp3'},/* { name: 'B4', sampleUrl: 'spacedrum/Chro12B4.mp3'}, { name: 'A4', sampleUrl: 'spacedrum/Chro10A4.mp3'},*/ { name: 'G4', sampleUrl: 'spacedrum/Chro8G4.mp3'}, /*, { name: 'F4', sampleUrl: 'spacedrum/Chro6F4.mp3'}, { name: 'E4', sampleUrl: 'spacedrum/Chro5E4.mp3'}, { name: 'D4', sampleUrl: 'spacedrum/Chro3D4.mp3'},*/ { name: 'C4', sampleUrl: 'spacedrum/Chro1C4.mp3'} ], 
      controls: window.launch.sample_prg
    },

    {
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Flute - c4-c5 (3 notes)', 
      kitNumber: 1, 
      color: 'rgba(253, 206, 31, 0.65)', 
      tracks: [{ name: 'C5', sampleUrl: 'Flute/C5.wav'},/* { name: 'B4', sampleUrl: 'Flute/B4.wav'}, { name: 'A4', sampleUrl: 'Flute/A4.wav'},*/ { name: 'G4', sampleUrl: 'Flute/G4.wav'}, /*, { name: 'F4', sampleUrl: 'Flute/F4.wav'}, { name: 'E4', sampleUrl: 'Flute/E4.wav'}, { name: 'D4', sampleUrl: 'Flute/D4.wav'},*/ { name: 'C4', sampleUrl: 'Flute/C4.wav'} ],
      controls: window.launch.sample_prg
    },

    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Drumkit 02', 
      kitNumber: 2, 
      color: 'rgba(253, 206, 31, 0.35)', 
      tracks: [{name: 'Snare', sampleUrl: 'CR78/snare.wav'}, {name: 'Hihat', sampleUrl: '12-TR-909/909 HHCL 1.wav'}, {name: 'Kick', sampleUrl: 'breakbeat13/kick.wav'} ], 
      controls: window.launch.sample_prg
    }       

  ] 
}, 



{ channelName: 'Ch6 Synth (c2>c4)', // HiFq Syn A
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [
    {"name":"square","type":"AikeWebsynth1","classs":"channel","id":"2fbddcv123cd7f89ff54f","controls":{1:9, 2:1, 3:35, 4:2, 5:27, 6:0, 7:66, 8:80, 9:0, 10:0, 11:40, 12:96, 13:0, 14:0, 15:30, 16:70,"992":1}}    
  ],

  defaultPattern: 0, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la ronde","classs":"channel","id":"180d4700-667c-11e6-82b9-0508ed9d1306","tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
    /*{"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}*/     
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ //{"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f"},      
      {"name":"la ronde","classs":"channel","id":"180d4700-667c-11e6-82b9-0508ed9d1306"},
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      //{"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f"} 
    ]
  ], 

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(226, 0, 6, 1)',
    name: 'c2 > c4', 
    kitNumber: 0,      
    tracks: window.draw.c2_c4_penta_minor,
    controls: patternSeqOff//aikeWebsynthControls         
  }] 
}, 

      

{ channelName: 'Ch7 Synth (c3>c5)', // Ch7 Highfreq Synth B  HiFq Syn B
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [
    //{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"le clownSOUND","type":"AikeWebsynth1","classs":"channel","id":"2fbddfd9fd9dvbvb2b2b","controls":{1:59, 2:1, 3:19, 4:2, 5:36, 6:0, 7:26, 8:45, 9:11, 10:7, 11:55, 12:68, 13:0, 14:20, 15:78, 16:13,"992":1}}    
  ],

  defaultPattern: 0, 
  patterns: [ // channel patterns  
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    /*{"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}*/     
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605"} ]
  ],   

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(237, 49, 104, 1)',
    name: 'c3 > c5', 
    kitNumber: 0,      
    tracks: window.draw.c3_c5_penta_minor,
    controls: patternSeqOff          
  }] 
}, 





];



















var sess99ConductorCtrls = (JSON.parse(JSON.stringify(window.tweak.conductor16a))); // window.tweak.conductor16a


sess99ConductorCtrls[17].x.value = 115; // start at 60 bpm
sess99ConductorCtrls[17].x.displayedRangeMax = 400;
sess99ConductorCtrls[17].x.autoValIncMode = 0;
sess99ConductorCtrls[21].x.value = 16;
sess99ConductorCtrls[22].x.value = 16;
/*
sess9ConductorCtrls[17].x.autoValIncTime = 4; // increment every 2 bars - 4
sess9ConductorCtrls[17].x.autoValIncBy = 4; // by 8 bpms */




//console.log('ses5: ', session5ConductorControls);


window.insConf99 = [ 


/*{ 
  sessionName: 'Test (99)',

  channelName: 'Ch1 Drum Synth', 
  trackSet: 0, 

  conf: [
    { 
      type: 'synth',
      instrumentName: 'JoeSullivanDrumSynth', 
      instrumentUrl: 'http://tiny-808.com/',
      color: 'rgba(0, 81, 0, 1)',
      name: 'c1 > c2', 
      kitNumber: 0,      
      tracks: window.draw.drumsynth_01,
      inputMode: 'grid', // 'keyboard', 'grid'
      controls: patternSeqOff //aikeWebsynthControls           
    }

  ] 
}, */



//*



{ 
  sessionName: 'Test (99)',

  channelName: 'Ch1 Poly Synth', 
  trackSet: 0, 

  /*defaultPreset: 0, 
  presets: [
    {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"}, // "992":0 = patternSeq disabled
    {"name":"Baonlle","classs":"channel","controls":{"1":10,"2":"2","3":46,"4":"1","5":76,"6":0,"7":10,"8":11,"9":16,"10":40,"11":68,"12":26,"13":25,"14":51,"15":20,"16":12},"id":"4f802750-667e-11e6-89c6-9b6aaf4bf5b7"}
  ],

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"tri_note_mellow","classs":"channel","id":"8577ef70-6677-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
    {"name":"Pois sauteurs","classs":"channel","id":"70c15650-667e-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605"} ]
  ],   */ 

  conf: [
    { 
      type: 'synth',
      instrumentName: 'CWilsoWAMidiSynth', 
      instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
      color: 'rgba(0, 161, 0, 1)',
      name: 'c1 > c2', 
      kitNumber: 0,      
      tracks: window.draw.c4_c5_penta_minorCWilso,
      inputMode: 'grid', // 'keyboard', 'grid'
      controls: CWilsoWAMidiSynthControls //aikeWebsynthControls           
    }

  ] 
}, 

// */



/*
{ 
  //sessionName: 'Test (99)',

  channelName: 'ChX Mono Synth (c1>c7)', // 
  trackSet: 0, 

/*
  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
  ],  


  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
  ],   
/

  defaultPattern: 1, 
  patterns: [ // channel patterns
    //{"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    // ? reset needs al lots of tracks to erase/rewrite empty notes (vol:0) potentillat long tracked patterns !!!!
    {"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},     
    {"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}
  ],  

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f"},
      {"name":"bassline a", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f"} ]
  ], 









  defaultPreset: 0, 
  presets: [
    {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
  ],  







  /*









  // /  

  conf: [
    { 
      type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      instrumentUrl: 'http://aikelab.net/websynth/',
      color: 'rgba(0, 161, 0, 1)',
      name: 'c1 > c7', 
      kitNumber: 0,      
      tracks: window.draw.c1_c7_majorSharp,
      controls: window.launch.editor_controls // aikeWebsynthControlsReduced // patternSeqOff //aikeWebsynthControls           
    },
    /*{ 
      type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      instrumentUrl: 'http://aikelab.net/websynth/',
      color: 'rgba(226, 0, 6, 1)',
      name: 'c2 > c4', 
      kitNumber: 1,      
      tracks: window.draw.c2_c4_penta_minor,
      controls: patternSeqOff //aikeWebsynthControlsReduced // patternSeqOff         
    } /

  ] 
}, 


*/





{ channelName: 'Ch8 Conductor',
  trackSet: 0, 

  patternSeq: [     
  ],

  parts: [ 
    {"name":"16steps303-nashlo","id":"266ef3c0-73f8-11e9-96a2-0b938182bf6e","payload":[{"channelId":"0","presetId":"61cd3070-7007-11e9-88b3-656f5bc75150","kitId":0,"ptnSeqList":[{"name":"16 steps filled bassline","id":"0f0170f0-702e-11e9-8409-e7f8d83afdbd"}]},{"channelId":"2","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},{"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605"}]}]}
   ,{"name":"16steps02","id":"4b4b1660-7501-11e9-8861-a3850ebe992c","payload":[{"channelId":"0","presetId":"f1a40110-7007-11e9-9b10-45d94a976096","kitId":0,"ptnSeqList":[{"name":"le cheval","id":"3dda8b50-702e-11e9-8409-e7f8d83afdbd"}]},{"channelId":"2","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"tri_note_mellow","id":"8577ef70-6677-11e6-89c6-9b6aaf4bf5b7"}]}]}    
  ], 


  defaultSong: 0, 
  songs: [ 
    {"name":"nashlosng-ii","id":"4311fe40-8209-11e9-b4d3-d568b0070367","payload":[{"name":"16steps303-nashlo","id":"266ef3c0-73f8-11e9-96a2-0b938182bf6e","barloop":"8","barelapsed":0},{"name":"16steps02","id":"4b4b1660-7501-11e9-8861-a3850ebe992c","barloop":"4","barelapsed":1}]}
   ,{"name":"nashlosng-3","id":"4311fe40-8209-11e9-b4d3-d568b0070367","payload":[{"name":"16steps303-nashlo","id":"266ef3c0-73f8-11e9-96a2-0b938182bf6e","barloop":"8","barelapsed":0},{"name":"16steps02","id":"4b4b1660-7501-11e9-8861-a3850ebe992c","barloop":"4","barelapsed":1}]}
  ], 




  conf: [ { 
    type: 'control', 
    instrumentName: 'Conductor', 
    name: 'Conductor Ctrl 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: sess99ConductorCtrls //window.tweak.conductor16a //session5ConductorControls
  }] 
},










/*

{ 
  sessionName: 'Test (99)',

  channelName: 'Ch2 Poly Synth', 
  trackSet: 0, 

  //*
   // beware fol. presets might crash uncalibrated poly-synth
  defaultPreset: 0, 
  presets: [
    {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    //{"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"}, // "992":0 = patternSeq disabled
    //{"name":"Baonlle","classs":"channel","controls":{"1":10,"2":"2","3":46,"4":"1","5":76,"6":0,"7":10,"8":11,"9":16,"10":40,"11":68,"12":26,"13":25,"14":51,"15":20,"16":12},"id":"4f802750-667e-11e6-89c6-9b6aaf4bf5b7"}
  ], 

  ///

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"tri_note_mellow","classs":"channel","id":"8577ef70-6677-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
    {"name":"Pois sauteurs","classs":"channel","id":"70c15650-667e-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605"} ]
  ],    

  conf: [

    { 
      type: 'synth',
      instrumentName: 'CWilsoWAMidiSynth', 
      instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
      color: 'rgba(0, 161, 0, 1)',
      name: 'grid (c4 > c5)', 
      kitNumber: 0,      
      tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
      inputMode: 'grid', // 'keyboard', 'grid'
      controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
    },  
/*
    { 
      type: 'synth',
      instrumentName: 'CWilsoWAMidiSynth', 
      instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
      color: 'rgba(0, 161, 0, 1)',
      name: 'c1 > c2', 
      kitNumber: 1,      
      tracks: window.draw.c4_c5_penta_minorCWilso,
      inputMode: 'keyboard', // 'keyboard', 'grid'
      controls: CWilsoWAMidiSynthControls //aikeWebsynthControls           
    },
/




  ] 
}, 

// */


/*


{ sessionName: 'Ep #6', // Electropixel #6
  channelName: 'Ch3 Bass guitar',  // Ch2 Bass guitar
  trackSet: 0, 

  defaultPattern: 0,  // 4
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"TaLaLi Bassline A (synkoped)","classs":"channel","id":"81c22550-6675-11e6-b5e9-51d55022d761","tracks":[[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0]]},
    {"name":"TaLaLi Bassline B (continuous)","classs":"channel","id":"128a5ad0-6676-11e6-b509-c753c06f4910","tracks":[[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0]]},
    {"name":"calme ta basse","classs":"channel", "id":"a61d9d90-667e-11e6-a6fa-97a17043872f","tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0]]},
    {"name":"4/4","classs":"channel","id":"85d646b0-71e9-11e6-ae6b-cbeced753752","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]} 
  ],  

  conf: [{ 
    type: 'samples', 
    instrumentName: 'Sampler', 
    name: 'c1-c2 (3 notes) - Bass guitar', 
    kitNumber: 0, 
    color: 'rgba(0, 171, 157, 1)',
    //tracks: [{ name: 'C2', sampleUrl: 'Basse/C2.wav'}, /*{ name: 'B1', sampleUrl: 'Basse/B1.wav'}, { name: 'A1', sampleUrl: 'Basse/A1.wav'}, / { name: 'G1', sampleUrl: 'Basse/G1.wav'}, /*{ name: 'F1', sampleUrl: 'Basse/F1.wav'}, { name: 'E1', sampleUrl: 'Basse/E1.wav'}, { name: 'D1', sampleUrl: 'Basse/D1.wav'}, / { name: 'C1', sampleUrl: 'Basse/C1.wav'} ], 
    tracks: [{ name: 'C4', sampleUrl: 'Guitar/C4.wav'},/* { name: 'B3', sampleUrl: 'Guitar/B3.wav'}, { name: 'A3', sampleUrl: 'Guitar/A3.wav'},/ { name: 'G3', sampleUrl: 'Guitar/G3.wav'},/* { name: 'F3', sampleUrl: 'Guitar/F3.wav'}, { name: 'E3', sampleUrl: 'Guitar/E3.wav'}, { name: 'D3', sampleUrl: 'Guitar/D3.wav'},/ { name: 'C3', sampleUrl: 'Guitar/C3.wav'} ],
    controls: smpPrgChangeSavePattern
  }] 
}, 

*/












/*
{ 
  //sessionName: 'Test (99)',

  channelName: 'Ch4 Synth bass', // Ch3 Synth bass
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [
    {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"}, // "992":0 = patternSeq disabled
    {"name":"Baonlle","classs":"channel","controls":{"1":10,"2":"2","3":46,"4":"1","5":76,"6":0,"7":10,"8":11,"9":16,"10":40,"11":68,"12":26,"13":25,"14":51,"15":20,"16":12},"id":"4f802750-667e-11e6-89c6-9b6aaf4bf5b7"}
    /*{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"double osc bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d0000","controls":{1:40, 2:1, 3:100, 4:0, 5:0, 6:0, 7:15, 8:0, 9:0, 10:66, 11:20, 12:35, 13:0, 14:30, 15:80, 16:0}},/
  ],

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"tri_note_mellow","classs":"channel","id":"8577ef70-6677-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
    {"name":"Pois sauteurs","classs":"channel","id":"70c15650-667e-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      /*{"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605"}/ ]
  ],    

  conf: [
    { 
      type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      instrumentUrl: 'http://aikelab.net/websynth/',
      color: 'rgba(0, 161, 0, 1)',
      name: 'c1 > c2', 
      kitNumber: 0,      
      tracks: window.draw.c1_c2_penta_minor,
      controls: patternSeqOff //aikeWebsynthControls - window.launch.editor_controls //          
    },
    { 
      type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      instrumentUrl: 'http://aikelab.net/websynth/',
      color: 'rgba(226, 0, 6, 1)',
      name: 'c2 > c4', 
      kitNumber: 1,      
      tracks: window.draw.c2_c4_penta_minor,
      controls: patternSeqOff //aikeWebsynthControlsReduced // patternSeqOff // window.launch.editor_controls //          
    }

  ] 
}, 

*/







];

















var patternSeqOff2 = (JSON.parse(JSON.stringify(window.launch.editor_controls_CWilso_Polysynth)));

patternSeqOff2[2].x.value = 0;

//console.log(patternSeqOff2);


window.insConf11 = [ 

//*
  // for some odd reason we need to laod a monosynth as first instrument to avoid aikewebsynth bugs!!!!
  { 

    sessionName: 'Song editor (Giorgio Moroder - The Chase)',
    channelName: 'Player 1: Mono Synth', // - Ch 1
    trackSet: 0, 

    //*
    defaultPattern: 0, 
    patterns: [ // channel patterns
      //{"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
      // ? reset needs al lots of tracks to erase/rewrite empty notes (vol:0) potentillat long tracked patterns !!!!
      {"name":"reset",    "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}     
      ,{"name":"bar 1 - bassline - The Chase","classs":"channel","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      ,{"name":"bar 2 - bassline - The Chase","classs":"channel","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ],  

    //*
    defaultPatternSeq: 0, 
    patternSeq: [         
      [ 
        {"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 

    //*/

    /*patternSeq: [     
    ],  */  


    defaultPreset: 0, 
    presets: [
      {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
,{"name":"chase-bass-06","classs":"channel","controls":{"1":100,"2":"0","3":25,"4":"1","5":75,"6":0,"7":30,"8":96,"9":3,"10":40,"11":59,"12":30,"13":0,"14":96,"15":20,"16":41},"id":"ceb3a300-8d75-11e9-afd1-0b4a2ef1fe56"}
,{"name":"chase-bass05","classs":"channel","controls":{"1":100,"2":"0","3":25,"4":"1","5":75,"6":0,"7":16,"8":77,"9":3,"10":13,"11":75,"12":59,"13":8,"14":1,"15":11,"16":9},"id":"0e9d9850-8d75-11e9-afd1-0b4a2ef1fe56"}
,{"name":"chase-bass03-flt-eg-amt","classs":"channel","controls":{"1":100,"2":"0","3":25,"4":"1","5":75,"6":0,"7":30,"8":21,"9":0,"10":38,"11":63,"12":30,"13":0,"14":4,"15":0,"16":96},"id":"4b618af0-8d73-11e9-afd1-0b4a2ef1fe56"}
,{"name":"chase-bass-04","classs":"channel","controls":{"1":100,"2":"0","3":25,"4":"1","5":75,"6":0,"7":20,"8":0,"9":0,"10":34,"11":70,"12":49,"13":3,"14":0,"15":17,"16":31},"id":"725a6400-8d74-11e9-afd1-0b4a2ef1fe56"}
,{"name":"chase-bass07","classs":"channel","controls":{"1":25,"2":"2","3":25,"4":"1","5":80,"6":0,"7":6,"8":46,"9":17,"10":41,"11":48,"12":37,"13":10,"14":9,"15":79,"16":0},"id":"4a093b00-8d80-11e9-8a7e-f7913b8bb3d6"}
,{"name":"chase-bass01","classs":"channel","controls":{"1":100,"2":"0","3":25,"4":"1","5":75,"6":0,"7":60,"8":45,"9":0,"10":30,"11":40,"12":30,"13":0,"14":30,"15":0,"16":0},"id":"3a18de80-8d71-11e9-ad04-4372cbbdd51f"}
,{"name":"chase-bass02","classs":"channel","controls":{"1":100,"2":"0","3":25,"4":"1","5":75,"6":0,"7":29,"8":80,"9":0,"10":40,"11":50,"12":30,"13":0,"14":30,"15":0,"16":0},"id":"742c01a0-8d72-11e9-afd1-0b4a2ef1fe56"}      
    ],  
    // /
    conf: [
      { 
        type: 'synth',
        instrumentName: 'AikeWebsynth1', 
        instrumentUrl: 'http://aikelab.net/websynth/',
        color: 'rgba(237, 49, 104, 1)', //: pink 'rgba(0, 161, 0, 1)', // : green
        name: 'c1 > c7', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharp,
        controls: window.launch.editor_controls // 
      },

    ] 
  }, 

//*/


/*
  { 
    sessionName: 'Song editor (Giorgio Moroder - The Chase)',

    channelName: 'Ch 3 Poly Synth', 
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
      /*{"name":"tri_note_mellow","classs":"channel","id":"8577ef70-6677-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
      {"name":"Pois sauteurs","classs":"channel","id":"70c15650-667e-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
      {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}/    
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      //*
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(0, 161, 0, 1)',
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  

      ///

  //*
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(0, 161, 0, 1)',
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },
  ///


    ] 
  }, 

*/


  { channelName: 'Player 5: Puppet Mastah', // Mixer/ 
    trackSet: 0, 

    patternSeq: [     
    ],

    

    parts: [ 
      //{"name":"reset (silence) part","id":"bae76ef0-879f-11e9-b706-5b8e5df90b7a","payload":[{"channelId":"0","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
     {"name":"01 kd + bl - The Chase","id":"44395410-8797-11e9-a47d-5d387651d28c","payload":[{"channelId":"0","presetId":"ceb3a300-8d75-11e9-afd1-0b4a2ef1fe56","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick","id":"81a98180-1887-11e6-8ebb-edf93ea0958c"}]},{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
     ,{"name":"01b kd + bl - The Chase","id":"44395410-8797-11e9-a47d-5d387651d282","payload":[{"channelId":"0","presetId":"4b618af0-8d73-11e9-afd1-0b4a2ef1fe56","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick","id":"81a98180-1887-11e6-8ebb-edf93ea0958c"}]},{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
     ,{"name":"01c kd + bl - The Chase","id":"44395410-8797-11e9-a47d-5d387651d283","payload":[{"channelId":"0","presetId":"4b618af0-8d73-11e9-afd1-0b4a2ef1fe56","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick","id":"81a98180-1887-11e6-8ebb-edf93ea0958c"}]},{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}     
     ,{"name":"02 sd + kd + bl - The Chase","id":"3a5d69d0-8798-11e9-a59f-9d1dbed917c5","payload":[{"channelId":"0","presetId":"4b618af0-8d73-11e9-afd1-0b4a2ef1fe56","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick + snare","id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2"}]},{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
     
     ,{"name":"02.5 sd + kd + bl + presynth - The Chase","id":"7b0e0fe0-87aa-11e9-8f48-b9e4fd4fcad4","payload":[{"channelId":"0","presetId":"725a6400-8d74-11e9-afd1-0b4a2ef1fe56","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick + snare","id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"Poly Synth sil ptn","id":"9c1f23a0-87a9-11e9-b6bb-4301b3e57a4f"}]},{"channelId":"3","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"Poly Synth sil ptn","id":"9c1f23a0-87a9-11e9-b6bb-4301b3e57a4f"}]},{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
     
     /*,{"name":"03 mel a + sd + kd + bl - The Chase","id":"c644d7d0-8798-11e9-a59f-9d1dbed917c5","payload":[
        {"channelId":"0","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick + snare","id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2"}]}
        ,{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"},{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}
        ,{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[
          {"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}
          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}]}
        ,{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
     */


//*


     ,{"name":"03.5 mel a + sd + kd + bl - The Chase","id":"c644d7d0-8798-11e9-a59f-9d1dbed917c5","payload":[
        {"channelId":"0","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick + snare","id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2"}]}
        //,{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"},{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}
        
        ,{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[
          //{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}

         {"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         

         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       
         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}

         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}

         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}         
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       
   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}         

   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}


   /*,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} 
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}                    
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}*/

         /*
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} 
         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}    
         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} 
         */
         //,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}                                            
        ]}


        ,{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[
          {"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}
          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}
          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  

          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}          

          ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}   
          ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}
//,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}

//,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
//,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}

          //,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
        ]}                             
        ,{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
     

//*/


/*





     ,{"name":"06 mel a + sd + kd + bl - The Chase","id":"c644d7d0-8798-11e9-a59f-9d1dbed88888","payload":[
        {"channelId":"0","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick + snare","id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2"}]}        
        ,{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[

         //{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
          //{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}
         {"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}         
         ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}      

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}      

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}      

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}                        
     
                                          
        ]}


        ,{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[
           {"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}

          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}
        
          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}
          
          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  
          
          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}     

          ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}   

          ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}

          ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}

          ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}

          //,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          //,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}                              

        ]}                             
        ,{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}


*/









     ,{"name":"05 mel a + sd + kd + bl - The Chase","id":"c644d7d0-8798-11e9-a59f-9d1dbed44444","payload":[
        {"channelId":"0","presetId":"ceb3a300-8d75-11e9-afd1-0b4a2ef1fe56","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick + snare","id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2"}]}
        
        
        ,{"channelId":"3","presetId":"64563330-8d7d-11e9-bbeb-15b21887fd62","kitId":0,"ptnSeqList":[

         //{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} // padding pattern  // last pattern is shifted first

         {"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}         
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}    

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}       
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} 

   //,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}

/*
// unison with channel 4 start

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}         
   ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
   ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
   ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}

// unison with channel 4 end

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}      

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}      

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}      
//*/
   //,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
   //,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       
   //,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       


                                        
        ]}


        ,{"channelId":"4","presetId":"0f88ace0-8d7b-11e9-b08e-1b90fff4be73","kitId":0,"ptnSeqList":[
          
          //{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  // padding pattern
          
          //,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          //,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}  

          //{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} // padding pattern

          //{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"} // last pattern is shifted first
          
          {"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  
          
          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}    

          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}                  

          ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}  

          ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}

   //,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       
   //,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}     

//,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}


    //,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
/*
// unison with channel 3 start

    ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
    ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}
  
    ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
    ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}
    
    ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
    ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  

// unison with channel 3 end    
    
    //,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
    //,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}     

    ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
    ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}   

    ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
    ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}

    ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
    ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}

    ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
    ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}

    //,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
    //,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}    
//*/

//,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}

        ]}                             
        ,{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
     




/*


     ,{"name":"04 mel b + sd + kd + bl - The Chase","id":"9a6b9a80-8799-11e9-bf9f-03ab5b38b593","payload":[
        {"channelId":"0","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]}
        ,{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick + snare","id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2"}]}
        ,{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"},{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}
        ,{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[
          {"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
         ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}]}
        ,{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}
        ,{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]
      }     
     //,{"name":"05 mel c + sd + kd + bl - The Chase","id":"468e8a80-879e-11e9-b2b2-511477591487","payload":[{"channelId":"0","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick + snare","id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2"}]},{"channelId":"3","presetId":"d5ae0da0-83af-11e9-bef6-2f2d2d5aed85","kitId":0,"ptnSeqList":[{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"},{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"},{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"},{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}]},{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"},{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"},{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"},{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}]},{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
    ], 

// ,{"name":"03 sd + kd + bl - The Chase","id":"fba14fb0-87a4-11e9-8b6a-6794c9a6835e","payload":[{"channelId":"0","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick + snare","id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2"}]},{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"},{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}


*/








     ,{"name":"07 mel a + sd + kd + bl - The Chase","id":"c644d7d0-8798-11e9-a59f-9d1dbed55555","payload":[
        {"channelId":"0","presetId":"0e9d9850-8d75-11e9-afd1-0b4a2ef1fe56","kitId":0,"ptnSeqList":[{"name":"bar 1 - bassline - The Chase","id":"67fe46d0-86de-11e9-a1c0-6ddb7aa7214d"},{"name":"bar 2 - bassline - The Chase","id":"4a4e5f70-86df-11e9-aeaa-5db52ef15794"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":7,"ptnSeqList":[{"name":"kick + snare","id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2"}]}
        
        
        ,{"channelId":"3","presetId":"fb861090-8d78-11e9-b814-a1b7fe968def","kitId":0,"ptnSeqList":[

         //{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} // padding pattern  // last pattern is shifted first
/*
         {"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}         
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}    

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}       
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       

         ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
         ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} 
*/
   //,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}

//*
// unison with channel 4 start

   {"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}         
   ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
   ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}
   ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}

// unison with channel 4 end

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}      

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}      

   ,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
   ,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}      
//*/
   //,{"name":"bar 1 - aggsynth - The Chase","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e"}  
   //,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}       

,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
                                        
        ]}


        ,{"channelId":"4","presetId":"06ad7ee0-8d7e-11e9-8b50-a55fd9986590","kitId":0,"ptnSeqList":[
          
          //{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  // padding pattern
          
          //,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          //,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}  

          //{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} // padding pattern

          //{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"} // last pattern is shifted first
/*          
          {"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  
          
          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}    

          ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
          ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}                  

          ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}  

          ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
          ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}
          //,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
*/

    //,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
//*
// unison with channel 3 start

    {"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
    ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}
  
    ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
    ,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}
    
    ,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
    ,{"name":"bar 2 - a flutysynth - The Chase","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c"}  

// unison with channel 3 end    
    
    //,{"name":"bar 1/3 - a flutysynth - The Chase","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e"}
    //,{"name":"bar 4 - a flutysynth - The Chase","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c"}     

    ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
    ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}   

    ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
    ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}

    ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
    ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}

    ,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
    ,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}

,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}

    //,{"name":"bar 1 - b flutysynth - The Chase","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671"}
    //,{"name":"bar 2 - b flutysynth - The Chase","id":"134c38b0-8795-11e9-879f-4910cd0b8db9"}    
//*/

//,{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}

        ]}                             
        ,{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
     















],
    




    //*

    defaultSong: 0, // 0
    songs: [ 
      {"name":"The Chase","id":"29b490c0-879f-11e9-b8ad-efbdf59e0283","payload":[
              //{"name":"reset (silence) part","id":"bae76ef0-879f-11e9-b706-5b8e5df90b7a","barloop":"4","barelapsed":0,"uid":"fc158790-879f-11e9-b706-5b8e5df90b7a"},
              {"name":"A1: kick + bassline","id":"44395410-8797-11e9-a47d-5d387651d28c","barloop":"2","barelapsed":0,"uid":"c78893b0-879e-11e9-b8ad-efbdf59e0999"}
              ,{"name":"A2: kick + bassline","id":"44395410-8797-11e9-a47d-5d387651d282","barloop":"2","barelapsed":0,"uid":"c78893b0-879e-11e9-b8ad-efbdf59e0100"}        
              ,{"name":"A3: kick + bassline","id":"44395410-8797-11e9-a47d-5d387651d283","barloop":"12","barelapsed":0,"uid":"c78893b0-879e-11e9-b8ad-efbdf59e0283"} // "barloop":"12"

              ,{"name":"B: snare + A","id":"3a5d69d0-8798-11e9-a59f-9d1dbed917c5","barloop":"18","barelapsed":0,"uid":"c788bac0-879e-11e9-b8ad-efbdf59e0283"} // "barloop":"19" ? 18
              ,{"name":"C1: prepare synths","id":"7b0e0fe0-87aa-11e9-8f48-b9e4fd4fcad4","barloop":"2","barelapsed":0,"uid":"c788bac0-879e-11e9-b8ad-efbdf59e0999"} // "barloop":"1" - prepare polysynth presets
              //,{"name":"03 mel a + sd + kd + bl - The Chase","id":"c644d7d0-8798-11e9-a59f-9d1dbed917c5","barloop":"6","barelapsed":0,"uid":"c788bac1-879e-11e9-b8ad-efbdf59e0283"}

              //,{"name":"03.5 mel a + sd + kd + bl - The Chase","id":"c644d7d0-8798-11e9-a59f-9d1dbed917c5","barloop":"10","barelapsed":0,"uid":"c788bac1-879e-11e9-b8ad-efbdf59e0283"}

              //,{"name":"06 mel a + sd + kd + bl - The Chase","id":"c644d7d0-8798-11e9-a59f-9d1dbed88888","barloop":"16","barelapsed":0,"uid":"c788bac1-879e-11e9-b8ad-efbdf5988888"}

              ,{"name":"C2: melodies + B","id":"c644d7d0-8798-11e9-a59f-9d1dbed44444","barloop":"10","barelapsed":0,"uid":"c788bac1-879e-11e9-b8ad-efbdf5944444"} // "barloop":"24"


              ,{"name":"D: melodies + B","id":"c644d7d0-8798-11e9-a59f-9d1dbed55555","barloop":"14","barelapsed":0,"uid":"c788bac1-879e-11e9-b8ad-efbdf5944444"}

              

              //,{"name":"04 mel b + sd + kd + bl - The Chase","id":"9a6b9a80-8799-11e9-bf9f-03ab5b38b593","barloop":"4","barelapsed":0,"uid":"c788bac2-879e-11e9-b8ad-efbdf59e0283"}
              //{"name":"05 mel c + sd + kd + bl - The Chase","id":"468e8a80-879e-11e9-b2b2-511477591487","barloop":"16","barelapsed":16,"uid":"c788e1d0-879e-11e9-b8ad-efbdf59e0283"}
              ]}     




/*
    ,{"name":"Mr Fingers - Can You Feel It","id":"b556e120-008d-11ea-8e43-713664be24b8","payload":[
            {"name":"silence before song start","id":"f140ddf0-00cc-11ea-9b3e-7fa0357ae18f","barloop":"4","barelapsed":0,"uid":"silencePart-008c-11ea-8e43-713664be24b8"}
            ,{"name":"C","id":"28a76040-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"f585a7a0-008c-11ea-8e43-713664be24b8"}
            ,{"name":"D","id":"512b1480-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"f8436810-008c-11ea-8e43-713664be24b8"}
            ,{"name":"E","id":"664aa470-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"f99b7e00-008c-11ea-8e43-713664be24b8"}
        ,{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"0092c970-008d-11ea-8e43-713664be24b8"}
            ,{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"0553d3f0-008d-11ea-8e43-713664be24b8"}
            ,{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"096fc4d0-008d-11ea-8e43-713664be24b8"}
            ,{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","barloop":"4","barelapsed":0,"uid":"0b9711a0-008d-11ea-8e43-713664be24b8"}
        ,{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"1e2f8180-008d-11ea-8e43-713664be24b8"}
            ,{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"3cd25ef0-008d-11ea-8e43-713664be24b8"}
            ,{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"3ef9f9e0-008d-11ea-8e43-713664be24b8"}
            ,{"name":"L (missing lead)","id":"e5b29490-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"403c8c00-008d-11ea-8e43-713664be24b8"}
            ,{"name":"M (missing lead)","id":"1abfaa60-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"4563d260-008d-11ea-8e43-713664be24b8"}
            ,{"name":"N","id":"066e2df0-0027-11ea-8d89-9f9e3f1bb09d","barloop":"4","barelapsed":0,"uid":"46a9bfe0-008d-11ea-8e43-713664be24b8"}
            ,{"name":"O","id":"35d653d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"4c1477e0-008d-11ea-8e43-713664be24b8"}
            ,{"name":"P","id":"48c966d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"53729b70-008d-11ea-8e43-713664be24b8"}
            ,{"name":"Q (missing lead)","id":"5ffe1b20-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"60a905e0-008d-11ea-8e43-713664be24b8"}
            ,{"name":"R (missing lead)","id":"7a3735d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"6b7aa550-008d-11ea-8e43-713664be24b8"}
        ,{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"737752d0-008d-11ea-8e43-713664be24b8"}
            ,{"name":"S","id":"be9bc150-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"766746d0-008d-11ea-8e43-713664be24b8"}]}

*/

/*
,{"name":"mr f cyfi short A (from ins_conf.js)","id":"b39afab0-1230-11ea-90d2-3f93d28b464a","payload":[{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"0e489771-1230-11ea-90d2-3f93d28b464a"},{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"0e48be80-1230-11ea-90d2-3f93d28b464a"},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","barloop":"4","barelapsed":0,"uid":"0e48be81-1230-11ea-90d2-3f93d28b464a"},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"0e48be82-1230-11ea-90d2-3f93d28b464a"},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"0e48e590-1230-11ea-90d2-3f93d28b464a"},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"0e48e591-1230-11ea-90d2-3f93d28b464a"}],"parts":[{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}],"patterns":[{"name":"mr fingers - bassline pattern","classs":"channel","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"de","classs":"user","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"mr fingers - pad - bar 3","classs":"user","id":"215c80c0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"df","classs":"user","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"mr f - synth riff A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"mr f - synth riff B","classs":"user","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"dd","classs":"user","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}],"presets":[{"name":"mr f - bassline","classs":"user","controls":{"1":100,"2":"1","3":100,"4":"2","5":50,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":7,"13":0,"14":24,"15":0,"16":0},"id":"baae08f0-b9f3-11e9-8ff1-c78c1850856a"},{"name":"mr f - pad","classs":"user","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":27,"8":11,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"b875cc10-ffd7-11e9-882b-9339974c6950"},{"name":"mr f - synth riff","classs":"user","controls":{"1":30,"2":"2","3":44,"4":"0","5":0,"6":0,"7":16,"8":41,"9":5,"10":13,"11":2,"13":26,"14":21,"15":27,"16":18},"id":"38cecec0-ffe2-11e9-96e8-753abd87b36b"}]}
//*/

//*
,{"name":"mrf 3","id":"ac23fab0-12ae-11ea-b9d0-7739952a178a","payload":[{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":3,"uid":"a4b29d40-12ae-11ea-b9d0-7739952a178a"},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","barloop":"4","barelapsed":0,"uid":"a4b2c450-12ae-11ea-b9d0-7739952a178a"},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"a4b2c451-12ae-11ea-b9d0-7739952a178a"},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"a4b2eb60-12ae-11ea-b9d0-7739952a178a"},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"a4b2eb61-12ae-11ea-b9d0-7739952a178a"},{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":4,"uid":"a4b27630-12ae-11ea-b9d0-7739952a178a"}]
,"parts":[{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}]
,"patterns":[{"name":"mr fingers - bassline pattern","classs":"channel","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"df","classs":"channel","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr fingers - pad - bar 3","classs":"channel","id":"215c80c0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr f - synth riff A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr f - synth riff B","classs":"channel","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
,{"name":"dd","classs":"channel","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.51,0,0,0,0,0,0,0,0.51,0,0,0],[0.51,0,0,0,0,0,0,0,0.51,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]],"classs":"channel"},{"name":"de","classs":"channel","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}]
,"presets":[{"name":"mr f - bassline","classs":"channel","controls":{"1":100,"2":"1","3":100,"4":"2","5":50,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":7,"13":0,"14":24,"15":0,"16":0},"id":"baae08f0-b9f3-11e9-8ff1-c78c1850856a"},{"name":"mr f - pad","classs":"channel","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":27,"8":11,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"b875cc10-ffd7-11e9-882b-9339974c6950"},{"name":"mr f - synth riff","classs":"channel","controls":{"1":30,"2":"2","3":44,"4":"0","5":0,"6":0,"7":16,"8":41,"9":5,"10":13,"11":2,"13":26,"14":21,"15":27,"16":18},"id":"38cecec0-ffe2-11e9-96e8-753abd87b36b"}]}

//*/

    ], 

    //*/

    conf: [ { 
      type: 'control', 
      instrumentName: 'Conductor', 
      name: 'Conductor Ctrl 01', 
      kitNumber: 0, 
      color: '#51ACBD',       
      controls: window.tweak.conductor4 //
    }] 
  },

//*
  { 

    channelName: 'Player 2: Drums', // 
    trackSet: 7, 

    defaultPattern: 0, 
    patterns: [ // channel patterns
      //{"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
      // ? reset needs al lots of tracks to erase/rewrite empty notes (vol:0) potentillat long tracked patterns !!!!
      {"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},     
      {"name":"kick",        "classs":"channel", "id":"81a98180-1887-11e6-8ebb-edf93ea0958c", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},    
      {"name":"kick + snare", "classs":"channel", "id":"2b2e0600-3d85-11e6-a2d1-8bcd79be09f2", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},
      {"name":"kick + hihat + snare","classs":"channel","id":"1c7bb480-3d86-11e6-a2d1-8bcd79be09f2", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
    ],  

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ //{"name":"kick",        "classs":"channel", "id":"81a98180-1887-11e6-8ebb-edf93ea0958c"}
        {"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 


    defaultPreset: 0, 
    presets: [
      {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
    ],  

    conf: window.kits.drum
  }, 
// */

/*
  { 

    channelName: 'Ch 3 Mono Synth', // 
    trackSet: 0, 

    defaultPattern: 0, 
    patterns: [ // channel patterns
      {"name":"reset", "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}     
    ],  

    defaultPatternSeq: 0, 
    patternSeq: [         
      [ 
        {"name":"reset", "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 


    defaultPreset: 0, 
    presets: [
      {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
    ],  

    conf: [
      { 
        type: 'synth',
        instrumentName: 'AikeWebsynth1', 
        instrumentUrl: 'http://aikelab.net/websynth/',
        color: 'rgba(0, 161, 0, 1)',
        name: 'c1 > c7', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharp,
        controls: window.launch.editor_controls // 
      },

    ] 
  }, 


  { 

    channelName: 'Ch 4 Mono Synth', // 
    trackSet: 0, 

    defaultPattern: 0, 
    patterns: [ // channel patterns
      {"name":"reset", "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}     
    ],  

    defaultPatternSeq: 0, 
    patternSeq: [         
      [ 
        {"name":"reset", "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 


    defaultPreset: 0, 
    presets: [
      {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
    ],  

    conf: [
      { 
        type: 'synth',
        instrumentName: 'AikeWebsynth1', 
        instrumentUrl: 'http://aikelab.net/websynth/',
        color: 'rgba(0, 161, 0, 1)',
        name: 'c1 > c7', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharp,
        controls: window.launch.editor_controls // 
      },

    ] 
  }, 

  { 

    channelName: 'Ch 5 Mono Synth', // 
    trackSet: 0, 

    defaultPattern: 0, 
    patterns: [ // channel patterns
      {"name":"reset", "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}     
    ],  

    defaultPatternSeq: 0, 
    patternSeq: [         
      [ 
        {"name":"reset", "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 


    defaultPreset: 0, 
    presets: [
      {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
    ],  

    conf: [
      { 
        type: 'synth',
        instrumentName: 'AikeWebsynth1', 
        instrumentUrl: 'http://aikelab.net/websynth/',
        color: 'rgba(0, 161, 0, 1)',
        name: 'c1 > c7', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharp,
        controls: window.launch.editor_controls // 
      },

    ] 
  }, 

  //*/

  { 
    sessionName: 'Song editor (Giorgio Moroder - The Chase)',

    channelName: 'Player 3: Poly Synth', 
    trackSet: 0, 

    defaultPreset: 1, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ,{"name":"Poly Synth silence","classs":"channel","controls":{"1":9,"2":1,"3":10,"4":2,"5":0,"6":0,"7":8,"8":9,"9":8,"10":0,"11":0,"13":0,"14":0,"15":0,"16":0},"id":"399faf60-87a9-11e9-b6bb-4301b3e57a4f"}
    ,{"name":"poly-aggsynth","classs":"channel","controls":{"1":50,"2":"2","3":22,"4":2,"5":0,"6":0,"7":9,"8":9,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"fb861090-8d78-11e9-b814-a1b7fe968def"}    
    ,{"name":"poly-aggsynth2","classs":"channel","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":10,"8":0,"9":10,"10":9,"11":5,"13":0,"14":11,"15":18,"16":10},"id":"64563330-8d7d-11e9-bbeb-15b21887fd62"}
    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      ,{"name":"bar 1 - aggsynth - The Chase","classs":"channel","id":"ac553590-8711-11e9-b1e9-a39cfaa7451e","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      ,{"name":"bar 2 - a flutysynth - The Chase","classs":"channel","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      ,{"name":"bar 4 - a flutysynth - The Chase","classs":"channel","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}            
      ,{"name":"Poly Synth sil ptn","classs":"channel","id":"9c1f23a0-87a9-11e9-b6bb-4301b3e57a4f","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      /*,{"name":"bar 1 - aggsynth - The Chase","classs":"channel","id":"4f26a930-86e4-11e9-930c-07d02f2be9d6","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      */
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      //*
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 1)', // : yellow //'rgba(0, 161, 0, 1)', // : green
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  

      ///

  //*
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 1)', // : yellow
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },
  ///


    ] 
  }, 

//*
  { 
    sessionName: 'Song editor (Giorgio Moroder - The Chase)',

    channelName: 'Player 4: Poly Synth', 
    trackSet: 0, 

    defaultPreset: 1, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
     ,{"name":"Poly Synth silence","classs":"channel","controls":{"1":9,"2":1,"3":10,"4":2,"5":0,"6":0,"7":8,"8":9,"9":8,"10":0,"11":0,"13":0,"14":0,"15":0,"16":0},"id":"399faf60-87a9-11e9-b6bb-4301b3e57a4f"}      
     ,{"name":"poly-fluty-synth","classs":"channel","controls":{"1":50,"2":"2","3":22,"4":"3","5":20,"6":0,"7":25,"8":29,"9":16,"10":15,"11":3,"13":19,"14":18,"15":19,"16":13},"id":"0f88ace0-8d7b-11e9-b08e-1b90fff4be73"} 
     ,{"name":"poly-fluty02","classs":"channel","controls":{"1":50,"2":"2","3":22,"4":"2","5":10,"6":0,"7":16,"8":15,"9":47,"10":13,"11":2,"13":25,"14":73,"15":51,"16":25},"id":"06ad7ee0-8d7e-11e9-8b50-a55fd9986590"}     
    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}          
      ,{"name":"bar 1/3 - a flutysynth - The Chase","classs":"channel","id":"cc9177b0-8711-11e9-b1e9-a39cfaa7451e","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      ,{"name":"bar 2 - a flutysynth - The Chase","classs":"channel","id":"d1b07a20-86e4-11e9-99b2-cbf65c1b028c","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      ,{"name":"bar 4 - a flutysynth - The Chase","classs":"channel","id":"f7611130-86e4-11e9-99b2-cbf65c1b028c","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}      
      ,{"name":"bar 1 - b flutysynth - The Chase","classs":"channel","id":"9a0f0a50-8793-11e9-a7a8-0f538aed7671","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      //[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      //[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      ,{"name":"bar 2 - b flutysynth - The Chase","classs":"channel","id":"134c38b0-8795-11e9-879f-4910cd0b8db9","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      //1-3-6//[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      //good//[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      //[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      //[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      //[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      //[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      ,{"name":"Poly Synth sil ptn","classs":"channel","id":"9c1f23a0-87a9-11e9-b6bb-4301b3e57a4f","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', // : yellow
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  


      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', // : yellow
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },


    ] 
  },   
/*
  { 
    sessionName: 'Song editor (Giorgio Moroder - The Chase)',

    channelName: 'Ch 5 Poly Synth', 
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},          
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.4)', // : yellow
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: patternSeqOff2 // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  


      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.4)', // : yellow
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: patternSeqOff2 // window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },



    ] 
  },  

  { 
    sessionName: 'Song editor (Giorgio Moroder - The Chase)',

    channelName: 'Ch 6 Poly Synth', 
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},          
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.2)', // : yellow
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: patternSeqOff2 // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  


      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.2)', // : yellow
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: patternSeqOff2 // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },



    ] 
  },    

//*/

];






//*
// Mr Fingers - Can You Feel It (classic presets & patterns per channel mode)

window.insConf12 = [ 

//*
  // for some odd reason we need to laod a monosynth as first instrument to avoid aikewebsynth bugs!!!!
  { 

    sessionName: 'Mr Fingers - Can You Feel It (song editor)',
    channelName: 'Player 1: Mono Synth', // - Ch 1
    trackSet: 0, 

    //*
    defaultPattern: 0, 
    patterns: [ // channel patterns
      {"name":"reset",    "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}     
      ,{"name":"mr fingers - bassline pattern","classs":"channel","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ],  

    //*
    defaultPatternSeq: 0, 
    patternSeq: [         
      [ 
        {"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 




    defaultPreset: 0, 
    presets: [
      //{"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
{"name":"mr f - bassline 3","classs":"channel","controls":{"1":78,"2":"2","3":80,"4":"2","5":20,"6":0,"7":0,"8":22,"9":35,"10":19,"11":13,"12":13,"13":58,"14":14,"15":73,"16":64},"id":"986c48c0-0092-11ea-93d4-6d3f19ef8d52"}
,{"name":"mr f - bassline 2","classs":"channel","controls":{"1":58,"2":"2","3":57,"4":"1","5":50,"6":0,"7":9,"8":22,"9":13,"10":10,"11":11,"12":56,"13":43,"14":24,"15":48,"16":43},"id":"aa03d030-ffde-11e9-ba3b-890937b5df9d"}
,{"name":"mr f - bassline","classs":"channel","controls":{"1":100,"2":"1","3":100,"4":"2","5":50,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":7,"13":0,"14":24,"15":0,"16":0},"id":"baae08f0-b9f3-11e9-8ff1-c78c1850856a"}

    ],  

    conf: [
      { 
        type: 'synth',
        instrumentName: 'AikeWebsynth1', 
        instrumentUrl: 'http://aikelab.net/websynth/',
        color: 'rgba(237, 49, 104, 1)', //: pink 'rgba(0, 161, 0, 1)', // : green
        name: 'c1 > c7', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharp,
        controls: window.launch.editor_controls // 
      },

    ] 
  }, 





  { channelName: 'Player 6: Puppet Mastah', // Mixer/ 
    trackSet: 0, 


//* // comments parts + songs sectino of conductor to allow free saving of parts: song creations mode vs song playbakc mode

    parts: [ 

{"name":"mr f - reset part","id":"f140ddf0-00cc-11ea-9b3e-7fa0357ae18f","payload":[{"channelId":"0","presetId":"986c48c0-0092-11ea-93d4-6d3f19ef8d52","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"2","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"toms + bassline","id":"627504d0-137c-11ea-bbf9-0fcf21f3eeb2","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":5,"ptnSeqList":[{"name":"toms","id":"a8c43430-137a-11ea-9fed-072a81ecafb4"}]},{"channelId":"3","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"toms + bassline + kick","id":"bac58240-137c-11ea-98af-b5584d7de14e","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":5,"ptnSeqList":[{"name":"toms + kick","id":"bad3c500-137a-11ea-9fed-072a81ecafb4"}]},{"channelId":"3","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"C","id":"28a76040-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"da","id":"b6abe2e0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"D","id":"512b1480-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"db","id":"bc87fa50-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"E","id":"664aa470-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dc","id":"c7c3cd40-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}

//,{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}

,{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"L (missing lead)","id":"e5b29490-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dh","id":"71faefa0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}

,{"name":"M (missing lead)","id":"1abfaa60-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"N","id":"066e2df0-0027-11ea-8d89-9f9e3f1bb09d","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"di","id":"846e9970-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"O","id":"35d653d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dj","id":"91114f60-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"P","id":"48c966d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dk","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"Q (missing lead)","id":"5ffe1b20-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dl","id":"a52e1550-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"R (missing lead)","id":"7a3735d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dk","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}

//,{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}

,{"name":"S","id":"be9bc150-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}


],
    


    patternSeq: [     
    ],

     

    defaultSong: 0, 
    songs: [ 

    {"name":"Mr Fingers - Can You Feel It","id":"b556e120-008d-11ea-8e43-713664be24b8","payload":[
    {"name":"silence before song start","id":"f140ddf0-00cc-11ea-9b3e-7fa0357ae18f","barloop":"2","barelapsed":0,"uid":"silencePart-008c-11ea-8e43-713664be24b8"}

     ,{"name":"A","id":"627504d0-137c-11ea-bbf9-0fcf21f3eeb2","barloop":"4","barelapsed":0,"uid":"fdfgd8f4g-008c-11ea-8e43-713664be24b8"}
    ,{"name":"B","id":"bac58240-137c-11ea-98af-b5584d7de14e","barloop":"4","barelapsed":0,"uid":"fdfgd8f4g-008c-11edd9d4be24b8"}

    ,{"name":"C","id":"28a76040-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"f585a7a0-008c-11ea-8e43-713664be24b8"}
    ,{"name":"D","id":"512b1480-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"f8436810-008c-11ea-8e43-713664be24b8"}
    ,{"name":"E","id":"664aa470-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"f99b7e00-008c-11ea-8e43-713664be24b8"}
    ,{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"0092c970-008d-11ea-8e43-713664be24b8"}
    ,{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"0553d3f0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"096fc4d0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","barloop":"4","barelapsed":0,"uid":"0b9711a0-008d-11ea-8e43-713664be24b8"}
,{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"1e2f8180-008d-11ea-8e43-713664be24b8"}
    ,{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"3cd25ef0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"3ef9f9e0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"L (missing lead)","id":"e5b29490-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"403c8c00-008d-11ea-8e43-713664be24b8"}
    ,{"name":"M (missing lead)","id":"1abfaa60-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"4563d260-008d-11ea-8e43-713664be24b8"}
    ,{"name":"N","id":"066e2df0-0027-11ea-8d89-9f9e3f1bb09d","barloop":"4","barelapsed":0,"uid":"46a9bfe0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"O","id":"35d653d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"4c1477e0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"P","id":"48c966d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"53729b70-008d-11ea-8e43-713664be24b8"}
    ,{"name":"Q (missing lead)","id":"5ffe1b20-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"60a905e0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"R (missing lead)","id":"7a3735d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"6b7aa550-008d-11ea-8e43-713664be24b8"}
,{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"737752d0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"S","id":"be9bc150-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"766746d0-008d-11ea-8e43-713664be24b8"}]}

    ], 
// */


    conf: [ { 
      type: 'control', 
      instrumentName: 'Conductor', 
      name: 'Conductor Ctrl 01', 
      kitNumber: 0, 
      color: '#51ACBD',       
      controls: window.tweak.conductor5 //
    }] 
  },


  { 

    channelName: 'Player 2: Drums', // 
    trackSet: 5, 

    defaultPattern: 0, 
    patterns: [ 

/* ori no vol alterations     
    {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}        
,{"name":"dg","classs":"channel","id":"513b2170-001e-11ea-97f2-fb88ba95d42c","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dh","classs":"channel","id":"71faefa0-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"di","classs":"channel","id":"846e9970-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dj","classs":"channel","id":"91114f60-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dk","classs":"channel","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dl","classs":"channel","id":"a52e1550-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"da","classs":"channel","id":"b6abe2e0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"db","classs":"channel","id":"bc87fa50-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dc","classs":"channel","id":"c7c3cd40-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"de","classs":"channel","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dd","classs":"channel","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"df","classs":"channel","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
//*/     

{"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}        
,{"name":"dg","classs":"channel","id":"513b2170-001e-11ea-97f2-fb88ba95d42c","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"dh","classs":"channel","id":"71faefa0-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"di","classs":"channel","id":"846e9970-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"dj","classs":"channel","id":"91114f60-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"dk","classs":"channel","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"dl","classs":"channel","id":"a52e1550-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"da","classs":"channel","id":"b6abe2e0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"db","classs":"channel","id":"bc87fa50-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"dc","classs":"channel","id":"c7c3cd40-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"de","classs":"channel","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"dd","classs":"channel","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"df","classs":"channel","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0,0.77,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
,{"name":"toms","id":"a8c43430-137a-11ea-9fed-072a81ecafb4","classs":"channel","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}     
,{"name":"toms + kick","id":"bad3c500-137a-11ea-9fed-072a81ecafb4","classs":"channel","tracks":[[0,0,0,0,0.48,0,0,0,0,0,0,0,0.48,0,0,0],[0.47,0,0,0,0,0,0,0,0.47,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1.21,0,0,0,1.21,0,0,0,1.21,0,0,0,1.21,0,0,0]]}
     ],  

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ 
        {"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 


    defaultPreset: 0, 
    presets: [
      {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
    ],  

    conf: window.kits.drum
  }, 




  { 
    sessionName: 'Mr Fingers - Can You Feel It (song editor)',

    channelName: 'Player 3: Poly Synth', 
    trackSet: 0, 

    defaultPreset: 1, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ,{"name":"Poly Synth silence","classs":"channel","controls":{"1":9,"2":1,"3":10,"4":2,"5":0,"6":0,"7":8,"8":9,"9":8,"10":0,"11":0,"13":0,"14":0,"15":0,"16":0},"id":"399faf60-87a9-11e9-b6bb-4301b3e57a4f"}
,{"name":"mr f - pad","classs":"channel","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":27,"8":11,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"b875cc10-ffd7-11e9-882b-9339974c6950"}
,{"name":"mr f - pad 2","classs":"channel","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":8,"8":15,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"00235620-ffda-11e9-821b-4d8f145ebbda"}    

    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
,{"name":"mr fingers - pad 1&2 b","classs":"channel","id":"ec047f40-ffd7-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
,{"name":"mr fingers - pad - bar 3","classs":"channel","classs":"channel","id":"215c80c0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
,{"name":"mr fingers - pad - bar 4","classs":"channel","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}

    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      //*
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 1)', // : yellow //'rgba(0, 161, 0, 1)', // : green
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  

      ///

  //*
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 1)', // : yellow
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },
  ///


    ] 
  }, 

//*
  { 
    sessionName: 'Mr Fingers - Can You Feel It (song editor)',

    channelName: 'Player 4: Poly Synth', 
    trackSet: 0, 

    defaultPreset: 1, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
     ,{"name":"Poly Synth silence","classs":"channel","controls":{"1":9,"2":1,"3":10,"4":2,"5":0,"6":0,"7":8,"8":9,"9":8,"10":0,"11":0,"13":0,"14":0,"15":0,"16":0},"id":"399faf60-87a9-11e9-b6bb-4301b3e57a4f"} 
     ,{"name":"mr f - synth riff","classs":"channel","controls":{"1":30,"2":"2","3":44,"4":"0","5":0,"6":0,"7":16,"8":41,"9":5,"10":13,"11":2,"13":26,"14":21,"15":27,"16":18},"id":"38cecec0-ffe2-11e9-96e8-753abd87b36b"}         
    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}          
,{"name":"mr f - synth riff A","classs":"channel","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
,{"name":"mr f - synth riff B","classs":"channel","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', // : yellow
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  


      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', // : yellow
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },


    ] 
  },   


  { 
    sessionName: 'Mr Fingers - Can You Feel It (song editor)',

    channelName: 'Player 5: Poly Synth', 
    trackSet: 0, 

    defaultPreset: 1, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
     ,{"name":"Poly Synth silence","classs":"channel","controls":{"1":9,"2":1,"3":10,"4":2,"5":0,"6":0,"7":8,"8":9,"9":8,"10":0,"11":0,"13":0,"14":0,"15":0,"16":0},"id":"399faf60-87a9-11e9-b6bb-4301b3e57a4f"}          
    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}          
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', // : yellow
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  


      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', // : yellow
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },


    ] 
  },   



];
// */









/*

// Mr Fingers - Can You Feel It (classic presets & patterns per channel mode)

window.insConf12 = [ 

//*
  // for some odd reason we need to laod a monosynth as first instrument to avoid aikewebsynth bugs!!!!
  { 

    sessionName: 'Mr Fingers - Can You Feel It (song editor)',
    channelName: 'Player 1: Mono Synth', 
    trackSet: 0, 


    defaultPattern: 0, 
    patterns: [ // channel patterns
      {"name":"reset",    "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}     
      //,{"name":"mr fingers - bassline pattern","classs":"channel","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ],  

    
    defaultPatternSeq: 0, 
    patternSeq: [         
      [ 
        {"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 


    defaultPreset: 0, 
    presets: [
      //{"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
//{"name":"mr f - bassline 3","classs":"channel","controls":{"1":78,"2":"2","3":80,"4":"2","5":20,"6":0,"7":0,"8":22,"9":35,"10":19,"11":13,"12":13,"13":58,"14":14,"15":73,"16":64},"id":"986c48c0-0092-11ea-93d4-6d3f19ef8d52"}
//,{"name":"mr f - bassline 2","classs":"channel","controls":{"1":58,"2":"2","3":57,"4":"1","5":50,"6":0,"7":9,"8":22,"9":13,"10":10,"11":11,"12":56,"13":43,"14":24,"15":48,"16":43},"id":"aa03d030-ffde-11e9-ba3b-890937b5df9d"}
{"name":"mr f - bassline","classs":"channel","controls":{"1":100,"2":"1","3":100,"4":"2","5":50,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":7,"13":0,"14":24,"15":0,"16":0},"id":"baae08f0-b9f3-11e9-8ff1-c78c1850856a"}

    ],  

    

    conf: [
      { 
        type: 'synth',
        instrumentName: 'AikeWebsynth1', 
        instrumentUrl: 'http://aikelab.net/websynth/',
        color: 'rgba(237, 49, 104, 1)', //: pink 'rgba(0, 161, 0, 1)', // : green
        name: 'c1 > c7', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharp,
        controls: window.launch.editor_controls // 
      },

    ] 
  }, 





  { channelName: 'Player 6: Puppet Mastah', // Mixer/ 
    trackSet: 0, 




    parts: [ 

{"name":"mr f - reset part","id":"f140ddf0-00cc-11ea-9b3e-7fa0357ae18f","payload":[{"channelId":"0","presetId":"986c48c0-0092-11ea-93d4-6d3f19ef8d52","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"2","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
/*,{"name":"C","id":"28a76040-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"da","id":"b6abe2e0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"D","id":"512b1480-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"db","id":"bc87fa50-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"E","id":"664aa470-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dc","id":"c7c3cd40-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}

//,{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}

,{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"L (missing lead)","id":"e5b29490-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dh","id":"71faefa0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}

,{"name":"M (missing lead)","id":"1abfaa60-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"N","id":"066e2df0-0027-11ea-8d89-9f9e3f1bb09d","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"di","id":"846e9970-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"O","id":"35d653d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dj","id":"91114f60-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"P","id":"48c966d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dk","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"Q (missing lead)","id":"5ffe1b20-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dl","id":"a52e1550-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
,{"name":"R (missing lead)","id":"7a3735d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dk","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}

//,{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}

,{"name":"S","id":"be9bc150-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
(star)/

],
    


    patternSeq: [     
    ],

     

    defaultSong: 0, 
    songs: [ 

//*
{"name":"Mr Fingers - Can You Feel It (whole song)","id":"cc0187f0-12e3-11ea-a991-7942cc7aea8c","payload":[{"name":"silence before song start","id":"f140ddf0-00cc-11ea-9b3e-7fa0357ae18f","barloop":"4","barelapsed":1,"uid":"ca815090-12e3-11ea-a991-7942cc7aea8c"},{"name":"C","id":"28a76040-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca8177a0-12e3-11ea-a991-7942cc7aea8c"},{"name":"D","id":"512b1480-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca8177a1-12e3-11ea-a991-7942cc7aea8c"},{"name":"E","id":"664aa470-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca8177a2-12e3-11ea-a991-7942cc7aea8c"},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca819eb0-12e3-11ea-a991-7942cc7aea8c"},{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca81c5c0-12e3-11ea-a991-7942cc7aea8c"},{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca81c5c1-12e3-11ea-a991-7942cc7aea8c"},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","barloop":"4","barelapsed":0,"uid":"ca81ecd0-12e3-11ea-a991-7942cc7aea8c"},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca81ecd1-12e3-11ea-a991-7942cc7aea8c"},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"ca8213e0-12e3-11ea-a991-7942cc7aea8c"},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca8213e1-12e3-11ea-a991-7942cc7aea8c"},{"name":"L (missing lead)","id":"e5b29490-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca8213e2-12e3-11ea-a991-7942cc7aea8c"},{"name":"M (missing lead)","id":"1abfaa60-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca823af0-12e3-11ea-a991-7942cc7aea8c"},{"name":"N","id":"066e2df0-0027-11ea-8d89-9f9e3f1bb09d","barloop":"4","barelapsed":0,"uid":"ca823af1-12e3-11ea-a991-7942cc7aea8c"},{"name":"O","id":"35d653d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca823af2-12e3-11ea-a991-7942cc7aea8c"},{"name":"P","id":"48c966d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca826200-12e3-11ea-a991-7942cc7aea8c"},{"name":"Q (missing lead)","id":"5ffe1b20-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca826201-12e3-11ea-a991-7942cc7aea8c"},{"name":"R (missing lead)","id":"7a3735d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca826202-12e3-11ea-a991-7942cc7aea8c"},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"ca828910-12e3-11ea-a991-7942cc7aea8c"},{"name":"S","id":"be9bc150-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca828911-12e3-11ea-a991-7942cc7aea8c"}],"parts":[{"name":"mr f - reset part","id":"f140ddf0-00cc-11ea-9b3e-7fa0357ae18f","payload":[{"channelId":"0","presetId":"986c48c0-0092-11ea-93d4-6d3f19ef8d52","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"2","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"C","id":"28a76040-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"da","id":"b6abe2e0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"D","id":"512b1480-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"db","id":"bc87fa50-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"E","id":"664aa470-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dc","id":"c7c3cd40-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"L (missing lead)","id":"e5b29490-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dh","id":"71faefa0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"M (missing lead)","id":"1abfaa60-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"O","id":"35d653d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dj","id":"91114f60-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"P","id":"48c966d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dk","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"Q (missing lead)","id":"5ffe1b20-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dl","id":"a52e1550-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"R (missing lead)","id":"7a3735d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dk","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"S","id":"be9bc150-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}],"patterns":[{"name":"mr fingers - bassline pattern","classs":"channel","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"da","classs":"channel","id":"b6abe2e0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr fingers - pad - bar 3","classs":"channel","id":"215c80c0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"db","classs":"channel","id":"bc87fa50-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dc","classs":"channel","id":"c7c3cd40-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dd","classs":"channel","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"mr f - synth riff A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr f - synth riff B","classs":"channel","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"de","classs":"channel","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"df","classs":"channel","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]],"classs":"channel"},{"name":"dh","id":"71faefa0-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]],"classs":"channel"},{"name":"dj","classs":"channel","id":"91114f60-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dk","classs":"channel","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dl","classs":"channel","id":"a52e1550-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}],"presets":[{"name":"mr f - bassline 3","classs":"channel","controls":{"1":78,"2":"2","3":80,"4":"2","5":20,"6":0,"7":0,"8":22,"9":35,"10":19,"11":13,"12":13,"13":58,"14":14,"15":73,"16":64},"id":"986c48c0-0092-11ea-93d4-6d3f19ef8d52"},{"name":"mr f - bassline","classs":"channel","controls":{"1":100,"2":"1","3":100,"4":"2","5":50,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":7,"13":0,"14":24,"15":0,"16":0},"id":"baae08f0-b9f3-11e9-8ff1-c78c1850856a"},{"name":"mr f - pad","classs":"channel","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":27,"8":11,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"b875cc10-ffd7-11e9-882b-9339974c6950"},{"name":"mr f - synth riff","classs":"channel","controls":{"1":30,"2":"2","3":44,"4":"0","5":0,"6":0,"7":16,"8":41,"9":5,"10":13,"11":2,"13":26,"14":21,"15":27,"16":18},"id":"38cecec0-ffe2-11e9-96e8-753abd87b36b"}]}
// (star)/


//*  
,{"name":"mrf 3","id":"ac23fab0-12ae-11ea-b9d0-7739952a178a","payload":[{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":3,"uid":"a4b29d40-12ae-11ea-b9d0-7739952a178a"},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","barloop":"4","barelapsed":0,"uid":"a4b2c450-12ae-11ea-b9d0-7739952a178a"},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"a4b2c451-12ae-11ea-b9d0-7739952a178a"},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"a4b2eb60-12ae-11ea-b9d0-7739952a178a"},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"a4b2eb61-12ae-11ea-b9d0-7739952a178a"},{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":4,"uid":"a4b27630-12ae-11ea-b9d0-7739952a178a"}],"parts":[{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}]
,"patterns":[{"name":"mr fingers - bassline pattern","classs":"channel","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"df","classs":"channel","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr fingers - pad - bar 3","classs":"channel","id":"215c80c0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr f - synth riff A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr f - synth riff B","classs":"channel","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
,{"name":"dd","classs":"channel","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.51,0,0,0,0,0,0,0,0.51,0,0,0],[0.51,0,0,0,0,0,0,0,0.51,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]],"classs":"channel"},{"name":"de","classs":"channel","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}]
,"presets":[{"name":"mr f - bassline","classs":"channel","controls":{"1":100,"2":"1","3":100,"4":"2","5":50,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":7,"13":0,"14":24,"15":0,"16":0},"id":"baae08f0-b9f3-11e9-8ff1-c78c1850856a"},{"name":"mr f - pad","classs":"channel","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":27,"8":11,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"b875cc10-ffd7-11e9-882b-9339974c6950"},{"name":"mr f - synth riff","classs":"channel","controls":{"1":30,"2":"2","3":44,"4":"0","5":0,"6":0,"7":16,"8":41,"9":5,"10":13,"11":2,"13":26,"14":21,"15":27,"16":18},"id":"38cecec0-ffe2-11e9-96e8-753abd87b36b"}]}
// (star)/





    /*

    {"name":"Mr Fingers - Can You Feel It","id":"b556e120-008d-11ea-8e43-713664be24b8","payload":[
    {"name":"silence before song start","id":"f140ddf0-00cc-11ea-9b3e-7fa0357ae18f","barloop":"4","barelapsed":0,"uid":"silencePart-008c-11ea-8e43-713664be24b8"}
    ,{"name":"C","id":"28a76040-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"f585a7a0-008c-11ea-8e43-713664be24b8"}
    ,{"name":"D","id":"512b1480-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"f8436810-008c-11ea-8e43-713664be24b8"}
    ,{"name":"E","id":"664aa470-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"f99b7e00-008c-11ea-8e43-713664be24b8"}
    ,{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"0092c970-008d-11ea-8e43-713664be24b8"}
    ,{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"0553d3f0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"096fc4d0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","barloop":"4","barelapsed":0,"uid":"0b9711a0-008d-11ea-8e43-713664be24b8"}
,{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"1e2f8180-008d-11ea-8e43-713664be24b8"}
    ,{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"3cd25ef0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"3ef9f9e0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"L (missing lead)","id":"e5b29490-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"403c8c00-008d-11ea-8e43-713664be24b8"}
    ,{"name":"M (missing lead)","id":"1abfaa60-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"4563d260-008d-11ea-8e43-713664be24b8"}
    ,{"name":"N","id":"066e2df0-0027-11ea-8d89-9f9e3f1bb09d","barloop":"4","barelapsed":0,"uid":"46a9bfe0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"O","id":"35d653d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"4c1477e0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"P","id":"48c966d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"53729b70-008d-11ea-8e43-713664be24b8"}
    ,{"name":"Q (missing lead)","id":"5ffe1b20-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"60a905e0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"R (missing lead)","id":"7a3735d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"6b7aa550-008d-11ea-8e43-713664be24b8"}
,{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"737752d0-008d-11ea-8e43-713664be24b8"}
    ,{"name":"S","id":"be9bc150-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"766746d0-008d-11ea-8e43-713664be24b8"}]}

// (star)/

    ], 



    conf: [ { 
      type: 'control', 
      instrumentName: 'Conductor', 
      name: 'Conductor Ctrl 01', 
      kitNumber: 0, 
      color: '#51ACBD',       
      controls: window.tweak.conductor5 //
    }] 
  },


  { 

    channelName: 'Player 2: Drums', // 
    trackSet: 5, 



    defaultPattern: 0, 
    patterns: [ 
    {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}        
/*,{"name":"dg","classs":"channel","id":"513b2170-001e-11ea-97f2-fb88ba95d42c","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dh","classs":"channel","id":"71faefa0-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"di","classs":"channel","id":"846e9970-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dj","classs":"channel","id":"91114f60-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dk","classs":"channel","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dl","classs":"channel","id":"a52e1550-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"da","classs":"channel","id":"b6abe2e0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"db","classs":"channel","id":"bc87fa50-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dc","classs":"channel","id":"c7c3cd40-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"de","classs":"channel","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dd","classs":"channel","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"df","classs":"channel","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
     (star)/],  

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ 
        {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 


    defaultPreset: 0, 
    presets: [
      {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
    ],  

  

    conf: window.kits.drum
  }, 




  { 
    sessionName: 'Mr Fingers - Can You Feel It (song editor)',

    channelName: 'Player 3: Poly Synth', 
    trackSet: 0, 



    defaultPreset: 1, 
    presets: [
      //{"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    {"name":"Poly Synth silence","classs":"channel","controls":{"1":9,"2":1,"3":10,"4":2,"5":0,"6":0,"7":8,"8":9,"9":8,"10":0,"11":0,"13":0,"14":0,"15":0,"16":0},"id":"399faf60-87a9-11e9-b6bb-4301b3e57a4f"},
//,{"name":"mr f - pad","classs":"channel","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":27,"8":11,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"b875cc10-ffd7-11e9-882b-9339974c6950"}
//,{"name":"mr f - pad 2","classs":"channel","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":8,"8":15,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"00235620-ffda-11e9-821b-4d8f145ebbda"}    

    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
//,{"name":"mr fingers - pad 1&2 b","classs":"channel","id":"ec047f40-ffd7-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
//,{"name":"mr fingers - pad - bar 3","classs":"channel","classs":"channel","id":"215c80c0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
//,{"name":"mr fingers - pad - bar 4","classs":"channel","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}

    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      //*
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 1)', // : yellow //'rgba(0, 161, 0, 1)', // : green
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  

      ///

  //*
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 1)', // : yellow
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },
  ///


    ] 
  }, 

//*
  { 
    sessionName: 'Mr Fingers - Can You Feel It (song editor)',

    channelName: 'Player 4: Poly Synth', 
    trackSet: 0, 


    defaultPreset: 1, 
    presets: [
      //{"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
     {"name":"Poly Synth silence","classs":"channel","controls":{"1":9,"2":1,"3":10,"4":2,"5":0,"6":0,"7":8,"8":9,"9":8,"10":0,"11":0,"13":0,"14":0,"15":0,"16":0},"id":"399faf60-87a9-11e9-b6bb-4301b3e57a4f"},
     //,{"name":"mr f - synth riff","classs":"channel","controls":{"1":30,"2":"2","3":44,"4":"0","5":0,"6":0,"7":16,"8":41,"9":5,"10":13,"11":2,"13":26,"14":21,"15":27,"16":18},"id":"38cecec0-ffe2-11e9-96e8-753abd87b36b"}         
    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}          
//,{"name":"mr f - synth riff A","classs":"channel","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
//,{"name":"mr f - synth riff B","classs":"channel","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', // : yellow
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  


      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', // : yellow
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },


    ] 
  },   


  { 
    sessionName: 'Mr Fingers - Can You Feel It (song editor)',

    channelName: 'Player 5: Poly Synth', 
    trackSet: 0, 



    defaultPreset: 1, 
    presets: [
      //{"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":30,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
     {"name":"Poly Synth silence","classs":"channel","controls":{"1":9,"2":1,"3":10,"4":2,"5":0,"6":0,"7":8,"8":9,"9":8,"10":0,"11":0,"13":0,"14":0,"15":0,"16":0},"id":"399faf60-87a9-11e9-b6bb-4301b3e57a4f"}          
    ], 


    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}          
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', // : yellow
        name: 'grid (c4 > c5)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
      },  


      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', // : yellow
        name: 'c1 > c2', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso, // window.draw.c4_c5_penta_minorCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth // CWilsoWAMidiSynthControls //aikeWebsynthControls           
      },


    ] 
  },   



];
*/















//*
// Blank song template

window.insConf13 = [ 

  { 
    sessionName: 'Blank song template',
    channelName: 'Player 1: Mono Synth', //
    trackSet: 0, 

    //*
    defaultPattern: 0, 
    patterns: [ // channel patterns
      {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}     
    ],  

    //*
    defaultPatternSeq: 0, 
    patternSeq: [         
      [ 
        {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 

    defaultPreset: 0, 
    presets: [
      {"name":"triangle bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
    ],  

    conf: [
      { 
        type: 'synth',
        instrumentName: 'AikeWebsynth1', 
        instrumentUrl: 'http://aikelab.net/websynth/',
        color: 'rgba(237, 49, 104, 1)', //: pink 'rgba(0, 161, 0, 1)', // : green
        name: 'c1 > c7', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharp,
        controls: window.launch.editor_controls // 
      },
    ] 
  }, 


  { channelName: 'Player 7: Channel Mixer/Part Sequencer', // Mixer/ 
    trackSet: 0, 


//* // comments parts + songs section of conductor to allow free saving of parts: song creations mode vs song playbakc mode

    parts: [ 
      //{"name":"mr f - reset part","id":"f140ddf0-00cc-11ea-9b3e-7fa0357ae18f","payload":[{"channelId":"0","presetId":"986c48c0-0092-11ea-93d4-6d3f19ef8d52","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"2","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}    
      {"name":"reset (6 channels)","id":"228172b0-58c2-11ea-a35a-b51f31781313","payload":[{"channelId":"0","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"2","kitId":3,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
    ],
    
    patternSeq: [     
    ],

     
    //defaultSong: 0, // prevent auto loading of song & its parts
    songs: [ 
      //{"name":"Blank song","id":"aa292740-58da-11ea-81f8-c9c0e5aaa36e","payload":[{"name":"reset (6 channels)","id":"228172b0-58c2-11ea-a35a-b51f31781313","barloop":"1","barelapsed":0,"uid":"8048c930-58da-11ea-81f8-c9c0e5aaa36e"}]}
      //,{"name":"blankSongA","id":"d77f9e70-58c8-11ea-835a-a399c2325fd9","payload":[{"name":"bs part 02","id":"85555640-58c7-11ea-962d-290ab04ae5b3","barloop":"8","barelapsed":5,"uid":"35073630-58c8-11ea-835a-a399c2325fd9"},{"name":"bs part 01","id":"2d058b30-58be-11ea-9930-03fc6fd220b2","barloop":"8","barelapsed":8,"uid":"6394a190-58c8-11ea-835a-a399c2325fd9"}],"parts":[{"name":"bs part 02","id":"85555640-58c7-11ea-962d-290ab04ae5b3","payload":[{"channelId":"0","presetId":"e523a9b0-58c6-11ea-9019-49b16df5d649","kitId":0,"ptnSeqList":[{"name":"ch1 A","id":"2b309990-58bd-11ea-8776-c18abc3ee9d5"}]},{"channelId":"2","presetId":"2","kitId":2,"ptnSeqList":[{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 B","id":"4b7a0c00-58c6-11ea-bd18-27429222c698"},{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 A","id":"38af0980-58bd-11ea-873c-1188b27b072f"}]},{"channelId":"3","presetId":"95acbb50-58bd-11ea-9f7e-ab62e4cb584f","kitId":0,"ptnSeqList":[{"name":"ch3 A","id":"537f3410-58bd-11ea-9f7e-ab62e4cb584f"}]},{"channelId":"5","presetId":"f1fbb690-58bd-11ea-a00e-a97a82881d04","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"f1fbb690-58bd-11ea-a00e-a97a82881d04","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"061a7850-58be-11ea-a757-ffe577ca3f53","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"bs part 01","id":"2d058b30-58be-11ea-9930-03fc6fd220b2","payload":[{"channelId":"0","presetId":"7534f6d0-58bd-11ea-8776-c18abc3ee9d5","kitId":0,"ptnSeqList":[{"name":"ch1 A","id":"2b309990-58bd-11ea-8776-c18abc3ee9d5"}]},{"channelId":"2","presetId":"2","kitId":2,"ptnSeqList":[{"name":"ch2 A","id":"38af0980-58bd-11ea-873c-1188b27b072f"}]},{"channelId":"3","presetId":"95acbb50-58bd-11ea-9f7e-ab62e4cb584f","kitId":0,"ptnSeqList":[{"name":"ch3 A","id":"537f3410-58bd-11ea-9f7e-ab62e4cb584f"}]},{"channelId":"4","presetId":"f1fbb690-58bd-11ea-a00e-a97a82881d04","kitId":0,"ptnSeqList":[{"name":"ch4 A","id":"b01ec050-58bd-11ea-a00e-a97a82881d04"}]},{"channelId":"5","presetId":"061a7850-58be-11ea-a757-ffe577ca3f53","kitId":0,"ptnSeqList":[{"name":"ch5 A","id":"de274440-58bd-11ea-a757-ffe577ca3f53"}]},{"channelId":"6","presetId":"20cc9390-58be-11ea-84de-092b2625dca4","kitId":0,"ptnSeqList":[{"name":"ch6 - A","id":"0dad6780-58be-11ea-84de-092b2625dca4"}]}]}],"patterns":[{"name":"ch1 A","classs":"channel","id":"2b309990-58bd-11ea-8776-c18abc3ee9d5","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"ch2 C","classs":"channel","id":"585277f0-58c6-11ea-bd18-27429222c698","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"ch2 B","id":"4b7a0c00-58c6-11ea-bd18-27429222c698","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]],"classs":"channel"},{"name":"ch2 A","classs":"channel","id":"38af0980-58bd-11ea-873c-1188b27b072f","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"ch3 A","classs":"channel","id":"537f3410-58bd-11ea-9f7e-ab62e4cb584f","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"ch4 A","classs":"channel","id":"b01ec050-58bd-11ea-a00e-a97a82881d04","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"ch5 A","classs":"channel","id":"de274440-58bd-11ea-a757-ffe577ca3f53","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"ch6 - A","classs":"channel","id":"0dad6780-58be-11ea-84de-092b2625dca4","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}],"presets":[{"name":"p1b","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":42,"6":0,"7":26,"8":19,"9":12,"10":61,"11":45,"12":11,"13":24,"14":43,"15":29,"16":53},"id":"e523a9b0-58c6-11ea-9019-49b16df5d649"},{"name":"p3","classs":"channel","controls":{"1":67,"2":"1","3":35,"4":"2","5":0,"6":1,"7":7,"8":8,"9":25,"10":10,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"95acbb50-58bd-11ea-9f7e-ab62e4cb584f"},{"name":"p4","classs":"channel","controls":{"1":67,"2":"0","3":35,"4":"3","5":0,"6":1,"7":7,"8":8,"9":43,"10":0,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"f1fbb690-58bd-11ea-a00e-a97a82881d04"},{"name":"p5","classs":"channel","controls":{"1":67,"2":"0","3":35,"4":"3","5":0,"6":1,"7":7,"8":8,"9":43,"10":0,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"061a7850-58be-11ea-a757-ffe577ca3f53"},{"name":"p1","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":42,"6":0,"7":26,"8":19,"9":12,"10":61,"11":20,"12":11,"13":13,"14":7,"15":29,"16":33},"id":"7534f6d0-58bd-11ea-8776-c18abc3ee9d5"},{"name":"p6","classs":"channel","controls":{"1":67,"2":"0","3":35,"4":"3","5":0,"6":1,"7":7,"8":8,"9":14,"10":22,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"20cc9390-58be-11ea-84de-092b2625dca4"}]} 
/*
{"name":"mrf 3","id":"ac23fab0-12ae-11ea-b9d0-7739952a178a","payload":[{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":3,"uid":"a4b29d40-12ae-11ea-b9d0-7739952a178a"},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","barloop":"4","barelapsed":0,"uid":"a4b2c450-12ae-11ea-b9d0-7739952a178a"},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"a4b2c451-12ae-11ea-b9d0-7739952a178a"},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"a4b2eb60-12ae-11ea-b9d0-7739952a178a"},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"a4b2eb61-12ae-11ea-b9d0-7739952a178a"},{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":4,"uid":"a4b27630-12ae-11ea-b9d0-7739952a178a"}]
,"parts":[{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}]
,"patterns":[{"name":"mr fingers - bassline pattern","classs":"channel","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"df","classs":"channel","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr fingers - pad - bar 3","classs":"channel","id":"215c80c0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr f - synth riff A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr f - synth riff B","classs":"channel","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
,{"name":"dd","classs":"channel","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,0.51,0,0,0,0,0,0,0,0.51,0,0,0],[0.51,0,0,0,0,0,0,0,0.51,0,0,0,0,0,0,0],[0.31,0,0,0,0.31,0,0,0.31,0,0.31,0,0,0.31,0,0.31,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}
,{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]],"classs":"channel"},{"name":"de","classs":"channel","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}]
,"presets":[{"name":"mr f - bassline","classs":"channel","controls":{"1":100,"2":"1","3":100,"4":"2","5":50,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":7,"13":0,"14":24,"15":0,"16":0},"id":"baae08f0-b9f3-11e9-8ff1-c78c1850856a"},{"name":"mr f - pad","classs":"channel","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":27,"8":11,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"b875cc10-ffd7-11e9-882b-9339974c6950"},{"name":"mr f - synth riff","classs":"channel","controls":{"1":30,"2":"2","3":44,"4":"0","5":0,"6":0,"7":16,"8":41,"9":5,"10":13,"11":2,"13":26,"14":21,"15":27,"16":18},"id":"38cecec0-ffe2-11e9-96e8-753abd87b36b"}]}
*/

{"name":"Mr Fingers - Can You Feel It","id":"cc0187f0-12e3-11ea-a991-7942cc7aea8c","payload":[{"name":"silence before song start","id":"f140ddf0-00cc-11ea-9b3e-7fa0357ae18f","barloop":"4","barelapsed":1,"uid":"ca815090-12e3-11ea-a991-7942cc7aea8c"},{"name":"C","id":"28a76040-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca8177a0-12e3-11ea-a991-7942cc7aea8c"},{"name":"D","id":"512b1480-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca8177a1-12e3-11ea-a991-7942cc7aea8c"},{"name":"E","id":"664aa470-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca8177a2-12e3-11ea-a991-7942cc7aea8c"},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca819eb0-12e3-11ea-a991-7942cc7aea8c"},{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca81c5c0-12e3-11ea-a991-7942cc7aea8c"},{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca81c5c1-12e3-11ea-a991-7942cc7aea8c"},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","barloop":"4","barelapsed":0,"uid":"ca81ecd0-12e3-11ea-a991-7942cc7aea8c"},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","barloop":"4","barelapsed":0,"uid":"ca81ecd1-12e3-11ea-a991-7942cc7aea8c"},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"ca8213e0-12e3-11ea-a991-7942cc7aea8c"},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca8213e1-12e3-11ea-a991-7942cc7aea8c"},{"name":"L (missing lead)","id":"e5b29490-0024-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca8213e2-12e3-11ea-a991-7942cc7aea8c"},{"name":"M (missing lead)","id":"1abfaa60-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca823af0-12e3-11ea-a991-7942cc7aea8c"},{"name":"N","id":"066e2df0-0027-11ea-8d89-9f9e3f1bb09d","barloop":"4","barelapsed":0,"uid":"ca823af1-12e3-11ea-a991-7942cc7aea8c"},{"name":"O","id":"35d653d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca823af2-12e3-11ea-a991-7942cc7aea8c"},{"name":"P","id":"48c966d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca826200-12e3-11ea-a991-7942cc7aea8c"},{"name":"Q (missing lead)","id":"5ffe1b20-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca826201-12e3-11ea-a991-7942cc7aea8c"},{"name":"R (missing lead)","id":"7a3735d0-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca826202-12e3-11ea-a991-7942cc7aea8c"},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","barloop":"4","barelapsed":0,"uid":"ca828910-12e3-11ea-a991-7942cc7aea8c"},{"name":"S","id":"be9bc150-0025-11ea-8282-152d75bc84da","barloop":"4","barelapsed":0,"uid":"ca828911-12e3-11ea-a991-7942cc7aea8c"}],"parts":[{"name":"mr f - reset part","id":"f140ddf0-00cc-11ea-9b3e-7fa0357ae18f","payload":[{"channelId":"0","presetId":"986c48c0-0092-11ea-93d4-6d3f19ef8d52","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"2","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"C","id":"28a76040-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"da","id":"b6abe2e0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"D","id":"512b1480-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"db","id":"bc87fa50-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"E","id":"664aa470-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dc","id":"c7c3cd40-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"F","id":"e340d8a0-0021-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"G","id":"14d80190-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"H","id":"4b71f8f0-0022-11ea-a3a1-81b692587e37","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"38cecec0-ffe2-11e9-96e8-753abd87b36b","kitId":0,"ptnSeqList":[{"name":"mr f - lead synth A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc"},{"name":"mr f - lead synth B","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"I","id":"793e9a70-0024-11ea-a34e-4bc5beb07551","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dd","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"J","id":"9d0dee60-0024-11ea-9ce2-719e2ab29a84","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"K","id":"c7fe35d0-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"df","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"L (missing lead)","id":"e5b29490-0024-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dh","id":"71faefa0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"M (missing lead)","id":"1abfaa60-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"de","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"O","id":"35d653d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dj","id":"91114f60-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"P","id":"48c966d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dk","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"Q (missing lead)","id":"5ffe1b20-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dl","id":"a52e1550-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"R (missing lead)","id":"7a3735d0-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"dk","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 3","id":"215c80c0-ffd8-11e9-882b-9339974c6950"},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"S","id":"be9bc150-0025-11ea-8282-152d75bc84da","payload":[{"channelId":"0","presetId":"baae08f0-b9f3-11e9-8ff1-c78c1850856a","kitId":0,"ptnSeqList":[{"name":"mr fingers - bassline pattern","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a"}]},{"channelId":"2","kitId":5,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"b875cc10-ffd7-11e9-882b-9339974c6950","kitId":0,"ptnSeqList":[{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950"}]},{"channelId":"4","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"399faf60-87a9-11e9-b6bb-4301b3e57a4f","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}],"patterns":[{"name":"mr fingers - bassline pattern","classs":"channel","id":"eb91e770-b9f3-11e9-8ff1-c78c1850856a","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"da","classs":"channel","id":"b6abe2e0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"mr fingers - pad 1&2 b","id":"ec047f40-ffd7-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr fingers - pad - bar 3","classs":"channel","id":"215c80c0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"mr fingers - pad - bar 4","id":"5bed2dc0-ffd8-11e9-882b-9339974c6950","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"db","classs":"channel","id":"bc87fa50-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dc","classs":"channel","id":"c7c3cd40-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dd","classs":"channel","id":"d33e2fd0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"mr f - synth riff A","id":"617ff110-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"classs":"channel"},{"name":"mr f - synth riff B","classs":"channel","id":"6ff65590-ffe1-11e9-b24b-6750068e3cdc","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"de","classs":"channel","id":"f5942a30-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"df","classs":"channel","id":"de6912d0-0016-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dg","id":"513b2170-001e-11ea-97f2-fb88ba95d42c","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]],"classs":"channel"},{"name":"dh","id":"71faefa0-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]],"classs":"channel"},{"name":"dj","classs":"channel","id":"91114f60-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dk","classs":"channel","id":"9c9a09d0-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"dl","classs":"channel","id":"a52e1550-0017-11ea-b44f-ffd52ad2a0f0","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}],"presets":[{"name":"mr f - bassline 3","classs":"channel","controls":{"1":78,"2":"2","3":80,"4":"2","5":20,"6":0,"7":0,"8":22,"9":35,"10":19,"11":13,"12":13,"13":58,"14":14,"15":73,"16":64},"id":"986c48c0-0092-11ea-93d4-6d3f19ef8d52"},{"name":"mr f - bassline","classs":"channel","controls":{"1":100,"2":"1","3":100,"4":"2","5":50,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":7,"13":0,"14":24,"15":0,"16":0},"id":"baae08f0-b9f3-11e9-8ff1-c78c1850856a"},{"name":"mr f - pad","classs":"channel","controls":{"1":50,"2":1,"3":22,"4":2,"5":0,"6":0,"7":27,"8":11,"9":0,"10":14,"11":6,"13":7,"14":7,"15":19,"16":0},"id":"b875cc10-ffd7-11e9-882b-9339974c6950"},{"name":"mr f - synth riff","classs":"channel","controls":{"1":30,"2":"2","3":44,"4":"0","5":0,"6":0,"7":16,"8":41,"9":5,"10":13,"11":2,"13":26,"14":21,"15":27,"16":18},"id":"38cecec0-ffe2-11e9-96e8-753abd87b36b"}]}


    ], 
// */


    conf: [ { 
      type: 'control', 
      instrumentName: 'Conductor', 
      name: 'Conductor Ctrl 01', 
      kitNumber: 0, 
      color: '#51ACBD',       
      controls: window.tweak.conductor6 //
    }] 
  },


  { 

    channelName: 'Player 2: Drums', // 
    trackSet: 3, 

    defaultPattern: 0, 
    patterns: [   
      {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ],  

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ 
        {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 

    //*
    defaultPreset: 0, 
    presets: [
      {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
    ], 
    //*/ 

    conf: window.kits.drum
  }, 




  { 
    channelName: 'Player 3: Poly Synth', 
      sessionName: 'Blank song template',
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":5,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 

    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 1)', 
        name: 'grid (c1 > c7)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth 
      },  

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 1)', 
        name: 'keyboard (c1 > c7)', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth
      },
    ] 
  }, 


  { 
    channelName: 'Player 4: Poly Synth', 
      sessionName: 'Blank song template',
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":5,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 

    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.8)', 
        name: 'grid (c1 > c7)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth 
      },  

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.8)', 
        name: 'keyboard (c1 > c7)', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth
      },
    ] 
  }, 


  { 
    channelName: 'Player 5: Poly Synth', 
      sessionName: 'Blank song template',
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":5,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 

    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', 
        name: 'grid (c1 > c7)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth 
      },  

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', 
        name: 'keyboard (c1 > c7)', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth
      },
    ] 
  },   

  { 
    channelName: 'Player 6: Poly Synth', 
      sessionName: 'Blank song template',
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":5,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 

    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.4)', 
        name: 'grid (c1 > c7)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth 
      },  

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.4)', 
        name: 'keyboard (c1 > c7)', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth
      },
    ] 
  }, 

];
// */












//*
// Blank song template (without channel 1 as monosynth)

window.insConf14 = [ 

  /*{ 
    sessionName: 'Blank song template',
    channelName: 'Player 1: Mono Synth', //
    trackSet: 0, 

    //*
    defaultPattern: 0, 
    patterns: [ // channel patterns
      {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}     
    ],  

    //*
    defaultPatternSeq: 0, 
    patternSeq: [         
      [ 
        {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 

    defaultPreset: 0, 
    presets: [
      {"name":"triangle bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
    ],  

    conf: [
      { 
        type: 'synth',
        instrumentName: 'AikeWebsynth1', 
        instrumentUrl: 'http://aikelab.net/websynth/',
        color: 'rgba(237, 49, 104, 1)', //: pink 'rgba(0, 161, 0, 1)', // : green
        name: 'c1 > c7', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharp,
        controls: window.launch.editor_controls // 
      },
    ] 
  }, */ 

  { 
    sessionName: 'Blank song template w/o Mono Synth',
    channelName: 'Player 1: Poly Synth', 
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":5,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 

    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.2)', 
        name: 'grid (c1 > c7)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth 
      },  

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.2)', 
        name: 'keyboard (c1 > c7)', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth
      },
    ] 
  },   


  { channelName: 'Player 7: Channel Mixer/Part Sequencer', 
    trackSet: 0, 

    parts: [       
      {"name":"reset (6 channels)","id":"228172b0-58c2-11ea-a35a-b51f31781313","payload":[{"channelId":"0","presetId":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"2","kitId":3,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"3","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"5","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"e403bbf0-7362-11e9-b3d8-e577360b9e86","kitId":0,"ptnSeqList":[{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]}
    ],
    
    patternSeq: [     
    ],

    songs: [       
      {"name":"blankSongA","id":"d77f9e70-58c8-11ea-835a-a399c2325fd9","payload":[{"name":"bs part 02","id":"85555640-58c7-11ea-962d-290ab04ae5b3","barloop":"8","barelapsed":5,"uid":"35073630-58c8-11ea-835a-a399c2325fd9"},{"name":"bs part 01","id":"2d058b30-58be-11ea-9930-03fc6fd220b2","barloop":"8","barelapsed":8,"uid":"6394a190-58c8-11ea-835a-a399c2325fd9"}],"parts":[{"name":"bs part 02","id":"85555640-58c7-11ea-962d-290ab04ae5b3","payload":[{"channelId":"0","presetId":"e523a9b0-58c6-11ea-9019-49b16df5d649","kitId":0,"ptnSeqList":[{"name":"ch1 A","id":"2b309990-58bd-11ea-8776-c18abc3ee9d5"}]},{"channelId":"2","presetId":"2","kitId":2,"ptnSeqList":[{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 B","id":"4b7a0c00-58c6-11ea-bd18-27429222c698"},{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 C","id":"585277f0-58c6-11ea-bd18-27429222c698"},{"name":"ch2 A","id":"38af0980-58bd-11ea-873c-1188b27b072f"}]},{"channelId":"3","presetId":"95acbb50-58bd-11ea-9f7e-ab62e4cb584f","kitId":0,"ptnSeqList":[{"name":"ch3 A","id":"537f3410-58bd-11ea-9f7e-ab62e4cb584f"}]},{"channelId":"5","presetId":"f1fbb690-58bd-11ea-a00e-a97a82881d04","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"4","presetId":"f1fbb690-58bd-11ea-a00e-a97a82881d04","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]},{"channelId":"6","presetId":"061a7850-58be-11ea-a757-ffe577ca3f53","kitId":0,"ptnSeqList":[{"name":"reset","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}]}]},{"name":"bs part 01","id":"2d058b30-58be-11ea-9930-03fc6fd220b2","payload":[{"channelId":"0","presetId":"7534f6d0-58bd-11ea-8776-c18abc3ee9d5","kitId":0,"ptnSeqList":[{"name":"ch1 A","id":"2b309990-58bd-11ea-8776-c18abc3ee9d5"}]},{"channelId":"2","presetId":"2","kitId":2,"ptnSeqList":[{"name":"ch2 A","id":"38af0980-58bd-11ea-873c-1188b27b072f"}]},{"channelId":"3","presetId":"95acbb50-58bd-11ea-9f7e-ab62e4cb584f","kitId":0,"ptnSeqList":[{"name":"ch3 A","id":"537f3410-58bd-11ea-9f7e-ab62e4cb584f"}]},{"channelId":"4","presetId":"f1fbb690-58bd-11ea-a00e-a97a82881d04","kitId":0,"ptnSeqList":[{"name":"ch4 A","id":"b01ec050-58bd-11ea-a00e-a97a82881d04"}]},{"channelId":"5","presetId":"061a7850-58be-11ea-a757-ffe577ca3f53","kitId":0,"ptnSeqList":[{"name":"ch5 A","id":"de274440-58bd-11ea-a757-ffe577ca3f53"}]},{"channelId":"6","presetId":"20cc9390-58be-11ea-84de-092b2625dca4","kitId":0,"ptnSeqList":[{"name":"ch6 - A","id":"0dad6780-58be-11ea-84de-092b2625dca4"}]}]}],"patterns":[{"name":"ch1 A","classs":"channel","id":"2b309990-58bd-11ea-8776-c18abc3ee9d5","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"ch2 C","classs":"channel","id":"585277f0-58c6-11ea-bd18-27429222c698","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"ch2 B","id":"4b7a0c00-58c6-11ea-bd18-27429222c698","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]],"classs":"channel"},{"name":"ch2 A","classs":"channel","id":"38af0980-58bd-11ea-873c-1188b27b072f","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},{"name":"ch3 A","classs":"channel","id":"537f3410-58bd-11ea-9f7e-ab62e4cb584f","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"ch4 A","classs":"channel","id":"b01ec050-58bd-11ea-a00e-a97a82881d04","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"ch5 A","classs":"channel","id":"de274440-58bd-11ea-a757-ffe577ca3f53","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"ch6 - A","classs":"channel","id":"0dad6780-58be-11ea-84de-092b2625dca4","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}],"presets":[{"name":"p1b","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":42,"6":0,"7":26,"8":19,"9":12,"10":61,"11":45,"12":11,"13":24,"14":43,"15":29,"16":53},"id":"e523a9b0-58c6-11ea-9019-49b16df5d649"},{"name":"p3","classs":"channel","controls":{"1":67,"2":"1","3":35,"4":"2","5":0,"6":1,"7":7,"8":8,"9":25,"10":10,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"95acbb50-58bd-11ea-9f7e-ab62e4cb584f"},{"name":"p4","classs":"channel","controls":{"1":67,"2":"0","3":35,"4":"3","5":0,"6":1,"7":7,"8":8,"9":43,"10":0,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"f1fbb690-58bd-11ea-a00e-a97a82881d04"},{"name":"p5","classs":"channel","controls":{"1":67,"2":"0","3":35,"4":"3","5":0,"6":1,"7":7,"8":8,"9":43,"10":0,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"061a7850-58be-11ea-a757-ffe577ca3f53"},{"name":"p1","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":42,"6":0,"7":26,"8":19,"9":12,"10":61,"11":20,"12":11,"13":13,"14":7,"15":29,"16":33},"id":"7534f6d0-58bd-11ea-8776-c18abc3ee9d5"},{"name":"p6","classs":"channel","controls":{"1":67,"2":"0","3":35,"4":"3","5":0,"6":1,"7":7,"8":8,"9":14,"10":22,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"20cc9390-58be-11ea-84de-092b2625dca4"}]} 
    ], 


    conf: [ { 
      type: 'control', 
      instrumentName: 'Conductor', 
      name: 'Conductor Ctrl 01', 
      kitNumber: 0, 
      color: '#51ACBD',       
      controls: window.tweak.conductor6 //
    }] 
  },


  { 

    channelName: 'Player 2: Drums', // 
    trackSet: 3, 

    defaultPattern: 0, 
    patterns: [   
      {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ],  

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ 
        {"name":"reset","classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      ]
    ], 

    //*
    defaultPreset: 0, 
    presets: [
      {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"} // "992":0 = patternSeq disabled
    ], 
    //*/ 

    conf: window.kits.drum
  }, 




  { 
    channelName: 'Player 3: Poly Synth', 
      sessionName: 'Blank song template',
    trackSet: 1, // channel 3 defaults with keyboard mode not grid mode

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":5,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 

    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 1)', 
        name: 'grid (c1 > c7)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth 
      },  

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 1)', 
        name: 'keyboard (c1 > c7)', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth
      },
    ] 
  }, 


  { 
    channelName: 'Player 4: Poly Synth', 
      sessionName: 'Blank song template',
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":5,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 

    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.8)', 
        name: 'grid (c1 > c7)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth 
      },  

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.8)', 
        name: 'keyboard (c1 > c7)', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth
      },
    ] 
  }, 


  { 
    channelName: 'Player 5: Poly Synth', 
      sessionName: 'Blank song template',
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":5,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 

    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', 
        name: 'grid (c1 > c7)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth 
      },  

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.6)', 
        name: 'keyboard (c1 > c7)', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth
      },
    ] 
  },   

  { 
    channelName: 'Player 6: Poly Synth', 
      sessionName: 'Blank song template',
    trackSet: 0, 

    defaultPreset: 0, 
    presets: [
      {"name":"Poly Synth default preset","classs":"channel","controls":{"1":15,"2":1,"3":35,"4":2,"5":0,"6":1,"7":50,"8":70,"9":5,"10":14,"11":5,"13":1,"14":1,"15":1,"16":1},"id":"e403bbf0-7362-11e9-b3d8-e577360b9e86"}
    ], 

    defaultPattern: 0, 
    patterns: [ 
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    ], 

    defaultPatternSeq: 0, 
    patternSeq: [     
      [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
    ],    

    conf: [
      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.4)', 
        name: 'grid (c1 > c7)', 
        kitNumber: 0,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'grid', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth 
      },  

      { 
        type: 'synth',
        instrumentName: 'CWilsoWAMidiSynth', 
        instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
        color: 'rgba(253, 206, 31, 0.4)', 
        name: 'keyboard (c1 > c7)', 
        kitNumber: 1,      
        tracks: window.draw.c1_c7_majorSharpCWilso,
        inputMode: 'keyboard', // 'keyboard', 'grid'
        controls: window.launch.editor_controls_CWilso_Polysynth
      },
    ] 
  }, 

];
// */











session5ConductorControls[0].x.value = 58; // ch1 vol
session5ConductorControls[1].x.value = 30;
session5ConductorControls[2].x.value = 22;
session5ConductorControls[3].x.value = 16;
session5ConductorControls[4].x.value = 25;
session5ConductorControls[5].x.value = 30;
session5ConductorControls[6].x.value = 16; // ch7 vol - 100

session5ConductorControls[7].x.value = 80; // tempo

session5ConductorControls[10].x.value = 0; // ch1 bar offest
session5ConductorControls[11].x.value = 1;
        session5ConductorControls[12].x.value = 2;
session5ConductorControls[13].x.value = 3;
session5ConductorControls[14].x.value = 4;
session5ConductorControls[15].x.value = 2;
session5ConductorControls[16].x.value = 3; 

session5ConductorControls[17].x.value = 0; // ch8 (conductor) bar offset
session5ConductorControls[18].x.value = 24; // general kickout bars










// NDW 2016 Trempo - workshop
window.insConf6 = [ 

{ sessionName: 'NDW2016_workshop', // Ep #6 Electropixel #6
  channelName: 'Ch1 Bass guitar',  
  trackSet: 0, 

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"TaLaLi Bassline A (synkoped)","classs":"channel","id":"81c22550-6675-11e6-b5e9-51d55022d761","tracks":[[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0]]},
    {"name":"TaLaLi Bassline B (continuous)","classs":"channel","id":"128a5ad0-6676-11e6-b509-c753c06f4910","tracks":[[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0]]},
    {"name":"calme ta basse","classs":"channel", "id":"a61d9d90-667e-11e6-a6fa-97a17043872f","tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0]]}
    //{"name":"4/4","classs":"channel","id":"85d646b0-71e9-11e6-ae6b-cbeced753752","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]} 
  ],  

  conf: [{ 
    type: 'samples', 
    instrumentName: 'Sampler', 
    name: 'c1-c2 (3 notes) - Bass guitar', 
    kitNumber: 0, 
    color: 'rgba(0, 171, 157, 1)',
    tracks: [{ name: 'C2', sampleUrl: 'Basse/C2.wav'}, /*{ name: 'B1', sampleUrl: 'Basse/B1.wav'}, { name: 'A1', sampleUrl: 'Basse/A1.wav'}, */ { name: 'G1', sampleUrl: 'Basse/G1.wav'}, /*{ name: 'F1', sampleUrl: 'Basse/F1.wav'}, { name: 'E1', sampleUrl: 'Basse/E1.wav'}, { name: 'D1', sampleUrl: 'Basse/D1.wav'}, */ { name: 'C1', sampleUrl: 'Basse/C1.wav'} ], 
    //tracks: [{ name: 'C4', sampleUrl: 'Guitar/C4.wav'},/* { name: 'B3', sampleUrl: 'Guitar/B3.wav'}, { name: 'A3', sampleUrl: 'Guitar/A3.wav'},*/ { name: 'G3', sampleUrl: 'Guitar/G3.wav'},/* { name: 'F3', sampleUrl: 'Guitar/F3.wav'}, { name: 'E3', sampleUrl: 'Guitar/E3.wav'}, { name: 'D3', sampleUrl: 'Guitar/D3.wav'},*/ { name: 'C3', sampleUrl: 'Guitar/C3.wav'} ],
    controls: smpPrgChangeSavePattern
  }] 
}, 



{ channelName: 'Ch8 Conductor',
  trackSet: 0, 
  conf: [ { 
    type: 'control', 
    instrumentName: 'Conductor', 
    name: 'Conductor Ctrl 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: session5ConductorControls
  }] 
}, 



{ channelName: 'Ch2 Synth bass', 
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [
    {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"},
    {"name":"Baonlle","classs":"channel","controls":{"1":10,"2":"2","3":46,"4":"1","5":76,"6":0,"7":10,"8":11,"9":16,"10":40,"11":68,"12":26,"13":25,"14":51,"15":20,"16":12},"id":"4f802750-667e-11e6-89c6-9b6aaf4bf5b7"},
    {"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}}        
    /*{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"double osc bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d0000","controls":{1:40, 2:1, 3:100, 4:0, 5:0, 6:0, 7:15, 8:0, 9:0, 10:66, 11:20, 12:35, 13:0, 14:30, 15:80, 16:0}},*/
  ],

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"tri_note_mellow","classs":"channel","id":"8577ef70-6677-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
    {"name":"Pois sauteurs","classs":"channel",  "id":"70c15650-667e-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
  ], 

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(0, 161, 0, 1)',
    name: 'c1 > c2', 
    kitNumber: 0,      
    tracks: window.draw.c1_c2_penta_minor,
    controls: aikeWebsynthControlsReduced           
  }] 
}, 



{ channelName: 'Ch3 Guitar/Piano/Drums',  
  trackSet: 0, 

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"GuitarMellow","classs":"channel","id":"5d67c810-6678-11e6-afb2-e793ea1788a6","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0],[0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0]]},
    {"name":"jazzy piano","classs":"channel","id":"6c57d720-667d-11e6-afb2-e793ea1788a6","tracks":[[0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    //{"name":"4/4","classs":"channel","id":"85d646b0-71e9-11e6-ae6b-cbeced753752","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}  
  ],  

  conf: [
    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Guitar - c3-c4 (3 notes)', 
      kitNumber: 0, 
      color: 'rgba(149, 55, 166, 1)', //color: 'rgba(253, 206, 31, 0.75)', 'rgba(237, 49, 104, 0.9)',
      tracks: [{ name: 'C4', sampleUrl: 'Guitar/C4.wav'},/* { name: 'B3', sampleUrl: 'Guitar/B3.wav'}, { name: 'A3', sampleUrl: 'Guitar/A3.wav'},*/ { name: 'G3', sampleUrl: 'Guitar/G3.wav'},/* { name: 'F3', sampleUrl: 'Guitar/F3.wav'}, { name: 'E3', sampleUrl: 'Guitar/E3.wav'}, { name: 'D3', sampleUrl: 'Guitar/D3.wav'},*/ { name: 'C3', sampleUrl: 'Guitar/C3.wav'} ],
      controls: window.launch.sample_prg
    },

    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Piano - c4-c5 (3 notes)', 
      kitNumber: 1, 
      color: 'rgba(149, 55, 166, 0.5)', //color: 'rgba(253, 206, 31, 0.75)',
      tracks: [{ name: 'C5', sampleUrl: 'Piano/C5.wav'},/* { name: 'B4', sampleUrl: 'Piano/B4.wav'}, { name: 'A4', sampleUrl: 'Piano/A4.wav'},*/ { name: 'G4', sampleUrl: 'Piano/G4.wav'},/* { name: 'F4', sampleUrl: 'Piano/F4.wav'}, { name: 'E4', sampleUrl: 'Piano/E4.wav'}, { name: 'D4', sampleUrl: 'Piano/D4.wav'},*/ { name: 'C4', sampleUrl: 'Piano/C4.wav'} ], 
      controls: window.launch.sample_prg
    },

    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Drumkit 01', 
      kitNumber: 2, 
      color: 'rgba(149, 55, 166, 0.5)', 
      tracks: [{name: 'Snare', sampleUrl: 'LINN/snare.wav'}, {name: 'Hihat', sampleUrl: 'breakbeat13/hihat.wav'}, {name: 'Kick', sampleUrl: 'Kit8/kick.wav'} ], 
      controls: window.launch.sample_prg
    }    

        
  ] 
}, 



{ channelName: 'Ch4 Synth (c2>c3)', // MidFreq
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [    
    {"name":"DyaWowoySND","classs":"channel","controls":{"1":53,"2":"0","3":30,"4":"1","5":93,"6":11,"7":8,"8":34,"9":51,"10":59,"11":75,"12":39,"13":78,"14":25,"15":50,"16":63},"id":"79398eb0-6679-11e6-aa2f-73993aa5fd3f"},
    {"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}}        
  ],

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"DyaWowoyMellow","classs":"channel","id":"a9be3630-6679-11e6-aa2f-73993aa5fd3f","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
  ], 

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(253, 118, 8, 1)',
    name: 'c2 > c3', 
    kitNumber: 0,      
    tracks: window.draw.c2_c3_penta_minor,
    controls: aikeWebsynthControlsReduced           
  }] 
}, 



{ channelName: 'Ch5 Hang/Flute',  
  trackSet: 0, 

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}, 
    {"name":"pontec","classs":"channel","id":"63753dd0-667a-11e6-82ff-f7a50cae174e","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0]]},
    {"name":"pontec 2","classs":"channel","id":"d41d0bb0-667c-11e6-82ff-f7a50cae174e","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0]]}
  ],  

  conf: [
    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Hang - c4-c5 (3 notes)', 
      kitNumber: 0, 
      color: 'rgba(253, 206, 31, 1)', // 'rgba(226, 0, 6, 1)'
      tracks: [{ name: 'C5', sampleUrl: 'spacedrum/Chro13C5.mp3'},/* { name: 'B4', sampleUrl: 'spacedrum/Chro12B4.mp3'}, { name: 'A4', sampleUrl: 'spacedrum/Chro10A4.mp3'},*/ { name: 'G4', sampleUrl: 'spacedrum/Chro8G4.mp3'}, /*, { name: 'F4', sampleUrl: 'spacedrum/Chro6F4.mp3'}, { name: 'E4', sampleUrl: 'spacedrum/Chro5E4.mp3'}, { name: 'D4', sampleUrl: 'spacedrum/Chro3D4.mp3'},*/ { name: 'C4', sampleUrl: 'spacedrum/Chro1C4.mp3'} ], 
      controls: window.launch.sample_prg
    },

    {
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Flute - c4-c5 (3 notes)', 
      kitNumber: 1, 
      color: 'rgba(253, 206, 31, 0.65)', 
      tracks: [{ name: 'C5', sampleUrl: 'Flute/C5.wav'},/* { name: 'B4', sampleUrl: 'Flute/B4.wav'}, { name: 'A4', sampleUrl: 'Flute/A4.wav'},*/ { name: 'G4', sampleUrl: 'Flute/G4.wav'}, /*, { name: 'F4', sampleUrl: 'Flute/F4.wav'}, { name: 'E4', sampleUrl: 'Flute/E4.wav'}, { name: 'D4', sampleUrl: 'Flute/D4.wav'},*/ { name: 'C4', sampleUrl: 'Flute/C4.wav'} ],
      controls: window.launch.sample_prg
    },

    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Drumkit 02', 
      kitNumber: 2, 
      color: 'rgba(253, 206, 31, 0.35)', 
      tracks: [{name: 'Snare', sampleUrl: 'CR78/snare.wav'}, {name: 'Hihat', sampleUrl: '12-TR-909/909 HHCL 1.wav'}, {name: 'Kick', sampleUrl: 'breakbeat13/kick.wav'} ], 
      controls: window.launch.sample_prg
    }       

  ] 
}, 



{ channelName: 'Ch6 Synth (c2>c4)', // HiFq Syn A
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [
    {"name":"square","type":"AikeWebsynth1","classs":"channel","id":"2fbddcv123cd7f89ff54f","controls":{1:9, 2:1, 3:35, 4:2, 5:27, 6:0, 7:66, 8:80, 9:0, 10:0, 11:40, 12:96, 13:0, 14:0, 15:30, 16:70,"992":0}}    
  ],

  defaultPattern: 0, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la ronde","classs":"channel","id":"180d4700-667c-11e6-82b9-0508ed9d1306","tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
    /*{"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}*/     
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ //{"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f"},
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      //{"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f"} 
    ]
  ], 

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(226, 0, 6, 1)',
    name: 'c2 > c4', 
    kitNumber: 0,      
    tracks: window.draw.c2_c4_penta_minor,
    controls: patternSeqOff//aikeWebsynthControls         
  }] 
}, 

      

{ channelName: 'Ch7 Synth (c3>c5)', // Ch7 Highfreq Synth B  HiFq Syn B
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [
    //{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"le clownSOUND","type":"AikeWebsynth1","classs":"channel","id":"2fbddfd9fd9dvbvb2b2b","controls":{1:59, 2:1, 3:19, 4:2, 5:36, 6:0, 7:26, 8:45, 9:11, 10:7, 11:55, 12:68, 13:0, 14:20, 15:78, 16:13,"992":0}}    
  ],

  defaultPattern: 0, 
  patterns: [ // channel patterns  
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    /*{"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}*/     
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
  ],   

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(237, 49, 104, 1)',
    name: 'c3 > c5', 
    kitNumber: 0,      
    tracks: window.draw.c3_c5_penta_minor,
    controls: patternSeqOff          
  }] 
}, 





];










var session7ConductorControls = (JSON.parse(JSON.stringify(window.tweak.conductor))); 
session7ConductorControls[0].x.value = 58; // ch1 vol
session7ConductorControls[1].x.value = 30;
session7ConductorControls[2].x.value = 22;
session7ConductorControls[3].x.value = 16;
session7ConductorControls[4].x.value = 25;
session7ConductorControls[5].x.value = 30;
session7ConductorControls[6].x.value = 16; // ch7 vol - 100

session7ConductorControls[7].x.value = 115; // tempo - 115

session7ConductorControls[10].x.value = 0; // ch1 bar offest
session7ConductorControls[11].x.value = 0; // 8
        session7ConductorControls[12].x.value = 8;
session7ConductorControls[13].x.value = 0; // 18
session7ConductorControls[14].x.value = 0; // 26
session7ConductorControls[15].x.value = 0; // 38
session7ConductorControls[16].x.value = 0; //48 - 40

session7ConductorControls[17].x.value = 0; // ch8 (conductor) bar offset - 100 - 56
session7ConductorControls[18].x.value = 0; // general kickout bars // 64 - 48

var smpPrgChangeSavePattern= (JSON.parse(JSON.stringify(window.launch.change_ptn_change_kit)));


var changeKit= (JSON.parse(JSON.stringify(window.launch.change_ptn_change_kit)));
changeKit.splice(0, 1); // remove Change pattern
changeKit[0].name = 'Change mode';


CWilsoWAMidiSynthControls.splice(1, 1); // remove Save pattern
CWilsoWAMidiSynthControls.splice(3, 1); // remove Save sound
CWilsoWAMidiSynthControls.splice(3, 1); // remove Pattern Seq


/*

var changePattern = CWilsoWAMidiSynthControls[0];
CWilsoWAMidiSynthControls[0] = CWilsoWAMidiSynthControls[1];
CWilsoWAMidiSynthControls[1] = changePattern;
CWilsoWAMidiSynthControls[0].name = 'Change mode';


var changePattern= (JSON.parse(JSON.stringify(window.launch.change_ptn_change_kit)));
changePattern.splice(1, 1);

*/


var patternSeqOffNoSave = (JSON.parse(JSON.stringify(patternSeqOff)));
patternSeqOffNoSave.splice(1, 1); // remove Save pattern
patternSeqOffNoSave.splice(3, 1); // remove Save sound
patternSeqOffNoSave.splice(1, 1); // remove Note range

//console.log ('CWilsoWAMidiSynthControls', CWilsoWAMidiSynthControls);

// AperoCC_fev_2017
window.insConf7 = [ 

{ sessionName: 'EJS #1', // AperoCC_fev_2017
  channelName: '1: Drums (samples)',  
  trackSet: 0, 

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
  ],  

  conf: [

    { type: 'samples', instrumentName: 'Sampler', 
      name: 'TheCheebacabra1', 
      kitNumber: 0, color: 'rgba(253, 118, 8, 1)', 
      tracks: [{ name: 'Tom 3', sampleUrl: 'TheCheebacabra1/tom3.wav'}, { name: 'Tom 2', sampleUrl: 'TheCheebacabra1/tom2.wav'}, { name: 'Tom 1', sampleUrl: 'TheCheebacabra1/tom1.wav'}, { name: 'Snare', sampleUrl: 'TheCheebacabra1/snare.wav'}, { name: 'Hihat', sampleUrl: 'TheCheebacabra1/hihat.wav'}, { name: 'Kick', sampleUrl: 'TheCheebacabra1/kick.wav'} ], 
      controls: smpPrgChangeSavePattern       
    },

    { type: 'samples', instrumentName: 'Sampler', 
      name: 'CR78', 
      kitNumber: 1, color: 'rgba(253, 118, 8, 0.95)', 
      tracks: [{name: 'Tom 3', sampleUrl: 'CR78/tom3.wav'}, {name: 'Tom 2', sampleUrl: 'CR78/tom2.wav'}, {name: 'Tom 1', sampleUrl: 'CR78/tom1.wav'}, {name: 'Snare', sampleUrl: 'CR78/snare.wav'}, {name: 'Hihat', sampleUrl: 'CR78/hihat.wav'}, {name: 'Kick', sampleUrl: 'CR78/kick.wav'} ],
      controls: smpPrgChangeSavePattern
     }, 

    { type: 'samples', instrumentName: 'Sampler', 
      name: 'Breakbeat13', 
      kitNumber: 2, color: 'rgba(253, 118, 8, 0.9)', 
      tracks: [{name: 'Tom 3', sampleUrl: 'breakbeat13/tom3.wav'}, {name: 'Tom 2', sampleUrl: 'breakbeat13/tom2.wav'}, {name: 'Tom 1', sampleUrl: 'breakbeat13/tom1.wav'}, {name: 'Snare', sampleUrl: 'breakbeat13/snare.wav'}, {name: 'Hihat', sampleUrl: 'breakbeat13/hihat.wav'}, {name: 'Kick', sampleUrl: 'breakbeat13/kick.wav'} ],
      controls: smpPrgChangeSavePattern
    }, 

    { type: 'samples', instrumentName: 'Sampler', 
      name: 'Linn', 
      kitNumber: 3, color: 'rgba(253, 118, 8, 0.85)', 
      tracks: [{name: 'Tom 3', sampleUrl: 'LINN/tom3.wav'}, {name: 'Tom 2', sampleUrl: 'LINN/tom2.wav'}, {name: 'Tom 1', sampleUrl: 'LINN/tom1.wav'}, {name: 'Snare', sampleUrl: 'LINN/snare.wav'}, {name: 'Hihat', sampleUrl: 'LINN/hihat.wav'}, {name: 'Kick', sampleUrl: 'LINN/kick.wav'} ],
      controls: smpPrgChangeSavePattern
    },      

    { type: 'samples', instrumentName: 'Sampler', 
      name: 'Kit8', 
      kitNumber: 4, color: 'rgba(253, 118, 8, 0.8)', 
      tracks: [{name: 'Tom 3', sampleUrl: 'Kit8/tom3.wav'}, {name: 'Tom 2', sampleUrl: 'Kit8/tom2.wav'}, {name: 'Tom 1', sampleUrl: 'Kit8/tom1.wav'}, {name: 'Snare', sampleUrl: 'Kit8/snare.wav'}, {name: 'Hihat', sampleUrl: 'Kit8/hihat.wav'}, {name: 'Kick', sampleUrl: 'Kit8/kick.wav'} ],
      controls: smpPrgChangeSavePattern
    },      

    { type: 'samples', instrumentName: 'Sampler', 
      name: 'TR909', 
      kitNumber: 5, color: 'rgba(253, 118, 8, 0.7)', 
      tracks: [/*{ name: 'Cymbal', sampleUrl: 'Drums/Ah1 Ride.wav'}, { name: 'Rimshot', sampleUrl: 'Drums/Ch1 RimShot.wav'},*/ { name: 'Rimshot', sampleUrl: '12-TR-909/909 RIM.wav'}, { name: 'Opened hihat', sampleUrl: '12-TR-909/909 HHOP.wav'}, { name: 'Clap', sampleUrl: '12-TR-909/909 CLAP.wav'}, { name: 'Snare', sampleUrl: '12-TR-909/909 SD10.wav'}, { name: 'Closed hihat', sampleUrl: '12-TR-909/909 HHCL 1.wav'}, { name: 'Kick', sampleUrl: '12-TR-909/909 KIK2.wav' } ],
      controls: smpPrgChangeSavePattern
    }     
  ] 

}, 



{ channelName: '8: Conductor',
  trackSet: 0, 
  conf: [ { 
    type: 'control', 
    instrumentName: 'Conductor', 
    name: 'Conductor Ctrl 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: session7ConductorControls
  }] 
}, 



{ channelName: '2: Bass (mono)', 
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [
    {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"},
    {"name":"Baonlle","classs":"channel","controls":{"1":10,"2":"2","3":46,"4":"1","5":76,"6":0,"7":10,"8":11,"9":16,"10":40,"11":68,"12":26,"13":25,"14":51,"15":20,"16":12},"id":"4f802750-667e-11e6-89c6-9b6aaf4bf5b7"},
    {"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}}        
    /*{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"double osc bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d0000","controls":{1:40, 2:1, 3:100, 4:0, 5:0, 6:0, 7:15, 8:0, 9:0, 10:66, 11:20, 12:35, 13:0, 14:30, 15:80, 16:0}},*/
  ],

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"tri_note_mellow","classs":"channel","id":"8577ef70-6677-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
    {"name":"Pois sauteurs","classs":"channel",  "id":"70c15650-667e-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
  ], 

  conf: [
    { 
      type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      instrumentUrl: 'http://aikelab.net/websynth/',
      color: 'rgba(0, 161, 0, 1)',
      name: 'c0 > c1', 
      kitNumber: 0,      
      tracks: window.draw.c0_c1_penta_minor,
      controls: aikeWebsynthControlsNoSave           
    },

    { 
      type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      instrumentUrl: 'http://aikelab.net/websynth/',
      color: 'rgba(0, 161, 0, 0.8)',
      name: 'c1 > c2', 
      kitNumber: 1,      
      tracks: window.draw.c1_c2_penta_minor,
      controls: aikeWebsynthControlsNoSave           
    },

    { 
      type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      instrumentUrl: 'http://aikelab.net/websynth/',
      color: 'rgba(0, 161, 0, 0.6)',
      name: 'c2 > c3', 
      kitNumber: 2,      
      tracks: window.draw.c2_c3_penta_minor,
      controls: aikeWebsynthControlsNoSave           
    },    

  ] 
}, 



{ 

  channelName: '3: Monosynth', // polyphonic // Synth (poly)
  trackSet: 0, // 1 

  /*defaultPreset: 0, 
  presets: [
    {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"}, // "992":0 = patternSeq disabled
    {"name":"Baonlle","classs":"channel","controls":{"1":10,"2":"2","3":46,"4":"1","5":76,"6":0,"7":10,"8":11,"9":16,"10":40,"11":68,"12":26,"13":25,"14":51,"15":20,"16":12},"id":"4f802750-667e-11e6-89c6-9b6aaf4bf5b7"}
  ], */

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"tri_note_mellow","classs":"channel","id":"8577ef70-6677-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
    {"name":"Pois sauteurs","classs":"channel","id":"70c15650-667e-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
  ], 

  /*defaultPatternSeq: 0, // this does not seem to be iniailized when trackSet: 1 aka non grid kit
  patternSeq: [     
    [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605"} ]
  ],   */  

  conf: [

  
    { 
      type: 'synth',
      instrumentName: 'CWilsoWAMidiSynth', 
      instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
      color: 'rgba(0, 161, 0, 1)',
      name: 'keyboard (c4 > c7', 
      kitNumber: 0, //1
      tracks: window.draw.c4_c7_penta_minorCWilso, // c4_c5_penta_minorCWilso
      inputMode: 'keyboard', // 'keyboard', 'grid'
      controls: window.tweak.CWilsoWAMidiSynth // CWilsoWAMidiSynthControls // aikeWebsynthControls changeKit.concat(window.tweak.CWilsoWAMidiSynth)          
    }, 

{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(253, 118, 8, 1)',
    name: 'c2 > c3 (synth)', 
    kitNumber: 3,      
    tracks: window.draw.c2_c3_penta_minor,
    controls: aikeWebsynthControlsNoSave           
  }      
 

  ] 
}, 

{ 

  channelName: '4: Drum Synth', 
  trackSet: 0, 

  conf: [
    { 
      type: 'synth',
      instrumentName: 'JoeSullivanDrumSynth', 
      instrumentUrl: 'http://tiny-808.com/',
      color: 'rgba(0, 81, 0, 1)',
      name: 'c1 > c2', 
      kitNumber: 0,      
      tracks: window.draw.drumsynth_01,
      inputMode: 'grid', // 'keyboard', 'grid'
      controls: changePattern //aikeWebsynthControls patternSeqOff          
    }

  ] 
},

/*{ channelName: 'Ch4 Synth (c2>c3)', // MidFreq
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [    
    {"name":"DyaWowoySND","classs":"channel","controls":{"1":53,"2":"0","3":30,"4":"1","5":93,"6":11,"7":8,"8":34,"9":51,"10":59,"11":75,"12":39,"13":78,"14":25,"15":50,"16":63},"id":"79398eb0-6679-11e6-aa2f-73993aa5fd3f"},
    {"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}}        
  ],

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"DyaWowoyMellow","classs":"channel","id":"a9be3630-6679-11e6-aa2f-73993aa5fd3f","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
  ], 

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(253, 118, 8, 1)',
    name: 'c2 > c3', 
    kitNumber: 0,      
    tracks: window.draw.c2_c3_penta_minor,
    controls: aikeWebsynthControlsReduced           
  }] 
}, */





{ channelName: '5: Guitar/Piano/Drums/Synth',  
  trackSet: 0, 


  defaultPreset: 0, // this line ad myabe following ones imperatif to make preset drop down menu appear
  presets: [
    {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"},
    {"name":"Baonlle","classs":"channel","controls":{"1":10,"2":"2","3":46,"4":"1","5":76,"6":0,"7":10,"8":11,"9":16,"10":40,"11":68,"12":26,"13":25,"14":51,"15":20,"16":12},"id":"4f802750-667e-11e6-89c6-9b6aaf4bf5b7"},
    {"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}}        
    /*{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"double osc bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d0000","controls":{1:40, 2:1, 3:100, 4:0, 5:0, 6:0, 7:15, 8:0, 9:0, 10:66, 11:20, 12:35, 13:0, 14:30, 15:80, 16:0}},*/
  ],

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"GuitarMellow","classs":"channel","id":"5d67c810-6678-11e6-afb2-e793ea1788a6","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0],[0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0]]},
    {"name":"jazzy piano","classs":"channel","id":"6c57d720-667d-11e6-afb2-e793ea1788a6","tracks":[[0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1],[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    //{"name":"4/4","classs":"channel","id":"85d646b0-71e9-11e6-ae6b-cbeced753752","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]}  
  ],  

  conf: [
    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Guitar - c3-c4 (3 notes)', 
      kitNumber: 0, 
      color: 'rgba(149, 55, 166, 1)', //color: 'rgba(253, 206, 31, 0.75)', 'rgba(237, 49, 104, 0.9)',
      tracks: [{ name: 'C4', sampleUrl: 'Guitar/C4.wav'},/* { name: 'B3', sampleUrl: 'Guitar/B3.wav'}, { name: 'A3', sampleUrl: 'Guitar/A3.wav'},*/ { name: 'G3', sampleUrl: 'Guitar/G3.wav'},/* { name: 'F3', sampleUrl: 'Guitar/F3.wav'}, { name: 'E3', sampleUrl: 'Guitar/E3.wav'}, { name: 'D3', sampleUrl: 'Guitar/D3.wav'},*/ { name: 'C3', sampleUrl: 'Guitar/C3.wav'} ],
      controls: smpPrgChangeSavePattern
    },

    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Piano - c4-c5 (3 notes)', 
      kitNumber: 1, 
      color: 'rgba(149, 55, 166, 0.5)', //color: 'rgba(253, 206, 31, 0.75)',
      tracks: [{ name: 'C5', sampleUrl: 'Piano/C5.wav'},/* { name: 'B4', sampleUrl: 'Piano/B4.wav'}, { name: 'A4', sampleUrl: 'Piano/A4.wav'},*/ { name: 'G4', sampleUrl: 'Piano/G4.wav'},/* { name: 'F4', sampleUrl: 'Piano/F4.wav'}, { name: 'E4', sampleUrl: 'Piano/E4.wav'}, { name: 'D4', sampleUrl: 'Piano/D4.wav'},*/ { name: 'C4', sampleUrl: 'Piano/C4.wav'} ], 
      controls: smpPrgChangeSavePattern
    },

    { 
      type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Drumkit 01', 
      kitNumber: 2, 
      color: 'rgba(149, 55, 166, 0.5)', 
      tracks: [{name: 'Snare', sampleUrl: 'LINN/snare.wav'}, {name: 'Hihat', sampleUrl: 'breakbeat13/hihat.wav'}, {name: 'Kick', sampleUrl: 'Kit8/kick.wav'} ], 
      controls: smpPrgChangeSavePattern
    },


{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(253, 118, 8, 1)',
    name: 'c2 > c3 (synth)', 
    kitNumber: 3,      
    tracks: window.draw.c2_c3_penta_minor,
    controls: aikeWebsynthControlsNoSave           
  }    


        
  ] 
}, 






/*
{ 
 
  channelName: '5: Synth B (poly)', // polyphonic !!! buggy osund emitted !!
  trackSet: 0, // 1 

  /*defaultPreset: 0, 
  presets: [
    {"name":"TRI_Bass","classs":"channel","controls":{"1":100,"2":"0","3":24,"4":"1","5":81,"6":0,"7":26,"8":78,"9":43,"10":23,"11":51,"12":33,"13":13,"14":7,"15":29,"16":33,"992":1},"id":"2d4bc2e0-6677-11e6-89c6-9b6aaf4bf5b7"}, // "992":0 = patternSeq disabled
    {"name":"Baonlle","classs":"channel","controls":{"1":10,"2":"2","3":46,"4":"1","5":76,"6":0,"7":10,"8":11,"9":16,"10":40,"11":68,"12":26,"13":25,"14":51,"15":20,"16":12},"id":"4f802750-667e-11e6-89c6-9b6aaf4bf5b7"}
  ], /

  defaultPattern: 0, 
  patterns: [ 
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"tri_note_mellow","classs":"channel","id":"8577ef70-6677-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
    {"name":"Pois sauteurs","classs":"channel","id":"70c15650-667e-11e6-89c6-9b6aaf4bf5b7","tracks":[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
  ], 

  /*defaultPatternSeq: 0, // this does not seem to be iniailized when trackSet: 1 aka non grid kit
  patternSeq: [     
    [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605"} ]
  ],   /  

  conf: [

    { 
      type: 'synth',
      instrumentName: 'CWilsoWAMidiSynth', 
      instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
      color: 'rgba(0, 161, 0, 1)',
      name: 'grid (c4 > c5)', 
      kitNumber: 0,      
      tracks: window.draw.c4_c5_penta_minorCWilso, // c4_c5_penta_minorCWilso
      inputMode: 'grid', // 'keyboard', 'grid'
      controls: CWilsoWAMidiSynthControls // CWilsoWAMidiSynthControls // aikeWebsynthControls           
    }/*,    
    { 
      type: 'synth',
      instrumentName: 'CWilsoWAMidiSynth', 
      instrumentUrl: 'https://webaudiodemos.appspot.com/midi-synth/index.html',
      color: 'rgba(0, 161, 0, 1)',
      name: 'keyboard (c4 > c7', 
      kitNumber: 0, //1
      tracks: window.draw.c4_c7_penta_minorCWilso, // c4_c5_penta_minorCWilso
      inputMode: 'keyboard', // 'keyboard', 'grid'
      controls: window.tweak.CWilsoWAMidiSynth // CWilsoWAMidiSynthControls // aikeWebsynthControls changeKit.concat(window.tweak.CWilsoWAMidiSynth)          
    }/
 

  ] 
}, */



{ channelName: 'Ch6 Synth (c2>c4)', // HiFq Syn A
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [
    {"name":"square","type":"AikeWebsynth1","classs":"channel","id":"2fbddcv123cd7f89ff54f","controls":{1:9, 2:1, 3:35, 4:2, 5:27, 6:0, 7:66, 8:80, 9:0, 10:0, 11:40, 12:96, 13:0, 14:0, 15:30, 16:70,"992":0}},
    {"name":"le clownSOUND","type":"AikeWebsynth1","classs":"channel","id":"2fbddfd9fd9dvbvb2b2b","controls":{1:59, 2:1, 3:19, 4:2, 5:36, 6:0, 7:26, 8:45, 9:11, 10:7, 11:55, 12:68, 13:0, 14:20, 15:78, 16:13,"992":0}}    
  ],

  defaultPattern: 0, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la ronde","classs":"channel","id":"180d4700-667c-11e6-82b9-0508ed9d1306","tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],[0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}    
    /*{"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}*/     
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ //{"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f"},
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      //{"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f"} 
    ]
  ], 

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(226, 0, 6, 1)',
    name: 'c2 > c4', 
    kitNumber: 0,      
    tracks: window.draw.c2_c4_penta_minor,
    controls: patternSeqOffNoSave//aikeWebsynthControls         
  }] 
}, 

      

{ channelName: 'Ch7 Synth (c3>c5)', // Ch7 Highfreq Synth B  HiFq Syn B
  trackSet: 0, 

  defaultPreset: 0, 
  presets: [
    //{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"le clownSOUND","type":"AikeWebsynth1","classs":"channel","id":"2fbddfd9fd9dvbvb2b2b","controls":{1:59, 2:1, 3:19, 4:2, 5:36, 6:0, 7:26, 8:45, 9:11, 10:7, 11:55, 12:68, 13:0, 14:20, 15:78, 16:13,"992":0}},
    {"name":"square","type":"AikeWebsynth1","classs":"channel","id":"2fbddcv123cd7f89ff54f","controls":{1:9, 2:1, 3:35, 4:2, 5:27, 6:0, 7:66, 8:80, 9:0, 10:0, 11:40, 12:96, 13:0, 14:0, 15:30, 16:70,"992":0}}            
  ],

  defaultPattern: 0, 
  patterns: [ // channel patterns  
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    /*{"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}*/     
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"} ]
  ],   

  conf: [{ 
    type: 'synth',
    instrumentName: 'AikeWebsynth1', 
    instrumentUrl: 'http://aikelab.net/websynth/',
    color: 'rgba(237, 49, 104, 1)',
    name: 'c3 > c5', 
    kitNumber: 0,      
    tracks: window.draw.c3_c5_penta_minor,
    controls: patternSeqOffNoSave          
  }] 
}, 





];





/*

  c1_c2_major: [{ name: 'C2', note: -5 }, { name: 'B1', note: -6 }, { name: 'A1', note: -8 }, { name: 'G1', note: -10 }, { name: 'F1', note: -12 }, { name: 'E1', note: -13 }, { name: 'D1', note: -15 }, { name: 'C1', note: -17 } ],
  c2_c3_penta_minor: [{ name: 'C3', note: 7 }, { name: 'Bb2', note: 5 }, { name: 'G2', note: 2 }, { name: 'F2', note: 0 }, { name: 'Eb2', note: -2 }, { name: 'C2', note: -5 } ],
  c3_c4_penta_minor: [{ name: 'C4', note: 19 }, { name: 'Bb3', note: 17 }, { name: 'G3', note: 14 }, { name: 'F3', note: 12 }, { name: 'Eb3', note: 10 }, { name: 'C3', note: 7 } ],



  c0_c1_penta_minor: [{ name: 'C1', note: -17 }, { name: 'Bb0', note: -19 }, { name: 'G0', note: -22 }, { name: 'F0', note: -24 }, { name: 'Eb0', note: -26 }, { name: 'C0', note: -29 } ],
  c1_c2_penta_minor: [{ name: 'C2', note: -5 }, { name: 'Bb1', note: -7 }, { name: 'G1', note: -10 }, { name: 'F1', note: -12 }, { name: 'Eb1', note: -14 }, { name: 'C1', note: -17 } ],
  c2_c3_penta_minor: [{ name: 'C3', note: 7 }, { name: 'Bb2', note: 5 }, { name: 'G2', note: 2 }, { name: 'F2', note: 0 }, { name: 'Eb2', note: -2 }, { name: 'C2', note: -5 } ],

*/


//patternSeqOff[6].x.value = 1; // 1: patternSeq on

//console.log('patternSeqOff', patternSeqOff, patternSeqOff[6]);

var patternSeqOff2 = (JSON.parse(JSON.stringify(aikeWebsynthControls)));


patternSeqOff2[6].x.value = 1; //  1: patternSeq on


patternSeqOff2.splice(1, 1); // remove Save pattern
//patternSeqOff2.splice(2, 1); // remove change sound
patternSeqOff2.splice(3, 1); // remove Save sound




// remove low sounding triangle synth osc option
//delete patternSeqOff2[7].x.option[0]; //.splice(0, 1);

patternSeqOff2[1].name = 'hauteur note (pitch)';



var sess8ConductorCtrls = (JSON.parse(JSON.stringify(window.tweak.conductor16a)));



var ptnEditOff = (JSON.parse(JSON.stringify(patternSeqOff2)));
//ptnEditOff[3].y.value = 0; // ptnEditOff
//delete ptnEditOff[3];
ptnEditOff.splice(3, 1); // remove ptn edit
ptnEditOff.splice(3, 1); // remove ptn seq


//console.log('patternSeqOff2', ptnEditOff); // patternSeqOff2


var blue1   = 'rgba(0, 171, 157, 0.6)';
var yellow1 = 'rgba(253, 206, 31, 0.6)';
var green1  = 'rgba(0, 161, 0, 0.6)';
var orange1 = 'rgba(253, 118, 8, 0.6)';
var red1    = 'rgba(226, 0, 6, 0.6)';

var blue2   = 'rgba(0, 171, 157, 0.7)';
var yellow2 = 'rgba(253, 206, 31, 0.7)';
var green2  = 'rgba(0, 161, 0, 0.7)';
var orange2 = 'rgba(253, 118, 8, 0.7)';
var red2    = 'rgba(226, 0, 6, 0.7)';

var blue3   = 'rgba(0, 171, 157, 0.8)';
var yellow3 = 'rgba(253, 206, 31, 0.8)';
var green3  = 'rgba(0, 161, 0, 0.8)';
var orange3 = 'rgba(253, 118, 8, 0.8)';
var red3    = 'rgba(226, 0, 6, 0.8)';

var blue4   = 'rgba(0, 171, 157, 0.9)';
var yellow4 = 'rgba(253, 206, 31, 0.9)';
var green4  = 'rgba(0, 161, 0, 0.9)';
var orange4 = 'rgba(253, 118, 8, 0.9)';
var red4    = 'rgba(226, 0, 6, 0.9)';


// AikeWebsynth1
var sess8PitchNotes = [    
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: green1,
      name: 'F1', 
      kitNumber: 0,      
      tracks: [{ name: 'F1', note: -12 } ],        
    }, 
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: orange1,
      name: 'G1', 
      kitNumber: 1,      
      tracks: [{ name: 'G1', note: -10 } ],        
    }, 
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: red1,
      name: 'Bb1', 
      kitNumber: 2,      
      tracks: [{ name: 'Bb1', note: -7 } ],        
    },     
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: blue2,
      name: 'C2', 
      kitNumber: 3,      
      tracks: [{ name: 'C2', note: -5 } ],        
    },   
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: yellow2,
      name: 'Eb2', 
      kitNumber: 4,      
      tracks: [{ name: 'Eb2', note: -2 } ],        
    }, 



    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: green2,
      name: 'F2', 
      kitNumber: 5,      
      tracks: [{ name: 'F2', note: 0 } ],        
    }, 
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: orange2,
      name: 'G2', 
      kitNumber: 6,      
      tracks: [{ name: 'G2', note: 2 } ],        
    }, 
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: red2,
      name: 'Bb2', 
      kitNumber: 7,      
      tracks: [{ name: 'Bb2', note: 5 } ],        
    },     
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: blue3,
      name: 'C3', 
      kitNumber: 8,      
      tracks: [{ name: 'C3', note: 7 } ],        
    },   
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: yellow3,
      name: 'Eb3', 
      kitNumber: 9,      
      tracks: [{ name: 'Eb3', note: 10 } ],        
    }, 





    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: green3,
      name: 'F3', 
      kitNumber: 10,      
      tracks: [{ name: 'F3', note: 12 } ],        
    }, 
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: orange3,
      name: 'G3', 
      kitNumber: 11,      
      tracks: [{ name: 'G3', note: 14 } ],        
    }, 
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: red3,
      name: 'Bb3', 
      kitNumber: 12,      
      tracks: [{ name: 'Bb3', note: 17 } ],        
    },     
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: blue4,
      name: 'C4', 
      kitNumber: 13,      
      tracks: [{ name: 'C4', note: 19 } ],        
    },   
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: yellow4,
      name: 'Eb4', 
      kitNumber: 14,      
      tracks: [{ name: 'Eb4', note: 22 } ],        
    }, 


  ]; 










window['s8PitchCh1'] = (JSON.parse(JSON.stringify(sess8PitchNotes)));
window['s8PitchCh1'].splice(6, 9); // 6,9

/*window['s8PitchCh1'][0].controls = ptnEditOff;
window['s8PitchCh1'][1].controls = ptnEditOff;
window['s8PitchCh1'][2].controls = ptnEditOff;
window['s8PitchCh1'][3].controls = ptnEditOff;
window['s8PitchCh1'][4].controls = ptnEditOff;
window['s8PitchCh1'][5].controls = ptnEditOff;*/

//console.log('wi', window['s8PitchCh1']);

for (var d=2; d<10; d++) { // 10

  //if (typeof window['insConf'][b] !== 'undefined') {

var remFNotes = d-1;  

window['s8PitchCh'+d] = (JSON.parse(JSON.stringify(sess8PitchNotes)));
window['s8PitchCh'+d].splice(0, remFNotes);
window['s8PitchCh'+d].splice(6, 8);
window['s8PitchCh'+d][0].kitNumber = 0;
window['s8PitchCh'+d][1].kitNumber = 1;
window['s8PitchCh'+d][2].kitNumber = 2;
window['s8PitchCh'+d][3].kitNumber = 3;
window['s8PitchCh'+d][4].kitNumber = 4;
window['s8PitchCh'+d][5].kitNumber = 5;

/*if (d<4) {

window['s8PitchCh'+d][0].controls = ptnEditOff;
window['s8PitchCh'+d][1].controls = ptnEditOff;
window['s8PitchCh'+d][2].controls = ptnEditOff;
window['s8PitchCh'+d][3].controls = ptnEditOff;
window['s8PitchCh'+d][4].controls = ptnEditOff;
window['s8PitchCh'+d][5].controls = ptnEditOff;

}*/

}






var sess8PitchNotesDouble = [   

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'F2-G2', 
      kitNumber: 5,      
      tracks: [{ name: 'G2', note: 2 }, { name: 'F2', note: 0 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'G2-Bb2', 
      kitNumber: 7,      
      tracks: [{ name: 'Bb2', note: 5 }, { name: 'G2', note: 2 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'Bb2-C3', 
      kitNumber: 7,      
      tracks: [{ name: 'C3', note: 7 }, { name: 'Bb2', note: 5 } ],        
    },     

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'C3-Eb3', 
      kitNumber: 8,      
      tracks: [{ name: 'Eb3', note: 10 }, { name: 'C3', note: 7 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'Eb3-F3', 
      kitNumber: 9,      
      tracks: [{ name: 'F3', note: 12 }, { name: 'Eb3', note: 10 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'F3-G3', 
      kitNumber: 10,      
      tracks: [{ name: 'G3', note: 14 }, { name: 'F3', note: 12 } ],        
    }, 
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'G3-Bb3', 
      kitNumber: 11,      
      tracks: [{ name: 'Bb3', note: 17 }, { name: 'G3', note: 14 } ],        
    }, 
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'Bb3-C4', 
      kitNumber: 12,      
      tracks: [{ name: 'C4', note: 19 }, { name: 'Bb3', note: 17 } ],        
    },     
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'C4-Eb4', 
      kitNumber: 13,      
      tracks: [{ name: 'Eb4', note: 22 }, { name: 'C4', note: 19 } ],        
    },   
    /*{ 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'Eb4', 
      kitNumber: 14,      
      tracks: [{ name: 'Eb4', note: 22 } ],        
    },*/ 

  ]; 



delete window['s8PitchCh9'];
window['s8PitchCh9'] = (JSON.parse(JSON.stringify(sess8PitchNotesDouble)));
window['s8PitchCh9'].splice(3, 10);  
window['s8PitchCh9'][0].kitNumber = 0;
window['s8PitchCh9'][1].kitNumber = 1;
window['s8PitchCh9'][2].kitNumber = 2;




for (var d=10; d<15; d++) {

var remFNotes = d-1;  

//delete window['s8PitchCh'+d];
window['s8PitchCh'+d] = (JSON.parse(JSON.stringify(sess8PitchNotesDouble)));
window['s8PitchCh'+d].splice(0, d-8);
window['s8PitchCh'+d].splice(3, 10);
window['s8PitchCh'+d][0].kitNumber = 0;
window['s8PitchCh'+d][1].kitNumber = 1;
window['s8PitchCh'+d][2].kitNumber = 2;

}

/*
window['s8Pitchch16'] = (JSON.parse(JSON.stringify(sess8PitchNotesDouble)));
window['s8Pitchch16'].splice(3, 10);  
window['s8Pitchch16'][0].kitNumber = 0;
window['s8Pitchch16'][1].kitNumber = 1;
window['s8Pitchch16'][2].kitNumber = 2;
*/

//console.log('windows8PitchCh9', window['s8PitchCh10']); // patternSeqOff2


//console.log('patternSeqOff2', s8PitchCh2); // patternSeqOff2



var s8preset = [

    {"name":"fulim","id":"fd5a6b00-5616-11e7-b178-1b2c4ec8904d", "type":"AikeWebsynth1", "classs":"channel","controls":{"1":40,"2":"2","3":50,"4":"1","5":0,"6":0,"7":10,"8":20,"9":20,"10":31,"11":30,"12":50,"13":0,"14":80,"15":40,"16":20,"992":0}},
    //{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    //{"name":"le clownSOUND","type":"AikeWebsynth1","classs":"channel","id":"2fbddfd9fd9dvbvb2b2b","controls":{1:59, 2:1, 3:19, 4:2, 5:36, 6:0, 7:26, 8:45, 9:11, 10:7, 11:55, 12:68, 13:0, 14:20, 15:78, 16:13,"992":0}},
    //{"name":"square","type":"AikeWebsynth1","classs":"channel","id":"2fbddcv123cd7f89ff54f","controls":{1:9, 2:1, 3:35, 4:2, 5:27, 6:0, 7:66, 8:80, 9:0, 10:0, 11:40, 12:96, 13:0, 14:0, 15:30, 16:70,"992":0}}            
  ];


for (var e=1; e<16; e++) {

window['s8DefPresetCh'+e] = (JSON.parse(JSON.stringify(s8preset)));
window['s8DefPresetCh'+e][0].id= 's8_defpre_ch'+e;

}  

//console.log('s8DefPreset: ', window['s8DefPresetCh1']); //








// COPY OF session 9 en plus:




var patternSeqOff2 = (JSON.parse(JSON.stringify(aikeWebsynthControls)));


patternSeqOff2[6].x.value = 1; //  1: patternSeq on


patternSeqOff2.splice(1, 1); // remove Save pattern
//patternSeqOff2.splice(2, 1); // remove change sound
patternSeqOff2.splice(3, 1); // remove Save sound

patternSeqOff2.splice(5, 18); // remove all sliders after ptnSeq



// remove low sounding triangle synth osc option
//delete patternSeqOff2[7].x.option[0]; //.splice(0, 1);

patternSeqOff2[1].name = 'hauteur note (pitch)';



var sess9ConductorCtrls = (JSON.parse(JSON.stringify(window.tweak.conductor16a)));



var ptnEditOff = (JSON.parse(JSON.stringify(patternSeqOff2)));
//ptnEditOff[3].y.value = 0; // ptnEditOff
//delete ptnEditOff[3];
ptnEditOff.splice(3, 1); // remove ptn edit
ptnEditOff.splice(3, 1); // remove ptn seq




var blue1   = 'rgba(0, 171, 157, 0.6)';
var yellow1 = 'rgba(253, 206, 31, 0.6)';
var green1  = 'rgba(0, 161, 0, 0.6)';
var orange1 = 'rgba(253, 118, 8, 0.6)';
var red1    = 'rgba(226, 0, 6, 0.6)';
var purple1 = 'rgba(149, 55, 166, 0.6)';
var pink1   = 'rgba(237, 49, 104, 0.6)';

var blue2   = 'rgba(0, 171, 157, 0.7)';
var yellow2 = 'rgba(253, 206, 31, 0.7)';
var green2  = 'rgba(0, 161, 0, 0.7)';
var orange2 = 'rgba(253, 118, 8, 0.7)';
var red2    = 'rgba(226, 0, 6, 0.7)';
var purple2 = 'rgba(149, 55, 166, 0.7)';
var pink2   = 'rgba(237, 49, 104, 0.7)';

var blue3   = 'rgba(0, 171, 157, 0.8)';
var yellow3 = 'rgba(253, 206, 31, 0.8)';
var green3  = 'rgba(0, 161, 0, 0.8)';
var orange3 = 'rgba(253, 118, 8, 0.8)';
var red3    = 'rgba(226, 0, 6, 0.8)';
var purple3 = 'rgba(149, 55, 166, 0.8)';
var pink3   = 'rgba(237, 49, 104, 0.8)';

var blue4   = 'rgba(0, 171, 157, 0.9)';
var yellow4 = 'rgba(253, 206, 31, 0.9)';
var green4  = 'rgba(0, 161, 0, 0.9)';
var orange4 = 'rgba(253, 118, 8, 0.9)';
var red4    = 'rgba(226, 0, 6, 0.9)';
var purple4 = 'rgba(149, 55, 166, 0.9)';
var pink4   = 'rgba(237, 49, 104, 0.9)';






// AikeWebsynth1
var sess9PitchNotes = [    
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: green1,
      name: 'C3 Marimba', 
      kitNumber: 0,      
      tracks: [ { name: 'C3', sampleUrl: 'Marimba/C3.wav'} ], },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: orange1,
      name: 'D3 Marimba', 
      kitNumber: 1,      
      tracks: [ { name: 'D3', sampleUrl: 'Marimba/D3.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: red1,
      name: 'E3 Marimba', 
      kitNumber: 2,      
      tracks: [ { name: 'E3', sampleUrl: 'Marimba/E3.wav'} ],         
    },     
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: purple1,
      name: 'F3 Marimba', 
      kitNumber: 3,      
      tracks: [ { name: 'F3', sampleUrl: 'Marimba/F3.wav'} ],         
    },   
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: pink1,
      name: 'G3 Marimba', 
      kitNumber: 4,      
      tracks: [ { name: 'G3', sampleUrl: 'Marimba/G3.wav'} ],        
    }, 

    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue2,
      name: 'A3 Marimba', 
      kitNumber: 5,      
      tracks: [ { name: 'A3', sampleUrl: 'Marimba/A3.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: yellow2,
      name: 'B3 Marimba', 
      kitNumber: 6,      
      tracks: [ { name: 'B3', sampleUrl: 'Marimba/B3.wav'} ],    
    },








    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: green2,
      name: 'C4 Piano', 
      kitNumber: 0,      
      tracks: [ { name: 'C4', sampleUrl: 'Piano/C4.wav'} ], },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: orange2,
      name: 'D4 Piano', 
      kitNumber: 1,      
      tracks: [ { name: 'D4', sampleUrl: 'Piano/D4.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: red2,
      name: 'E4 Piano', 
      kitNumber: 2,      
      tracks: [ { name: 'E4', sampleUrl: 'Piano/E4.wav'} ],         
    },     
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: purple2,
      name: 'F4 Piano', 
      kitNumber: 3,      
      tracks: [ { name: 'F4', sampleUrl: 'Piano/F4.wav'} ],         
    },   
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: pink2,
      name: 'G4 Piano', 
      kitNumber: 4,      
      tracks: [ { name: 'G4', sampleUrl: 'Piano/G4.wav'} ],        
    }, 

    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue3,
      name: 'A4 Piano', 
      kitNumber: 5,      
      tracks: [ { name: 'A4', sampleUrl: 'Piano/A4.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: yellow3,
      name: 'B4 Piano', 
      kitNumber: 6,      
      tracks: [ { name: 'B4', sampleUrl: 'Piano/B4.wav'} ],    
    },


 { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: green1,
      name: 'C3 Marimba', 
      kitNumber: 0,      
      tracks: [ { name: 'C3', sampleUrl: 'Marimba/C3.wav'} ], },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: orange1,
      name: 'D3 Marimba', 
      kitNumber: 1,      
      tracks: [ { name: 'D3', sampleUrl: 'Marimba/D3.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: red1,
      name: 'E3 Marimba', 
      kitNumber: 2,      
      tracks: [ { name: 'E3', sampleUrl: 'Marimba/E3.wav'} ],         
    },     
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: purple1,
      name: 'F3 Marimba', 
      kitNumber: 3,      
      tracks: [ { name: 'F3', sampleUrl: 'Marimba/F3.wav'} ],         
    },   
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: pink1,
      name: 'G3 Marimba', 
      kitNumber: 4,      
      tracks: [ { name: 'G3', sampleUrl: 'Marimba/G3.wav'} ],        
    }, 

    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue2,
      name: 'A3 Marimba', 
      kitNumber: 5,      
      tracks: [ { name: 'A3', sampleUrl: 'Marimba/A3.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: yellow2,
      name: 'B3 Marimba', 
      kitNumber: 6,      
      tracks: [ { name: 'B3', sampleUrl: 'Marimba/B3.wav'} ],    
    },



  ]; 




window['s9PitchCh1'] = (JSON.parse(JSON.stringify(sess9PitchNotes)));
window['s9PitchCh1'].splice(3, 35); // 6 -9


//console.log('wi', window['s9PitchCh1']);

for (var d=2; d<17; d++) { // 10

  var remFNotes = d-1;  

  window['s9PitchCh'+d] = (JSON.parse(JSON.stringify(sess9PitchNotes)));
  window['s9PitchCh'+d].splice(0, remFNotes);
  window['s9PitchCh'+d].splice(3, 35);
  window['s9PitchCh'+d][0].kitNumber = 0;
  window['s9PitchCh'+d][1].kitNumber = 1;
  window['s9PitchCh'+d][2].kitNumber = 2;

}




var s9preset = [

    {"name":"fulim","id":"fd5a6b00-5616-11e7-b178-1b2c4ec8904d", "type":"AikeWebsynth1", "classs":"channel","controls":{"1":40,"2":"2","3":50,"4":"1","5":0,"6":0,"7":10,"8":20,"9":20,"10":31,"11":30,"12":50,"13":0,"14":80,"15":40,"16":20,"992":0}},
      
  ];


for (var e=1; e<16; e++) {

window['s9DefPresetCh'+e] = (JSON.parse(JSON.stringify(s8preset)));
window['s9DefPresetCh'+e][0].id= 's9_defpre_ch'+e;

}  































//console.log('windows8PitchCh1', window['s8PitchCh1']);


window.insConf8 = [ 





//*

{ sessionName: 'melo', // Electrons libres #3: A - SynthFest 2017  1: mélodie perc dnb
  channelName: '01', 
  trackSet: 3, 
  defaultPreset: 0, 
  presets: s8preset,

  defaultPattern: 0, 
  patterns: [ // channel patterns      
    //{"name":"silence (wipe all notes)","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","notenb":[0,0],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"id":"s8_defptn_c1","tracks":[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], "name":"defptn s8c1 ","classs":"channel"},
  ], 
  conf: window['s8PitchCh1']
},

//*/






/*
{ 
  channelName: '09 (1bar/4)', conf: window['s8PitchCh9'], // ch6: c3 - 9
  trackSet: 1, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch9_bar3","classs":"channel","id":"s8_ch9_bar3","notenb":[0,2], "tracks":[[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  //patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch9_bar3","classs":"channel","id":"s8_ch9_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
  patternSeq: [ [{"name":"s8_ch9_bar3","classs":"channel","id":"s8_ch9_bar3"}] ] // , {"name":"reset","classs":"channel","id":"silence01"}
},

*/








/*
{ sessionName: 'melo',
  channelName: '01 (1bar/1)', 
  conf: window['s8PitchCh1'],


/*
  conf: [{ 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'F2-G2', 
      kitNumber: 0,      
      tracks: [{ name: 'G2', note: 2 }, { name: 'F2', note: 0 } ],        
    }], 

/*
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'F2-G2', 
      kitNumber: 5,      
      tracks: [{ name: 'G2', note: 2 }, { name: 'F2', note: 0 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'G2-Bb2', 
      kitNumber: 7,      
      tracks: [{ name: 'Bb2', note: 5 }, { name: 'G2', note: 2 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'Bb2-C3', 
      kitNumber: 7,      
      tracks: [{ name: 'C3', note: 7 }, { name: 'Bb2', note: 5 } ],        
    },     

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'C3-Eb3', 
      kitNumber: 8,      
      tracks: [{ name: 'Eb3', note: 10 }, { name: 'C3', note: 7 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'Eb3-F3', 
      kitNumber: 9,      
      tracks: [{ name: 'F3', note: 12 }, { name: 'Eb3', note: 10 } ],        
    }, 

/


   trackSet: 3, defaultPreset: 0, presets: window['s8DefPresetCh1'], defaultPattern: 0, defaultPatternSeq: 0, // trackSet: 3
  patterns: [
    {"name":"s8_ch1_bar1","classs":"channel","id":"s8_ch1_bar1","tracks":[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]     ,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]      ]},    
  ],    
  patternSeq: [ [{"name":"s8_ch1_bar1","classs":"channel","id":"s8_ch1_bar1"}] ]  
}, 
/*/




/* test
{ sessionName: 'test',
  channelName: '09 (1bar/4)', conf: window['s8PitchCh9'], // ch6: c3 - 9
  trackSet: 1, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,0],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch9_bar3","classs":"channel","id":"s8_ch9_bar3","notenb":[0,2], "tracks":[[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch9_bar3","classs":"channel","id":"s8_ch9_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},
//*/



{ channelName: '8: Conductor',
  trackSet: 0, 
  conf: [{ 
    type: 'control', 
    instrumentName: 'Conductor', 
    name: 'Conductor Ctrl 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: sess8ConductorCtrls //session7ConductorControls
  }] 
}, 






/*

{ 
  channelName: '02', trackSet: 3, defaultPreset: 0, presets: s8preset, defaultPattern: 0, conf: window['s8PitchCh2'],
  patterns: [ {"id":"s8_defptn_c2","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]], "name":"defptn s8c2","classs":"channel"} ]
},
{ 
  channelName: '03', trackSet: 3, defaultPreset: 0, presets: s8preset, defaultPattern: 0, conf: window['s8PitchCh3'],
  patterns: [ {"id":"s8_defptn_c3","tracks":[[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]], "name":"defptn s8c3","classs":"channel"} ]
},
{ 
  channelName: '04', trackSet: 3, defaultPreset: 0, presets: s8preset, defaultPattern: 0, conf: window['s8PitchCh4'],
  patterns: [ {"id":"s8_defptn_c4","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]], "name":"defptn s8c4","classs":"channel"} ]
},

*/


//* remove nearly all channels for tests



{ 
  channelName: '02 (1bar/1)', conf: window['s8PitchCh2'], trackSet: 3, defaultPreset: 0, presets: window['s8DefPresetCh2'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s8_ch2_bar1","classs":"channel","id":"s8_ch2_bar1","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s8_ch2_bar1","classs":"channel","id":"s8_ch2_bar1"}] ]  
}, 

{ 
  channelName: '03 (1bar/1)', conf: window['s8PitchCh3'], trackSet: 3, defaultPreset: 0, presets: window['s8DefPresetCh3'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s8_ch3_bar1","classs":"channel","id":"s8_ch3_bar1","tracks":[[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s8_ch3_bar1","classs":"channel","id":"s8_ch3_bar1"}] ]  
}, 


{ 
  channelName: '04 (1bar/1)', conf: window['s8PitchCh4'], trackSet: 4, defaultPreset: 0, presets: window['s8DefPresetCh4'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s8_ch4_bar1","classs":"channel","id":"s8_ch4_bar1","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s8_ch4_bar1","classs":"channel","id":"s8_ch4_bar1"}] ]  
}, 




{ 
  channelName: '05 (1bar/2)', conf: window['s8PitchCh5'], // Bb2
  trackSet: 3, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,1],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch5_bar2","classs":"channel","id":"s8_ch5_bar2","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch5_bar2","classs":"channel","id":"s8_ch5_bar2"}] ]  
}, 
{ 
  channelName: '06 (1bar/2)', conf: window['s8PitchCh4'], // 6
  trackSet: 3, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,1],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch6_bar2","classs":"channel","id":"s8_ch6_bar2","tracks":[[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch6_bar2","classs":"channel","id":"s8_ch6_bar2"}] ]  
}, 

// poss ch 7 & 8 to sound en alternance aavec 5/6

{ 
  channelName: '07 (1bar/2)', conf: window['s8PitchCh3'], // 7
  trackSet: 3, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,1],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch7_bar2","classs":"channel","id":"s8_ch7_bar2","tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch7_bar2","classs":"channel","id":"s8_ch7_bar2"}] ]  
}, 
{ 
  channelName: '08 (1bar/2)', conf: window['s8PitchCh2'], // 8
  trackSet: 3, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,1],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch8_bar2","classs":"channel","id":"s8_ch8_bar2","tracks":[[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch8_bar2","classs":"channel","id":"s8_ch8_bar2"}] ]  
},





{ 
  channelName: '09 (1bar/4)', conf: window['s8PitchCh9'], // ch6: c3 - 9
  trackSet: 1, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch9_bar3","classs":"channel","id":"s8_ch9_bar3","notenb":[0,2], "tracks":[[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch9_bar3","classs":"channel","id":"s8_ch9_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '10 (1bar/4)', conf: window['s8PitchCh10'], // ch6: c3 - 10
  trackSet: 1, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch10_bar3","classs":"channel","id":"s8_ch10_bar3","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch10_bar3","classs":"channel","id":"s8_ch10_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '11 (1bar/4)', conf: window['s8PitchCh11'], // ch6: c3 - 11
  trackSet: 1, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch11_bar3","classs":"channel","id":"s8_ch11_bar3","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch11_bar3","classs":"channel","id":"s8_ch11_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '12 (1bar/4)', conf: window['s8PitchCh12'], // ch6: c3 - 12
  trackSet: 1, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch12_bar3","classs":"channel","id":"s8_ch12_bar3","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch12_bar3","classs":"channel","id":"s8_ch12_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},



{ 
  channelName: '13 (1bar/8)', conf: window['s8PitchCh13'], // 
  trackSet: 1, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch13_bar1","classs":"channel","id":"s8_ch13_bar1","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s8_ch13_bar1","classs":"channel","id":"s8_ch13_bar1"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '14 (1bar/8)', conf: window['s8PitchCh14'], // 
  trackSet: 1, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch14_bar1","classs":"channel","id":"s8_ch14_bar1","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s8_ch14_bar1","classs":"channel","id":"s8_ch14_bar1"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},


{ 
  channelName: '15 (1bar/8)', conf: window['s8PitchCh13'], // 
  trackSet: 1, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch15_bar6","classs":"channel","id":"s8_ch15_bar6","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [ {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch15_bar6","classs":"channel","id":"s8_ch15_bar6"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},
//*
{ 
  channelName: '16 (1bar/8)', conf: window['s8PitchCh12'], // 
  trackSet: 1, defaultPreset: 0, presets: s8preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s8_ch16_bar6","classs":"channel","id":"s8_ch16_bar6","notenb":[0,2], "tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [ {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s8_ch16_bar6","classs":"channel","id":"s8_ch16_bar6"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},
//*/




// remove nearly all channels for test */





/* // SAMPLES 9-16

{ 
  channelName: '09 (1bar/4)', conf: window['s9PitchCh9'], // ch6: c3 - 9
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch9_bar3","classs":"channel","id":"s9_ch9_bar3","notenb":[0,2], "tracks":[[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch9_bar3","classs":"channel","id":"s9_ch9_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '10 (1bar/4)', conf: window['s9PitchCh10'], // ch6: c3 - 10
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch10_bar3","classs":"channel","id":"s9_ch10_bar3","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch10_bar3","classs":"channel","id":"s9_ch10_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '11 (1bar/4)', conf: window['s9PitchCh11'], // ch6: c3 - 11
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch11_bar3","classs":"channel","id":"s9_ch11_bar3","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch11_bar3","classs":"channel","id":"s9_ch11_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '12 (1bar/4)', conf: window['s9PitchCh12'], // ch6: c3 - 12
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch12_bar3","classs":"channel","id":"s9_ch12_bar3","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch12_bar3","classs":"channel","id":"s9_ch12_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},


//*
{ 
  channelName: '13 (1bar/8)', conf: window['s9PitchCh13'], // 
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch13_bar1","classs":"channel","id":"s9_ch13_bar1","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s9_ch13_bar1","classs":"channel","id":"s9_ch13_bar1"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '14 (1bar/8)', conf: window['s9PitchCh14'], // 
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch14_bar1","classs":"channel","id":"s9_ch14_bar1","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s9_ch14_bar1","classs":"channel","id":"s9_ch14_bar1"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},


{ 
  channelName: '15 (1bar/8)', conf: window['s9PitchCh15'], // 
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch15_bar6","classs":"channel","id":"s9_ch15_bar6","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [ {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch15_bar6","classs":"channel","id":"s9_ch15_bar6"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},
//*
{ 
  channelName: '16 (1bar/8)', conf: window['s9PitchCh16'], // 
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch16_bar6","classs":"channel","id":"s9_ch16_bar6","notenb":[0,2], "tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [ {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch16_bar6","classs":"channel","id":"s9_ch16_bar6"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},
//*/





/*
{ 

  //sessionName: '1: mélodie', // Electrons libres #3: A - SynthFest 2017

  channelName: 'xx02', 

  trackSet: 3, // aka default kit

  defaultPreset: 0, 
  presets: [
    //{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"le clownSOUND","type":"AikeWebsynth1","classs":"channel","id":"2fbddfd9fd9dvbvb2b2b","controls":{1:59, 2:1, 3:19, 4:2, 5:36, 6:0, 7:26, 8:45, 9:11, 10:7, 11:55, 12:68, 13:0, 14:20, 15:78, 16:13,"992":0}},
    {"name":"square","type":"AikeWebsynth1","classs":"channel","id":"2fbddcv123cd7f89ff54f","controls":{1:9, 2:1, 3:35, 4:2, 5:27, 6:0, 7:66, 8:80, 9:0, 10:0, 11:40, 12:96, 13:0, 14:0, 15:30, 16:70,"992":0}}            
  ],

  defaultPattern: 1, 
  patterns: [ // channel patterns      
    {"name":"silence (wipe all notes)","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","notenb":[0,0],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"bar2_ch1_onTheFly","classs":"channel","id":"ch1_bar2_onTheFly","tracks":[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]]},
    //{"name":"bar2_ch1_onTheFly","classs":"channel","id":"ch1_bar2_onTheFly","tracks":[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"notenb":[4,4]},
    //{"name":"la marche redux","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0]]}
    
    //{"name":"la marche du clown","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
    //{"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    //{"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}     
  ], 



  defaultPatternEdit: 1, //{"name":"la marche redux","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605"}, 
  patternsEdit: [ // 
    {"name":"silence (wipe all notes)","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
    {"name":"KOLbar2_ch1_onTheFly","classs":"channel","id":"ch1_bar2_onTheFly"},
  ],   



  defaultPatternSeq: 0, 
  patternSeq: [     
    [       
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}, /* name param is here just to ease uhman readability /
      //{"name":"la marche redux","classs":"channel","id":"307c36c0-6681-11e6-ae54-5f50faffa605"}/*{"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}/
      {"name":"bar2_ch1_onTheFly","classs":"channel","id":"ch1_bar2_onTheFly"}, 
    ]
  ],   

  conf: window['s8PitchCh3'] /*  sess8PitchNotes [
    { 
      type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      instrumentUrl: 'http://aikelab.net/websynth/',
      color: 'rgba(237, 49, 104, 1)',
      name: 'C2', 
      kitNumber: 0,      
      tracks: [{ name: 'C2', note: -5 } ],
      controls: patternSeqOff2  //   lack of kit entraines bug at seq.js l1173 with patternSeqOffNoSave    
    },
    { 
      type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      instrumentUrl: 'http://aikelab.net/websynth/',
      color: 'rgba(237, 49, 104, 1)',
      name: 'C1', 
      kitNumber: 1,      
      tracks: [{ name: 'B1', note: -17 } ],
      controls: patternSeqOff2  //   lack of kit entraines bug at seq.js l1173 with patternSeqOffNoSave    
    }    
  ]/ 
}, 

*/












]; // end of sesssion 8 (16 AWS1 synth channels)














































var patternSeqOff2 = (JSON.parse(JSON.stringify(aikeWebsynthControls)));


patternSeqOff2[6].x.value = 1; //  1: patternSeq on


patternSeqOff2.splice(1, 1); // remove Save pattern
//patternSeqOff2.splice(2, 1); // remove change sound
patternSeqOff2.splice(3, 1); // remove Save sound

patternSeqOff2.splice(5, 18); // remove all sliders after ptnSeq



// remove low sounding triangle synth osc option
//delete patternSeqOff2[7].x.option[0]; //.splice(0, 1);

patternSeqOff2[1].name = 'hauteur note (pitch)';



var sess9ConductorCtrls = (JSON.parse(JSON.stringify(window.tweak.conductor16a)));


sess9ConductorCtrls[17].x.value = 60; // start at 60 bpm
sess9ConductorCtrls[17].x.displayedRangeMax = 400
//autoValIncMode
sess9ConductorCtrls[17].x.autoValIncTime = 4; // increment every 2 bars - 4
sess9ConductorCtrls[17].x.autoValIncBy = 4; // by 8 bpms

//console.log(sess9ConductorCtrls); 



var ptnEditOff = (JSON.parse(JSON.stringify(patternSeqOff2)));
//ptnEditOff[3].y.value = 0; // ptnEditOff
//delete ptnEditOff[3];
ptnEditOff.splice(3, 1); // remove ptn edit
ptnEditOff.splice(3, 1); // remove ptn seq




var blue1   = 'rgba(0, 171, 157, 0.6)';
var yellow1 = 'rgba(253, 206, 31, 0.6)';
var green1  = 'rgba(0, 161, 0, 0.6)';
var orange1 = 'rgba(253, 118, 8, 0.6)';
var red1    = 'rgba(226, 0, 6, 0.6)';
var purple1 = 'rgba(149, 55, 166, 0.6)';
var pink1   = 'rgba(237, 49, 104, 0.6)';

var blue2   = 'rgba(0, 171, 157, 0.7)';
var yellow2 = 'rgba(253, 206, 31, 0.7)';
var green2  = 'rgba(0, 161, 0, 0.7)';
var orange2 = 'rgba(253, 118, 8, 0.7)';
var red2    = 'rgba(226, 0, 6, 0.7)';
var purple2 = 'rgba(149, 55, 166, 0.7)';
var pink2   = 'rgba(237, 49, 104, 0.7)';

var blue3   = 'rgba(0, 171, 157, 0.8)';
var yellow3 = 'rgba(253, 206, 31, 0.8)';
var green3  = 'rgba(0, 161, 0, 0.8)';
var orange3 = 'rgba(253, 118, 8, 0.8)';
var red3    = 'rgba(226, 0, 6, 0.8)';
var purple3 = 'rgba(149, 55, 166, 0.8)';
var pink3   = 'rgba(237, 49, 104, 0.8)';

var blue4   = 'rgba(0, 171, 157, 0.9)';
var yellow4 = 'rgba(253, 206, 31, 0.9)';
var green4  = 'rgba(0, 161, 0, 0.9)';
var orange4 = 'rgba(253, 118, 8, 0.9)';
var red4    = 'rgba(226, 0, 6, 0.9)';
var purple4 = 'rgba(149, 55, 166, 0.9)';
var pink4   = 'rgba(237, 49, 104, 0.9)';






// AikeWebsynth1
var sess9PitchNotes = [    
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: green1,
      name: 'C3 Marimba', 
      kitNumber: 0,      
      tracks: [ { name: 'C3', sampleUrl: 'Marimba/C3.wav'} ], },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: orange1,
      name: 'D3 Marimba', 
      kitNumber: 1,      
      tracks: [ { name: 'D3', sampleUrl: 'Marimba/D3.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: red1,
      name: 'E3 Marimba', 
      kitNumber: 2,      
      tracks: [ { name: 'E3', sampleUrl: 'Marimba/E3.wav'} ],         
    },     
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: purple1,
      name: 'F3 Marimba', 
      kitNumber: 3,      
      tracks: [ { name: 'F3', sampleUrl: 'Marimba/F3.wav'} ],         
    },   
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: pink1,
      name: 'G3 Marimba', 
      kitNumber: 4,      
      tracks: [ { name: 'G3', sampleUrl: 'Marimba/G3.wav'} ],        
    }, 

    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue2,
      name: 'A3 Marimba', 
      kitNumber: 5,      
      tracks: [ { name: 'A3', sampleUrl: 'Marimba/A3.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: yellow2,
      name: 'B3 Marimba', 
      kitNumber: 6,      
      tracks: [ { name: 'B3', sampleUrl: 'Marimba/B3.wav'} ],    
    },








    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: green2,
      name: 'C4 Piano', 
      kitNumber: 0,      
      tracks: [ { name: 'C4', sampleUrl: 'Piano/C4.wav'} ], },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: orange2,
      name: 'D4 Piano', 
      kitNumber: 1,      
      tracks: [ { name: 'D4', sampleUrl: 'Piano/D4.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: red2,
      name: 'E4 Piano', 
      kitNumber: 2,      
      tracks: [ { name: 'E4', sampleUrl: 'Piano/E4.wav'} ],         
    },     
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: purple2,
      name: 'F4 Piano', 
      kitNumber: 3,      
      tracks: [ { name: 'F4', sampleUrl: 'Piano/F4.wav'} ],         
    },   
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: pink2,
      name: 'G4 Piano', 
      kitNumber: 4,      
      tracks: [ { name: 'G4', sampleUrl: 'Piano/G4.wav'} ],        
    }, 

    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue3,
      name: 'A4 Piano', 
      kitNumber: 5,      
      tracks: [ { name: 'A4', sampleUrl: 'Piano/A4.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: yellow3,
      name: 'B4 Piano', 
      kitNumber: 6,      
      tracks: [ { name: 'B4', sampleUrl: 'Piano/B4.wav'} ],    
    },


 { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: green1,
      name: 'C3 Marimba', 
      kitNumber: 0,      
      tracks: [ { name: 'C3', sampleUrl: 'Marimba/C3.wav'} ], },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: orange1,
      name: 'D3 Marimba', 
      kitNumber: 1,      
      tracks: [ { name: 'D3', sampleUrl: 'Marimba/D3.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: red1,
      name: 'E3 Marimba', 
      kitNumber: 2,      
      tracks: [ { name: 'E3', sampleUrl: 'Marimba/E3.wav'} ],         
    },     
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: purple1,
      name: 'F3 Marimba', 
      kitNumber: 3,      
      tracks: [ { name: 'F3', sampleUrl: 'Marimba/F3.wav'} ],         
    },   
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: pink1,
      name: 'G3 Marimba', 
      kitNumber: 4,      
      tracks: [ { name: 'G3', sampleUrl: 'Marimba/G3.wav'} ],        
    }, 

    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue2,
      name: 'A3 Marimba', 
      kitNumber: 5,      
      tracks: [ { name: 'A3', sampleUrl: 'Marimba/A3.wav'} ],         
    }, 
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: yellow2,
      name: 'B3 Marimba', 
      kitNumber: 6,      
      tracks: [ { name: 'B3', sampleUrl: 'Marimba/B3.wav'} ],    
    },



  ]; 










window['s9PitchCh1'] = (JSON.parse(JSON.stringify(sess9PitchNotes)));
window['s9PitchCh1'].splice(3, 35); // 6 -9


//console.log('wi', window['s9PitchCh1']);

for (var d=2; d<17; d++) { // 10

  var remFNotes = d-1;  

  window['s9PitchCh'+d] = (JSON.parse(JSON.stringify(sess9PitchNotes)));
  window['s9PitchCh'+d].splice(0, remFNotes);
  window['s9PitchCh'+d].splice(3, 35);
  window['s9PitchCh'+d][0].kitNumber = 0;
  window['s9PitchCh'+d][1].kitNumber = 1;
  window['s9PitchCh'+d][2].kitNumber = 2;
  /*window['s9PitchCh'+d][3].kitNumber = 3;
  window['s9PitchCh'+d][4].kitNumber = 4;
  window['s9PitchCh'+d][5].kitNumber = 5;*/


  //console.log('kooli: ', window['s9PitchCh'+d]);
}


//console.log('kooli 1/2/3: ', window['s9PitchCh1'], window['s9PitchCh2'], window['s9PitchCh3']);


/*
var sess8PitchNotesDouble = [   

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'F2-G2', 
      kitNumber: 5,      
      tracks: [{ name: 'G2', note: 2 }, { name: 'F2', note: 0 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'G2-Bb2', 
      kitNumber: 7,      
      tracks: [{ name: 'Bb2', note: 5 }, { name: 'G2', note: 2 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'Bb2-C3', 
      kitNumber: 7,      
      tracks: [{ name: 'C3', note: 7 }, { name: 'Bb2', note: 5 } ],        
    },     

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'C3-Eb3', 
      kitNumber: 8,      
      tracks: [{ name: 'Eb3', note: 10 }, { name: 'C3', note: 7 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'Eb3-F3', 
      kitNumber: 9,      
      tracks: [{ name: 'F3', note: 12 }, { name: 'Eb3', note: 10 } ],        
    }, 

    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'F3-G3', 
      kitNumber: 10,      
      tracks: [{ name: 'G3', note: 14 }, { name: 'F3', note: 12 } ],        
    }, 
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'G3-Bb3', 
      kitNumber: 11,      
      tracks: [{ name: 'Bb3', note: 17 }, { name: 'G3', note: 14 } ],        
    }, 
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'Bb3-C4', 
      kitNumber: 12,      
      tracks: [{ name: 'C4', note: 19 }, { name: 'Bb3', note: 17 } ],        
    },     
    { 
      type: 'synth', instrumentName: 'AikeWebsynth1', instrumentUrl: 'http://aikelab.net/websynth/', controls: patternSeqOff2,
      color: 'rgba(237, 49, 104, 0.6)',
      name: 'C4-Eb4', 
      kitNumber: 13,      
      tracks: [{ name: 'Eb4', note: 22 }, { name: 'C4', note: 19 } ],        
    },   


  ]; 



delete window['s8PitchCh9'];
window['s8PitchCh9'] = (JSON.parse(JSON.stringify(sess8PitchNotesDouble)));
window['s8PitchCh9'].splice(3, 10);  
window['s8PitchCh9'][0].kitNumber = 0;
window['s8PitchCh9'][1].kitNumber = 1;
window['s8PitchCh9'][2].kitNumber = 2;




for (var d=10; d<15; d++) {

var remFNotes = d-1;  

//delete window['s8PitchCh'+d];
window['s8PitchCh'+d] = (JSON.parse(JSON.stringify(sess8PitchNotesDouble)));
window['s8PitchCh'+d].splice(0, d-8);
window['s8PitchCh'+d].splice(3, 10);
window['s8PitchCh'+d][0].kitNumber = 0;
window['s8PitchCh'+d][1].kitNumber = 1;
window['s8PitchCh'+d][2].kitNumber = 2;

}

*/




var s9preset = [

    {"name":"fulim","id":"fd5a6b00-5616-11e7-b178-1b2c4ec8904d", "type":"AikeWebsynth1", "classs":"channel","controls":{"1":40,"2":"2","3":50,"4":"1","5":0,"6":0,"7":10,"8":20,"9":20,"10":31,"11":30,"12":50,"13":0,"14":80,"15":40,"16":20,"992":0}},
    //{"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    //{"name":"le clownSOUND","type":"AikeWebsynth1","classs":"channel","id":"2fbddfd9fd9dvbvb2b2b","controls":{1:59, 2:1, 3:19, 4:2, 5:36, 6:0, 7:26, 8:45, 9:11, 10:7, 11:55, 12:68, 13:0, 14:20, 15:78, 16:13,"992":0}},
    //{"name":"square","type":"AikeWebsynth1","classs":"channel","id":"2fbddcv123cd7f89ff54f","controls":{1:9, 2:1, 3:35, 4:2, 5:27, 6:0, 7:66, 8:80, 9:0, 10:0, 11:40, 12:96, 13:0, 14:0, 15:30, 16:70,"992":0}}            
  ];


for (var e=1; e<16; e++) {

window['s9DefPresetCh'+e] = (JSON.parse(JSON.stringify(s8preset)));
window['s9DefPresetCh'+e][0].id= 's9_defpre_ch'+e;

}  




window.insConf9 = [ 





/*

{ sessionName: 'melo', // Electrons libres #3: A - SynthFest 2017  1: mélodie perc dnb
  channelName: '01', 
  trackSet: 3, 
  defaultPreset: 0, 
  presets: s9preset,

  defaultPattern: 0, 
  patterns: [ // channel patterns      
    //{"name":"silence (wipe all notes)","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","notenb":[0,0],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"id":"s9_defptn_c1","tracks":[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], "name":"defptn s9c1 ","classs":"channel"},
  ], 
  conf: window['s9PitchCh1']
},

//*/

//*
{ sessionName: 'Marimba/Piano', //
  channelName: '01 (1bar/1)', conf: window['s9PitchCh1'], trackSet: 1, defaultPreset: 0, presets: window['s9DefPresetCh1'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s9_ch1_bar1","classs":"channel","id":"s9_ch1_bar1","tracks":[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s9_ch1_bar1","classs":"channel","id":"s9_ch1_bar1"}] ]  
}, 
/*/




/* test
{ sessionName: 'test',
  channelName: '09 (1bar/4)', conf: window['s9PitchCh9'], // ch6: c3 - 9
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,0],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch9_bar3","classs":"channel","id":"s9_ch9_bar3","notenb":[0,2], "tracks":[[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch9_bar3","classs":"channel","id":"s9_ch9_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},
//*/



{ channelName: '8: Conductor',
  trackSet: 0, 
  conf: [{ 
    type: 'control', 
    instrumentName: 'Conductor', 
    name: 'Conductor Ctrl 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: sess9ConductorCtrls //session7ConductorControls
  }] 
}, 





//* remove nearly all channels for tests 


{ 
  channelName: '02 (1bar/1)', conf: window['s9PitchCh2'], trackSet: 1, defaultPreset: 0, presets: window['s9DefPresetCh2'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s9_ch2_bar1","classs":"channel","id":"s9_ch2_bar1","tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s9_ch2_bar1","classs":"channel","id":"s9_ch2_bar1"}] ]  
}, 



//*
{ 
  channelName: '03 (1bar/1)', conf: window['s9PitchCh2'], trackSet: 1, defaultPreset: 0, presets: window['s9DefPresetCh3'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s9_ch3_bar1","classs":"channel","id":"s9_ch3_bar1","tracks":[[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s9_ch3_bar1","classs":"channel","id":"s9_ch3_bar1"}] ]  
}, 


{ 
  channelName: '04 (1bar/1)', conf: window['s9PitchCh3'], trackSet: 1, defaultPreset: 0, presets: window['s9DefPresetCh4'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s9_ch4_bar1","classs":"channel","id":"s9_ch4_bar1","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s9_ch4_bar1","classs":"channel","id":"s9_ch4_bar1"}] ]  
}, 



//*
{ 
  channelName: '05 (1bar/2)', conf: window['s9PitchCh5'], // Bb2
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,1],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch5_bar2","classs":"channel","id":"s9_ch5_bar2","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch5_bar2","classs":"channel","id":"s9_ch5_bar2"}] ]  
}, 
{ 
  channelName: '06 (1bar/2)', conf: window['s9PitchCh4'], // 6
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,1],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch6_bar2","classs":"channel","id":"s9_ch6_bar2","tracks":[[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch6_bar2","classs":"channel","id":"s9_ch6_bar2"}] ]  
}, 

// poss ch 7 & 8 to sound en alternance aavec 5/6

{ 
  channelName: '07 (1bar/2)', conf: window['s9PitchCh3'], // 7
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,1],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch7_bar2","classs":"channel","id":"s9_ch7_bar2","tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch7_bar2","classs":"channel","id":"s9_ch7_bar2"}] ]  
}, 
{ 
  channelName: '08 (1bar/2)', conf: window['s9PitchCh2'], // 8
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,1],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch8_bar2","classs":"channel","id":"s9_ch8_bar2","tracks":[[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch8_bar2","classs":"channel","id":"s9_ch8_bar2"}] ]  
},



//*

{ 
  channelName: '09 (1bar/4)', conf: window['s9PitchCh9'], // ch6: c3 - 9
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch9_bar3","classs":"channel","id":"s9_ch9_bar3","notenb":[0,2], "tracks":[[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch9_bar3","classs":"channel","id":"s9_ch9_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '10 (1bar/4)', conf: window['s9PitchCh10'], // ch6: c3 - 10
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch10_bar3","classs":"channel","id":"s9_ch10_bar3","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch10_bar3","classs":"channel","id":"s9_ch10_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '11 (1bar/4)', conf: window['s9PitchCh11'], // ch6: c3 - 11
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch11_bar3","classs":"channel","id":"s9_ch11_bar3","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch11_bar3","classs":"channel","id":"s9_ch11_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '12 (1bar/4)', conf: window['s9PitchCh12'], // ch6: c3 - 12
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch12_bar3","classs":"channel","id":"s9_ch12_bar3","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch12_bar3","classs":"channel","id":"s9_ch12_bar3"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},


//*
{ 
  channelName: '13 (1bar/8)', conf: window['s9PitchCh13'], // 
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch13_bar1","classs":"channel","id":"s9_ch13_bar1","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s9_ch13_bar1","classs":"channel","id":"s9_ch13_bar1"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},

{ 
  channelName: '14 (1bar/8)', conf: window['s9PitchCh14'], // 
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch14_bar1","classs":"channel","id":"s9_ch14_bar1","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s9_ch14_bar1","classs":"channel","id":"s9_ch14_bar1"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},


{ 
  channelName: '15 (1bar/8)', conf: window['s9PitchCh15'], // 
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch15_bar6","classs":"channel","id":"s9_ch15_bar6","notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [ {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch15_bar6","classs":"channel","id":"s9_ch15_bar6"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},
//*
{ 
  channelName: '16 (1bar/8)', conf: window['s9PitchCh16'], // 
  trackSet: 1, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s9_ch16_bar6","classs":"channel","id":"s9_ch16_bar6","notenb":[0,2], "tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [ {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s9_ch16_bar6","classs":"channel","id":"s9_ch16_bar6"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}] ]  
},
//*/




// remove nearly all channels for test */




]; // end of session 9 (marimba / piano)





/*

conf: [ // kits 

    { type: 'samples', // (kitType) : conductor, samples, synth,...
      instrumentName: 'Sampler', 
      name: 'TheCheebacabra1', // (kitName)
      kitNumber: 0, // number 
      color: 'rgba(253, 118, 8, 1)', // (kitColor)
      tracks: [
        { name: 'Tom 3',
          sampleUrl: 'TheCheebacabra1/tom3.wav'            
        },
        { name: 'Tom 2',
          sampleUrl: 'TheCheebacabra1/tom2.wav'            
        },


        },
        { name: 'Kick',
          sampleUrl: 'TheCheebacabra1/kick.wav'            
        }                      
      ],

      ]            
    }, // close kit

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'CR78', 
      kitNumber: 1, 
      color: 'rgba(253, 118, 8, 0.95)', 
      tracks: [
        {
          name: 'Tom 3',
          sampleUrl: 'CR78/tom3.wav'            
        },
        {
          name: 'Tom 2',
          sampleUrl: 'CR78/tom2.wav'            
        },
        {
          name: 'Tom 1',
         
        },  
        {
          name: 'Snare',
         
        },
        {
          name: 'Hihat',
         
        },
        {
          name: 'Kick',
          sampleUrl: 'CR78/kick.wav'            
        }                      
      ],




      ]            
    }, 

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'breakbeat13', 
      kitNumber: 2, 
      color: 'rgba(253, 118, 8, 0.9)', 
      tracks: [
        {
          name: 'Tom 3',
          sampleUrl: 'breakbeat13/tom3.wav'            
        },
        {
          name: 'Tom 2',
          sampleUrl: 'breakbeat13/tom2.wav'            
        },
        {
          name: 'Tom 1',
          sampleUrl: 'breakbeat13/tom1.wav'            
        },  
        {
          name: 'Snare',
          sampleUrl: 'breakbeat13/snare.wav'            
        },
        {
          name: 'Hihat',

        },
        {
          name: 'Kick',

        }                      
      ],     
    },   

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'LINN', 
      kitNumber: 3, 
      color: 'rgba(253, 118, 8, 0.85)', 
      tracks: [
        {
          name: 'Tom 3',
          sampleUrl: 'LINN/tom3.wav'            
        },
        {
          name: 'Tom 2',
          sampleUrl: 'LINN/tom2.wav'            
        },
        {
          name: 'Tom 1',

        },  
        {
          name: 'Snare',

        },
        {


        {
          name: 'Kick',

        }                      
      ],     
    },  

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Kit8', 
      kitNumber: 4, 
      color: 'rgba(253, 118, 8, 0.8)', 
      tracks: [
        {
          name: 'Tom 3',
          sampleUrl: 'Kit8/tom3.wav'            
        },
        {
          name: 'Tom 2',
          sampleUrl: 'Kit8/tom2.wav'            
        },
        {
          name: 'Tom 1',

        },  
        {
          name: 'Snare',

        },
        {
          name: 'Hihat',
          sampleUrl: 'Kit8/hihat.wav'            
        },
        {
          name: 'Kick',
          sampleUrl: 'Kit8/kick.wav'            
        }                      
      ],
      controls: [ 
        { name: '[Kit change]',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Kit change',
            param: '[external]', 
            value: 4,
            stepSize: 0, 
            interpolate: 0, 
            displayedRangeMin: 0,
            displayedRangeMax: '[calc]',
            min: 0,
            max: '[calc]'
          }                 
        }
      ]            
    },     

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: '909', 
      kitNumber: 5, 
      color: 'rgba(253, 118, 8, 0.7)', // (kitColor)
      tracks: [
 
        { name: 'Rimshot',
           
        },
        { name: 'Clap',
                    
        },  
        { name: 'Snare',
          sampleUrl: ''            
        },
        { name: 'Closed hihat',

        },
        { name: 'Kick',
          sampleUrl: '12-TR-909/909 KIK2.wav' // 909 KIK7           
        }                      
      ],
      ]            
    }



kick: 78 bbeat13 linn
hh: 78 bbeat13 909
sd: 78 linn kit8
klap: 909

3 toms: 78, linn, kit8
various: 909 oh, 909 rim, linn hh, cheebacra hh sd tom3



var blue1   = 'rgba(0, 171, 157, 0.6)';
var yellow1 = 'rgba(253, 206, 31, 0.6)';
var green1  = 'rgba(0, 161, 0, 0.6)';
var orange1 = 'rgba(253, 118, 8, 0.6)';
var red1    = 'rgba(226, 0, 6, 0.6)';
var purple1 = 'rgba(149, 55, 166, 0.6)';
var pink1   = 'rgba(237, 49, 104, 0.6)';

var blue2   = 'rgba(0, 171, 157, 0.7)';
var yellow2 = 'rgba(253, 206, 31, 0.7)';
var green2  = 'rgba(0, 161, 0, 0.7)';
var orange2 = 'rgba(253, 118, 8, 0.7)';
var red2    = 'rgba(226, 0, 6, 0.7)';
var purple2 = 'rgba(149, 55, 166, 0.7)';
var pink2   = 'rgba(237, 49, 104, 0.7)';



          sampleUrl: ''     
          CR78/kick.wav     
          sampleUrl: 'breakbeat13/kick.wav'  



//*/




var ptnSeqOff3 = (JSON.parse(JSON.stringify(aikeWebsynthControls)));





ptnSeqOff3.splice(1, 1); // remove Save pattern
ptnSeqOff3.splice(2, 1); // remove change sound
ptnSeqOff3.splice(2, 1); // remove Save sound
ptnSeqOff3.splice(4, 18); // remove all sliders after ptnSeq

//console.log('ptnSeqOff3', ptnSeqOff3);
ptnSeqOff3[2].y.value = 0; //  0: patternEdit off
ptnSeqOff3[3].x.value = 0; //  0: patternSeq off
ptnSeqOff3[1].name = 'Change sound';   


patternSeqOff2[1].name = 'Change sound';   


// remove low sounding triangle synth osc option
//delete patternSeqOff2[7].x.option[0]; //.splice(0, 1);

              
//console.log('patternSeqOff2', patternSeqOff2);

window['s10KitsCh1'] = [    
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue1,
      name: 'Kick (Linn)', 
      kitNumber: 0,      
      tracks: [ { name: 'Kick (Linn)', sampleUrl: 'LINN/kick.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue2,
      name: 'Kick (Cr78)', 
      kitNumber: 1,      
      tracks: [ { name: 'Kick (Cr78)', sampleUrl: 'CR78/kick.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue3,
      name: 'Kick (bb13)', 
      kitNumber: 2,      
      tracks: [ { name: 'Kick (bb13)', sampleUrl: 'breakbeat13/kick.wav'} ], 
    },        
];




window['s10KitsCh2'] = [    
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: yellow1,
      name: 'Snare (Linn)', 
      kitNumber: 0,      
      tracks: [ { name: 'Snare (Linn)', sampleUrl: 'LINN/snare.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: yellow2,
      name: 'Snare (Cr78)', 
      kitNumber: 1,      
      tracks: [ { name: 'Snare (Cr78)', sampleUrl: 'CR78/snare.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: yellow3,
      name: 'Snare (Tr909)', 
      kitNumber: 2,      
      tracks: [ { name: 'Snare (Tr909)', sampleUrl: '12-TR-909/909 SD10.wav'} ], 
    },     
      
];




window['s10KitsCh3'] = [    
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: green1,
      name: 'Hihat (bb13)', 
      kitNumber: 0,      
      tracks: [ { name: 'Hihat (bb13)', sampleUrl: 'breakbeat13/hihat.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: green2,
      name: 'Hihat (Cr78)', 
      kitNumber: 1,      
      tracks: [ { name: 'Hihat (Cr78)', sampleUrl: 'CR78/hihat.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: green3,
      name: 'Hihat (Tr909)', 
      kitNumber: 2,      
      tracks: [ { name: 'Hihat (Tr909)', sampleUrl: '12-TR-909/909 HHCL 1.wav'} ], 
    },        
];



window['s10KitsCh4'] = [    
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: orange1,
      name: 'Clap (Tr909)', 
      kitNumber: 0,      
      tracks: [ { name: 'Clap (Tr909)', sampleUrl: '12-TR-909/909 CLAP.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: orange2,
      name: 'Clap (kit8)', 
      kitNumber: 1,      
      tracks: [ { name: 'Clap (kit8)', sampleUrl: 'Kit8/snare.wav'} ], 
    },      
     
];




window['s10KitsCh5'] = [    
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: red1,
      name: 'Tom 1 (Linn)', 
      kitNumber: 0,      
      tracks: [ { name: 'Tom 1 (Linn)', sampleUrl: 'LINN/tom1.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: red2,
      name: 'Tom 1 (Cr78)', 
      kitNumber: 1,      
      tracks: [ { name: 'Tom 1 (Cr78)', sampleUrl: 'CR78/tom1.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: red3,
      name: 'Tom 1 (Kit8)', 
      kitNumber: 2,      
      tracks: [ { name: 'Tom 1 (Kit8)', sampleUrl: 'Kit8/tom1.wav'} ], 
    },        
];


window['s10KitsCh6'] = [    
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: purple1,
      name: 'Tom 2 (Linn)', 
      kitNumber: 0,      
      tracks: [ { name: 'Tom 2 (Linn)', sampleUrl: 'LINN/tom2.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: purple2,
      name: 'Tom 2 (Cr78)', 
      kitNumber: 1,      
      tracks: [ { name: 'Tom 2 (Cr78)', sampleUrl: 'CR78/tom2.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: purple3,
      name: 'Tom 2 (Kit8)', 
      kitNumber: 2,      
      tracks: [ { name: 'Tom 2 (Kit8)', sampleUrl: 'Kit8/tom2.wav'} ], 
    },        
];

window['s10KitsCh7'] = [    
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: pink1,
      name: 'Tom 3 (Linn)', 
      kitNumber: 0,      
      tracks: [ { name: 'Tom 3 (Linn)', sampleUrl: 'LINN/tom3.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: pink2,
      name: 'Tom 3 (Cr78)', 
      kitNumber: 1,      
      tracks: [ { name: 'Tom 3 (Cr78)', sampleUrl: 'CR78/tom3.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: pink3,
      name: 'Tom 3 (Kit8)', 
      kitNumber: 2,      
      tracks: [ { name: 'Tom 3 (Kit8)', sampleUrl: 'Kit8/tom3.wav'} ], 
    },        
];


window['s10KitsCh8'] = [    
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue1,
      name: 'Kick (Cheebacabra)', 
      kitNumber: 0,      
      tracks: [ { name: 'Kick (Cheebacabra)', sampleUrl: 'TheCheebacabra1/tom3.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue2,
      name: 'Snare (Cheebacabra)', 
      kitNumber: 1,      
      tracks: [ { name: 'Snare (Cheebacabra)', sampleUrl: 'TheCheebacabra1/snare.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue3,
      name: 'Hihat (Cheebacabra)', 
      kitNumber: 2,      
      tracks: [ { name: 'Hihat (Cheebacabra)', sampleUrl: 'TheCheebacabra1/hihat.wav'} ], 
    },      

    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue3,
      name: 'Loud hihat (Linn)', 
      kitNumber: 3,      
      tracks: [ { name: 'Loud hihat (Linn)', sampleUrl: 'LINN/hihat.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue3,
      name: 'Rimshot (Tr909)', 
      kitNumber: 4,      
      tracks: [ { name: 'Rimshot (Tr909)', sampleUrl: '12-TR-909/909 RIM.wav'} ], 
    },
    { 
      type: 'samples', instrumentName: 'Sampler', controls: patternSeqOff2,
      color: blue3,
      name: 'Opened hihat (Tr909)', 
      kitNumber: 5,      
      tracks: [ { name: 'Opened hihat (Tr909)', sampleUrl: '12-TR-909/909 HHOP.wav'} ], 
    },          
];



window['s10NoPtnEdit_Ch1'] = (JSON.parse(JSON.stringify(window['s10KitsCh1'])));

//console.log('log aavnt:', window['s10NoPtnEdit_Ch1']);          
      forIn(window['s10NoPtnEdit_Ch1'], function(val, key, o) { 
        delete window['s10NoPtnEdit_Ch1'][key].controls;
        window['s10NoPtnEdit_Ch1'][key].controls = ptnSeqOff3;
        //console.log(window['s10KitsCh8'][key]);          
      });


//console.log('log après:', window['s10NoPtnEdit_Ch1']);          


window['s10NoPtnEdit_Ch2'] = (JSON.parse(JSON.stringify(window['s10KitsCh2'])));
        
forIn(window['s10NoPtnEdit_Ch2'], function(val, key, o) { 
  delete window['s10NoPtnEdit_Ch2'][key].controls;
  window['s10NoPtnEdit_Ch2'][key].controls = ptnSeqOff3;       
});


window['s10NoPtnEdit_Ch3'] = (JSON.parse(JSON.stringify(window['s10KitsCh3'])));
        
forIn(window['s10NoPtnEdit_Ch3'], function(val, key, o) { 
  delete window['s10NoPtnEdit_Ch3'][key].controls;
  window['s10NoPtnEdit_Ch3'][key].controls = ptnSeqOff3;       
});


window['s10NoPtnEdit_Ch4'] = (JSON.parse(JSON.stringify(window['s10KitsCh4'])));
        
forIn(window['s10NoPtnEdit_Ch4'], function(val, key, o) { 
  delete window['s10NoPtnEdit_Ch4'][key].controls;
  window['s10NoPtnEdit_Ch4'][key].controls = ptnSeqOff3;       
});


/*

        { name: 'Tom 3',
          sampleUrl: ''            
        },  
        { name: 'Snare',
          sampleUrl: ''            
        },
        { name: 'Hihat',
          sampleUrl: ''   
          name: 'Hihat',
          sampleUrl: ''            
        },

          sampleUrl: ''            
        },
        { name: 'Opened hihat',
          sampleUrl: '' 

var blue1   = 'rgba(0, 171, 157, 0.6)';
var yellow1 = 'rgba(253, 206, 31, 0.6)';
var green1  = 'rgba(0, 161, 0, 0.6)';
var orange1 = 'rgba(253, 118, 8, 0.6)';
var red1    = 'rgba(226, 0, 6, 0.6)';
var purple1 = 'rgba(149, 55, 166, 0.6)';
var pink1   = 'rgba(237, 49, 104, 0.6)';

*/


//console.log('kit ch2: ', window['s10KitsCh2'], window['s9DefPresetCh1']);


var sess10ConductorCtrls = (JSON.parse(JSON.stringify(window.tweak.conductor16a)));


sess10ConductorCtrls[17].x.value = 115; // start at 60 bpm
sess10ConductorCtrls[17].x.displayedRangeMax = 400;
sess10ConductorCtrls[17].x.autoValIncMode = 0;
/*
sess9ConductorCtrls[17].x.autoValIncTime = 4; // increment every 2 bars - 4
sess9ConductorCtrls[17].x.autoValIncBy = 4; // by 8 bpms */


window.insConf10 = [ 





// editable patterns

//*
{ sessionName: 'drums',
  channelName: '01 (1bar/1) static patterns', conf: window['s10NoPtnEdit_Ch1'], trackSet: 0, defaultPreset: 0, presets: window['s9DefPresetCh1'], defaultPattern: 1, defaultPatternSeq: 0, // fixed
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,0],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},  
    {"name":"hip hop beat","classs":"channel","id":"s10_ch1_bar1_ptn02","notenb":[2,2],"tracks":[[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
    {"name":"techno beat","classs":"channel","id":"s10_ch1_bar1_ptn01","notenb":[4,4],"tracks":[[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},    // 4x4 beat
    {"name":"reggae beat","classs":"channel","id":"s10_ch1_bar1_ptn03","notenb":[2,2],"tracks":[[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]},
  ],    
  //patternSeq: [ [{"name":"techno beat","classs":"channel","id":"s10_ch1_bar1_ptn01"}] ]  
}, 
//*/





/*
{ //sessionName: 'drums',
  channelName: '02 (1bar/1) static patterns', conf: window['s10Kitsch2'], trackSet: 1, defaultPreset: 0, presets: window['s9DefPresetCh1'], defaultPattern: 0,// defaultPatternSeq: 0, // fixed
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,0],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},  
    /*{"name":"5-13 hits","classs":"channel","id":"s10_ch2_bar1_ptn02","notenb":[2,2],"tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]]},
    {"name":"techno beat","classs":"channel","id":"s10_ch2_bar1_ptn01","notenb":[4,4],"tracks":[[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]]},    // 4x4 beat
    {"name":"reggae beat","classs":"channel","id":"s10_ch2_bar1_ptn03","notenb":[0,2],"tracks":[[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]},/
    // freestyle pattern 0>2
  ],    
}, 
*/



{ channelName: '8: Conductor',
  trackSet: 0, 
  conf: [{ 
    type: 'control', 
    instrumentName: 'Conductor', 
    name: 'Conductor Ctrl 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: sess10ConductorCtrls //session7ConductorControls
  }] 
}, 



{ 
  channelName: '01b gfx',   // first gfx user channel
  trackSet: 0,
  audiolink: 0,
  conf: [{ 
    type: 'gfx', 
    instrumentName: 'gfx', 
    name: 'gfx 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: sess10ConductorCtrls //session7ConductorControls
  }] 

  //, trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 0, defaultPatternSeq: 0, 

}, 





//*
{ 
  channelName: '02 (1bar/1) static patterns', conf: window['s10NoPtnEdit_Ch2'], trackSet: 0, defaultPreset: 0, presets: window['s9DefPresetCh1'], defaultPattern: 1, defaultPatternSeq: 0, // fixed
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,0],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},  
    {"name":"5-13 hits","classs":"channel","id":"s10_ch2_bar1_ptn02","notenb":[2,2],"tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]]},
    {"name":"5-15 hits","classs":"channel","id":"s10_ch2_bar1_ptn01","notenb":[2,2],"tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0]]},    
    {"name":"7-15 hits","classs":"channel","id":"s10_ch2_bar1_ptn03","notenb":[2,2],"tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0]]},
  ],      
}, 
//*/



{ 
  channelName: '02b gfx', // gfx user ch 02    
  audiolink: 3,
  trackSet: 0,
  conf: [{ 
    type: 'gfx', 
    instrumentName: 'gfx', 
    name: 'gfx 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: sess10ConductorCtrls //session7ConductorControls
  }] 

  //, trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 0, defaultPatternSeq: 0, 

}, 



//*
{ 
  channelName: '03 (1bar/1) static patterns', conf: window['s10NoPtnEdit_Ch3'], trackSet: 0, defaultPreset: 0, presets: window['s9DefPresetCh1'], defaultPattern: 1, defaultPatternSeq: 0, // fixed
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,0],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},  
    {"name":"hip hop hihats","classs":"channel","id":"s10_ch3_bar1_ptn01","notenb":[8,8],"tracks":[[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]]},
    {"name":"techno hihats","classs":"channel","id":"s10_ch3_bar1_ptn02","notenb":[4,4],"tracks":[[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0]]},
  ],      
}, 
//*/



{ 
  channelName: '03b gfx',     
  audiolink: 5,
  trackSet: 0,
  conf: [{ 
    type: 'gfx', 
    instrumentName: 'gfx', 
    name: 'gfx 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: sess10ConductorCtrls
  }] 


}, 




{ sessionName: 'The Chase',
  channelName: 'Ch4 | Bassline',  
  trackSet: 0, 
  defaultPattern: 1, 
  patterns: [ // channel patterns
    //{"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    // ? reset needs al lots of tracks to erase potentillat long tracked patterns !!!!
    {"name":"reset",      "classs":"channel", "id":"2fb82950-36f3-11e6-aa68-d355ddb21e83", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
    {"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}
  ],  

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f"},
      {"name":"bassline a", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f"} ]
  ], 

  conf: [ // kits 

              { // Kit
            type: 'synth',
            instrumentName: 'AikeWebsynth1', // aike_ws_01
            url:'http://aikelab.net/websynth/',

            color: 'rgba(0, 171, 157, 0.95)',
            name: '303 square bass', // preset name
            kitNumber: 1,     



      tracks: [
        { name: 'D#3',
          note:  10
        },       
        { name: 'C3',
          note:  7
        },  
        { name: 'A#2',
          note:  5
        }, 
        { name: 'G2',
          note:  2
        }, 
        { name: 'F2',
          note:  0
        }
      ],

/*
            tracks: [
              { name: 'C2',
                note: -5 
              },  
              { name: 'B1',
                note: -6
              }, 
              { name: 'A1',
                note: -8
              }, 
              { name: 'G1',
                note: -10
              }, 
              { name: 'F1',
                note: -12
              },   
              { name: 'E1',
                note: -13
              }, 
              { name: 'D1',
                note: -15
              },  
              { name: 'C1',
                note: -17
              }                                                                               
            ],
*/
            controls: window.launch.editor_controls /*[ // aka preset values


                //
        { name: 'Change preset',
          id: 998,
          type: 'ddmenu', // ddmenu  - slider, dial/rotary_knob, switch_button                                  
          x: {
            name: 'Kit change',
            param: '[external]', 
            value: 0,
            stepSize: 0, 
            interpolate: 0, // 0: off | 1: on                   
            displayedRangeMin: 0,
            displayedRangeMax: '[calc]',
            min: 0,
            max: '[calc]'
          }                 
        },

        { name: 'Change pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern change',
            param: '[external]', 
            value: 0,
            stepSize: 0, 
            interpolate: 0, 
            displayedRangeMin: 0,
            displayedRangeMax: '[calc]',
            min: 0,
            max: '[calc]'
          }                 
        },  


        { 
          name: 'Pattern sequencer',
          id: 992,

          type: 'multiselect', // nexus push button
          direction: 0, 
          colors: { 
            fg: '#51ACBD' 
          },   
          x: {
              name: 'Save Sequence',
              param: '[external]', 
              midicc: 0,                      
              value: 1, // pattern Seq enable or disable at startup = 0: off | 1: On
              stepSize: 0, 
              interpolate: 0 
          }                 
        }, 


        { 
          name: 'Save Pattern',
          id: 995,

          type: 'contact', // nexus push button
          direction: 0, 
          colors: { 
            fg: '#51ACBD' 
          },   
          x: {
              name: 'Save Pattern',
              param: '[external]', 
              midicc: 0,                      
              value: 0,
              stepSize: 0, 
              interpolate: 0 
          }                 
        },


       


           


                { 
                  name: 'osc1 waveform',
                  id: 1,
                  type: 'ddmenu',                                    
                  x: {
                    name: 'osc1 waveform',
                    param: 'vco1.set_wave',                     
                    value: 1,
                    stepSize: 1, 
                    interpolate: 0, 
                    min: 0,
                    max: 2, // 124        
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    }  

                  }                
                },  

                { 
                  name: 'osc2 waveform',
                  id: 2,
                  type: 'ddmenu',                                    
                  x: {
                    name: 'osc2 waveform',
                    param: 'vco2.set_wave',                     
                    value: 2,
                    stepSize: 1, 
                    interpolate: 0, 
                    min: 0,
                    max: 2,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    }                                          

                  }                
                }, 


                { 
                  name: 'osc1 vol',
                  id: 3,
                  type: 'slider',                                    
                  x: {
                    name: 'osc1 vol',
                    param: 'vco1.set_gain',                     
                    value: 0,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },

  


                { 
                  name: 'osc2 vol',
                  id: 4,
                  type: 'slider',                                    
                  x: {
                    name: 'osc2 vol',
                    param: 'vco2.set_gain',                     
                    value: 35,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },

  

                { 
                  name: 'osc2 pitch',
                  id: 5,
                  type: 'slider',                                    
                  x: {
                    name: 'osc2 pitch',
                    param: 'vco2.set_pitch',                     
                    value: 76, // -30 for high pitcehd notes
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },  



                { 
                  name: 'env attack',
                  id: 6,
                  type: 'slider',                                    
                  x: {
                    name: 'env attack',
                    param: 'eg.set_a',                     
                    value: 0,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },   

                { 
                  name: 'env decay',
                  id: 7,
                  type: 'slider',                                    
                  x: {
                    name: 'env decay',
                    param: 'eg.set_d',                     
                    value: 5,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },   

                { 
                  name: 'env sustain',
                  id: 8,
                  type: 'slider',                                    
                  x: {
                    name: 'env sustain',
                    param: 'eg.set_s',                     
                    value: 0,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },   

                { 
                  name: 'env release',
                  id: 9,
                  type: 'slider',                                    
                  x: {
                    name: 'env release',
                    param: 'eg.set_r',                     
                    value: 0,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },                                                                                                             



                { 
                  name: 'filter cutoff',
                  id: 10,
                  type: 'slider',                                    
                  x: {
                    name: 'filter cutoff',
                    param: 'filter.set_freq',                     
                    value: 0,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },  

                { 
                  name: 'filter resonance',
                  id: 11,
                  type: 'slider',                                    
                  x: {
                    name: 'filter resonance',
                    param: 'filter.set_q',                     
                    value: 75,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },  
                


                { 
                  name: 'filter eg amount',
                  id: 13,
                  type: 'slider',                                    
                  x: {
                    name: 'filter eg amount',
                    param: 'filter.set_amount',                     
                    value: 100,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },  



                { 
                  name: 'filter env attack',
                  id: 14,
                  type: 'slider',                                    
                  x: {
                    name: 'filter env attack',
                    param: 'feg.set_a',                     
                    value: 0,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },   

                { 
                  name: 'filter env decay',
                  id: 15,
                  type: 'slider',                                    
                  x: {
                    name: 'filter env decay',
                    param: 'feg.set_d',                     
                    value: 0,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },   

                { 
                  name: 'filter env sustain',
                  id: 16,
                  type: 'slider',                                    
                  x: {
                    name: 'filter env sustain',
                    param: 'feg.set_s',                     
                    value: 0,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                },   

                { 
                  name: 'filter env release',
                  id: 17,
                  type: 'slider',                                    
                  x: {
                    name: 'filter env release',
                    param: 'feg.set_r',                     
                    value: 0,
                    //stepSize: 0, 
                    interpolate: 0, 

                  }                
                }


                  

              ] // end of Kit controls   
              */           
          },

  ] // close kits
}, // close channel


{ 
  channelName: '04b gfx', // gfx user ch 02    
  audiolink: 7,
  trackSet: 0,
  conf: [{ 
    type: 'gfx', 
    instrumentName: 'gfx', 
    name: 'gfx 01', 
    kitNumber: 0, 
    color: '#51ACBD',       
    controls: sess10ConductorCtrls //session7ConductorControls
  }] 

  //, trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 0, defaultPatternSeq: 0, 

}, 




/*
{ 
  channelName: '04 (1bar/1) static patterns', conf: window['s10NoPtnEdit_Ch4'], trackSet: 0, defaultPreset: 0, presets: window['s9DefPresetCh1'], defaultPattern: 1, defaultPatternSeq: 0, // fixed
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,0],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},  
    {"name":"5-13 hits","classs":"channel","id":"s10_ch2_bar1_ptn02","notenb":[2,2],"tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]]},
    {"name":"5-15 hits","classs":"channel","id":"s10_ch2_bar1_ptn01","notenb":[2,2],"tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0]]},    
    {"name":"7-15 hits","classs":"channel","id":"s10_ch2_bar1_ptn03","notenb":[2,2],"tracks":[[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0]]},
    {"name":"multi claps","classs":"channel","id":"s10_ch3_bar1_ptn01","notenb":[8,8],"tracks":[[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]]}, // hip hop hihats 
  ],      
}, 
*/

/*
{ 
  channelName: '05 (1bar/1) editable patterns', conf: window['s10KitsCh5'], trackSet: 2, defaultPreset: 0, presets: window['s9DefPresetCh4'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s10_ch5_bar1","classs":"channel","id":"s10_ch5_bar1", "notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s10_ch5_bar1","classs":"channel","id":"s10_ch5_bar1"}] ]  
}, */


/*

{ 
  channelName: '06 (1bar/1) editable patterns', conf: window['s10KitsCh6'], trackSet: 0, defaultPreset: 0, presets: window['s9DefPresetCh4'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s10_ch6_bar1","classs":"channel","id":"s10_ch6_bar1", "notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s10_ch6_bar1","classs":"channel","id":"s10_ch6_bar1"}] ]  
}, 

{ 
  channelName: '07 (1bar/1) editable patterns', conf: window['s10KitsCh7'], trackSet: 2, defaultPreset: 0, presets: window['s9DefPresetCh4'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s10_ch7_bar1","classs":"channel","id":"s10_ch7_bar1", "notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s10_ch7_bar1","classs":"channel","id":"s10_ch7_bar1"}] ]  
}, 

*/

/*
{ 
  channelName: '08 (1bar/1) editable patterns', conf: window['s10KitsCh8'], trackSet: 0, defaultPreset: 0, presets: window['s9DefPresetCh4'], defaultPattern: 0, defaultPatternSeq: 0, 
  patterns: [
    {"name":"s10_ch8_bar1","classs":"channel","id":"s10_ch8_bar1", "notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s10_ch8_bar1","classs":"channel","id":"s10_ch8_bar1"}] ]  
}, 

*/


/*
{ 
  channelName: '09 (1bar/2) editable patterns', conf: window['s10KitsCh1'], trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s10_ch9_bar1","classs":"channel","id":"s10_ch9_bar1", "notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s10_ch9_bar1","classs":"channel","id":"s10_ch9_bar1"}, {"name":"reset","classs":"channel","id":"silence01"}, ] ]  
}, 

*/

{ 
  channelName: '10 (1bar/2) editable patterns', conf: window['s10KitsCh2'], trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s10_ch10_bar1","classs":"channel","id":"s10_ch10_bar1", "notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"s10_ch10_bar1","classs":"channel","id":"s10_ch10_bar1"}, {"name":"reset","classs":"channel","id":"silence01"}, ] ]  
}, 



{ 
  channelName: '11 (1bar/2) editable patterns', conf: window['s10KitsCh3'], trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s10_ch11_bar1","classs":"channel","id":"s10_ch11_bar1", "notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s10_ch11_bar1","classs":"channel","id":"s10_ch11_bar1"},  ] ]  
}, 

{ 
  channelName: '12 (1bar/2) editable patterns', conf: window['s10KitsCh4'], trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,2],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s10_ch12_bar1","classs":"channel","id":"s10_ch12_bar1", "notenb":[0,2], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s10_ch12_bar1","classs":"channel","id":"s10_ch12_bar1"},  ] ]  
}, 






{ 
  channelName: '13 (1bar/4) editable patterns', conf: window['s10KitsCh5'], trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,4],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s10_ch13_bar1","classs":"channel","id":"s10_ch13_bar1", "notenb":[0,4], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s10_ch13_bar1","classs":"channel","id":"s10_ch13_bar1"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, ] ]  
}, 


{ 
  channelName: '14 (1bar/4) editable patterns', conf: window['s10KitsCh6'], trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,4],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s10_ch14_bar1","classs":"channel","id":"s10_ch14_bar1", "notenb":[0,4], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"s10_ch14_bar1","classs":"channel","id":"s10_ch14_bar1"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, ] ]  
}, 

{ 
  channelName: '15 (1bar/4) editable patterns', conf: window['s10KitsCh6'], trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,4],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s10_ch15_bar1","classs":"channel","id":"s10_ch15_bar1", "notenb":[0,4], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s10_ch15_bar1","classs":"channel","id":"s10_ch15_bar1"},] ]  
}, 

{ 
  channelName: '16 (1bar/4) editable patterns', conf: window['s10KitsCh6'], trackSet: 0, defaultPreset: 0, presets: s9preset, defaultPattern: 1, defaultPatternSeq: 0, 
  patterns: [
    {"name":"silence","classs":"channel","id":"silence01","notenb":[0,4],"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"s10_ch16_bar1","classs":"channel","id":"s10_ch16_bar1", "notenb":[0,4], "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},    
  ],    
  patternSeq: [ [{"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"reset","classs":"channel","id":"silence01"}, {"name":"s10_ch16_bar1","classs":"channel","id":"s10_ch16_bar1"},] ]  
}, 


];















