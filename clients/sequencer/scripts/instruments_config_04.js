/*function extend(obj, src) {
  for (var key in src) {
  if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
  }
*/






//bill.name = "Bill";
//var c1_e1_3_notes = window.noteRanges['c1_c2_8_notes'].slice(0);

//console.log('ui arrayz: ', window.launch.sample_prg, aikeWebsynthControls); 


window.insConf4 = [ // channelConf

// orange channel

{ sessionName: 'Summerlab',
  channelName: 'Channel 1: drums',  
  trackSet: 1, // defaultKit or might always be first object of patterns array
  //*
  defaultPattern: 2, 
  patterns: [ // channel patterns
    //{"classs":"channel", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"id":"fake-option","name":"[last pattern]"},
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"dnb rythm", "classs":"channel", "id":"d969fe00-19c6-11e6-a327-f59272915189", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]]},
    {"classs":"channel", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0]],"id":"81a98180-1887-11e6-8ebb-edf93ea0958c","name":"4/4 kick"}    
  ],  
  //*/

  //defaultKitPreset: 0,
  //kitPresets : instrumentName, params: id,value

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
        { name: 'Tom 1',
          sampleUrl: 'TheCheebacabra1/tom1.wav'            
        },  
        { name: 'Snare',
          sampleUrl: 'TheCheebacabra1/snare.wav'            
        },
        { name: 'Hihat',
          sampleUrl: 'TheCheebacabra1/hihat.wav'            
        },
        { name: 'Kick',
          sampleUrl: 'TheCheebacabra1/kick.wav'            
        }                      
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', // ddmenu  - slider, dial/rotary_knob, switch_button                                  
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'input', // nexus push button
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
        }

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
          sampleUrl: 'CR78/tom1.wav'            
        },  
        {
          name: 'Snare',
          sampleUrl: 'CR78/snare.wav'            
        },
        {
          name: 'Hihat',
          sampleUrl: 'CR78/hihat.wav'            
        },
        {
          name: 'Kick',
          sampleUrl: 'CR78/kick.wav'            
        }                      
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Kit change',
            param: '[external]', 
            value: 1,
            stepSize: 0, 
            interpolate: 0, 
            displayedRangeMin: 0,
            displayedRangeMax: '[calc]',
            min: 0,
            max: '[calc]'
          }                 
        },


        { name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', // nexus push button
          direction: 0, 
          colors: { 
            fg: '#51ACBD' 
          },   
          x: {
              name: 'Enter pattern name to be saved',
              param: '[external]', 
              midicc: 0,                      
              value: 0,
              stepSize: 0, 
              interpolate: 0 
          }                 
        }




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
          sampleUrl: 'breakbeat13/hihat.wav'            
        },
        {
          name: 'Kick',
          sampleUrl: 'breakbeat13/kick.wav'            
        }                      
      ],
      controls: [ 
        { name: '[Kit change]',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Kit change',
            param: '[external]', 
            value: 2,
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
          sampleUrl: 'LINN/tom1.wav'            
        },  
        {
          name: 'Snare',
          sampleUrl: 'LINN/snare.wav'            
        },
        {
          name: 'Hihat',
          sampleUrl: 'LINN/hihat.wav'            
        },
        {
          name: 'Kick',
          sampleUrl: 'LINN/kick.wav'            
        }                      
      ],
      controls: [ 
        { name: '[Kit change]',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Kit change',
            param: '[external]', 
            value: 3,
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
          sampleUrl: 'Kit8/tom1.wav'            
        },  
        {
          name: 'Snare',
          sampleUrl: 'Kit8/snare.wav'            
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
        /*{ name: 'Cymbal',
          sampleUrl: 'Drums/Ah1 Ride.wav'            
        },
        { name: 'Rimshot',
          sampleUrl: 'Drums/Ch1 RimShot.wav'            
        },*/      
        { name: 'Rimshot',
          sampleUrl: '12-TR-909/909 RIM.wav'            
        },
        { name: 'Opened hihat',
          sampleUrl: '12-TR-909/909 HHOP.wav'            
        },
        { name: 'Clap',
          sampleUrl: '12-TR-909/909 CLAP.wav'            
        },  
        { name: 'Snare',
          sampleUrl: '12-TR-909/909 SD10.wav'            
        },
        { name: 'Closed hihat',
          sampleUrl: '12-TR-909/909 HHCL 1.wav'            
        },
        { name: 'Kick',
          sampleUrl: '12-TR-909/909 KIK2.wav' // 909 KIK7           
        }                      
      ],
      controls: [ 
        { name: '[Kit change]',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Kit change',
            param: '[external]', 
            value: 5,
            stepSize: 0, 
            interpolate: 0, // 0: off | 1: on                   
            displayedRangeMin: 0,
            displayedRangeMax: '[calc]',
            min: 0,
            max: '[calc]'
          }                 
        }
      ]            
    }


/* this kit needs sample normalizing (samples not loud enough) before requalifying to the system
    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Drums', 
      kitNumber: 5, 
      color: 'rgba(253, 118, 8, 0.75)', // (kitColor)
      tracks: [
        //{ name: 'Cymbal',
        //  sampleUrl: 'Drums/Ah1 Ride.wav'            
        //},
        //{ name: 'Rimshot',
        //  sampleUrl: 'Drums/Ch1 RimShot.wav'            
        //},      
        { name: 'Tom 3',
          sampleUrl: 'Drums/B1 TomHigh.wav'            
        },
        { name: 'Tom 2',
          sampleUrl: 'Drums/A1 TomMedium.wav'            
        },
        { name: 'Tom 1',
          sampleUrl: 'Drums/G1 TomLow.wav'            
        },  
        { name: 'Snare',
          sampleUrl: 'Drums/D1 Snare.wav'            
        },
        { name: 'Hihat',
          sampleUrl: 'Drums/Fh1 HiHat.wav'            
        },
        { name: 'Kick',
          sampleUrl: 'Drums/C1 Kick.wav'            
        }                      
      ],
      controls: [ 
        { name: '[Kit change]',
          id: 998,
          type: 'input', // slider, dial/rotary_knob, switch_button                                  
          x: {
            name: 'Kit change',
            param: '[external]', 
            value: 5,
            stepSize: 0, 
            interpolate: 0, // 0: off | 1: on                   
            displayedRangeMin: 0,
            displayedRangeMax: '[calc]',
            min: 0,
            max: '[calc]'
          }                 
        }
      ]            
    }, // close kit 
*/    

  ] // close kits
}, // close channel


