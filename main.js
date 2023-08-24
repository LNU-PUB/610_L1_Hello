const headlineOriginalText = "1DV610 - L0 Börja programmera igen";
var timerId;

/**
 * Handles the submit event from the form.
 *
 * @param {SubmitEvent} ev - The submit event object associated with the form submission.
 */
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
        const hl = document.querySelector("#headline");
        hl.style.backgroundColor = "aliceblue";
        hl.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";
        hl.style.color = "navy";
      timerId = setInterval(funStuff, 1000);
      }, 3000);
    }
  } else {
    handleError(name, error);
  }
};

/**
 * Handles the error message.
 * 
 * @param {string} name - The name of the user.
 * @param {HTMLElement} error - The error message element.
 */
const handleError = (name = "", error) => {
  const text1 = "Det var ditt namn och inte Börjes som vi sökte!";
  const text2 = "Du får nog skriva in ditt namn Börje!";
  error.style.visibility = "visible";

  name.length > 0 ? (error.innerText = text1) : (error.innerText = text2);
};

/**
 * Handles the fun stuff.
 * Randomly moves the words around in the headline.
 */
const funStuff = () => {
  const headline = document.querySelector("#headline");
  let data = headline.textContent;
  dataArray = data.split(" ");
  dataArray.sort(() => Math.random() - 0.5);
  headline.innerText = dataArray.join(" ");
}

/**
 * Starts the application.
 */
const start = () => {
  document.querySelector("#headline").innerText = headlineOriginalText;
}

start();

// Add event listeners to the form.
document.querySelector("#nameForm").addEventListener("submit", handleSubmit);

window.addEventListener("beforeunload", () => {
  clearInterval(timerId);
});
