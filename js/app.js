const btnCopy = document.getElementById("btncopy");
const drawFind = document.getElementById("ctn-draw");
const ctnParagraph = document.getElementById("ctn-paragraph");
const resultArea = document.getElementById("area-resultado");
const ctnSecundario = document.getElementById("ctn-secundario");
//
let warningText;
let textToEncrypt;


// Functions - buttons
function encryptText() {
  getText();
  encrypt();
  showResultArea(true);
}

function desencryptText() {
  getText();
  desencrypt();
  showResultArea(true);
}

//General functions
function encrypt() {
  textToEncrypt = textToEncrypt.replace(/e/g, "enter");
  textToEncrypt = textToEncrypt.replace(/i/g, "imes");
  textToEncrypt = textToEncrypt.replace(/a/g, "ai");
  textToEncrypt = textToEncrypt.replace(/o/g, "ober");
  textToEncrypt = textToEncrypt.replace(/u/g, "ufat");
  resultArea.textContent = textToEncrypt;
}

function desencrypt() {
  textToEncrypt = textToEncrypt.replace(/enter/g, "e");
  textToEncrypt = textToEncrypt.replace(/imes/g, "i");
  textToEncrypt = textToEncrypt.replace(/ai/g, "a");
  textToEncrypt = textToEncrypt.replace(/ober/g, "o");
  textToEncrypt = textToEncrypt.replace(/ufat/g, "u");
  resultArea.textContent = textToEncrypt;
}

function getText() {
  textToEncrypt = document.getElementById("texttoencrypt").value;
  var words = textToEncrypt;
  return words;
}

function checkEmptyAndButtons(button) {
  textToEncrypt = document.getElementById("texttoencrypt").value;
  if (textToEncrypt == "") {
    let msg = document.getElementById("alertmsg");
    msg.textContent = "¡El texto no puede estar vacio!";
    showResultArea();
  } else {
    if (button === "btnEncrypt") encryptText();
    else if (button === "btnDesencrypt") desencryptText();
  }
}

function copyText() {
  var textToCopy = document.getElementById("area-resultado").innerHTML;
  navigator.clipboard.writeText(textToCopy);
  return;
}

//Show result area
function showResultArea(show) {
  if (show) {
    drawFind.classList.add("ocultar");
    ctnParagraph.classList.add("ocultar");
    ctnSecundario.classList.add("no-show");
    btnCopy.classList.remove("ocultar");
    resultArea.classList.remove("ocultar");
  } else {
    drawFind.classList.remove("ocultar");
    ctnParagraph.classList.remove("ocultar");
    ctnSecundario.classList.remove("no-show");
    btnCopy.classList.add("ocultar");
    resultArea.classList.add("ocultar");
  }
}
