let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let saveTextFileButton = document.getElementById("save-text-file");
let textarea = document.getElementById("textarea");

upperCaseButton.addEventListener("click", toUpperCase);
lowerCaseButton.addEventListener("click", toLowerCase)
properCaseButton.addEventListener("click", toProperCaseConverter);
sentenceCaseButton.addEventListener("click", toSentenceCaseConverter);
saveTextFileButton.addEventListener("click", downloadTextFile, false);

function toUpperCase() {
    textarea.value = readTextarea().toString().toUpperCase();
}

function toLowerCase() {
    textarea.value = readTextarea().toString().toLowerCase();
}

function toProperCaseConverter() {
    toLowerCase()
    textarea.value = toProperCase(readTextarea());
}

function toSentenceCaseConverter() {
    toLowerCase()
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
    return textarea.value;
}

function downloadTextFile() {
    download("text.txt", readTextarea());
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}