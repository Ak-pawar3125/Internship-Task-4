let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let result = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === "=") {
            try {
                result = result.replace(/%\*/g, "/100*"); // Convert `%*` to `/100*`
                result = eval(result);
                input.value = result;
            } catch (error) {
                input.value = "Error";
                result = "";
            }
        } else if (buttonText === "AC") {
            result = "";
            input.value = result;
        } else if (buttonText === "DEL") {
            result = result.substring(0, result.length - 1);
            input.value = result;
        } else if (buttonText === "%") {
            result += "%";
            input.value = result;
        } else {
            if (result.includes("%") && !result.includes("%*") && !isNaN(buttonText)) {
                result = result.replace("%", "%*");
            }

            result += buttonText;
            input.value = result;
        }
    });
});
