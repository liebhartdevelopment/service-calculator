const first = document.querySelector("#number1"),
  second = document.querySelector("#number2"),
  result = document.querySelector(".result");

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  first.onchange = () => {
    myWorker.postMessage([first.nodeValue, second.value]);
    console.log("Message posted to Worker");
  };

  second.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("Message posted to Worker");
  };

  myWorker.onmessage = e => {
    result.textContent = e.data;
    console.log("Message received from Worker");
  };
} else {
  console.log("Your browser doesn't support web workers");
  alert("Your browser doesn't support web workers.");
}
