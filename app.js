const card = document.querySelector(".card-group");
const boxOne = card.children[0].querySelector(".box");
const boxTwo = card.children[1].querySelector(".box");
const boxThree = card.children[2].querySelector(".box");

const btnMessi = card.children[0].querySelector(".card-btn");
const btnCristiano = card.children[1].querySelector(".card-btn");
const btnBoth = card.children[2].querySelector(".card-btn");
// Create a new image element
// const createImgElement = document.createElement('img');
// createImgElement.classList.add('img-fluid')

// ==================== For Messi ==================== //
const imgSourceMessi = [
  "./images/messi-1.jpg",
  "./images/messi-2.jpg",
  "./images/messi-3.jpg",
  "./images/messi-4.jpg",
  "./images/messi-5.jpg",
];

btnMessi.addEventListener("click", () => {
  // remove existing image
  const existingImg = boxOne.querySelector("img");
  if (existingImg) {
    boxOne.removeChild(existingImg);
  }

  const rand = Math.floor(Math.random() * imgSourceMessi.length);
  const newImgElement = document.createElement("img"); // Create a new image element
  newImgElement.classList.add("img-fluid", "rounded");
  newImgElement.src = imgSourceMessi[rand];
  boxOne.appendChild(newImgElement);
});

// ==================== For Cristiano ==================== //
const imgSourceCristiano = [
  "./images/cr7-1.jpg",
  "./images/cr7-2.jpg",
  "./images/cr7-3.jpg",
  "./images/cr7-4.jpg",
  "./images/cr7-5.jpg",
];
btnCristiano.addEventListener("click", () => {
  // remove existing image
  const existingImg = boxTwo.querySelector("img");
  if (existingImg) {
    boxTwo.removeChild(existingImg);
  }

  const rand = Math.floor(Math.random() * imgSourceCristiano.length);
  const createImgElement = document.createElement("img");
  createImgElement.classList.add("img-fluid", "rounded");
  createImgElement.src = imgSourceCristiano[rand];
  boxTwo.appendChild(createImgElement);
});

// ==================== For Cristiano ==================== //
const imgSourceBoth = [
  "./images/messi-1.jpg",
  "./images/messi-2.jpg",
  "./images/messi-3.jpg",
  "./images/messi-4.jpg",
  "./images/messi-5.jpg",
  "./images/cr7-1.jpg",
  "./images/cr7-2.jpg",
  "./images/cr7-3.jpg",
  "./images/cr7-4.jpg",
  "./images/cr7-5.jpg",
];
btnBoth.addEventListener("click", () => {
  // remove existing image
  const existingImg = boxThree.querySelector("img");
  if (existingImg) {
    boxThree.removeChild(existingImg);
  }

  const rand = Math.floor(Math.random() * imgSourceBoth.length);
  const createImgElement = document.createElement("img");
  createImgElement.classList.add("img-fluid", "rounded");
  createImgElement.src = imgSourceBoth[rand];
  boxThree.appendChild(createImgElement);
});
