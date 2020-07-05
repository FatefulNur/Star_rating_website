const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");

for(let x=0; x<stars.length; x++){
	stars[x].value = (x+1);
	
	var eventArray = ["click","mouseover","mouseout"];
	eventArray.forEach(function(e){
		stars[x].addEventListener(e,showRating);
	});
}


function showRating(e){
	let type = e.type;
	//console.log(type);
	let starValue = this.value;
	//console.log(starValue);
	stars.forEach(function(v, ind){
		if(type === 'click'){
			if(starValue > 1){
				output.innerHTML = `You rated this ${starValue} stars .`;
			}else{
				output.innerHTML = "<b>Single star rated ! </b>";
			}
		}
		if(type === 'click'){
			if(ind < starValue){
				v.classList.add("orange");
			}else{
				v.classList.remove("orange");
			}
		}
		if(type === 'mouseover'){
			if(ind < starValue){
				v.classList.add("yellow");
			}else{
				v.classList.remove("yellow");
			}
		}
		if(type === 'mouseout'){
			v.classList.remove("yellow");
		}
	});
}
function nextPage(){
	window.location.reload();
}