
const calcText = document.getElementById("calc-text")
const buttons = document.querySelectorAll('button:not(#clear):not(#equal)')
const clearButton = document.getElementById('clear')
const equalButton = document.getElementById('equal')

for (const button of buttons) {
    button.addEventListener('click', appendText);
}

clearButton.addEventListener('click', clearText);
equalButton.addEventListener('click', findVal);

function appendText(event) {
    const text = event.currentTarget.innerText;
    calcText.innerText += text
}

function clearText() {
    calcText.innerText = "";
}

function findVal() {
    let text = calcText.innerText
    let i = 1;
    let number = parseFloat(text.split());
    const textLength = text.length
    while (i < textLength) {
        if (isNaN(text[i])) {
            switch (text[i]) {
                case '+':
                    i += 1;
                    number += parseInt(text.substring(i, textLength).split());
                    break;
                case '-':
                    i += 1;
                    number -= parseInt(text.substring(i, textLength).split());
                    break;
                case 'x':
                    i += 1;
                    number *= parseInt(text.substring(i, textLength).split());
                    break;
                case '/':
                    i += 1;
                    number /= parseInt(text.substring(i, textLength).split());
                    break;
                case '.':
                    i += 1
                    break
                default:
                    alert(`Error, invalid value input: ${text[i]}`)
                    i = textLength
                    break;
            }
        } else {
            i += 1
        }
    }
    calcText.innerText = number
}