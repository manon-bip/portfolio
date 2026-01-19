const filterButtons = document.querySelectorAll("#project-filters a")
const filterableCards = document.querySelectorAll("#gallery a")

const filterCards = e => {
	document.querySelector(".active-project-filter")
		.classList.remove("active-project-filter")
	e.target.classList.add("active-project-filter")
	
	filterableCards.forEach(a => {
		a.classList.add("hidden")

		const tags = a.dataset.name.split(" ")

		if (
			tags.includes(e.target.dataset.name) ||
			e.target.dataset.name === "all"
		) {
			a.classList.remove("hidden")
		}
	})
}

filterButtons.forEach(a => a.addEventListener("click", filterCards))
