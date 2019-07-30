onmessage = e => {
  console.log("Worker: message received from main script");
  let result = e.data[0] * e.data[1];

  if (isNaN(result)) {
    postMessage("Please write two numbers");
  } else {
    let workerResult = "Result: " + result;
    console.log("Worker: Post message back to main script");
    postMessage(workerResult);
  }
};
