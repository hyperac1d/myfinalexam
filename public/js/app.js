$('#index').html(`
	<div class="nav navbar-nav">
	</div>
`);

$('#app').html(`
	<center><div class="loader"></center>
  </div>
`);

$(document).ready(function() {
	x();
	$('.movies').bxSlider();
});




function x(){
$.ajax({
	url: "https://www.omdbapi.com/?t=fast+and+the+furious"
}).done(function(res){
	console.log(res);
	
	$('#app').html(createMoviePreviewTemplate(res));
});
}
http://www.omdbapi.com/?t=2+fast+2+furious

$.ajax({
	url: "https://www.omdbapi.com/?t=2+fast+2+furious"
}).done(function(res){
	console.log(res);
	
	$('#app2').html(createMoviePreviewTemplate(res));
});

http://www.omdbapi.com/?t=fast+and+the+furious+tokyo+drift
$.ajax({
	url: "https://www.omdbapi.com/?t=fast+and+the+furious+tokyo+drift"
}).done(function(res){
	console.log(res);
	
	$('#app3').html(createMoviePreviewTemplate(res));
});
http://www.omdbapi.com/?t=fast+%26+furious
$.ajax({
	url: "https://www.omdbapi.com/?t=fast+%26+furious"
}).done(function(res){
	console.log(res);
	
	$('#app4').html(createMoviePreviewTemplate(res));
});
http://www.omdbapi.com/?t=fast+five
$.ajax({
	url: "https://www.omdbapi.com/?t=fast+five"
}).done(function(res){
	console.log(res);
	
	$('#app5').html(createMoviePreviewTemplate(res));
});


function createMoviePreviewTemplate(res) {
	let html = `
		<div class="movie-template">
			<h1 align="center">${res.Title}
			</h1>
			<div class="movie-img">
				<img src="${res.Poster}"/>
			</div>
			<div class="movie-caption">
				<h3>${res.Year}</h1>
				<h5>Plot: <p>${res.Plot}</p></h5>
				<h5>Genre: ${res.Genre}</h5>
				<h5>Writer: ${res.Writer}</h5>
				<h5>Actors: ${res.Actors}</h5>
			</div>
		</div>
		
		`;

	return html;
}