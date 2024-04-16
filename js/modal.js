export const Modal = {

    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".close"),

    open() {
        Modal.wrapper.classList.add("open")
    },
    close() {
        Modal.wrapper.classList.remove('open');
    }
}

Modal.buttonClose.addEventListener('click', () => {
    Modal.close()
})

window.addEventListener("keydown", handleKeyDown)

function handleKeyDown(e) {
    if (e.key === 'Escape') {
        Modal.close()
    }
}