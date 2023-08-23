const headlineOriginalText = "1DV610 - L0 Börja programmera igen";
var timerId;

const handleSubmit = (ev) => {
  ev.preventDefault();
  const headline = document.querySelector("#headline");
  const name = document.querySelector("#name").value;
  let data = headlineOriginalText;
  const error = document.querySelector("#error");

  if (name) {
    if (name === "Börje") {
      handleError(name, error);
    } else {
      error.innerText = "";
      error.style.visibility = "hidden";
      data = data.replace(/Börja/, `${name} börja`);
      headline.innerText = data;
      setTimeout(() => {
      timerId = setInterval(funStuff, 1000);
      }, 3000);
    }
  } else {
    handleError(name, error);
  }
};

const handleError = (name = "", error) => {
  const text1 = "Det var ditt namn och inte Börjes som vi sökte!";
  const text2 = "Du får nog skriva in ditt namn Börje!";
  error.style.visibility = "visible";

  name.length > 0 ? (error.innerText = text1) : (error.innerText = text2);
};


const funStuff = () => {
  const headline = document.querySelector("#headline");
  let data = headline.textContent;
  dataArray = data.split(" ");
  dataArray.sort(() => Math.random() - 0.5);
  headline.innerText = dataArray.join(" ");
}

const start = () => {
  document.querySelector("#headline").innerText = headlineOriginalText;
}

start();

document.querySelector("#nameForm").addEventListener("submit", handleSubmit);

window.addEventListener("beforeunload", () => {
  clearInterval(timerId);
});