/*{ sessionName: 'Batucada A',
  channelName: 'Ch1 Kick',  
  trackSet: 1, // defaultKit

  defaultPattern: 0, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]} 
  ], 


  conf: [ // kits 

    { type: 'samples', // (kitType) : conductor, samples, synth,...
      instrumentName: 'Sampler', 
      name: 'TheCheebacabra1', // (kitName)
      kitNumber: 0, // number 
      color: 'rgba(253, 118, 8, 1)', // (kitColor)
      tracks: [
        { name: 'Cheebacabra kick',
          sampleUrl: 'TheCheebacabra1/kick.wav'            
        }                   
      ],
     controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]           
    }, // close kit

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'CR78', 
      kitNumber: 1, 
      color: 'rgba(253, 118, 8, 0.95)', 
      tracks: [
        {
          name: 'CR78 Kick',
          sampleUrl: 'CR78/kick.wav'            
        }                      
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]             
    }, 

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'breakbeat13', 
      kitNumber: 2, 
      color: 'rgba(253, 118, 8, 0.9)', 
      tracks: [
        {
          name: 'Breakbeat13 kick',
          sampleUrl: 'breakbeat13/kick.wav'            
        }                      
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]             
    },   

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'LINN', 
      kitNumber: 3, 
      color: 'rgba(253, 118, 8, 0.85)', 
      tracks: [
        {
          name: 'Linn kick',
          sampleUrl: 'LINN/kick.wav'            
        }                      
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]             
    },  

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Kit8', 
      kitNumber: 4, 
      color: 'rgba(253, 118, 8, 0.8)', 
      tracks: [
        {
          name: 'Kit8 kick',
          sampleUrl: 'Kit8/kick.wav'            
        }                      
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]             
    },     

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: '909', 
      kitNumber: 5, 
      color: 'rgba(253, 118, 8, 0.7)', // (kitColor)
      tracks: [
        { name: '909 kick',
          sampleUrl: '12-TR-909/909 KIK2.wav' // 909 KIK7           
        }                      
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]             
    }   
  ] // close kits
}, // close channel
*/














// black channel

