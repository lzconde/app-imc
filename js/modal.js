const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal h2"),
    btnClose: document.querySelector(".close"),
    
    open(){
        Modal.wrapper.classList.add("open")
    },

    close(){
        Modal.wrapper.classList.remove("open")
    }
}

Modal.btnClose.addEventListener("click", () => {
    Modal.close()
})

window.addEventListener("keydown", event => {
    if(event.key == 'Escape'){
        Modal.close()
    }
})

export { Modal }