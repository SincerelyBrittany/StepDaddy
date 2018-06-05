





//var audioContext = null;
//var isMobile = false;	// we have to disable the convolver on mobile for performance reasons.



/*
var keys = new Array( 256 );

//Lower row: zsxdcvgbhnjm...
keys[16] = 41; // = F2
keys[65] = 42;
keys[90] = 43;
keys[83] = 44;
keys[88] = 45;
keys[68] = 46;
keys[67] = 47;
keys[86] = 48; // = C3
keys[71] = 49;
keys[66] = 50;
keys[72] = 51;
keys[78] = 52;
keys[77] = 53; // = F3
keys[75] = 54;
keys[188] = 55;
keys[76] = 56;
keys[190] = 57;
keys[186] = 58;
keys[191] = 59;

// Upper row: q2w3er5t6y7u...
keys[81] = 60; // = C4 ("middle C")
keys[50] = 61;
keys[87] = 62;
keys[51] = 63;
keys[69] = 64;
keys[82] = 65; // = F4
keys[53] = 66;
keys[84] = 67;
keys[54] = 68;
keys[89] = 69;
keys[55] = 70;
keys[85] = 71;
keys[73] = 72; // = C5
keys[57] = 73;
keys[79] = 74;
keys[48] = 75;
keys[80] = 76;
keys[219] = 77; // = F5
keys[187] = 78;
keys[221] = 79;
keys[220] = 80;
*/
/*
this.effectChain = null;
this.waveshaper = null;
this.volNode = null;
this.revNode = null;
this.revGain = null;
this.revBypassGain = null;
this.compressor = null;
*/








var CWilsoWAMidiSynth = function(context) {



// This is the "initial patch"

// modulation lfo
this.currentModWaveform = 0; // SINE
this.currentModFrequency = 2.1; // Hz * 10 = 2.1
this.currentModOsc1 = 15;
this.currentModOsc2 = 17;

this.currentOsc1Waveform = 2; // SAW
this.currentOsc1Octave = 0;  // 32'
this.currentOsc1Detune = 0;  // 0
this.currentOsc1Mix = 50.0;  // 50%

this.currentOsc2Waveform = 2; // SAW
this.currentOsc2Octave = 0;  // 16'
this.currentOsc2Detune = -25;  // fat detune makes pretty analogue-y sound.  :)
this.currentOsc2Mix = 50.0;  // 0%

this.currentFilterCutoff = 8;
this.currentFilterQ = 7.0;
this.currentFilterMod = 21;
this.currentFilterEnv = 56;

this.currentEnvA = 2;
this.currentEnvD = 15;
this.currentEnvS = 68;
this.currentEnvR = 5;

this.currentFilterEnvA = 5;
this.currentFilterEnvD = 6;
this.currentFilterEnvS = 5;
this.currentFilterEnvR = 7;

this.currentDrive = 38;
this.currentRev = 32;
this.currentVol = 75;
// end initial patch

this.currentOctave = 3;
this.modOscFreqMultiplier = 1;
this.moDouble = false;
this.moQuadruple = false;

//function initAudio(audioContext) {
  /*window.AudioContext = window.AudioContext || window.webkitAudioContext;
  try {
      audioContext = window['audio_context']; //new AudioContext();
    }
    catch(e) {
      alert('The Web Audio API is apparently not supported in this browser.');
    } */

  //window.audioContext = audioContext;
  this.context = context;


  this.voices = new Array();

  /*window.addEventListener('keydown', keyDown, false);
  window.addEventListener('keyup', keyUp, false);
  setupSynthUI();*/

  isMobile = (navigator.userAgent.indexOf("Android")!=-1)||(navigator.userAgent.indexOf("iPad")!=-1)||(navigator.userAgent.indexOf("iPhone")!=-1);

  // set up the master effects chain for all voices to connect to.
  this.effectChain = this.context.createGain();
  this.waveshaper = new WaveShaper( this.context );
    this.effectChain.connect( this.waveshaper.input );
    this.onUpdateDrive( this.currentDrive );

    if (!isMobile)
      this.revNode = this.context.createConvolver();
    else
      this.revNode = this.context.createGain();
  this.revGain = this.context.createGain();
  this.revBypassGain = this.context.createGain();

    this.volNode = this.context.createGain();
    this.volNode.gain.value = this.currentVol;
    this.compressor = this.context.createDynamicsCompressor();
    this.waveshaper.output.connect( this.revNode );
    this.waveshaper.output.connect( this.revBypassGain );
    this.revNode.connect( this.revGain );
    this.revGain.connect( this.volNode );
    this.revBypassGain.connect( this.volNode );
    this.onUpdateReverb( {currentTarget:{value:this.currentRev}} );

    this.volNode.connect( this.compressor );
    this.compressor.connect(  window['audio_context'] ); // this.context.destination
    this.onUpdateVolume( {currentTarget:{value:this.currentVol}} );

    // reverb to be fixed when not on a mobile device
    if (!isMobile) {
    irRRequest = new XMLHttpRequest();
    irRRequest.open("GET", "instruments/midi-synth-master/sounds/irRoom.wav", true);
    irRRequest.responseType = "arraybuffer";
    irRRequest.onload = function() {
        context.decodeAudioData(irRRequest.response, 
          function(buffer) { if (this.revNode) this.revNode.buffer = buffer; else console.log("no revNode ready!")} );
    }
    irRRequest.send();
  }

}










