const projectCard = document.getElementById("project");

const project = [
  {
		image: '../assets/images/cryptopopup.png',
    title: "Crypto App",
    framework: "React",
    description: "Crypto app is an application where users can get information about the crypto market, exchange rates & news",
    live: "https://6274fd2b09ac785e9138b4aa--prcryptoapp.netlify.app/",
    source: "https://github.com/prolajumokeoni/crypto-app"
  },
  {
		image: '../assets/images/placeholder.png',
    title: "Metrics Web", 
    framework: "React",
    description: "Crypto app is an application where users can get information about the crypto market, exchange rates & news",
    live: "https://6274fd2b09ac785e9138b4aa--prcryptoapp.netlify.app/",
    source: "https://github.com/prolajumokeoni/crypto-app"
  },
  {
		image: '../assets/images/placeholder.png',
    title: "Metrics Web", 
    framework: "React",
    description: "Crypto app is an application where users can get information about the crypto market, exchange rates & news",
    live: "https://6274fd2b09ac785e9138b4aa--prcryptoapp.netlify.app/",
    source: "https://github.com/prolajumokeoni/crypto-app"
  },
  {
		image: '../assets/images/placeholder.png',
    title: "Metrics Web",
    framework: "React",
    description: "Crypto app is an application where users can get information about the crypto market, exchange rates & news",
    live: "https://6274fd2b09ac785e9138b4aa--prcryptoapp.netlify.app/",
    source: "https://github.com/prolajumokeoni/crypto-app"
  },
  {
		image: '../assets/images/placeholder.png',
    title: "Metrics Web",
    Framework: "See project", 
    framework: "React",
    description: "Crypto app is an application where users can get information about the crypto market, exchange rates & news",
    live: "https://6274fd2b09ac785e9138b4aa--prcryptoapp.netlify.app/",
    source: "https://github.com/prolajumokeoni/crypto-app"
  },
  {
		image: '../assets/images/placeholder.png',
    title: "Metrics Web",
    framework: "React",
    description: "Crypto app is an application where users can get information about the crypto market, exchange rates & news",
    live: "https://6274fd2b09ac785e9138b4aa--prcryptoapp.netlify.app/",
    source: "https://github.com/prolajumokeoni/crypto-app"
  },
];


const myProjects = document.getElementById("myProjects");
for (let i = 0; i < project.length; i++) {
  myProjects.innerHTML += `<div class="border m-4 rounded">
	<img class="card-img" src="${project[i].image}">
	<div class="text-center mb-3">
	<h3 class="pt-3">${project[i].title}</h3> 
	<div  class="d-flex text-center justify-content-center"> 
	<small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">${project[i].framework}</small>
	<small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">Javascript</small>
	<small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">Html</small>
	<small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">Css</small> 
	</div>  
  
  
 
  <button onclick="openModal()" class="colorBtn mx-auto" type="button"> see project</button>
  <div onclick="closeModal()" class="backdrop">
        <div class="modal">
        
    <span onclick="closeModal()" class="close">&times;</span>
    <h3 class="pt-3">${project[i].title}</h3> 
    <img class="popupcard-img" src="${project[i].image}">
            <p>${project[i].description}</p>
            <button>Contact</button>
            <button>Contact</button>
        </div>
        </div>
  `;
  
}

let myModal = document.querySelector('.myModal');
let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');


function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}
 
function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none;'
}
 
