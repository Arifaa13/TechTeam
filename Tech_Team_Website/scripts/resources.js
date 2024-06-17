

let demo2 = document.getElementById("demo2");
let demo3 = document.getElementById("demo3");

demo2.innerHTML = "Articles and Blogs!";
demo3.innerHTML = "Forums and Communities...";
demo2.className = demo2.style.display = "none";
demo3.className = demo3.style.display = "none";

function myFunction() {
  if (demo2.style.display != "none") {
    demo2.className = demo2.style.display = "none";
    demo3.className = demo3.style.display = "none";
  } else {
    demo2.className = demo2.style.display = "block";
    demo3.className = demo3.style.display = "block";
  }
}

