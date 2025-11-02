const filterButtons = document.querySelectorAll("#filters a")
const filterableCards = document.querySelectorAll("#gallery a")

const filterCards = e => {
	document.querySelector(".active").classList.remove("active");
	e.target.classList.add("active");
	
	filterableCards.forEach(a => {
		a.classList.add("hidden")
		if(a.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
			a.classList.remove("hidden")
		}
	})
}

filterButtons.forEach(a => a.addEventListener("click", filterCards))