//*
{ // channel
  channelName: 'Ch2 Conductor', // name
  //channelType: 'conductor', // type
  trackSet: 0, // defaultKit = default instrument/control kit

  conf: [ // kits = kitConfiguration 
    { // kit            
      type: 'control', // = kitType
      instrumentName: 'Conductor', 

      name: 'Conductor Ctrl 01', // = kitName
      kitNumber: 0, // number = kitNumber            
      color: '#51ACBD', // = kitColor
      
      controls: [ // aka preset values                                    
        /*{ 
          name: 'Channel 1 volume',
          id: 800,

          type: 'slider', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'Channel 1 volume',
              param: '_insVol0', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 55,
              stepSize: 0, // crénelage   
              interpolate: 1, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },

        // Channel 2 = conductor role

        { 
          name: 'Channel 3 volume',
          id: 802,

          type: 'slider', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'Channel 3 volume',
              param: '_insVol2', // [external] = does not change timbre generator param

              subParams: { 
                AikeWebsynth1: 'volume.set' 
              }, 

              midicc: 0,                      
              value: 18, // 
              stepSize: 0, // crénelage   
              interpolate: 1, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },

        { 
          name: 'Channel 4 volume',
          id: 803,
          type: 'slider',                             
          x: {
              name: 'Channel 4 volume',
              param: '_insVol3', 
              subParams: { 
                AikeWebsynth1: 'volume.set' 
              },                   
              value: 25, // 30
              stepSize: 0, 
              interpolate: 1, 
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        }, 

        { 
          name: 'Channel 5 volume',
          id: 804,
          type: 'slider',                             
          x: {
              name: 'Channel 5 volume',
              param: '_insVol4', 
              subParams: { 
                AikeWebsynth1: 'volume.set' 
              },                   
              value: 18, // 23
              stepSize: 0, 
              interpolate: 1, 
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        }, 

        { 
          name: 'Channel 6 volume',
          id: 805,
          type: 'slider',                             
          x: {
              name: 'Channel 6 volume',
              param: '_insVol5', 
              subParams: { 
                AikeWebsynth1: 'volume.set' 
              },                   
              value: 22, // 30
              stepSize: 0, 
              interpolate: 1, 
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        }, 

        { 
          name: 'Channel 7 volume',
          id: 806,
          type: 'slider',                             
          x: {
              name: 'Channel 7 volume',
              param: '_insVol6', 
              subParams: { 
                AikeWebsynth1: 'volume.set' 
              },                   
              value: 10, //
              stepSize: 0, 
              interpolate: 1, 
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        }, 

        { 
          name: 'Channel 8 volume',
          id: 807,
          type: 'slider',                             
          x: {
              name: 'Channel 8 volume',
              param: '_insVol7', 
              subParams: { 
                AikeWebsynth1: 'volume.set' 
              },                   
              value: 35, // 40
              stepSize: 0, 
              interpolate: 1, 
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        }, */                                       





{ 
          name: 'Channel 1 volume',
          id: 800,

          type: 'slider', // slider, dial/rotary_knob, switch_button      
          direction: 'horizontal', // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'Channel 1 volume',
              param: '_insVol0', // [external] = does not change timbre generator param
              midicc: 7,  // 74                    
              value: 50, // 60
              stepSize: 0, // crénelage   
              interpolate: 1, // 0: off | 1: on                   
              mute: 1, // 0: off | 1: on  
              muteKey: 49, // beware fr,fr azerty keyboard
              muteNote: 48,
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },

        // Channel 2 = conductor role

        { 
          name: 'Channel 3 volume',
          id: 802,

          type: 'slider', // slider, dial/rotary_knob, switch_button      
          direction: 'horizontal', // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'Channel 3 volume',
              param: '_insVol2', // [external] = does not change timbre generator param

              subParams: { 
                AikeWebsynth1: 'volume.set' 
              }, 

              midicc: 4,  // 71                    
              value: 10,
              stepSize: 0, // crénelage   
              interpolate: 1, // 0: off | 1: on 
              mute: 1,        
              muteKey: 50,    
              muteNote: 50,      
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },

        { 
          name: 'Channel 4 volume',
          id: 803,
          type: 'slider',  
          direction: 'horizontal',                           
          x: {
              name: 'Channel 4 volume',
              param: '_insVol3', 
              subParams: { 
                AikeWebsynth1: 'volume.set' 
              },                   
              value: 10, // 30
              stepSize: 0, 
              interpolate: 1, 
              displayedRangeMin: 0,
              midicc: 3,
              mute: 1,        
              muteKey: 51,                
              muteNote: 52,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        }, 

        { 
          name: 'Channel 5 volume',
          id: 804,
          type: 'slider',
          direction: 'horizontal',                             
          x: {
              name: 'Channel 5 volume',
              param: '_insVol4', 
              subParams: { 
                AikeWebsynth1: 'volume.set' 
              },                   
              value: 6, // 23
              stepSize: 0, 
              interpolate: 1, 
              midicc: 13,
              mute: 1,        
              muteKey: 52,  
              muteNote: 53,
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        }, 

        { 
          name: 'Channel 6 volume',
          id: 805,
          type: 'slider', 
          direction: 'horizontal',                            
          x: {
              name: 'Channel 6 volume',
              param: '_insVol5', 
              subParams: { 
                AikeWebsynth1: 'volume.set' 
              },                   
              value: 18, // 30
              stepSize: 0, 
              interpolate: 1, 
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              midicc: 14,
              mute: 1,        
              muteKey: 53,                
              muteNote: 55,
              min: 0,
              max: 1
          }                
        }, 

        { 
          name: 'Channel 7 volume',
          id: 806,
          type: 'slider',  
          direction: 'horizontal',                           
          x: {
              name: 'Channel 7 volume',
              param: '_insVol6', 
              subParams: { 
                AikeWebsynth1: 'volume.set' 
              },                   
              value: 9,
              stepSize: 0, 
              interpolate: 1, 
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              midicc: 15,
              mute: 1,        
              muteKey: 54,                
              muteNote: 57,
              min: 0,
              max: 1
          }                
        }, 

        { 
          name: 'Channel 8 volume',
          id: 807,
          type: 'slider',   
          direction: 'horizontal',                          
          x: {
              name: 'Channel 8 volume',
              param: '_insVol7', 
              subParams: { 
                AikeWebsynth1: 'volume.set' 
              },                   
              value: 22, // 40
              stepSize: 0, 
              interpolate: 1, 
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              midicc: 16,
              mute: 1,        
              muteKey: 55,                
              muteNote: 59,
              min: 0,
              max: 1
          }                
        },





        { // control
          name: 'Tempo',
          id: 999,

          type: 'slider', // slider, dial/rotary_knob, switch_button  - input    
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },   
          x: {
              name: 'BPM',
              param: '_tempo', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 90, // 100 - 85 110 - 119
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 60,
              displayedRangeMax: 220, // 400
              min: 60,
              max: 220 // 400
          }               
        },

        { // control
          name: 'Channel change',
          id: 997,

          type: 'hidden', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },   
          x: {
              name: 'Channel change',
              param: '[external]', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 0,
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 1,
              min: 0,
              max: 1
          }                 
        },

        { // control
          name: 'Session change',
          id: 996,

          type: 'ddmenu', 
          direction: 0, 
          colors: { 
            fg: '#51ACBD' 
          },   
          x: {
              name: 'Session', //  dest (1>2) - Pick session
              param: '[external]', 
              midicc: 0,                      
              value: 2, // starting at session 001
              stepSize: 0, 
              interpolate: 0, 
              displayedRangeMin: 0,
              displayedRangeMax: 1,
              min: 1,
              max: 2
          }                 
        },

        { 
          name: 'C1 start bar offset',
          id: 700,

          type: 'hidden', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'C1 start bar offset',
              param: '_insBarOffset0', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 0,
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },   

        { 
          name: 'C2 start bar offset',
          id: 701,

          type: 'hidden', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'C2 start bar offset',
              param: '_insBarOffset1', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 0, //
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },        

        { 
          name: 'C3 start bar offset',
          id: 702,

          type: 'hidden', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'C3 start bar offset',
              param: '_insBarOffset2', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 4, //
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },   

        { 
          name: 'C4 start bar offset',
          id: 703,

          type: 'hidden', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'C4 start bar offset',
              param: '_insBarOffset3', // [external] = does not change timbre generator param
              midicc: 32,                      
              value: 8, // 8
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        }, 

        { 
          name: 'C5 start bar offset',
          id: 704,

          type: 'hidden', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'C5 start bar offset',
              param: '_insBarOffset4', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 16, // 48
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        }, 

        { 
          name: 'C6 start bar offset',
          id: 705,

          type: 'hidden', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'C6 start bar offset',
              param: '_insBarOffset5', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 20, // 64
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },   

        { 
          name: 'C7 start bar offset',
          id: 706,

          type: 'hidden', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'C7 start bar offset',
              param: '_insBarOffset6', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 32, // 70
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },  

        { 
          name: 'C8 start bar offset',
          id: 707,

          type: 'hidden', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'C8 start bar offset',
              param: '_insBarOffset7', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 24, // 74
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },                                                

        { 
          name: 'General Bar kickout time',
          id: 699,

          type: 'input', // slider, dial/rotary_knob, switch_button      
          direction: 0, // 'horizontal', 'vertical' for sliders    
          colors: { // color params
            fg: '#51ACBD' // foregroundColor
          },          
                    
          x: {
              name: 'General kickout time (in bars)',
              param: '_insKickoutTime', // [external] = does not change timbre generator param
              midicc: 0,                      
              value: 32, // 90 ? don't 
              stepSize: 0, // crénelage   
              interpolate: 0, // 0: off | 1: on                   
              displayedRangeMin: 0,
              displayedRangeMax: 100,
              min: 0,
              max: 1
          }                
        },                                   

      ] // end of controls
    } // end of kit
  ] // end of kits
}, // end of channel
//*/



















//*


// blue channel

