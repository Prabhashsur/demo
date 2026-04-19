

    let text = ["Frontend Developer", "UI Designer", "Freelancer"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];
  
  if (!isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
  }

  if (j == current.length) isDeleting = true;
  if (j == 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();