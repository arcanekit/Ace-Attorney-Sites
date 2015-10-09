$(document).ready(function() {

  function generate(){
    var quotes = ["When something smells, it's usually the Butz.@Phoenix Wright","My ATM card number is 0001, because I'm number 1! @Manfred von Karma","Blacker than a moonless night, more bitter than hell itself. That is coffee.@Godot"];      
		randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteAuthor=randomQuote.split("@");
		$('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }
  
$(".button").on( "click", function() {
    generate();
  });    
});
