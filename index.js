function takeInput() {
  let ops1 = document.getElementById("op1").value;
  let ops2 = document.getElementById("op2").value;

  let operator = document.getElementById("operator").value;

  // just declaring the result without asserting any value to it.
  let result;

  // convert value to integers

  ops1 = Number.parseInt(ops1);
  ops2 = Number.parseInt(ops2);

  switch (operator) {
    case "+":
      result = ops1 + ops2;
      break;
    case "-":
      result = ops1 - ops2;
      break;
    case "*":
      result = ops1 * ops2;
      break;
    case "/":
      result = ops1 / ops2;
      break;
  }

  document.getElementById("result1").innerHTML = result;
}

function eval_value() {
  try {
    let expression = eval(document.getElementById("exp").value);

    // checking if the result is valid or not
    if (expression === "Infinity" || expression === "undefined") {
      throw new Error('Incorrect Input');
    } else {
      // print the result in span tag
      document.getElementById("result2").innerHTML = expression;
    }
  } catch (e) {
    // printing the error msg here
    alert(e.message);
  }
}
