const mainContainer = document.getElementById("jsonData");

const getDegrees = async () => {
			fetch('https://abloodgood.github.io/assignment5/my_degrees.json')
			.then(res => res.json())
			.then((res) => {
				const data = res.data;
				getElementById('school').innerHTML = "School: " + data.school;
				getElementById('major').innerHTML = "Major: " + data.major;
				getElementById('type').innerHTML = "Type: " + data.type;
				getElementById('year').innerHTML = "Year Conferred: " + data.year;



			});
			/*
			console.log(degree);
			console.log(degree[0]);
			displayDegree(degree);*/
};

getDegrees();

function displayDegree(degree) {
            for (var i = 0; i < degree.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'School: ' + degree[i].school 
								+ 'Major: ' + degree[i].major + 'Type: ' + degree[i].type
								+ 'Year Conferred: ' +degree[i].year;
                mainContainer.appendChild(div);
            }
}

