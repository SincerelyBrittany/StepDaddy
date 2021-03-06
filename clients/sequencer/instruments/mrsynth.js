var notes = {
	C3:  130.81,
	CS3: 138.59,
	D3:  146.83,
	DS3: 155.56,
	E3:  164.81,
	F3:  174.61,
	FS3: 185.00,
	G3:  196.00,
	GS3: 207.65,
	A3:  220.00,
	AS3: 233.08,
	B3:  246.94,
	C4:  261.63,
	CS4: 277.18,
	D4:  293.66,
	DS4: 311.13,
	E4:  329.63,
	F4:  349.23,
	FS4: 369.99,
	G4:  392.00,
	GS4: 415.30,
	A4:  440.00,
	AS4: 466.16,
	B4:  493.88,
	C5:  523.25,
  CS5: 554.37,
  D5:  587.33,
  DS5: 622.25,
  E5:  659.25,
  F5:  698.46,
};

//$(document).disableSelection();


// |--------------------|
// | Signal Chain Setup |
// |--------------------|

/*
//custom node creation
var delayEffectNode = function(){
    //create the nodes we’ll use
    this.input = context.createGain();
    this.output = context.createGain();
    this.delay = context.createDelay();
    this.feedback = context.createGain();
    this.wetLevel = context.createGain();

    //set some default values
    this.delay.delayTime.value = 0.30;
    this.feedback.gain.value = 0.10;
    this.wetLevel.gain.value = 0.5;

    //set up the delay's internal routing
    this.input.connect(this.delay);
    this.input.connect(this.output);
    this.delay.connect(this.feedback);
    this.delay.connect(this.wetLevel);
    this.feedback.connect(this.delay);
    this.wetLevel.connect(this.output);

    this.connect = function(target){
       this.output.connect(target);
    };
};
*/



var MrSynth = function(context) {
  /*
    this.context = context;
    this.root = this.context.createScriptProcessor(stream_length, 1, 2); // 2048, 1, 1

  this.vco1 = new VCO(this.context.sampleRate);
  this.vco2 = new VCO(this.context.sampleRate);
  this.eg = new EG();
  this.feg = new EG();

  this.filter = new CTL_Filter(this.context);
  this.volume = new CTL_Volume(this.context);
  this.delay = new FX_Delay(this.context);

  this.root.connect(this.filter.getnode());
  this.filter.connect(this.volume.getnode());
  this.volume.connect(this.context.destination);
  this.volume.connect(this.delay.getnode1());
  this.volume.connect(this.delay.getnode2());
  this.delay.connect(this.context.destination);
*/




//initialize nodes
//this.context = new AudioContext();
this.context = context;
this.oscillatorOneNode = this.context.createOscillator();
this.oscillatorOneGainNode = this.context.createGain();
this.oscillatorTwoNode = this.context.createOscillator();
this.oscillatorTwoGainNode = this.context.createGain();
this.filterNode = this.context.createBiquadFilter();
this.lfoNode = this.context.createOscillator();
this.lfoGainNode = this.context.createGain();
this.envelopeNode = this.context.createGain();
this.volumeNode = this.context.createGain();
//this.delayNode = new delayEffectNode();

//initialize values
this.oscillatorOneNode.type = "sawtooth"; // sawtooth wave
this.oscillatorTwoNode.type = "sine"; // sine wave
this.oscillatorOneGainNode.gain.value = 0.75;
this.oscillatorTwoGainNode.gain.value = 0.75;
this.lfoNode.type = "sine";
this.lfoNode.frequency.value = 1;
this.lfoNode.start;
this.lfoGainNode.gain.value = 1000;
this.filterNode.type = "lowpass"; //low pass
this.filterNode.frequency.value = 6666;
this.filterNode.Q.value = 10;
this.envelopeNode.gain.value = 0.0;
this.volumeNode.gain.value = 0.75;

//connect nodes
this.oscillatorOneNode.connect(this.oscillatorOneGainNode);
this.oscillatorOneGainNode.connect(this.filterNode);
this.oscillatorTwoNode.connect(this.oscillatorTwoGainNode);
this.oscillatorTwoGainNode.connect(this.filterNode);
this.filterNode.connect(this.envelopeNode);
this.envelopeNode.connect(this.volumeNode);
//this.envelopeNode.connect(delayNode.input);
//delayNode.connect(volumeNode);
this.lfoNode.connect(this.lfoGainNode);
this.lfoGainNode.connect(this.filterNode.frequency);
this.volumeNode.connect(this.context.destination);

this.oscillatorOneNode.start(0);
this.oscillatorTwoNode.start(0);
this.lfoNode.start();


};



/*
MrSynth.prototype.set_cutoff = function(f) {
  this.filterNode.frequency.value = f;
}; */

	
//keyboard interfacing
MrSynth.prototype.updateFrequency = function(frequency){
	this.oscillatorOneNode.frequency.value = frequency;
	this.oscillatorTwoNode.frequency.value = frequency;
  //console.log('frequency', this.oscillatorOneNode.frequency.value);
};

var attackTime= 0.001;
//var decayTime= 0.001;
var decayTime= 0.001;

MrSynth.prototype.startAttack = function(){
	var now = this.context.currentTime;
	this.envelopeNode.gain.setTargetAtTime(1.0, now, (attackTime + .001));
  this.envelopeNode.gain.setTargetAtTime(0.0, now+0.125, (decayTime + .001)); // this value +0.5 should be proportional to tempo
	console.log('now', now);
};

