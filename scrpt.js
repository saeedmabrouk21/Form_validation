const patterns = {
  name: /^[a-z].{7,19}$/i,
  password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
  email: /^[a-zA-Z].{0,}@[a-zA-Z]{1,}[.]com$/,
  id: /^[0-9]{19}/,
};
const namein = document.querySelector("#fname");
namein.addEventListener("change", () => {
  const label = document.getElementsByClassName("hintname");
  const message =
    "name must at least 8 characters , at max 20 characters and start with a english character";
  check(namein, patterns.name, "hintname", label, message);
});

const passwordin = document.querySelector("#fpassword");
passwordin.addEventListener("change", () => {
  const label = document.getElementsByClassName("hintpassword");
  const message =
    "Password must me more than 8 characters and less than 16 . Password must contain lower case and upper case letter and one symbol atleast";
  check(passwordin, patterns.password, "hintpassword", label, message);
});

const emailin = document.querySelector("#femail");
emailin.addEventListener("change", () => {
  const label = document.getElementsByClassName("hintemail");
  const message = "email must be like host@domin.com";
  check(emailin, patterns.email, "hintemail", label, message);
});

const idin = document.querySelector("#fid");
idin.addEventListener("change", () => {
  const label = document.getElementsByClassName("hintid");
  const message = "ID must me 19 number";
  check(idin, patterns.id, "hintid", label, message);
});

function check(htmlnode, regex, hintname, label, message) {
  console.log(label);
  if (regex.test(htmlnode.value)) {
    htmlnode.setAttribute("style", "border-bottom: 2px green  solid;");
    if (label != null) {
      label[0].parentNode.removeChild(label[0]);
    }
  } else {
    htmlnode.setAttribute("style", "border-bottom: 2px red solid;");
    if (label[0] == null) {
      const mylabel = document.createElement("span");
      mylabel.textContent = message;
      mylabel.setAttribute("class", "hintlabel");
      mylabel.classList.add(`${hintname}`);
      htmlnode.parentNode.insertAdjacentHTML("afterend", mylabel.outerHTML);
    }
  }
}
