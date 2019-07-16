function doIt(par) {
    var num1 = document.getElementById("inputNum1").value;
    var num2 = document.getElementById("inputNum2").value;

    if (par == "+") {
        document.getElementById("resultSpan").innerText = parseFloat(num1) + parseFloat(num2);
    }
    if (par == "-") {
        document.getElementById("resultSpan").innerText = parseFloat(num1) - parseFloat(num2);
    }
    if (par == "*") {
        document.getElementById("resultSpan").innerText = parseFloat(num1) * parseFloat(num2);
    }
    if (par == "/") {
        document.getElementById("resultSpan").innerText = parseFloat(num1) / parseFloat(num2);
    }

}