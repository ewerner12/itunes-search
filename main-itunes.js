"use strict";

$(document).ready(function(){
	////main functions go here//
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
			"\ngenre: " + genre + 
			"\nURL string: " + getUrlString(artist, album, song, genre)
			);
		
		$.ajax({
			type: 'GET', 
			datatype: 'jsonp',
			url: 'https://itunes.apple.com/search?term=' + getUrlString(artist, album, song, genre) + 'media=music' + "&callback=?",
			success: function(resultsObject){
					$.each(resultsObject, function(index, info){
						var itemResult = '<div class="col-sm-3" id="itemResult"></div>';
						
						$('#itemResult').append("info.artworkUrl100");
						$('#itemResult').append("'<h4>' + info.artistName + '</h4>'");
						$('#itemResult').append("'<h5>' + info.collectionName + '</h5>'");
						$('#itemResult').append("'<h6>' + info.trackName + '</h6>'");
						$('#itemResult').append('<a href="info.previewUrl">Preview</a>');
					});
					$('#results').append(itemResult);
				}
			});
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

function getUrlString(artist, album, song, genre)
{
	var urlString = '';
	
	if(artist)
	{
		urlString += artist + '&';
	}
	if(album)
	{
		urlString += album + '&';
	}
	if(song)
	{
		urlString += song +'&';
	}
	if(genre)
	{
		urlString += genre + '&';
	}
	return urlString;
}

