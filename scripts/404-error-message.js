document.addEventListener("DOMContentLoaded", function () {
    var errorMessageContainer = document.getElementById("errorMessageContainer");
    var errorMessageParagraph = document.createElement("p");
    errorMessageParagraph.textContent = "Oops! It seems like the content you're searching for is in a different location.";
    errorMessageContainer.appendChild(errorMessageParagraph);
});