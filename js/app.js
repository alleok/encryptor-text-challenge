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
  const keys = {
    "e": "enter",
    "é": "énter",
    "i": "imes",
    "í": "ímes",
    "a": "ai",
    "á": "ái",
    "o": "ober",
    "ó": "óber",
    "u": "ufat",
    "ú": "úfat",
    "E": "ENTER",
    "É": "ÉNTER",
    "I": "IMES",
    "Í": "ÍMES",
    "A": "AI",
    "Á": "ÁI",
    "O": "OBER",
    "Ó": "ÓBER",
    "U": "UFAT",
    "Ú": "ÚFAT"
  };

  let text = textToEncrypt.split(/(e|é|i|í|a|á|o|ó|u|ú|E|É|I|Í|A|Á|O|Ó|U|Ú)/).map(part => keys[part] || part).join("");
  resultArea.textContent = text;
}

function desencrypt() {
  let keys = {
    "enter": "e",
    "énter": "é",
    "imes": "i",
    "ímes": "í",
    "ai": "a",
    "ái": "á",
    "ober": "o",
    "óber": "ó",
    "ufat": "u",
    "úfat": "ú",
    "ENTER": "E",
    "ÉNTER": "É",
    "IMES": "I",
    "ÍMES": "Í",
    "AI": "A",
    "ÁI": "Á",
    "OBER": "O",
    "ÓBER": "Ó",
    "UFAT": "U",
    "ÚFAT": "Ú"
  };

  let text = textToEncrypt.split(/(enter|énter|imes|ímes|ai|ái|ober|óber|ufat|úfat|ENTER|ÉNTER|IMES|ÍMES|AI|ÁI|OBER|ÓBER|UFAT|ÚFAT)/).map(part => keys[part] || part).join("");
  resultArea.textContent = text;
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