function frequencyFromNoteNumber( note ) {
	return 440 * Math.pow(2,(note-69)/12);
}







CWilsoWAMidiSynth.prototype.noteOn = function(note, velocity, channelId) {
//function noteOn( note, velocity ) {
	//console.log("note on: " + note );
	if (this.voices[note] == null) {
		// Create a new synth node
		this.voices[note] = new Voice(note, velocity, channelId);
		/*var e = document.getElementById( "k" + note );
		if (e)
			e.classList.add("pressed");*/
	} 
}
CWilsoWAMidiSynth.prototype.noteOff = function(note, channelId) {
//function noteOff( note ) {
	if (this.voices[note] != null) {
		// Shut off the note playing and clear it 
		this.voices[note].noteOff(channelId);
		this.voices[note] = null;
		/*var e = document.getElementById( "k" + note );
		if (e)
			e.classList.remove("pressed");*/
	}

}



function $a(id) {
	return document.getElementById(id);
}





// midi control value normalization
// 'value' is normalized to 0..1.
function controller( number, value ) {
	switch(number) {
	case 2:
		$("fFreq").setRatioValue(value);
		onUpdateFilterCutoff( 100*value );
		return;
	case 0x0a:
	case 7:
		$("fQ").setValue(20*value);
		onUpdateFilterQ( 20*value );
		return;
	case 1:
		$("fMod").setValue(100*value);
		onUpdateFilterMod(100*value);	
		return;
	case 0x49:
	case 5:
	case 15:
	    $("drive").setValue(100 * value);
	    onUpdateDrive( 100 * value );
	    return;
	case 0x48:
	case 6:
	case 16:
	    $("reverb").setValue(100 * value);
	    onUpdateReverb( 100 * value );
	    return;
	case 0x4a:
	    $("modOsc1").setValue(100 * value);
	    onUpdateModOsc1( 100 * value );
	    return;
	case 0x47:
	    $("modOsc2").setValue(100 * value);
	    onUpdateModOsc2( 100 * value );
	    return;
	case 4:
	case 17:
	    $("mFreq").setValue(10 * value);
	    onUpdateModFrequency( 10 * value );
	    return;
	case 0x5b:
	    $("volume").setValue(100 * value);
	    onUpdateVolume( 100 * value );
	    return;
	case 33: // "x1" button
	case 51:
		moDouble = (value > 0);
		changeModMultiplier();
	    return;
	case 34: // "x2" button
	case 52:
		moQuadruple = (value > 0);
		changeModMultiplier();
	    return;
	}
}





var currentPitchWheel = 0.0;
// 'value' is normalized to [-1,1]
function pitchWheel( value ) {
	var i;

	currentPitchWheel = value;
	for (var i=0; i<255; i++) {
		if (voices[i]) {
			if (voices[i].osc1)
				voices[i].osc1.detune.value = currentOsc1Detune + currentPitchWheel * 500;	// value in cents - detune major fifth.
			if (voices[i].osc2)
				voices[i].osc2.detune.value = currentOsc2Detune + currentPitchWheel * 500;	// value in cents - detune major fifth.
		}
	}
}

function polyPressure( noteNumber, value ) {
	if (voices[noteNumber] != null) {
		voices[noteNumber].setFilterQ( value*20 );
	}
}

var waveforms = ["sine","square","sawtooth","triangle"];





