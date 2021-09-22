var textDir = "ltr"; // LTR or RTL

var gameRules = `
			The first player is chosen to start the game as the Buyer. Everyone else starts as a potential Supplier.
			The Suppliers get 4 qualifications each.

			Starting from the left of the Buyer, each Supplier “interviews” by explaining why their qualifications make
			them the best supply source for the item the Buyer is sourcing. Suppliers reveal their qualifications to the Buyer, one at a time, and
			describe how each one makes them qualified for supplying the item that the Buyer is sourcing. Because these qualifications are chosen at random and not revealed
			to the player until they are chosen, the supplier representatives have to think on their feet.

			After all Suppliers have had a turn, the Buyer chooses which Supplier they feel is the most qualified and
			the Supplier gets a point. A new Buyer is chosen and the cycle begins again.
`;

var strings = {
	app_welcome: "Welcome to ",
	app_name: "FunSourcing",
	player_count: "How many players? (recommended: 4 or more)",
	num_1: "1",
	num_2: "2",
	num_3: "3",
	num_4: "4",
	num_5: "5",
	num_6: "6",
	num_7: "7",
	num_8: "8",
	num_9: "9",
	num_10: "10",
	player: "Potential Supplier",
	player_name: "Company Name ",
	start_game: "Start the Game!",
	how_do_i_play: "How do I play?",
	game_rules: gameRules,
	applicant: "Potential Supplier",
	qualification: "Qualifications",
	employer: "Buyer",
	next_qualification: "Additional information",
	quals: "Spec.",
	who_is_new_employee: "Who's Your New Supplier?",
	past_quals: "Supplier Qualifications",
	player_won: "Player 1 is the New Supplier!",
	next_round: "Next Round",
	end_game: "End this Game",
	wanted: "Wanted",
	next_applicant: "Next Potential Supplier",
	next_qualification: "Next Qualification",
	is_the_new: " received the bid for the following: ",
	current_scores: "Number of Contracts Won",
	reset: "Reset Timer"
};

$(function() {	
	$("[data-localize]").each(function( i ) {
		keys = $(this).data( "localize" ).split(" ");
		replacement = "";
		for (i = 0; i < keys.length; i++) {
		  replacement += strings[keys[i]];
		}
	  $(this).text(replacement);
		if( $(this).prop("tagName").toLowerCase() == "input" ) {
		  $(this).attr("placeholder", replacement);
		}
	});
	
	$('body').attr("dir", textDir);
	if( textDir == "rtl" ) {
		$('.timer-container:first').css('float','left');
	}
});