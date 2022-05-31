// LvL 1_2
let changeBg = document.getElementsByClassName("example");

let myFunction = () => {
  for (let i = 0; i < changeBg.length; i++) {
    // changeBg[i].style.backgroundColor = "#000";
    changeBg[i].classList.toggle("black");
  }
};

// LvL 2_1
let home = document.getElementById("navHome");

// let changeMe = () => {
//   navHome.classList.toggle("homereverse");
// };

// LvL 2_2
let output = () => {
  let vorName = document.getElementById("vorname").value;
  let nachName = document.getElementById("nachname").value;
  let country = document.getElementById("land").value;
  console.log(`Full Name: ${vorName} ${nachName}, Land: ${country}`);
};

// LvL 2_3
let navChange = document.getElementById("navChange");

let changeMe = () => {
  navHome.style.backgroundColor = "#f6c89f";
  navHome.style.color = "#333";
  navNews.style.backgroundColor = "#ffe7d1";
  navNews.style.color = "#333";
  navContact.style.backgroundColor = "#4b8e8d";
  navContact.style.color = "#333";
  navChange.style.backgroundColor = "#396362";
  navChange.style.color = "#333";
};

// LvL 2_4
let button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let farbeAuswaehlen =
    document.getElementById("farbeAuswaehlen").selectedIndex;
  switch (farbeAuswaehlen) {
    case 0:
      document.body.style.backgroundColor = "mediumorchid";
      break;
    case 1:
      document.body.style.backgroundColor = "mintcream";
      break;
    case 2:
      document.body.style.backgroundColor = "dodgerblue";
      break;
    case 3:
      document.body.style.backgroundColor = "goldenrod";
      break;
    case 4:
      document.body.style.backgroundColor = "wheat";
      break;
    case 5:
      document.body.style.backgroundColor = "mediuturquoise";
      break;
    case 6:
      document.body.style.backgroundColor = "moccasin";
      break;
    case 7:
      document.body.style.backgroundColor = "firebrick";
      break;
    case 8:
      document.body.style.backgroundColor = "limegreen";
      break;
    case 9:
      document.body.style.backgroundColor = "slategray";
      break;
  }
});

// LvL 2_10
let div = document.getElementById("element");

function smallstyle() {
  div.classList.remove("middle");
  div.classList.remove("big");
  div.classList.add("small");
}

function middle() {
  div.classList.remove("small");
  div.classList.remove("big");
  div.classList.add("middle");
}

function big() {
  div.classList.remove("small");
  div.classList.remove("middle");
  div.classList.add("big");
}