CWilsoWAMidiSynth.prototype.onUpdateModWaveform = function(ev) {
//function onUpdateModWaveform( ev ) {
	this.currentModWaveform = ev.target.selectedIndex;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].setModWaveform( waveforms[this.currentModWaveform] );
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateModFrequency = function(ev) {
//function onUpdateModFrequency( ev ) {
	var value = ev.currentTarget ? ev.currentTarget.value : ev;
	this.currentModFrequency = value;
	var oscFreq = this.currentModFrequency * this.modOscFreqMultiplier;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].updateModFrequency( oscFreq );
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateModOsc1 = function(ev) {
//function onUpdateModOsc1( ev ) {
	var value = ev.currentTarget ? ev.currentTarget.value : ev;
	this.currentModOsc1 = value;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].updateModOsc1( currentModOsc1 );
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateModOsc2 = function(ev) {
//function onUpdateModOsc2( ev ) {
	var value = ev.currentTarget ? ev.currentTarget.value : ev;
	currentModOsc2 = value;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].updateModOsc2( currentModOsc2 );
		}
	}
}




CWilsoWAMidiSynth.prototype.onUpdateFilterCutoff = function(ev) {
//function onUpdateFilterCutoff( ev ) { // could stay function onUpdateFilterCutoff( ev, channelId ) with added channelId
	var value = ev.currentTarget ? ev.currentTarget.value : ev;
//	console.log( "currentFilterCutoff= " + currentFilterCutoff + "new cutoff= " + value );
	this.currentFilterCutoff = value;

  console.log('onUpdateFilterCutoff', ev, value, this.voices);

	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].setFilterCutoff( value );
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateFilterQ = function(ev) {
//function onUpdateFilterQ( ev ) {
	var value = ev.currentTarget ? ev.currentTarget.value : ev;
	this.currentFilterQ = value;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].setFilterQ( value );
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateFilterMod = function(ev) {
//function onUpdateFilterMod( ev ) {
	var value = ev.currentTarget ? ev.currentTarget.value : ev;
	this.currentFilterMod = value;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].setFilterMod( value );
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateFilterEnv = function(ev) {
//function onUpdateFilterEnv( ev ) {
	var value = ev.currentTarget ? ev.currentTarget.value : ev;
	this.currentFilterEnv = value;
}




CWilsoWAMidiSynth.prototype.onUpdateOsc1Wave = function(ev) {
//function onUpdateOsc1Wave( ev ) {
	this.currentOsc1Waveform = ev; //ev.target.selectedIndex;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].setOsc1Waveform( waveforms[this.currentOsc1Waveform] );
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateOsc1Octave = function(ev) {
//function onUpdateOsc1Octave( ev ) {
	this.currentOsc1Octave = ev.target.selectedIndex;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].updateOsc1Frequency();
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateOsc1Detune = function(ev) {
//function onUpdateOsc1Detune( ev ) {
	var value = ev.currentTarget.value;
	this.currentOsc1Detune = value;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].updateOsc1Frequency();
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateOsc1Mix = function(value) {
//function onUpdateOsc1Mix( value ) {
	if (value.currentTarget)
		value = value.currentTarget.value;
	this.currentOsc1Mix = value;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].updateOsc1Mix( value );
		}
	}
}




CWilsoWAMidiSynth.prototype.onUpdateOsc2Wave = function(ev) {
//function onUpdateOsc2Wave( ev ) {
	this.currentOsc2Waveform = ev; // ev.target.selectedIndex;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].setOsc2Waveform( waveforms[this.currentOsc2Waveform] );
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateOsc2Octave = function(ev) {
//function onUpdateOsc2Octave( ev ) {
	this.currentOsc2Octave = ev.target.selectedIndex;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].updateOsc2Frequency();
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateOsc2Detune = function(ev) {
//function onUpdateOsc2Detune( ev ) {
	var value = ev; // ev.currentTarget.value;
	this.currentOsc2Detune = value;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].updateOsc2Frequency();
		}
	}
}

CWilsoWAMidiSynth.prototype.onUpdateOsc2Mix = function(value) {
//function onUpdateOsc2Mix( ev ) {
	//var value = ev.currentTarget.value;
  if (value.currentTarget)
    value = value.currentTarget.value;  
	this.currentOsc2Mix = value;
	for (var i=0; i<255; i++) {
		if (this.voices[i] != null) {
			this.voices[i].updateOsc2Mix( value );
		}
	}
}




