let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let result = "";
let evaluated = false;

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === "=") {
            try {
                result = result.replace(/%\*/g, "/100*");
                result = eval(result);
                input.value = result;
                evaluated = true;
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
        } else if (buttonText === "+/-") {

            if (result.length > 0) {
                if (result.startsWith("-")) {
                    result = result.substring(1);
                } else {
                    result = "-" + result;
                }
                input.value = result;
            }
        } else {
            if (evaluated) {
                if (!isNaN(buttonText)) {
                    result = buttonText;
                } else {
                    result += buttonText;
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
