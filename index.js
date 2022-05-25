const projectCard = document.getElementById("project");

const project = [
  {
    image: "./assets/images/cryptopopup.png",
    title: "Crypto App",
    framework: "React",
    description:
      "Crypto app is an application where users can get information about the crypto market, exchange rates & news",
    live: "https://6274fd2b09ac785e9138b4aa--prcryptoapp.netlify.app/",
    source: "https://github.com/prolajumokeoni/crypto-app",
  },
  {
    image: "./assets/images/metricspopup.png",
    title: "Metrics Web",
    framework: "React",
    description:
      "Metrics-Web is a single page application and API based website that displays two pages. The Home page, where you can see, top 12 posts titles. And the Posts page, where you can get more details on a blog posts.",
    live: "https://6274fd2b09ac785e9138b4aa--prcryptoapp.netlify.app/",
    source: "https://github.com/prolajumokeoni/metrics-web",
  },
  {
    image: "./assets/images/penzpopup.png",
    title: "Penz Classes",
    framework: "React",
    description:
      "An online class app that allows users to see all available courses, reserve a spot in a class, see all reservations, add and delete courses",
    live: "https://penz-classes.netlify.app/",
    source: "https://github.com/prolajumokeoni/Penz_Classes_Frontend",
  },
  {
    image: "./assets/images/htmlpopup.png",
    title: "CCN Conference",
    framework: "",
    description:
      "Code Camp Nigeria is a web development course website, the project was built mainly for two screen sizes for mobile and desktop. This capstone project is developed to help implement all that has been learnt in the html-css module.",
    live: "https://prolajumokeoni.github.io/html-css-capstone/",
    source: "https://github.com/prolajumokeoni/html-css-capstone",
  },
  {
    image: "./assets/images/bookpopup.png",
    title: "Bookstore",
    Framework: "See project",
    framework: "React",
    description:
      "Bookstore website is built with react and redux, feature of the website includes:Display a list of books,Add a book and Remove a selected book.",
    live: "https://deploy-preview-4--serene-kare-79146f.netlify.app/",
    source: "https://github.com/prolajumokeoni/bookstore",
  },
  {
    image: "./assets/images/mathpopup.png",
    title: "Math Magicians",
    framework: "React",
    description:
      "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations, Read a random math-related quote. By building this application, I will learn how to use React.",
    live: "https://pro-magic.herokuapp.com/",
    source: "https://github.com/prolajumokeoni/math-magicians",
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
  <button onclick="openModal('${project[i].title}')" class="colorBtn mx-auto" type="button">See project</button>
  <div onclick="closeModal()" class="backdrop">
    <div class="modal" id="contentBody">
      
    </div>
  </div>`;
}

let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");

function openModal(projectName) {
  let projectObj = null;
  project.forEach((obj) => {
    if (obj.title == projectName) projectObj = obj;
  });

  let contentBody = `<span onclick="closeModal()" class="close p-2">&times;</span>
  <img class="popupcard-img" src="${projectObj.image}">
  <h3 class="pt-3">${projectObj.title}</h3> 
  <div  class="d-flex text-center justify-content-center"> 
  <small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">${projectObj.framework}</small>
  <small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">Javascript</small>
  <small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">Html</small>
  <small class="blue-font font-weight-bold bg-light m-3 p-2 rounded">Css</small> 
  </div>  
    <p>${projectObj.description}</p>
    <a class="colorBtn" href='${projectObj.live}' target="_blank">See live <img  src="../assets/images/popuparrow.png"></a>
    <button class="colorBtn" href='${projectObj.source}';"> See source <img  src="../assets/images/gitpopup.png"></button>`;

  document.getElementById("contentBody").innerHTML = contentBody;
  backdrop.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none;";
}