CWilsoWAMidiSynth.prototype.onUpdateEnvA = function(ev) {
//function onUpdateEnvA( ev ) {
	this.currentEnvA = ev; //ev.currentTarget.value;
}

CWilsoWAMidiSynth.prototype.onUpdateEnvD = function(ev) {
//function onUpdateEnvD( ev ) {
	this.currentEnvD = ev; //ev.currentTarget.value;
}

CWilsoWAMidiSynth.prototype.onUpdateEnvS = function(ev) {
//function onUpdateEnvS( ev ) {
	this.currentEnvS = ev; //ev.currentTarget.value;
}

CWilsoWAMidiSynth.prototype.onUpdateEnvR = function(ev) {
//function onUpdateEnvR( ev ) {
	this.currentEnvR = ev; //ev.currentTarget.value;
}




CWilsoWAMidiSynth.prototype.onUpdateFilterEnvA = function(ev) {
//function onUpdateFilterEnvA( ev ) {
	this.currentFilterEnvA = ev; //ev.currentTarget.value;
}

CWilsoWAMidiSynth.prototype.onUpdateFilterEnvD = function(ev) {
//function onUpdateFilterEnvD( ev ) {
	this.currentFilterEnvD = ev; //ev.currentTarget.value;
}

CWilsoWAMidiSynth.prototype.onUpdateFilterEnvS = function(ev) {
//function onUpdateFilterEnvS( ev ) {
	this.currentFilterEnvS = ev; //ev.currentTarget.value;
}

CWilsoWAMidiSynth.prototype.onUpdateFilterEnvR = function(ev) {
//function onUpdateFilterEnvR( ev ) {
	this.currentFilterEnvR = ev; //ev.currentTarget.value;
}





CWilsoWAMidiSynth.prototype.onUpdateDrive = function(value) {
//function onUpdateDrive( value ) {
  console.log('value onUpdateDrive',value);
	currentDrive = value;
    this.waveshaper.setDrive( 0.01 + (currentDrive*currentDrive/500.0) );
}

CWilsoWAMidiSynth.prototype.onUpdateVolume = function(ev) {
//function onUpdateVolume( ev ) {  
	this.volNode.gain.value = (ev.currentTarget ? ev.currentTarget.value : ev)/100; // ev/100; //
  //console.log('onUpdateVolume:', ev, this.volNode.gain.value);
}

CWilsoWAMidiSynth.prototype.onUpdateReverb = function(ev) {
//function onUpdateReverb( ev ) {
	var value = ev.currentTarget ? ev.currentTarget.value : ev;
	value = value/100;

	// equal-power crossfade
	var gain1 = Math.cos(value * 0.5*Math.PI);
	var gain2 = Math.cos((1.0-value) * 0.5*Math.PI);

	this.revBypassGain.gain.value = gain1;
	this.revGain.gain.value = gain2;
}

/*
var FOURIER_SIZE = 2048;
var wave = false;

	if ( wave ) {
		var real = new Float32Array(FOURIER_SIZE);
		var imag = new Float32Array(FOURIER_SIZE);
		real[0] = 0.0;
		imag[0] = 0.0;

		for (var i=1; i<FOURIER_SIZE; i++) {
			real[i]=1.0;
			imag[i]=1.0;
		}

		var wavetable = audioContext.createWaveTable(real, imag);
		oscillatorNode.setWaveTable(wavetable);
	} else {

*/

function filterFrequencyFromCutoff( pitch, cutoff ) {
    var nyquist = 0.5 * audioContext.sampleRate;

//    var filterFrequency = Math.pow(2, (9 * cutoff) - 1) * pitch;
    var filterFrequency = Math.pow(2, (9 * cutoff) - 1) * pitch;
    if (filterFrequency > nyquist)
        filterFrequency = nyquist;
	return filterFrequency;
}