{ channelName: 'Ch3 Bass', // channelName = "bass, high pitch sounds etc" - insName
  //channelType: 'instrument', // conductor
  trackSet: 0, // defaultKit -   Number - // defaultInstrumentPreset



  defaultPreset: 0, 
  presets: [
    {"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"double osc bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d0000","controls":{1:40, 2:1, 3:100, 4:0, 5:0, 6:0, 7:15, 8:0, 9:0, 10:66, 11:20, 12:35, 13:0, 14:30, 15:80, 16:0}},
  ],

  defaultPattern: 0, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"id":"5236cf00-43a4-11e6-b2a6-8dd4312fd1bb","name":"S_Lab_BassLine01","classs":"channel"},
    {"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f", "tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]}     
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"bassline a", "classs":"channel", "id":"712cc380-3d17-11e6-bd11-650c5a0c542f"},
      {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"}
      //{"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f"} 
    ]
  ],   

  conf: [ // kits channelConfiguration kitConfiguration - instruments conf'
   
    { // Kit
      type: 'synth',
      instrumentName: 'AikeWebsynth1', // aike_ws_01
      instrumentUrl: 'http://aikelab.net/websynth/',

      color: 'rgba(0, 171, 157, 0.95)',
      name: 'c1 > e1', // preset name - 303 square bass
      kitNumber: 0,      

      tracks: window.draw.chase_bass /* c1_c2_penta_minor  c1_e1_3_notes[
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
      ]*/,

      controls: aikeWebsynthControls/*[ // aka preset values
          //
{ name: 'Choose sound', // instrument/
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Choose pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
            name: 'osc1 vol',
            id: 1,
            type: 'slider',                                    
            x: {
              name: 'osc1 vol',
              param: 'vco1.set_gain',                     
              value: 0, 
              interpolate: 0, 
            }                
          },
          { 
            name: 'osc1 waveform',
            id: 2,
            type: 'ddmenu',                                    
            x: {
              name: 'osc1 waveform',
              param: 'vco1.set_wave',                     
              value: 1,
              stepSize: 1, 
              interpolate: 0, 
              min: 0,
              option: {
                0: 'triangle',
                1: 'sawtooth',                     
                2: 'square',
              },               
              max: 2 // 124                    
            }                
          },  
          { 
            name: 'osc2 vol',
            id: 3,
            type: 'slider',                                    
            x: {
              name: 'osc2 vol',
              param: 'vco2.set_gain',                     
              value: 35, 
              interpolate: 0, 
            }                
          },
          { 
            name: 'osc2 waveform',
            id: 4,
            type: 'ddmenu',                                    
            x: {
              name: 'osc2 waveform',
              param: 'vco2.set_wave',                     
              value: 2,
              stepSize: 1, 
              interpolate: 0, 
              min: 0,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    },                 
              max: 2                    
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
              interpolate: 0, 
            }                
          }                  
        ] // end of Kit controls   */           
    },









    { type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      instrumentUrl: 'http://aikelab.net/websynth/',
      color: 'rgba(0, 161, 0, 1)',
      name: 'c2 > c3', // double osc bass
      kitNumber: 1,
      tracks: [
        { name: 'C3',
          note:  7
        },  
        { name: 'B2',
          note:  6
        }, 
        { name: 'A2',
          note:  4
        }, 
        { name: 'G2',
          note:  2
        }, 
        { name: 'F2',
          note:  0
        },   
        { name: 'E2',
          note: -1
        }, 
        { name: 'D2',
          note: -3
        },  
        { name: 'C2',
          note: -5
        } 
      ],
      controls: aikeWebsynthControls /*[ 
{ name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        { name: 'osc1 vol',
          id: 1,
          type: 'slider',                                    
          x: {
            name: 'osc1 vol',
            param: 'vco1.set_gain',                     
            value: 40,
            interpolate: 0, 

          }                
        },
        { name: 'osc1 waveform',
          id: 2,
          type: 'ddmenu',                                    
          x: {
            name: 'osc1 waveform',
            param: 'vco1.set_wave',                     
            value: 1,
            stepSize: 1, 
            interpolate: 0, 
            min: 0,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    },               
            max: 2 // 124                    
          }                
        },  
        { name: 'osc2 vol',
          id: 3,
          type: 'slider',                                    
          x: {
            name: 'osc2 vol',
            param: 'vco2.set_gain',                     
            value: 110,
            interpolate: 0, 
          }                
        },
        { name: 'osc2 waveform',
          id: 4,
          type: 'ddmenu',                                    
          x: {
            name: 'osc2 waveform',
            param: 'vco2.set_wave',                     
            value: 0,
            stepSize: 1, 
            interpolate: 0, 
            min: 0,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    },               
            max: 2                    
          }                
        },     
        { name: 'osc2 pitch',
          id: 5,
          type: 'slider',                                    
          x: {
            name: 'osc2 pitch',
            param: 'vco2.set_pitch',                     
            value: 0, // -30 for high pitcehd notes
            interpolate: 0, 
          }                
        },  
        { name: 'env attack',
          id: 6,
          type: 'slider',                                    
          x: {
            name: 'env attack',
            param: 'eg.set_a',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'env decay',
          id: 7,
          type: 'slider',                                    
          x: {
            name: 'env decay',
            param: 'eg.set_d',                     
            value: 15,
            interpolate: 0, 
          }                
        },   
        { name: 'env sustain',
          id: 8,
          type: 'slider',                                    
          x: {
            name: 'env sustain',
            param: 'eg.set_s',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'env release',
          id: 9,
          type: 'slider',                                    
          x: {
            name: 'env release',
            param: 'eg.set_r',                     
            value: 0,
            interpolate: 0, 
          }                
        },                                                                                                             
        { name: 'filter cutoff',
          id: 10,
          type: 'slider',                                    
          x: {
            name: 'filter cutoff',
            param: 'filter.set_freq',                     
            value: 66,
            interpolate: 0, 
          }                
        },  
        { name: 'filter resonance',
          id: 11,
          type: 'slider',                                    
          x: {
            name: 'filter resonance',
            param: 'filter.set_q',                     
            value: 20,
            interpolate: 0, 
          }                
        },  
        { name: 'filter eg amount',
          id: 13,
          type: 'slider',                                    
          x: {
            name: 'filter eg amount',
            param: 'filter.set_amount',                     
            value: 35,
            interpolate: 0, 
          }                
        },  
        { name: 'filter env attack',
          id: 14,
          type: 'slider',                                    
          x: {
            name: 'filter env attack',
            param: 'feg.set_a',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env decay',
          id: 15,
          type: 'slider',                                    
          x: {
            name: 'filter env decay',
            param: 'feg.set_d',                     
            value: 30,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env sustain',
          id: 16,
          type: 'slider',                                    
          x: {
            name: 'filter env sustain',
            param: 'feg.set_s',                     
            value: 80,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env release',
          id: 17,
          type: 'slider',                                    
          x: {
            name: 'filter env release',
            param: 'feg.set_r',                     
            value: 0,
            interpolate: 0, 
          }                
        }
      ]*/ // end of kit controls
    }, // end of kit









 




  ] // close channel conf

}, // close channel
//


















