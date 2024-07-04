const iconMessage = document.getElementById("message")
const messageModal = document.querySelector(".modal-n")
const closeModal = document.getElementById("close-message")
const modalMessageContent = document.querySelector(".modal-n .modal-content")

function showMessage () {
    messageModal.classList.add("show")
    modalMessageContent.style.top = "70px"

    function closeMessage () {
       
        modalMessageContent.style.top = "150px"
        setTimeout(() => {
            messageModal.classList.remove("show")
        }, 50)
    }

    closeModal.addEventListener("click", closeMessage)
}

iconMessage.addEventListener("click", showMessage)