var Voice = function(note, velocity, channelId){ // CWilsoWAMidiSynth.prototype.
//function Voice( note, velocity ) {
  //audioContext = this.context; // window.audioContext;


  var synthInstance = 'channel_' + channelId;
  audioContext = window[synthInstance].context;

  this.instance = window[synthInstance];

	this.originalFrequency = frequencyFromNoteNumber( note );

	// create osc 1
	this.osc1 = audioContext.createOscillator();
	this.updateOsc1Frequency();
	this.osc1.type = waveforms[this.instance.currentOsc1Waveform];

	this.osc1Gain = audioContext.createGain();
	this.osc1Gain.gain.value = 0.005 * this.instance.currentOsc1Mix;
//	this.osc1Gain.gain.value = 0.05 + (0.33 * velocity);
	this.osc1.connect( this.osc1Gain );

	// create osc 2
	this.osc2 = audioContext.createOscillator();
	this.updateOsc2Frequency();
	this.osc2.type = waveforms[this.instance.currentOsc2Waveform];

	this.osc2Gain = audioContext.createGain();
	this.osc2Gain.gain.value = 0.005 * this.instance.currentOsc2Mix;
//	this.osc2Gain.gain.value = 0.05 + (0.33 * velocity);
	this.osc2.connect( this.osc2Gain );

	// create modulator osc
	this.modOsc = audioContext.createOscillator();
	this.modOsc.type = 	waveforms[this.instance.currentModWaveform];
	this.modOsc.frequency.value = this.instance.currentModFrequency * this.instance.modOscFreqMultiplier;

	this.modOsc1Gain = audioContext.createGain();
	this.modOsc.connect( this.modOsc1Gain );
	this.modOsc1Gain.gain.value = this.instance.currentModOsc1/10;
	this.modOsc1Gain.connect( this.osc1.frequency );	// tremolo

	this.modOsc2Gain = audioContext.createGain();
	this.modOsc.connect( this.modOsc2Gain );
	this.modOsc2Gain.gain.value = this.instance.currentModOsc2/10;
	this.modOsc2Gain.connect( this.osc2.frequency );	// tremolo

	// create the LP filter
	this.filter1 = audioContext.createBiquadFilter();
	this.filter1.type = "lowpass";
	this.filter1.Q.value = this.instance.currentFilterQ;
	this.filter1.frequency.value = Math.pow(2, this.instance.currentFilterCutoff); 
	// filterFrequencyFromCutoff( this.originalFrequency, currentFilterCutoff );
//	console.log( "filter frequency: " + this.filter1.frequency.value);
	this.filter2 = audioContext.createBiquadFilter();
	this.filter2.type = "lowpass";
	this.filter2.Q.value = this.instance.currentFilterQ;
	this.filter2.frequency.value = Math.pow(2, this.instance.currentFilterCutoff); 

	this.osc1Gain.connect( this.filter1 );
	this.osc2Gain.connect( this.filter1 );
	this.filter1.connect( this.filter2 );

	// connect the modulator to the filters
	this.modFilterGain = audioContext.createGain();
	this.modOsc.connect( this.modFilterGain );
	this.modFilterGain.gain.value = this.instance.currentFilterMod*24;
//	console.log("modFilterGain=" + currentFilterMod*24);
	this.modFilterGain.connect( this.filter1.detune );	// filter tremolo
	this.modFilterGain.connect( this.filter2.detune );	// filter tremolo

	// create the volume envelope
	this.envelope = audioContext.createGain();
	this.filter2.connect( this.envelope );
	this.envelope.connect( window[synthInstance].effectChain );

	// set up the volume and filter envelopes
	var now = audioContext.currentTime;
	var envAttackEnd = now + (this.instance.currentEnvA/20.0);

	this.envelope.gain.value = 0.0;
	this.envelope.gain.setValueAtTime( 0.0, now );
	this.envelope.gain.linearRampToValueAtTime( 1.0, envAttackEnd );
	this.envelope.gain.setTargetAtTime( (this.instance.currentEnvS/100.0), envAttackEnd, (this.instance.currentEnvD/100.0)+0.001 );

	var filterAttackLevel = this.instance.currentFilterEnv*72;  // Range: 0-7200: 6-octave range
	var filterSustainLevel = filterAttackLevel* this.instance.currentFilterEnvS / 100.0; // range: 0-7200
	var filterAttackEnd = (this.instance.currentFilterEnvA/20.0);

/*	console.log( "filterAttackLevel: " + filterAttackLevel + 
				 " filterSustainLevel: " + filterSustainLevel +
				 " filterAttackEnd: " + filterAttackEnd);
*/


  //console.log('filter env decay: ', this.instance.currentFilterEnvD);

	if (!filterAttackEnd) 
				filterAttackEnd=0.05; // tweak to get target decay to work properly
	this.filter1.detune.setValueAtTime( 0, now );
	this.filter1.detune.linearRampToValueAtTime( filterAttackLevel, now+filterAttackEnd );
	this.filter2.detune.setValueAtTime( 0, now );
	this.filter2.detune.linearRampToValueAtTime( filterAttackLevel, now+filterAttackEnd );
	this.filter1.detune.setTargetAtTime( filterSustainLevel, now+filterAttackEnd, (this.instance.currentFilterEnvD/100.0) );
	this.filter2.detune.setTargetAtTime( filterSustainLevel, now+filterAttackEnd, (this.instance.currentFilterEnvD/100.0) );

	this.osc1.start(0);

  // if on mobile: only load 1 oscillator
  if (!window.mobilecheck()) {
	 this.osc2.start(0);
  }

	this.modOsc.start(0);
}


