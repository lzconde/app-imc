const alertError = {
    alertBox: document.querySelector(".alert-error"),

    open(){
        alertError.alertBox.classList.add("open")
    },

    close(){
       alertError.alertBox.classList.remove("open")
    }
}



export { alertError }