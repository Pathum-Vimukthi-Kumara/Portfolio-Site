document.getElementById("menuButton").addEventListener("click", function() {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});

window.onclick = function(event) {
    if (!event.target.matches('#menuButton')) {
        const dropdown = document.getElementById("dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}
function adjustForMobile() {
  if (window.innerWidth <= 768) {
    document.body.style.backgroundColor = "#e0f7fa"; 
  } else {
    document.body.style.backgroundColor = "#f0f0f0"; 
  }
}

window.addEventListener("resize", adjustForMobile);
window.addEventListener("load", adjustForMobile);
const nameText = "Pathum Vimukthi";
let index = 0;


function typeEffect() {
    if (index < nameText.length) {
        document.getElementById("nameDisplay").innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 100); 
    } else {
     
        setTimeout(() => {
            document.getElementById("loadingScreen").style.animation = "fadeOut 1s forwards";
            setTimeout(() => {
                document.getElementById("loadingScreen").style.display = "none";
                document.getElementById("mainContent").style.display = "block";
            }, 1000); 
        }, 1000); 
    }
}


window.addEventListener("load", () => {
    typeEffect();
});