Voice.prototype.setModWaveform = function( value ) {
	this.modOsc.type = value;
}

Voice.prototype.updateModFrequency = function( value ) {
	this.modOsc.frequency.value = value;
}

Voice.prototype.updateModOsc1 = function( value ) {
	this.modOsc1Gain.gain.value = value/10;
}

Voice.prototype.updateModOsc2 = function( value ) {
	this.modOsc2Gain.gain.value = value/10;
}

Voice.prototype.setOsc1Waveform = function( value ) {
	this.osc1.type = value;
}

Voice.prototype.updateOsc1Frequency = function( value ) {
	this.osc1.frequency.value = (this.originalFrequency*Math.pow(2,this.instance.currentOsc1Octave-2));  // -2 because osc1 is 32', 16', 8'
	this.osc1.detune.value = this.instance.currentOsc1Detune + currentPitchWheel * 500;	// value in cents - detune major fifth.
}

Voice.prototype.updateOsc1Mix = function( value ) {
	this.osc1Gain.gain.value = 0.005 * value;
}

Voice.prototype.setOsc2Waveform = function( value ) {
	this.osc2.type = value;
}

Voice.prototype.updateOsc2Frequency = function( value ) {
	this.osc2.frequency.value = (this.originalFrequency*Math.pow(2,this.instance.currentOsc2Octave-1));
	this.osc2.detune.value = this.instance.currentOsc2Detune + currentPitchWheel * 500;	// value in cents - detune major fifth.
}

Voice.prototype.updateOsc2Mix = function( value ) {
	this.osc2Gain.gain.value = 0.005 * value;
}

Voice.prototype.setFilterCutoff = function( value ) {
  console.log('setFilterCutoff', value);
	var now =  audioContext.currentTime;
	var filterFrequency = Math.pow(2, value);
//	console.log("Filter cutoff: orig:" + this.filter1.frequency.value + " new:" + filterFrequency + " value: " + value );
	this.filter1.frequency.value = filterFrequency;
	this.filter2.frequency.value = filterFrequency;
}

Voice.prototype.setFilterQ = function( value ) {
	this.filter1.Q.value = value;
	this.filter2.Q.value = value;
}

Voice.prototype.setFilterMod = function( value ) {
	this.modFilterGain.gain.value = currentFilterMod*24;
//	console.log( "filterMod.gain=" + currentFilterMod*24);
}

Voice.prototype.noteOff = function() {
	var now =  audioContext.currentTime;
	var release = now + (this.instance.currentEnvR/10.0);	
    var initFilter = filterFrequencyFromCutoff( this.originalFrequency, this.instance.currentFilterCutoff/100 * (1.0-(this.instance.currentFilterEnv/100.0)) );

//    console.log("noteoff: now: " + now + " val: " + this.filter1.frequency.value + " initF: " + initFilter + " fR: " + currentFilterEnvR/100 );
	this.envelope.gain.cancelScheduledValues(now);
	this.envelope.gain.setValueAtTime( this.envelope.gain.value, now );  // this is necessary because of the linear ramp
	this.envelope.gain.setTargetAtTime(0.0, now, (this.instance.currentEnvR/100));
	this.filter1.detune.cancelScheduledValues(now);
	this.filter1.detune.setTargetAtTime( 0, now, (this.instance.currentFilterEnvR/100.0) );
	this.filter2.detune.cancelScheduledValues(now);
	this.filter2.detune.setTargetAtTime( 0, now, (this.instance.currentFilterEnvR/100.0) );

	this.osc1.stop( release );
	this.osc2.stop( release );
}



