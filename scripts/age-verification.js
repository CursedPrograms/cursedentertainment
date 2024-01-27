document.addEventListener("DOMContentLoaded", function () {
    function unblurImages() {
      var age = document.getElementById("age").value;
      if (age < 18) {
        alert("You must be 18 or older to proceed.");
        return false;
      }
      var images = document.getElementsByClassName("img");
      for (var i = 0; i < images.length; i++) {
        images[i].classList.add("unblur");
      }
      document.querySelector(".age-verification").style.display = "none";
      return true;
    }
    
    var proceedButton = document.querySelector("button");
    if (proceedButton) {
      proceedButton.addEventListener("click", unblurImages);
    }
  });