MrSynth.prototype.startDecay = function(){
	var now = this.context.currentTime;
  //var now = this.context.currentTime+decayTime;
	this.envelopeNode.gain.setTargetAtTime(0.0, now, (decayTime + .001));
	//console.log('end note');
};

// |--------------------|
// |     UI Controls    |
// |--------------------|
  
/*
$(window).load(function() {

  //oscillators

  $('#oscillatorOneVolume').knob({
    'change' : function(volume) {
      oscillatorOneGainNode.gain.value = (volume/100);
    }
  });

  $('#oscillatorOneDetune').knob({
    'change' : function(detune) {
      oscillatorOneNode.detune.value = detune;
    }
  });

	$( "#oscillatorOneSelect" ).change(function () {
    console.log( 'Set oscillator one to '+ $( "#oscillatorOneSelect" ).val());
    oscillatorOneNode.type = $( "#oscillatorOneSelect" ).val();
    leftButtonDown = false;
  });

  $('#oscillatorTwoVolume').knob({
    'change' : function(volume) {
      oscillatorTwoGainNode.gain.value = (volume/100);
    }
  });

  $('#oscillatorTwoDetune').knob({
    'change' : function(detune) {
      oscillatorTwoNode.detune.value = detune;
    }
  });

  $( "#oscillatorTwoSelect" ).change(function () {
    console.log( 'Set oscillator two to '+ $( "#oscillatorTwoSelect" ).val());
    oscillatorTwoNode.type = $( "#oscillatorTwoSelect" ).val();
    leftButtonDown = false;
  });

  //filter

  $( "#filterSelect" ).change(function () {
    console.log( 'Set filter to '+ $( "#filterSelect" ).val());
    filterNode.type = $( "#filterSelect" ).val();
    leftButtonDown = false;
  });

	$('#cutoff').knob({
		'change' : function(cutoff) {
			filterNode.frequency.value = (cutoff * 200);
		}
	});

	$('#resonance').knob({
		'change' : function(resonance) {
			filterNode.Q.value = (resonance/5);
		}
	});

  //lfo

  $('#lfoFrequency').knob({
    'change' : function(frequency) {
      lfoNode.frequency.value = (frequency/10);
    }
  });

  $('#lfoDepth').knob({
    'change' : function(lfoDepth) {
      lfoGainNode.gain.value = (lfoDepth * 20);
    }
  });

  $( "#lfoSelect" ).change(function () {
    console.log( 'Set lfo to '+ $( "#lfoSelect" ).val());
    lfoNode.type = $( "#lfoSelect" ).val();
    leftButtonDown = false;
  });

  //envelope

  $('#attack').knob({
    'change' : function(attack) {
      attackTime = ((attack)/60);
    }
  });
  
  $('#decay').knob({
    'change' : function(decay) {
      decayTime = ((decay)/60);
    }
  });

  //delay

	$('#delay_time').knob({
		'change' : function(time) {
			delayNode.delay.delayTime.value = (time/100);
		}
	});

	$('#delay_feedback').knob({
		'change' : function(feedback) {
			delayNode.feedback.gain.value = (feedback/100);
		}
	});

	$('#delay_level').knob({
		'change' : function(level) {
			delayNode.wetLevel.gain.value = (level/100);
		}
	});

  //volume

	$('#volume').knob({
		'change' : function(volume) {
			volumeNode.gain.value = (volume/100);
		}
	});
 
// |--------------------|
// |  Keyboard Controls |
// |--------------------|
	
  var octaveMultiplier = 1;
  var hold = false; 
  var leftButtonDown = false;

  $( "#octaveControl" ).change(function () {
    console.log( 'Set lfo to '+ $( "#octaveControl" ).val());
    var octave = $( "#octaveControl" ).val()
    switch (octave) {
    case "-2":
      octaveMultiplier = 0.25;
      break;
    case "-1":
      octaveMultiplier = 0.5;
      break;
    case "+1":
      octaveMultiplier = 2;
      break;
    case "+2":
      octaveMultiplier = 4;
      break;
    default:
      octaveMultiplier = 1;
    }
    leftButtonDown = false;
  });

	$('#hold').change(function() {
    if($(this).is(":checked")) {
      hold = true;
    } else {
      hold = false;
      startDecay();
    }
  });

	$(document).mousedown(function(){
		leftButtonDown = true;
		console.log("Mouse down.")
	});
	
	$(document).mouseup(function(){
		leftButtonDown = false;
		console.log("Mouse up.")
	});


	$('.key').mousedown(function(){
		$(this).addClass("key_press");
		var keyID = $(this).attr('id');
		updateFrequency(notes[keyID]*octaveMultiplier);
		startAttack();
	});

	$('.key').mouseup(function(){
		$(this).removeClass("key_press");
		if (hold == true) {
			// maintain note
		} else {
		  startDecay();
		}
	});

	$('.key').mouseenter(function(){
		if (leftButtonDown == true) {
			$(this).addClass("key_press");
			var keyID = $(this).attr('id');
			updateFrequency(notes[keyID]*octaveMultiplier);
			startAttack();
		};
	});

	$('.key').mouseleave(function(){
		$(this).removeClass("key_press");
		if (hold == true) {
			// maintain note
		} else {
		  startDecay();
		}
	});

});
*/
/*
var context = new AudioContext();
mrSynth = new MrSynth(context);

console.log('notes', notes);

    mrSynth.updateFrequency(notes.C3*1);
    mrSynth.startAttack();
*/