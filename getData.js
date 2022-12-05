const mainContainer = document.getElementById("jsonData");

const getDegrees = async () => {
			const url = "https://abloodgood.github.io/assignment5/my_degrees.json"
			const response = await fetch(url);
			const degree = await response.json();
			console.log(degree);
			displayDegree(degree);
};

getDegrees();

function displayDegree(degree) {
			const degreeElement = document.createElement("div")
			degreeElement.classList.add("degree");
			const school = degree.school;
			const major = degree.major;
			const type = degree.type;
			const year = degree.year;
			mainContainer.appendChild(degreeElement);
}

