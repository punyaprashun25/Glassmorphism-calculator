let equal_presses = 0;

// refer all input button
let button_input = document.querySelectorAll(".input-button");
// refer input, equal, clear, erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

// Access each class using forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (equal_presses == 1)
        {
            input.value = "";
            equal_presses = 0;
        }
        // display value of each button
        input.value += button_class.value;
    });
});

// solve the user's input when clicked on equal sign
equal.addEventListener("click",() => {
    equal_presses = 1;
    let inp_val = input.value;
try
{
    let solution = eval(inp_val);
    if (Number.isInteger(solution))
    {
        input.value = solution;
    }
    else{
        input.value = solution.tofixed(2);
    }
}
catch(err)
{
    alert("Invalid input");
}
});

clear.addEventListener("click", () => {
    input.value = "";
});

erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});