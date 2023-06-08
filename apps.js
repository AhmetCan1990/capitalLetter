// The purpose of this coding challenge is to capitalize the first letter of each word in the given long text.
const text = document.getElementById("text");
const alertBox = document.getElementById("alert");
const submitBtn = document.getElementById("submit");
const clean = document.getElementById("clean");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (text.value) {
    let upperText = text.value.split(" ");
    upperText = upperText.map((item) =>
      item.replace(item[0], item[0].toUpperCase())
    );
    alertBox.innerText = upperText.reduce((acc, item) => acc + " " + item);
  } else alertBox.innerText = "Please, enter a text";
});
clean.addEventListener("click", () => window.location.reload(false));
