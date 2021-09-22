/**Used to store cards & scores/players & Basic Functions**/

var jobs = ['A local coffee shop looks for coffee beans with emphasis on organic, fair-traded product (wt=50), followed by reliable delivery (wt=35) and service (wt=10). Price is not much a concern as customers often lable organic to be more expensive.','A carmaker sources chips with emphasis on reliable delivery (wt=50). Chips are cheap (wt=10) and spec. is quite standard, so the service (wt=25) is more important than quality (wt=15). ','A carmaker sources the battery unit for its new electronic vehicles (EV). Battery is one key component for an EV, so the quality (wt=25) must be at least on par. What is most important is post-sales service (wt=50).  Reliable deliverry is slightly second to quality (wt=20).','The centralized purchasing department for chained coffee shops looks for coffee beans with empheasis on volume so that all its chained store can have the same standard (wt=45) and reliable delivery (wt=35). Price is not a huge concern (wt=10) but quantity discount is expected since our volume is huge.  ','The local government is sourcing for the PPE (masks, face shield, etc.).  As the unit price is not high (wt=5), while the government purchasing takes tons of paperwork, it would be desirable to purchase a lot of them in one shot while the supplier can deliver in batches or deliver whenever we (i.e., the government) request (wt=65). Of course, PPE\'s should meet the FDA requirements and etc. (wt=25).','The centralized general service department of a bank with national presence is sourcing for the hand sanitizers for its branches in response to the Covid-19 pandemic. The bank does not really concern about the ingridents (flavor or not, and etc.) but providing them shows the bank cares about its customers so the brand also does not matter (wt=5).  What is important is the supplier can deliver in batches or deliver whenever we (i.e., the bank) request (wt=70) to the required branch office. Since it can be anticipated that the need of hand sanitizers will continue, it would be great to have quantity discount and the price is guaranteed (wt=15). Other service seems to be limited since the product is quite standard but it is desirable to have the flexiblity to bottle them in different sizes (in oz.) as some branch offices are bigger than others.'];
var jobs_used = [];
var quals = [['Quantity discount is typically not available but we are flexible in shipping, so if needed, we can ship in one unit or whatever unit customers request.','Quantity discount is not available but we ship in batch, which save you logistics costs.','We do offer quantity discount but there is no fixed price/discount and everything is all up to the negotiations.','We do not offer quantity discount. However, we have three different shipping methods for customers to choose from.  The shipping rates are primarily contingent on the speed.'],['Here is what we offer: our quality rating is 86.2, on-time delivery rating 87.9, price rating 100, and the service rating 89.7. ','Here is what we offer: our quality rating is 88.2, on-time delivery rating 93.7, price rating is 90, and the service rating 88.7.','Here is what we offer: our quality rating is 94.2,  on-time delivery rating 89.7, price rating 82.5, and the service rating 85.7.','Here is what we offer: our quality rating is 89.2, on-time delivery rating 86.8, price rating 85.5, and the service rating 98.2.','Here is what we offer: our quality rating is 92.4, on-time delivery rating 89.8, price rating 80.5, and the service rating 90.3.','Here is what we offer: our quality rating is 85.5,  on-time delivery rating 96.7, price rating 81.3, and the service rating 84.7.','Here is what we offer: our quality rating is 84.5, on-time delivery rating 97.0, price rating is 83.9, and the service rating 80.8.'],['We are interested in building long term relationships with our customers so that we can grow together!','We are not interested in building exclusive relationships with customers because an exclusive relationship means we have to give up other customers.','We are interested in expanding our customer base and would be happy to go along if the customer wants a long-term and even evergreen contract.'],['We have facilities around the world, so we can effectively spread the risk, particularly risks associated with natural cause (weather, earthquake, etc.)','We are in support of local businesses, and we are proud to thrive with the local communities!','We have facilities in 5 different states in USA, so wherever you are, we will be able to support you from our nearest facility.']];
var quals_used = [[],[],[],[]];

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
function getQual(qualClass){
	if(quals[qualClass].length === 0){
		quals[qualClass] = quals[qualClass].concat(quals_used[qualClass]);
		quals_used[qualClass] = [];
	}
	var index = Math.floor(Math.random() * quals[qualClass].length); //random var
	var result = quals[qualClass][index]; //returns result later
	quals_used[qualClass] = quals_used[qualClass].concat(quals[qualClass].splice(index, 1)); //puts the quals into used arr
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

