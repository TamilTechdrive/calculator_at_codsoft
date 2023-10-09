let prevRecords = [];
let lastInputWasOperator = false;

function scrollInputToLeft() {
    let screen = document.getElementById("screen");
    screen.scrollLeft = screen.scrollWidth; 
}

function display(value) {
    let screen = document.getElementById("screen");
    if (lastInputWasOperator && "+-*/%".includes(value)) {
        if (value === "*") {
            screen.value = screen.value.slice(0, -1) + "x";
        } else {
            screen.value = screen.value.slice(0, -1) + value;
        }
    } else {
        if (value === "*") {
            screen.value += "x";
        } else {
            screen.value += value;
        }
    }
    lastInputWasOperator = "+-*/%".includes(value);
    scrollInputToLeft();
}

function solve() {
    let x = document.getElementById("screen").value;
    try {
        // Replace "x" with "*"
        x = x.replace(/x/g, '*');
        let y = eval(x);
        document.getElementById("screen").value = y;
        // Replace "*" with "x" for display
        updatePrevRecords(x.replace(/\*/g, "x") + " = " + y); 
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
    lastInputWasOperator = false;
    scrollInputToLeft();
}

function clr() {
    document.getElementById("screen").value = "";
    document.getElementById("prevRecords").value = "";
    prevRecords = [];
    lastInputWasOperator = false;
}

function backspace() {
    let screen = document.getElementById("screen");
    screen.value = screen.value.substring(0, screen.value.length - 1);
    lastInputWasOperator = "+-*/%".includes(screen.value.slice(-1));
}

function updatePrevRecords(value) {
    prevRecords.push(value);
    let prevRecordsInput = document.getElementById("prevRecords");
    prevRecordsInput.value = prevRecords.join(")(");

    prevRecordsInput.scrollLeft = prevRecordsInput.scrollWidth;
}

// squared value
function square() {
    let x = document.getElementById("screen").value;
    if (x !== "") {
        x = parseFloat(x);
        let squaredValue = x * x; 
        document.getElementById("screen").value = squaredValue;
    }
}

// square root
function sqrt() {
    let x = document.getElementById("screen").value;
    if (x !== "") {
        x = parseFloat(x); 
        if (x >= 0) {
            let squareRoot = Math.sqrt(x);
            document.getElementById("screen").value = squareRoot;
        } else {
            document.getElementById("screen").value = "Error";
        }
    }
}

// sign of the number
function toggleSign() {
    let x = document.getElementById("screen").value;
    if (x !== "") {
        x = parseFloat(x);
        x = -x; 
        document.getElementById("screen").value = x;
    }
}

// reciprocal of the number (1/x)
function reciprocal() {
    let x = document.getElementById("screen").value;
    if (x !== "") {
        x = parseFloat(x);
        if (x !== 0) {
            let reciprocalValue = 1 / x; 
            document.getElementById("screen").value = reciprocalValue;
        } else {
            document.getElementById("screen").value = "Error";
        }
    }
}


