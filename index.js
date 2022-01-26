let name = document.getElementById("name");
let mark = document.getElementById("mark");
let tbody = document.getElementById("tbody");
let btn = document.getElementById("push");
let grade = "kichuna";

function kichuKoro(e) {
  e.preventDefault();

  let newName = name.value;
  let newMark = parseInt(mark.value);

  // Calculating Grades
  if (newMark >= 80) {
    grade = "A+";
  } else if (newMark >= 70) {
    grade = "A";
  } else if (newMark >= 60) {
    grade = "A-";
  } else {
    grade = "fokka";
  }

  const aHtml =
    "<tr><td>" +
    newName +
    "</td><td>" +
    newMark +
    "</td><td>" +
    grade +
    "</td></tr>";

  tbody.insertAdjacentHTML("beforeend", aHtml);
}

btn.addEventListener("click", (e) => {
  kichuKoro(e);
});
