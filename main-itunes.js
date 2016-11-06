"use strict";

$(document).ready(function(){
	//main functions go here//
	dbSearch();
});

function dbSearch()
{
	$('#submitBtn').click(function(){
		var artist = formatString($('#artist').val());
		var album = formatString($('#album').val());
		var song = formatString($('#song').val());
		var genre = formatString($('#genre').val());
		
		alert("artist: " + artist + 
				"\nalbum: " + album + 
				"\nsong: " + song + 
				"\ngenre: " + genre);
	});
}

function formatString(inputString)
{
	var input = inputString.toLowerCase();
	
	input = input.trim().replace(/\s+/g, "+");
	
	return input;
}