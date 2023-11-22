const resultElementBox = document.getElementById('result')
const inputNumberFirst = document.getElementById('input-first')
const inputNumberSecond = document.getElementById('input-second')
const buttonSubmit = document.getElementById('btn-submit')
const buttonPlus = document.getElementById('plus')
const buttonMinus = document.getElementById('minus')
let action = "+"



buttonPlus.onclick = () => {
    action = '+'

}

buttonMinus.onclick = () => {
    action = '-'
}

buttonSubmit.onclick = function () {
    const result = calculatorAction(inputNumberFirst, inputNumberSecond, action)
    printResult(result)
}

function calculatorAction(valueFirst, valueSecond, action) {
    const number = Number(valueFirst.value)
    const number2 = Number(valueSecond.value)

    return action == '+' ? number + number2 : number - number2
}

function printResult(result) {
    if (result < 0) {
        resultElementBox.style.color = '#e82e2e'
    }
    else {
        resultElementBox.style.color = '#00a550'
    }
    resultElementBox.textContent = result
}