// LUMINENCE CALCULATOR

// Input
// let R = +prompt("Enter a R color value (Red):");
// let G = +prompt("Enter a G color value (Green):");
// let B = +prompt("Enter a B color value (Blue):");

// console.log(R, G, B);

// // Process
// let brightness = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);

// // Output
// alert(`The brightness is: ${brightness}`);

document.getElementById("btn1").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let r = +document.getElementById("r-in").value;
  let g = +document.getElementById("g-in").value;
  let b = +document.getElementById("b-in").value;

  // PROCESS
  let brightness = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
  let msg = `Luminance = ${brightness}`;

  // OUTPUT
  document.getElementById("output").innerHTML = Math.round(brightness);
}
