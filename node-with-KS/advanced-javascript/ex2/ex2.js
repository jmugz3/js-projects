/*
Instructions
In this exercise, you will modify existing code for a simple note taking app. You will not add/remove functionality per se, but instead organize the code into a more proper module design and make it more flexible/reusable.

Using what you learned about closure and the module pattern, modify your previous code to wrap all the functionality up into a simple object (call it "NotesManager" or something appropriate), with a simple API, consisting of:

an init() method, which you will call from the outside when jQuery's document.ready event is fired, and pass in the data from the "database".
a public method to add in notes "in bulk" after retrieval from the "database". hint: this can/should be called before you run the "init" method.
Make sure you have a "private" storage of the notes data list inside your module. Why is it a good idea to keep the data "private" inside the module?

What do you notice about the structure of this code as it relates to the DOM access and the usage of jQuery? Would it make sense to "generalize" this code so that the module didn't have hardcoded into it the various DOM elements it would operate on? 
Explore how you would modify the code in this fashion. What are the benefits and tradeoffs?
*/

// assume this data came from the database
var notes = [
	"This is the first note I've taken!",
	"Now is the time for all good men to come to the aid of their country.",
	"The quick brown fox jumped over the moon."
];

function addNote(note) {
	$("#notes").prepend(
		$("<a href='#'></a>")
		.addClass("note")
		.text(note)
	);
}

function addCurrentNote() {
	var current_note = $("#note").val();

	if (current_note) {
		notes.push(current_note);
		addNote(current_note);
		$("#note").val("");
	}
}

function showHelp() {
	$("#help").show();

	document.addEventListener("click",function __handler__(evt){
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		document.removeEventListener("click",__handler__,true);
		hideHelp();
	},true);
}

function hideHelp() {
	$("#help").hide();
}

function handleOpenHelp(evt) {
	if (!$("#help").is(":visible")) {
		evt.preventDefault();
		evt.stopPropagation();

		showHelp();
	}
}

function handleAddNote(evt) {
	addCurrentNote();
}

function handleEnter(evt) {
	if (evt.which == 13) {
		addCurrentNote();
	}
}

function handleDocumentClick(evt) {
	$("#notes").removeClass("active");
	$("#notes").children(".note").removeClass("highlighted");
}

function handleNoteClick(evt) {
	evt.preventDefault();
	evt.stopPropagation();

	$("#notes").addClass("active");
	$("#notes").children(".note").removeClass("highlighted");
	$(evt.target).addClass("highlighted");
}

function init() {
	// build the initial list from the existing `notes` data
	var html = "";
	for (i=0; i<notes.length; i++) {
		html += "<a href='#' class='note'>" + notes[i] + "</a>";
	}
	$("#notes").html(html);

	// listen to "help" button
	$("#open_help").bind("click",handleOpenHelp);

	// listen to "add" button
	$("#add_note").bind("click",handleAddNote);

	// listen for <enter> in text box
	$("#new_note").bind("keypress",handleEnter);

	// listen for clicks outside the notes box
	$(document).bind("click",handleDocumentClick);

	// listen for clicks on note elements
	$("#notes").on("click",".note",handleNoteClick);
}

$(document).ready(init);
