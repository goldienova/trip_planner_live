$(document).ready(function(){

$.each(hotels, function(index){
	$('#hotel-choices').append($(`<option>${$hotel_name.selector}</option>`));
});

$.each(restaurants, function(index){
	$('#restaurant-choices').append($(`<option>${restaurants[index].name}</option>`));
});

$.each(activities, function(index){
	$('#activity-choices').append($(`<option>${activities[index].name}</option>`));
});

})