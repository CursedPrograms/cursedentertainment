document.addEventListener("DOMContentLoaded", function () {
    var errorMessageContainer = document.getElementById("errorMessageContainer");
    var errorMessageParagraph = document.createElement("p");
    errorMessageParagraph.textContent = "Sorry, something went wrong on our end. We're working to fix it as soon as possible.";
    errorMessageContainer.appendChild(errorMessageParagraph);
});
