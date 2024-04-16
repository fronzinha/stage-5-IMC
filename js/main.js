import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculeteIMC, notNumber } from "./utils.js"

// Váriaveis
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = (e) => {
    e.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return
    }

    AlertError.close()

    const result = calculeteIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de: ${result}`
    Modal.message.innerText = message
    Modal.open()
}