{ channelName: 'Ch4 Aigu',  
  trackSet: 1, 

  defaultPattern: 1, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"tracks":[[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0]],"id":"5ea7c9c0-43a8-11e6-aef9-a11d75865f0d","name":"snare","classs":"channel"}     
  ], 

  conf: [ 

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'aigu_01', 
      kitNumber: 0, 
      color: 'rgba(0, 161, 0, 1)', 
      tracks: [
        { name: 'aigu_01',
          sampleUrl: 'summerlab_01/aigu_01.wav'            
        }                   
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'aigu_02', 
      kitNumber: 1, 
      color: 'rgba(0, 161, 0, 0.9)', 
      tracks: [
        { name: 'aigu_02',
          sampleUrl: 'summerlab_01/aigu_02.wav'            
        }                   
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'aigu_03', 
      kitNumber: 2, 
      color: 'rgba(0, 161, 0, 0.8)', 
      tracks: [
        { name: 'aigu_03',
          sampleUrl: 'summerlab_01/aigu_03.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'aigu_04', 
      kitNumber: 3, 
      color: 'rgba(0, 161, 0, 0.7)', 
      tracks: [
        { name: 'aigu_04',
          sampleUrl: 'summerlab_01/aigu_04.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]           
    },

     { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'bois_01', 
      kitNumber: 4, 
      color: 'rgba(0, 161, 0, 0.6)', 
      tracks: [
        { name: 'bois_01',
          sampleUrl: 'summerlab_01/bois_01.wav'            
        }                   
      ],
 controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },           



  ] // close kits
}, // close channel












{ channelName: 'Ch5 Bong/Tôle/Clap',  
  trackSet: 2, 

  defaultPattern: 1, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"tracks":[[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]],"id":"921e3a00-43a8-11e6-8708-cb84aafd38b0","name":"hihats","classs":"channel"} 
  ], 

  conf: [ 

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'bong_01', 
      kitNumber: 0, 
      color: 'rgba(237, 49, 104, 1)', 
      tracks: [
        { name: 'bong_01',
          sampleUrl: 'summerlab_01/bong_01.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]           
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'bong_02', 
      kitNumber: 1, 
      color: 'rgba(237, 49, 104, 0.9)', 
      tracks: [
        { name: 'bong_02',
          sampleUrl: 'summerlab_01/bong_02.wav'            
        }                   
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'bong_03', 
      kitNumber: 2, 
      color: 'rgba(237, 49, 104, 0.8)', 
      tracks: [
        { name: 'bong_03',
          sampleUrl: 'summerlab_01/bong_03.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'tôle_01', 
      kitNumber: 3, 
      color: 'rgba(237, 49, 104, 0.7)', 
      tracks: [
        { name: 'tôle_01',
          sampleUrl: 'summerlab_01/tôle_01.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

     { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'tôle_02', 
      kitNumber: 4, 
      color: 'rgba(237, 49, 104, 0.6)', 
      tracks: [
        { name: 'tôle_02',
          sampleUrl: 'summerlab_01/tôle_02.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },  


 { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'clap_03', 
      kitNumber: 0, 
      color: 'rgba(237, 49, 104, 0.5)', 
      tracks: [
        { name: 'clap_03',
          sampleUrl: 'summerlab_01/clap_03.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'clap_04', 
      kitNumber: 1, 
      color: 'rgba(237, 49, 104, 0.4)', 
      tracks: [
        { name: 'clap_04',
          sampleUrl: 'summerlab_01/clap_04.wav'            
        }                   
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },            



  ] // close kits
}, // close channel
















{ channelName: 'Ch6 Machine',  

  defaultPattern: 1, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"tracks":[[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1]],"id":"c503b4e0-43a8-11e6-9e5e-476267c44e16","name":"4-16 steps","classs":"channel"}     
  ], 

  trackSet: 5, 
  conf: [ 

    

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'machine_01', 
      kitNumber: 2, 
      color: 'rgba(253, 206, 31, 1)', 
      tracks: [
        { name: 'machine_01',
          sampleUrl: 'summerlab_01/machine_01.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'machine_02', 
      kitNumber: 3, 
      color: 'rgba(253, 206, 31, 0.9)', 
      tracks: [
        { name: 'machine_02',
          sampleUrl: 'summerlab_01/machine_02.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]           
    },

     { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'machine_03', 
      kitNumber: 4, 
      color: 'rgba(253, 206, 31, 0.8)', 
      tracks: [
        { name: 'machine_03',
          sampleUrl: 'summerlab_01/machine_03.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]          
    },  


    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'machine_04', 
      kitNumber: 2, 
      color: 'rgba(253, 206, 31, 0.7)', 
      tracks: [
        { name: 'machine_04',
          sampleUrl: 'summerlab_01/machine_04.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },



    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'machine_05', 
      kitNumber: 2, 
      color: 'rgba(253, 206, 31, 0.6)', 
      tracks: [
        { name: 'machine_05',
          sampleUrl: 'summerlab_01/machine_05.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },    



    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'machine_06', 
      kitNumber: 2, 
      color: 'rgba(253, 206, 31, 0.5)', 
      tracks: [
        { name: 'machine_06',
          sampleUrl: 'summerlab_01/machine_06.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },



  ] // close kits
}, // close channel
























{ channelName: 'Ch7 Synth', // channelName = "bass, high pitch sounds etc" - insName
  //channelType: 'instrument', // conductor
  trackSet: 0, // defaultKit -   Number - // defaultInstrumentPreset



  defaultPreset: 0, 
  presets: [
    {"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"double osc bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d0000","controls":{1:40, 2:1, 3:100, 4:0, 5:0, 6:0, 7:15, 8:0, 9:0, 10:66, 11:20, 12:35, 13:0, 14:30, 15:80, 16:0}},
  ],

  defaultPattern: 0, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"id":"5236cf00-43a4-11e6-b2a6-8dd4312fd1bb","name":"S_Lab_BassLine01","classs":"channel"} 
  ], 

  defaultPatternSeq: 0, 
  patternSeq: [     
    [ {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83"},
      {"name":"bassline b", "classs":"channel", "id":"01627d00-3d18-11e6-bd11-650c5a0c542f"} ]
  ],     

  conf: [ // kits channelConfiguration kitConfiguration - instruments conf'
   
    { // Kit
      type: 'synth',
      instrumentName: 'AikeWebsynth1', // aike_ws_01

      color: 'rgba(0, 171, 157, 0.95)',
      name: 'c1 > e1', // preset name - 303 square bass
      kitNumber: 0,      

      tracks: window.draw.c3_c4_penta_minor /*c1_e1_3_notes[
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
      ]*/,

      controls: aikeWebsynthControls/*[ // aka preset values
          //
{ name: 'Choose sound', // instrument/
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Choose pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
            name: 'osc1 vol',
            id: 1,
            type: 'slider',                                    
            x: {
              name: 'osc1 vol',
              param: 'vco1.set_gain',                     
              value: 0, 
              interpolate: 0, 
            }                
          },
          { 
            name: 'osc1 waveform',
            id: 2,
            type: 'ddmenu',                                    
            x: {
              name: 'osc1 waveform',
              param: 'vco1.set_wave',                     
              value: 1,
              stepSize: 1, 
              interpolate: 0, 
              min: 0,
              option: {
                0: 'triangle',
                1: 'sawtooth',                     
                2: 'square',
              },               
              max: 2 // 124                    
            }                
          },  
          { 
            name: 'osc2 vol',
            id: 3,
            type: 'slider',                                    
            x: {
              name: 'osc2 vol',
              param: 'vco2.set_gain',                     
              value: 35, 
              interpolate: 0, 
            }                
          },
          { 
            name: 'osc2 waveform',
            id: 4,
            type: 'ddmenu',                                    
            x: {
              name: 'osc2 waveform',
              param: 'vco2.set_wave',                     
              value: 2,
              stepSize: 1, 
              interpolate: 0, 
              min: 0,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    },                 
              max: 2                    
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
              interpolate: 0, 
            }                
          }                  
        ] // end of Kit controls   */           
    },









    { type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      color: 'rgba(0, 161, 0, 1)',
      name: 'c2 > c3', // double osc bass
      kitNumber: 1,
      tracks: [
        { name: 'C3',
          note:  7
        },  
        { name: 'B2',
          note:  6
        }, 
        { name: 'A2',
          note:  4
        }, 
        { name: 'G2',
          note:  2
        }, 
        { name: 'F2',
          note:  0
        },   
        { name: 'E2',
          note: -1
        }, 
        { name: 'D2',
          note: -3
        },  
        { name: 'C2',
          note: -5
        } 
      ],
      controls: aikeWebsynthControls /*[ 
{ name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        { name: 'osc1 vol',
          id: 1,
          type: 'slider',                                    
          x: {
            name: 'osc1 vol',
            param: 'vco1.set_gain',                     
            value: 40,
            interpolate: 0, 

          }                
        },
        { name: 'osc1 waveform',
          id: 2,
          type: 'ddmenu',                                    
          x: {
            name: 'osc1 waveform',
            param: 'vco1.set_wave',                     
            value: 1,
            stepSize: 1, 
            interpolate: 0, 
            min: 0,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    },               
            max: 2 // 124                    
          }                
        },  
        { name: 'osc2 vol',
          id: 3,
          type: 'slider',                                    
          x: {
            name: 'osc2 vol',
            param: 'vco2.set_gain',                     
            value: 110,
            interpolate: 0, 
          }                
        },
        { name: 'osc2 waveform',
          id: 4,
          type: 'ddmenu',                                    
          x: {
            name: 'osc2 waveform',
            param: 'vco2.set_wave',                     
            value: 0,
            stepSize: 1, 
            interpolate: 0, 
            min: 0,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    },               
            max: 2                    
          }                
        },     
        { name: 'osc2 pitch',
          id: 5,
          type: 'slider',                                    
          x: {
            name: 'osc2 pitch',
            param: 'vco2.set_pitch',                     
            value: 0, // -30 for high pitcehd notes
            interpolate: 0, 
          }                
        },  
        { name: 'env attack',
          id: 6,
          type: 'slider',                                    
          x: {
            name: 'env attack',
            param: 'eg.set_a',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'env decay',
          id: 7,
          type: 'slider',                                    
          x: {
            name: 'env decay',
            param: 'eg.set_d',                     
            value: 15,
            interpolate: 0, 
          }                
        },   
        { name: 'env sustain',
          id: 8,
          type: 'slider',                                    
          x: {
            name: 'env sustain',
            param: 'eg.set_s',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'env release',
          id: 9,
          type: 'slider',                                    
          x: {
            name: 'env release',
            param: 'eg.set_r',                     
            value: 0,
            interpolate: 0, 
          }                
        },                                                                                                             
        { name: 'filter cutoff',
          id: 10,
          type: 'slider',                                    
          x: {
            name: 'filter cutoff',
            param: 'filter.set_freq',                     
            value: 66,
            interpolate: 0, 
          }                
        },  
        { name: 'filter resonance',
          id: 11,
          type: 'slider',                                    
          x: {
            name: 'filter resonance',
            param: 'filter.set_q',                     
            value: 20,
            interpolate: 0, 
          }                
        },  
        { name: 'filter eg amount',
          id: 13,
          type: 'slider',                                    
          x: {
            name: 'filter eg amount',
            param: 'filter.set_amount',                     
            value: 35,
            interpolate: 0, 
          }                
        },  
        { name: 'filter env attack',
          id: 14,
          type: 'slider',                                    
          x: {
            name: 'filter env attack',
            param: 'feg.set_a',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env decay',
          id: 15,
          type: 'slider',                                    
          x: {
            name: 'filter env decay',
            param: 'feg.set_d',                     
            value: 30,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env sustain',
          id: 16,
          type: 'slider',                                    
          x: {
            name: 'filter env sustain',
            param: 'feg.set_s',                     
            value: 80,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env release',
          id: 17,
          type: 'slider',                                    
          x: {
            name: 'filter env release',
            param: 'feg.set_r',                     
            value: 0,
            interpolate: 0, 
          }                
        }
      ]*/ // end of kit controls
    }, // end of kit









 




  ] // close channel conf

},







// Yellow cheesy channel: guitar, synth lead, etc
/*
{ channelName: 'Ch7 synthétiseur',  

  defaultPreset: 0, 
  presets: [
    {"name":"303 square bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d8f8f","controls":{1:0, 2:1, 3:35, 4:2, 5:76, 6:0, 7:5, 8:0, 9:0, 10:0, 11:75, 12:100, 13:0, 14:0, 15:0, 16:0}},
    {"name":"double osc bass","type":"AikeWebsynth1","classs":"channel","id":"2fbdd99d0000","controls":{1:40, 2:1, 3:100, 4:0, 5:0, 6:0, 7:15, 8:0, 9:0, 10:66, 11:20, 12:35, 13:0, 14:30, 15:80, 16:0}},
  ],


  defaultPattern: 1, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]],"id":"ee663060-43a8-11e6-b344-c76207a71a6f","name":"3-15 steps","classs":"channel"} 
  ], 

  trackSet: 0, 
  conf: [ 

    { type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      color: 'rgba(253, 206, 31, 0.8)',
      name: 'etoufed synth', 
      kitNumber: 0,
      tracks: window.draw.c3_c4_penta_minor/*[
        { name: 'C5',
          note:  31
        },  
        { name: 'B4',
          note:  30
        }, 
        { name: 'A4',
          note:  28
        }, 
        { name: 'G4',
          note:  26
        }, 
        { name: 'F4',
          note:  24
        },   
        { name: 'E4',
          note:  23   
        }, 
        { name: 'D4',
          note:  21
        },  
        { name: 'C4',
          note:  19
        } 
      ]/,
      controls: [ 
{ name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        { name: 'osc1 vol',
          id: 1,
          type: 'slider',                                    
          x: {
            name: 'osc1 vol',
            param: 'vco1.set_gain',                     
            value: 25,
            interpolate: 0, 
          }                
        },
        { name: 'osc1 waveform',
          id: 2,
          type: 'ddmenu',                                    
          x: {
            name: 'osc1 waveform',
            param: 'vco1.set_wave',                     
            value: 1,
            stepSize: 1, 
            interpolate: 0, 
            min: 0,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    },               
            max: 2 // 124                    
          }                
        },  
        { name: 'osc2 vol',
          id: 3,
          type: 'slider',                                    
          x: {
            name: 'osc2 vol',
            param: 'vco2.set_gain',                     
            value: 70,
            interpolate: 0, 
          }                
        },
        { name: 'osc2 waveform',
          id: 4,
          type: 'ddmenu',                                    
          x: {
            name: 'osc2 waveform',
            param: 'vco2.set_wave',                     
            value: 0,
            stepSize: 1, 
            interpolate: 0, 
            min: 0,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    },               
            max: 2                    
          }                
        },     
        { name: 'osc2 pitch',
          id: 5,
          type: 'slider',                                    
          x: {
            name: 'osc2 pitch',
            param: 'vco2.set_pitch',                     
            value: 0, // -30 for high pitcehd notes
            interpolate: 0, 
          }                
        },  
        { name: 'env attack',
          id: 6,
          type: 'slider',                                    
          x: {
            name: 'env attack',
            param: 'eg.set_a',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'env decay',
          id: 7,
          type: 'slider',                                    
          x: {
            name: 'env decay',
            param: 'eg.set_d',                     
            value: 20,
            interpolate: 0, 
          }                
        },   
        { name: 'env sustain',
          id: 8,
          type: 'slider',                                    
          x: {
            name: 'env sustain',
            param: 'eg.set_s',                     
            value: 50,
            interpolate: 0, 
          }                
        },   
        { name: 'env release',
          id: 9,
          type: 'slider',                                    
          x: {
            name: 'env release',
            param: 'eg.set_r',                     
            value: 0,
            interpolate: 0, 
          }                
        },                                                                                                             
        { name: 'filter cutoff',
          id: 10,
          type: 'slider',                                    
          x: {
            name: 'filter cutoff',
            param: 'filter.set_freq',                     
            value: 60,
            interpolate: 0, 
          }                
        },  
        { name: 'filter resonance',
          id: 11,
          type: 'slider',                                    
          x: {
            name: 'filter resonance',
            param: 'filter.set_q',                     
            value: 90,
            interpolate: 0, 
          }                
        },   
        { name: 'filter eg amount',
          id: 13,
          type: 'slider',                                    
          x: {
            name: 'filter eg amount',
            param: 'filter.set_amount',                     
            value: 35,
            interpolate: 0, 
          }                
        },  
        { name: 'filter env attack',
          id: 14,
          type: 'slider',                                    
          x: {
            name: 'filter env attack',
            param: 'feg.set_a',                     
            value: 50,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env decay',
          id: 15,
          type: 'slider',                                    
          x: {
            name: 'filter env decay',
            param: 'feg.set_d',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env sustain',
          id: 16,
          type: 'slider',                                    
          x: {
            name: 'filter env sustain',
            param: 'feg.set_s',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env release',
          id: 17,
          type: 'slider',                                    
          x: {
            name: 'filter env release',
            param: 'feg.set_r',                     
            value: 0,
            interpolate: 0, 
          }                
        }
      ] // end of kit controls
    }, // end of kit








    { type: 'synth',
      instrumentName: 'AikeWebsynth1', 
      color: 'rgba(226, 0, 6, 1)',
      name: 'short decay high pitched', 
      kitNumber: 1,
      tracks: [
        { name: 'C6',
          note:  43
        },  
        { name: 'B5',
          note:  42
        }, 
        { name: 'A5',
          note:  40
        }, 
        { name: 'G5',
          note:  38
        }, 
        { name: 'F5',
          note:  36
        },   
        { name: 'E5',
          note:  35   
        }, 
        { name: 'D5',
          note:  33
        },  
        { name: 'C5',
          note:  31
        } 
      ],
      controls: [ 
{ name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        { name: 'osc1 vol',
          id: 1,
          type: 'slider',                                    
          x: {
            name: 'osc1 vol',
            param: 'vco1.set_gain',                     
            value: 20,
            interpolate: 0, 
          }                
        },
        { name: 'osc1 waveform',
          id: 2,
          type: 'ddmenu',                                    
          x: {
            name: 'osc1 waveform',
            param: 'vco1.set_wave',                     
            value: 1,
            stepSize: 1, 
            interpolate: 0, 
            min: 0,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    },               
            max: 2 // 124                    
          }                
        },  
        { name: 'osc2 vol',
          id: 3,
          type: 'slider',                                    
          x: {
            name: 'osc2 vol',
            param: 'vco2.set_gain',                     
            value: 35,
            interpolate: 0, 
          }                
        },
        { name: 'osc2 waveform',
          id: 4,
          type: 'ddmenu',                                    
          x: {
            name: 'osc2 waveform',
            param: 'vco2.set_wave',                     
            value: 0,
            stepSize: 1, 
            interpolate: 0, 
            min: 0,
                    option: {
                      0: 'triangle',
                      1: 'sawtooth',                     
                      2: 'square',
                    },               
            max: 2                    
          }                
        },     
        { name: 'osc2 pitch',
          id: 5,
          type: 'slider',                                    
          x: {
            name: 'osc2 pitch',
            param: 'vco2.set_pitch',                     
            value: 75, // -30 for high pitcehd notes
            interpolate: 0, 
          }                
        },  
        { name: 'env attack',
          id: 6,
          type: 'slider',                                    
          x: {
            name: 'env attack',
            param: 'eg.set_a',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'env decay',
          id: 7,
          type: 'slider',                                    
          x: {
            name: 'env decay',
            param: 'eg.set_d',                     
            value: 10,
            interpolate: 0, 
          }                
        },   
        { name: 'env sustain',
          id: 8,
          type: 'slider',                                    
          x: {
            name: 'env sustain',
            param: 'eg.set_s',                     
            value: 60,
            interpolate: 0, 
          }                
        },   
        { name: 'env release',
          id: 9,
          type: 'slider',                                    
          x: {
            name: 'env release',
            param: 'eg.set_r',                     
            value: 0,
            interpolate: 0, 
          }                
        },                                                                                                             
        { name: 'filter cutoff',
          id: 10,
          type: 'slider',                                    
          x: {
            name: 'filter cutoff',
            param: 'filter.set_freq',                     
            value: 75,
            interpolate: 0, 
          }                
        },  
        { name: 'filter resonance',
          id: 11,
          type: 'slider',                                    
          x: {
            name: 'filter resonance',
            param: 'filter.set_q',                     
            value: 40,
            interpolate: 0, 
          }                
        },  
        { name: 'filter eg amount',
          id: 13,
          type: 'slider',                                    
          x: {
            name: 'filter eg amount',
            param: 'filter.set_amount',                     
            value: 40,
            interpolate: 0, 
          }                
        },  
        { name: 'filter env attack',
          id: 14,
          type: 'slider',                                    
          x: {
            name: 'filter env attack',
            param: 'feg.set_a',                     
            value: 15,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env decay',
          id: 15,
          type: 'slider',                                    
          x: {
            name: 'filter env decay',
            param: 'feg.set_d',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env sustain',
          id: 16,
          type: 'slider',                                    
          x: {
            name: 'filter env sustain',
            param: 'feg.set_s',                     
            value: 0,
            interpolate: 0, 
          }                
        },   
        { name: 'filter env release',
          id: 17,
          type: 'slider',                                    
          x: {
            name: 'filter env release',
            param: 'feg.set_r',                     
            value: 0,
            interpolate: 0, 
          }                
        }
      ] // end of kit controls
    }, // end of kit
 

  ] // end of kits
}, // end of channel
*/








{ channelName: 'Ch8 Voix',  
  trackSet: 0, 

  defaultPattern: 1, 
  patterns: [ // channel patterns
    {"name":"reset","classs":"channel","id":"2fb82950-36f3-11e6-aa68-d355ddb21e83","tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},
    {"tracks":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]],"id":"2f183b30-43a9-11e6-8b5d-57c381b84f0b","name":"step 15","classs":"channel"} 
  ], 
  
  conf: [ 

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Voix_01', 
      kitNumber: 0, 
      color: 'rgba(226, 0, 6, 1)', 
      tracks: [
        { name: 'Voix_01',
          sampleUrl: 'summerlab_01/Voix_01.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]           
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Voix_02', 
      kitNumber: 1, 
      color: 'rgba(226, 0, 6, 0.9)', 
      tracks: [
        { name: 'Voix_02',
          sampleUrl: 'summerlab_01/Voix_02.wav'            
        }                   
      ],
      controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Voix_03', 
      kitNumber: 2, 
      color: 'rgba(226, 0, 6, 0.8)', 
      tracks: [
        { name: 'Voix_03',
          sampleUrl: 'summerlab_01/Voix_03.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

    { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Voix_04', 
      kitNumber: 3, 
      color: 'rgba(226, 0, 6, 0.7)', 
      tracks: [
        { name: 'Voix_04',
          sampleUrl: 'summerlab_01/Voix_04.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },

     { type: 'samples', 
      instrumentName: 'Sampler', 
      name: 'Shit', 
      kitNumber: 4, 
      color: 'rgba(226, 0, 6, 0.6)', 
      tracks: [
        { name: 'Shit',
          sampleUrl: 'summerlab_01/Voix_05.wav'            
        }                   
      ],
controls: [ 
        { name: 'Instrument',
          id: 998,
          type: 'ddmenu', 
          x: {
            name: 'Instrument',
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

        { name: 'Pattern',
          id: 994,
          type: 'ddmenu', 
          x: {
            name: 'Pattern',
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
          name: 'Save Pattern',
          id: 995,

          type: 'contact', 
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
        }

      ]            
    },           



  ] // close kits
}, // close channel












];


