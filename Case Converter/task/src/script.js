let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let textarea = document.getElementById("textarea");

upperCaseButton.addEventListener("click", toUpperCase);
lowerCaseButton.addEventListener("click", toLowerCase)
properCaseButton.addEventListener("click", toProperCaseConverter);
sentenceCaseButton.addEventListener("click", toSentenceCaseConverter);

function toUpperCase() {
    textarea.value = readTextarea().toString().toUpperCase();
    textarea.style.textTransform = "uppercase";
}

function toLowerCase() {
    textarea.value = readTextarea().toString().toLowerCase();
    textarea.style.textTransform = "lowercase";
}

function toProperCaseConverter() {
    textarea.style.textTransform = "none";
    textarea.value = toProperCase(readTextarea());
}

function toSentenceCaseConverter() {
    textarea.style.textTransform = "none";
    textarea.value = toSentenceCase(readTextarea());
}

function toProperCase(sentences) {
    return sentences.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
}

function toSentenceCase(sentences) {
    return sentences.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, function (c) {
        return c.toUpperCase()
    });
}

function readTextarea() {
    return textarea.value.toLowerCase();
}