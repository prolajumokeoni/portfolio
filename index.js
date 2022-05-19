const projectCard = document.getElementById("project");

const project = [
  {
		image: '../assets/images/placeholder.png',
    title: "Crypto App",
    button: "https://github.com/prolajumokeoni/metrics-web",
  },
  {
		image: '../assets/images/placeholder.png',
    title: "Metrics Web",
    button: "https://github.com/prolajumokeoni/metrics-web",
  },
  {
		image: '../assets/images/placeholder.png',
    title: "Metrics Web",
    button: "https://github.com/prolajumokeoni/metrics-web",
  },
  {
		image: '../assets/images/placeholder.png',
    title: "Metrics Web",
    button: "https://github.com/prolajumokeoni/metrics-web",
  },
  {
		image: '../assets/images/placeholder.png',
    title: "Metrics Web",
    button: "https://github.com/prolajumokeoni/metrics-web",
  },
  {
		image: '../assets/images/placeholder.png',
    title: "Metrics Web",
    button: "https://github.com/prolajumokeoni/metrics-web",
  },
];

const myProjects = document.getElementById("myProjects");
for (let i = 0; i < project.length; i++) {
  myProjects.innerHTML += `<div class="border m-4 rounded">
	<img src="${project[i].image}">
	<div class="text-center mb-3">
	<h3>${project[i].title}</h3> 
	<div  class="d-flex">
	<small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">React</small>
	<small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">Html</small>
	<small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">Css</small>
	<small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">Javascript</small>
	</div>
	
	<button class="btn btn-outline-light green-background">See Project</button>
	</div>
	</div>
	`;
}
