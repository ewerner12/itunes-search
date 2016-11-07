"use strict";

$(document).ready(function(){
	//main functions go here//
	initSearch();
});

function initSearch()
{
	$('#submitBtn').click(function(){
		var artist = formatString(checkForInput($('#artist').val()), $('#artist').val());
		var album = formatString(checkForInput($('#album').val()), $('#album').val());
		var song = formatString(checkForInput($('#song').val()), $('#song').val());
		var genre = formatString(checkForInput($('#genre').val()), $('#genre').val());
		
		alert("artist: " + artist + 
				"\nalbum: " + album + 
				"\nsong: " + song + 
				"\ngenre: " + genre);
	});
	
	
}

function checkForInput(userInput)
{
	if(userInput.length > 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function formatString(hasInput, userInput)
{
	if(hasInput)
	{
		var input = userInput.toLowerCase();
		input = input.trim().replace(/\s+/g, "+");
		return input;
	}
}
