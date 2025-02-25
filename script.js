let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let result = "";
let evaluated = false; // To track if '=' was pressed

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === "=") {
            try {
                result = result.replace(/%\*/g, "/100*"); // Convert `%*` to `/100*`
                result = eval(result);
                input.value = result;
                evaluated = true; // Mark that '=' was pressed
            } catch (error) {
                input.value = "Error";
                result = "";
            }
        } else if (buttonText === "AC") {
            result = "";
            input.value = result;
            evaluated = false;
        } else if (buttonText === "DEL") {
            result = result.substring(0, result.length - 1);
            input.value = result;
        } else if (buttonText === "%") {
            result += "%";
            input.value = result;
        } else {
            if (evaluated) {
                // If last button was '=', replace result only if a number is pressed
                if (!isNaN(buttonText)) {
                    result = buttonText;
                } else {
                    result += buttonText; // Append operator to previous result
                }
                evaluated = false;
            } else {
                if (result.includes("%") && !result.includes("%*") && !isNaN(buttonText)) {
                    result = result.replace("%", "%*");
                }
                result += buttonText;
            }
            input.value = result;
        }
    });
});
