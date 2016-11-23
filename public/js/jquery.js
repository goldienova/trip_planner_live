var day1 = {
	hotel : "",
	restaurant : [],
	activites : []
}
var day2 = {
	hotel : "",
	restaurant : [],
	activites : []
}
var day3 = {
	hotel : "",
	restaurant : [],
	activites : []
}
var day4 = {
	hotel : "",
	restaurant : [],
	activites : []
}

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


//this is adding the hotels/restaurants/activities to the schedule
$('[data-action = "add"]').on('click', function(e){
	const $input = $(this);
	const $choice = $input.siblings('select');
	var $valueToAdd = $choice.val();

	if(($choice.data().type) === "hotel"){
		var $hotelList = $("h4:contains('My Hotel')");
		var $itemList = $hotelList.siblings("ul").children();
		
		//console.log($itemList.children().length);
		if($itemList.children().length < 2){
			$itemList.append("<span class='title'>" + $valueToAdd + "</span>");
			$itemList.append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
		}
	} 

	if(($choice.data().type) === "restaurant"){
		var $hotelList = $("h4:contains('My Restaurants')");
		var $itemList = $hotelList.siblings("ul").children();
		if($itemList.children().length < 4){
			$itemList.append("<span class='title'>" + $valueToAdd + "</span>");
			$itemList.append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
		}
	}

	if(($choice.data().type) === "activity"){
		var $hotelList = $("h4:contains('My Activities')");
		var $itemList = $hotelList.siblings("ul").children();
		$itemList.append("<span class='title'>" + $valueToAdd + "</span>");
		$itemList.append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
	}
})
//below .remove is an example of event delegation
$('.list-group').on('click', '.remove', function(e){
	const $btn = $(this);
	console.log(this);
	const itemToRemove = $btn.prev('.title');
	itemToRemove.remove();
	$btn.remove();
})

$("#day-add").on('click', function(e){
	var i = $(".day-buttons").children().length;
	if (i <= 4) $('#day-add').before('<button class="btn btn-circle day-btn">' + i +'</button>')
})

$('.day-buttons').on('click', '.day-btn', function(){
	
	var dayObj = $(this)
	var number = dayObj.text();
	if (dayObj.text() !== "+"){
		$(this).siblings('.day-btn').removeClass('current-day');
		$(this).addClass('current-day');
		$('#day-title').children().remove()	
		$('#day-title').append('<span>Day ' + number + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button>');
	}

})


})