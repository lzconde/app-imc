import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { calcIMC, notANumber } from './utils.js'

// Variables 

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")




form.onsubmit = event => {
    event.preventDefault()

    let weight = Number(inputWeight.value)
    let height = Number(inputHeight.value)

    const weightOrHeightIsNotANumber= notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber){
        alertError.open()
        return
    }

    let result = calcIMC(weight, height)
    
    displayMessageResult(result)
    Modal.open()
   
}

inputHeight.addEventListener("input", () => alertError.close())

inputWeight.addEventListener("input", () => alertError.close())

function displayMessageResult(result){
    let message = `Seu IMC é de ${result}`


    Modal.message.innerText = message
}




