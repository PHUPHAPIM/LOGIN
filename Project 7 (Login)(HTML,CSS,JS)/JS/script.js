/* function myOnClick() {
    var x = document.getElementById("Pw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  */

let log = document.querySelector('btn');
let click = document.getElementById("Cb");
let show = document.getElementById("Pw");

click.onclick = () => {
    if (show.type === "password") {
      show.type = "text";
    } else {
      show.type = "password";
    }
}
