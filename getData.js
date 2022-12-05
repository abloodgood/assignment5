const mainContainer = document.getElementById("jsonData");

const fetchData = async () => {
		for (let i=1; i <= 3; i++) {
				await getDegree(i);
			}
};

const getDegree = async () => {
			const url = "https://abloodgood.github.io/assignment5/my_degrees.json"
			const result = await fetch(url);
			const degree = await result.json();
			console.log(degree);
			displayDegree(degree);
};

fetchData();

function displayDegree(degree) {
			const degreeElement = document.createElement("div")
			degreeElement.classList.add("degree");
			const school = degree.school;
			const major = degree.major;
			const type = degree.type;
			const year = degree.year;
			mainContainer.appendChild(degreeElement);
}

