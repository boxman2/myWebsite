const images = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg"]

const chosenImages = images[Math.floor(Math.random()* images.length)];

const bigImages = document.createElement("img")


bigImages.src = `pic/${chosenImages}`;

document.body.appendChild(bigImages);