function changeModMultiplier() {
	modOscFreqMultiplier = (moDouble?2:1)*(moQuadruple?4:1);
	onUpdateModFrequency( currentModFrequency );
}
/*
function keyDown( ev ) {
	if ((ev.keyCode==49)||(ev.keyCode==50)) {
		if (ev.keyCode==49)
			moDouble = true;
		else if (ev.keyCode==50)
			moQuadruple = true;
		changeModMultiplier();
	}

	var note = keys[ev.keyCode];
	if (note)
		noteOn( note + 12*(3-currentOctave), 0.75 );
	console.log( "key down: " + ev.keyCode );

	return false;
}

function keyUp( ev ) {
	if ((ev.keyCode==49)||(ev.keyCode==50)) {
		if (ev.keyCode==49)
			moDouble = false;
		else if (ev.keyCode==50)
			moQuadruple = false;
		changeModMultiplier();
	}

	var note = keys[ev.keyCode];
	if (note)
		noteOff( note + 12*(3-currentOctave) );
//	console.log( "key up: " + ev.keyCode );

	return false;
}
var pointers=[];

function touchstart( ev ) {
	for (var i=0; i<ev.targetTouches.length; i++) {
	    var touch = ev.targetTouches[0];
		var element = touch.target;

		var note = parseInt( element.id.substring( 1 ) );
		console.log( "touchstart: id: " + element.id + "identifier: " + touch.identifier + " note:" + note );
		if (!isNaN(note)) {
			noteOn( note + 12*(3-currentOctave), 0.75 );
			var keybox = document.getElementById("keybox")
			pointers[touch.identifier]=note;
		}
	}
	ev.preventDefault();
}

function touchmove( ev ) {
	for (var i=0; i<ev.targetTouches.length; i++) {
	    var touch = ev.targetTouches[0];
		var element = touch.target;

		var note = parseInt( element.id.substring( 1 ) );
		console.log( "touchmove: id: " + element.id + "identifier: " + touch.identifier + " note:" + note );
		if (!isNaN(note) && pointers[touch.identifier] && pointers[touch.identifier]!=note) {
			noteOff(pointers[touch.identifier] + 12*(3-currentOctave));
			noteOn( note + 12*(3-currentOctave), 0.75 );
			var keybox = document.getElementById("keybox")
			pointers[touch.identifier]=note;
		}
	}
	ev.preventDefault();
}

function touchend( ev ) {
	var note = parseInt( ev.target.id.substring( 1 ) );
	console.log( "touchend: id: " + ev.target.id + " note:" + note );
	if (note != NaN)
		noteOff( note + 12*(3-currentOctave) );
	pointers[ev.pointerId]=null;
	var keybox = document.getElementById("keybox")
	ev.preventDefault();
}

function touchcancel( ev ) {
	console.log( "touchcancel" );
	ev.preventDefault();
}

function pointerDown( ev ) {
	var note = parseInt( ev.target.id.substring( 1 ) );
	if (pointerDebugging)
		console.log( "pointer down: id: " + ev.pointerId
			+ " target: " + ev.target.id + " note:" + note );
	if (!isNaN(note)) {
		noteOn( note + 12*(3-currentOctave), 0.75 );
		var keybox = document.getElementById("keybox")
		pointers[ev.pointerId]=note;
	}
	ev.preventDefault();
}

function pointerMove( ev ) {
	var note = parseInt( ev.target.id.substring( 1 ) );
	if (pointerDebugging)
		console.log( "pointer move: id: " + ev.pointerId 
			+ " target: " + ev.target.id + " note:" + note );
	if (!isNaN(note) && pointers[ev.pointerId] && pointers[ev.pointerId]!=note) {
		if (pointers[ev.pointerId])
			noteOff(pointers[ev.pointerId] + 12*(3-currentOctave));
		noteOn( note + 12*(3-currentOctave), 0.75 );
		pointers[ev.pointerId]=note;
	}
	ev.preventDefault();
}

function pointerUp( ev ) {
	var note = parseInt( ev.target.id.substring( 1 ) );
	if (pointerDebugging)
		console.log( "pointer up: id: " + ev.pointerId + " note:" + note );
	if (note != NaN)
		noteOff( note + 12*(3-currentOctave) );
	pointers[ev.pointerId]=null;
	var keybox = document.getElementById("keybox")
	ev.preventDefault();
}
*/

function onChangeOctave( ev ) {
	currentOctave = ev.target.selectedIndex;
}


/*
if('serviceWorker' in navigator) {  
  navigator.serviceWorker  
           .register('./service-worker.js')  
           .then(function() { console.log('Service Worker Registered'); });  
}*/
//window.onload=initAudio;