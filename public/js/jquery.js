$(document).ready(function(){

$.each(hotels, function(index){
	$('#hotel-choices').append($(`<option>${hotels[index].name}</option>`));
});

$.each(restaurants, function(index){
	$('#restaurant-choices').append($(`<option>${restaurants[index].name}</option>`));
});

$.each(activities, function(index){
	$('#activity-choices').append($(`<option>${activities[index].name}</option>`));
});

$('[data-action = "add"]').on('click', function(e){
	const $input = $(this);
	const $choice = $input.siblings('select');
	var $valueToAdd = $choice.val();

	if(($choice.data().type) === "hotel"){
		var $hotelList = $("h4:contains('My Hotel')");
		var $itemList = $hotelList.siblings("ul").children();
		$itemList.append("<span>" + $valueToAdd + "</span>");
	} 

	if(($choice.data().type) === "restaurant"){
		var $hotelList = $("h4:contains('My Restaurants')");
		var $itemList = $hotelList.siblings("ul").children();
		$itemList.append("<span>" + $valueToAdd + "</span>");
	}

	if(($choice.data().type) === "activity"){
		var $hotelList = $("h4:contains('My Activities')");
		var $itemList = $hotelList.siblings("ul").children();
		$itemList.append("<span>" + $valueToAdd + "</span>");
	}
})

})