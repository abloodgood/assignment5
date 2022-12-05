const mainContainer = document.getElementById("jsonData");

const getDegrees = async () => {
			const url = "https://abloodgood.github.io/assignment5/my_degrees.json"
			const response = await fetch(url);
			const degree = await response.json();
			console.log(degree);
			console.log(degree.length);
};

getDegrees();

function displayDegree(degree) {
            for (var i = 0; i < degree.length; i++) {
                var div = document.createElement("div");
								console.log(degree[0]);
                div.innerHTML = 'School: ' + degree[i].school 
								+ 'Major: ' + degree[i].major + 'Type: ' + degree[i].type
								+ 'Year Conferred: ' +degree[i].year;
                mainContainer.appendChild(div);
            }


}

