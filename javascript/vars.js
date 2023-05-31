/**Used to store cards & scores/players & Basic Functions**/

var jobs = ['Bartender', 'Psychic', 'Celebrity Impersonator ', 'Model', 'Magician', 'Author', 'Escort', 'Queen', 'Drill Sergeant', 'Game Show Host', 'School Nurse', 'Motivational Speaker', 'Professional Athlete', 'Intern', 'Mad Scientist', 'Taxi Driver', 'Private Detective', 'B-Movie Actor', 'Plumber', 'Singer', 'Mime', 'Super Hero', 'Reality Show Contestant', 'Cheerleader', 'News Anchor', 'Therapist', 'Butler', 'Nanny', 'Archaeologist', 'Gym Teacher', 'Bounty Hunter', 'Child Actor', 'Competitive Eater', 'Used Car Salesman', 'Live Action Role Player', 'Stunt Double', 'Politician', 'Venture Capitalist', 'Personal Trainer', 'Pirate', 'Lawyer', 'Flight Attendant', 'Gangster', 'World Record Holder', 'Ice Cream Maker', 'Housewife', 'Auctioneer', 'Butcher', 'Barista', 'Bachelor', 'Astronaut', 'Super Villain', 'Secret Agent'];
var jobs_used = [];
var quals = ['Spaceship', 'Merit Badge', 'Confession', 'Black Hole', 'Ambidextrous', 'Dragon', 'Box Wine', 'Social Media Profile', 'Utility Belt', 'Born on the Streets', 'Fear', 'Expert', 'Emotionally Hollow', 'Student Loans', 'Box', 'Open', 'Sob Story', 'Secret Identity', 'Deep', 'Decoder Ring', 'Shady', 'Cape', 'Chocolate', 'Monocle', 'Brass Knuckles', 'Filter', 'Room to Grow', 'Extra Credit', 'Rock', 'The Perfect Alibi', 'Boomerang', 'Recess', 'Sneaky', 'Diplomatic Immunity', 'Conviction', 'Self-Respect', 'Minivan', 'Film', 'Soundproof Room', 'Spirit', 'Survival Skills', 'A Dollar', 'Cane', 'Drive', 'Evil Laugh', 'Daddy Issues', 'Sloth', 'Handlebar Moustache', 'Fancy Hat', 'Million Dollar Smile', 'Grit', 'Mind Reader', 'Utterly Adorable', 'License', "Can't Lie", 'Scissors', 'Field Experience', 'Wings', 'Camera', 'Medicine', 'Black Belt', 'Soft Voice', 'Treats', 'Night Vision', 'Genetically Engineered', 'Soft Hands', 'Jet Packs', 'Hook', 'Can Defuse Bombs', "Can't Feel", 'Scalpel', 'Nothing Left to Lose', 'Happy Ending', 'Pride', 'Envy', 'Communes with Fish', 'Tip', 'Stool', 'Poker Face', 'Sidekick', 'Candy', 'Mace', 'Short Attention Span', 'Scented Candle', 'Flaming Sword', 'Indecisive', 'Apples', 'Firebreathing', 'Online Dating Profile', 'Three-Piece Suit', 'Day Job', 'Crystal Ball', 'Consolation Prize', 'A.I.', 'Rain', 'Fifty Tattoos', 'Rum', 'Work Ethic', 'Experiments', 'Sports Car', 'Walker', 'Trust Fund', ‘"Devil's Advocate"’, 'Time Machine', 'Jazz Hands', 'Every Problem Ever', 'Ripped', "Associate's Degree", 'Cold Hearted', 'Claw', 'Shed', 'Really Bad Aim', 'Heights', 'Poor Judgment', 'Magic Wand', 'Greed', 'Patient', 'Hoverboard', 'God Complex',  'Swag', 'Invisible Ink', 'Combover', 'Chain', 'Treasure', 'Uncontrollable Gas', 'Blunt', 'Gag Reflex', 'Excuses', 'Decency', 'The Antidote', 'Beard', 'Hot Mess', 'Nice Things', 'Hocus Pocus', 'Privilege', 'Camouflage', 'X-ray Vision', 'Nutcracker', 'Fifty Cats', 'Foam Sword', 'Shallow', 'Self-Entitled', 'Trench Coat', 'Sweat', 'Boats', 'Fairy Dust', 'Private Jet', 'Tight Quarters', 'Sheltered', 'Yoga Pants', 'Club', 'Brick', 'Piece of Cake', 'Package', 'Gluttony', 'Apocalypse', 'Minion', 'Online Degree', ‘Doctoral Degree’, ‘Bachelor’s Degree’, 'Bad Luck', 'Game Tester', 'Organic', 'Files', 'Captain', 'Coat Hanger', 'Hears Voices'];
var quals_used = [];

//counters
var scores = {}; //example, will populate with function later
var numPlayers = 0;
var currentBoss = 0;
var currentPlayer = 1; //tracks which player/employee is going up for quals
var qualCounter = 1;

//Helper Functions
function getJob(){
	if(jobs.length === 0){
		jobs = jobs.concat(jobs_used);
		jobs_used = [];
	}
	var index = Math.floor(Math.random() * jobs.length); //random var
	var result = jobs[index]; //returns result later
	jobs_used = jobs_used.concat(jobs.splice(index, 1)); //puts the jobs into used arr
	return result; //returns result
}
function getQual(){
	if(quals.length === 0){
		quals = quals.concat(quals_used);
		quals_used = [];
	}
	var index = Math.floor(Math.random() * quals.length); //random var
	var result = quals[index]; //returns result later
	quals_used = quals_used.concat(quals.splice(index, 1)); //puts the quals into used arr
	return result; //returns result
}
function nextBoss(){
	return (currentBoss+1 == numPlayers)?0:currentBoss+1; // basically cycles through the players properly
}
function pName(x){
	return Object.keys(scores)[x]; //return dictionary entry using index
}


/***********Animations*************/
//Animate Functions
function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	$('#MainPage .howPlay').hide();
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		$(nSelector).hide();
	}
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout(quickAnim, 400, '#MainPage .select', 'zoomIn',);
	setTimeout(quickAnim, 800, '#MainPage .boxes', 'zoomIn',);
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		setTimeout(quickAnim, 750+(75*i), nSelector, 'zoomIn',);
	}
	setTimeout(quickAnim, 1200, '#MainPage .startgame', 'zoomIn');
	setTimeout(quickAnim, 1250, '#MainPage .howPlay', 'zoomIn');
}
function roundStartAnim(){
	setTimeout(quickAnim, 1100, "#GamePage", "slideInDown");
	
	$("#GamePage").children().hide();
	$("#GamePage h1").show();
	var timeoutCounter = 2100;
	var timeoutInterval = 500;
	$("#GamePage").children().each(function () {
	  	if(!$(this).is("h1") && !$(this).is("div#pickWinner")){
	  		setTimeout(quickAnimObj, timeoutCounter, $(this), "slideInRight");
	  		timeoutCounter+=timeoutInterval;
	  	}
	});
	
}

//Animate Helper Functions
function quickAnim(selector, animName){
  $(selector).addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(animName + ' animated');
    $(this).show();
  });
};
function quickAnimObj(Obj, animName){
  Obj.addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    Obj.removeClass(animName + ' animated');
    Obj.show();
  });
};

function quickAnimHide(selector, animName){
  $(selector).addClass(animName + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  	$(this).hide();
    $(this).removeClass(animName + ' animated');
  });
};

animateTitle();

