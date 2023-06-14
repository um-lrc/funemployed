/**Used to store cards & scores/players & Basic Functions**/

var jobs = ['Can be adjusted for different sizes','Can showoff it off to my neighbor','Gives a pleasant aroma','Will win a cosplay competition','Its fluffy, soft and comfy','Makes you feel like a animal / beast','Will win a pageant for ___________','Can show off my abs, and waist ','Can show off my legs','Keep my warm in the arctic','Good for taking on a swim','Keep me from drowning','Its reversible, more than one look','Good to wear on a warm day','Can block out, protect from the sun','Has a hypnotizing pattern','It\'s confusing and surprising','Has intricate patterns','Will wear well in Mars','Provides impact protection','Can be worn during any season','Looks good on the catwalk','Looks both futuristic yet retro','Can be both hot and cold','Can be both fashion and casual','Clear influence by a famous artist','Works well in a movie set for ________','Works well in a theater set for ________','Has international appeal','Will start a new fashion trend','Not to be worn by people with trypophobia','Will wear well at no gravity, out in space','Looks good in yoga class','Can showoff it off to my neighbor'];
var jobs_used = [];
var quals = [['Linen','Cashmere','Cotton','Wool','Ramie','Silk','Denim','Leather','Down','Fur','Nylon','Polyesters','Spandex','Acetate','Cupro','Flannel','Lyocell','Polyvinyl Chloride','Rayon','Cotton','Recycled PET','Recycled Bob','Tyvek','Vinylon','Bamboo','Jute','Hemp','Alpaca','Mohair','Angora','Catgut','Sinew','Horse Hair','Bone','Gold','Aluminum','Chocolate','Human Hair','Electroluminescent Paper','Wood Pulp / Naoron','PVC Pipe','Recycled Newspaper Yarn','Recycled Plastic Bottles (Newlife Polyester)','Ingeo (Corn Fiber)','Spider Silk','Hagfish Slime','Dollar Bills','Fermented Wine','Recycled Cassette Tapes','Beef Steaks','Biocouture Fabric','Qmilk Fabric','Solar Fabric','Legos','Plastic Bag','Glass','Balloon','Wood','Cork','Rubber','Ceramics','Bottle Caps','Food','Cutlery','Duct Tape','Science','Tape','Packing Materials','3D Laser','Safety Pins','Condoms','Zippers','Soda Tabs','Leaves','Flowers','Agave','Bark'],['Linen','Cashmere','Cotton','Wool','Ramie','Silk','Denim','Leather','Down','Fur','Nylon','Polyesters','Spandex','Acetate','Cupro','Flannel','Lyocell','Polyvinyl Chloride','Rayon','Cotton','Recycled PET','Recycled Bob','Tyvek','Vinylon','Bamboo','Jute','Hemp','Alpaca','Mohair','Angora','Catgut','Sinew','Horse Hair','Bone','Gold','Aluminum','Chocolate','Human Hair','Electroluminescent Paper','Wood Pulp / Naoron','PVC Pipe','Recycled Newspaper Yarn','Recycled Plastic Bottles (Newlife Polyester)','Ingeo (Corn Fiber)','Spider Silk','Hagfish Slime','Dollar Bills','Fermented Wine','Recycled Cassette Tapes','Beef Steaks','Biocouture Fabric','Qmilk Fabric','Solar Fabric','Legos','Plastic Bag','Glass','Balloon','Wood','Cork','Rubber','Ceramics','Bottle Caps','Food','Cutlery','Duct Tape','Science','Tape','Packing Materials','3D Laser','Safety Pins','Condoms','Zippers','Soda Tabs','Leaves','Flowers','Agave','Bark'],['Tiara','Skirt','Dress','Sweater','Jacket','Coat','Jeans','Socks','Shorts','Tracksuit','Chainmail Armor','Vest','Pajamas','Shoes','Boots','Raincoat','Tanktop','Swimsuit','Heels','Blouse','Bra','Panties','Stockings','Suit','Shirt','TIe','Bow-Tie','Bracelet','Briefs','Earrings','Necklace','Sun Hat','Wool Hat','Scarf','Glasses','Sunglasses','Bagpack','Bag','Earrings','Bracelet','Belt','Handkerchief','Necklace','Purse','Wallet','Hat','Cap','Ring','Watch','Shawl','Crown','Walking Stick','Cane','Umbrella','Kilt','Fedora','Burkini','Bikini','Eye Patch','Ligerie','Underwear','Bra','Medieval','Samurai','Ninja','Indian Saree','Lehenga Choli','Churidar','Peg Leg','Panche Or Lungi','Dhoti','Bandhgala','Angarkha','Achkan/Sherwani','Jama','Headgear','Thawb / Khameez / Dishdashah','Keffiyeh','Tagiyah','Salwar','Tie','Abaya','Breech','Corset','Pirate Sash','Cravat','Capelet','Hosen','Hijāb','Niqāb','Burqa','Hanfu','Yi (衣)','Pao (袍)','Ru (襦)','Shan (衫)','Qun or Chang (裙/裳)','Ku (裤)','Gat','Qipao (Cheongsam)','Tang Suit','Zhongshan Suit','Shenyi (Deep robe)','Charro Suit','Mexican Sombrero','Poncho','Quechquémitl','Rebozo','Escaramuza ','Tzutes','Huaraches'],['Gothic','Parisian','1910s','1920s','1930s','1940s','1950s','1960s','Emo','1970s','1980s','1990s','2000s','2010s','2020s','Artsy','Casual','Grunge','Chic','Medieval','Space Traveler','Bohemian','Sexy','Exotic','Trendy','Vibrant','Preppy','Elegant','Cowgirl','Girl Next Door','Punk','Tomboy','Rocker','Sporty','Japanese','Afghan','Mexican','Ethnic','Formal Office','Evening','Girly','Maternity','Lolita','Hip Hop','Kawaii','Lagenlook','Geeky Chic','Military','Garconne','Vacation','KPOP','Steampunk','Jet-Setter','Dandy','Rugged','Rebel','Classic','Street','Uniform','Preppy','Playboy','Jagged','Ruffled','Cinch','Summer','Anime','Cosplay','Marvel Universe','DC Universe','Genshin Impact','My Hero Academia','Naruto','Pokemon','One Piece','Downtown Abby','Blade Runner']];
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

