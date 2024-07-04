const buttonOpenProfile = document.getElementById("profileclose")
const modalProfile = document.querySelector(".modal.modal-profile")
const closeProfile = document.getElementById("close1")

const buttonOpenMessage = document.getElementById("open2")
const modalMessage = document.querySelector(".modal-2")
const closeMessage = document.getElementById("close2")

const buttonOpenNotifaction = document.getElementById("open3")
const modalNotification = document.querySelector(".modal-1")
const closeNotification = document.getElementById("close3")


const loader = document.querySelector(".loader")


function openModalProfile () {
   buttonOpenProfile.classList.add("active")

   if(modalMessage.style.visibility= "visible") {
    modalNotification.classList.add("hide")
   }

//    if(modalMessage.style.visibilty= "visible") {
        
//         if(modalNotification.style.visibility= "visible") {
//             modalNotification.classList.add("hide")
//             modalMessage.classList.add("hide")

//             modalProfile.classList.remove("hide")
//             function closeModalProfile () {
//                 buttonOpenProfile.classList.remove("active")

//                 setTimeout(() => {
//                     modalProfile.classList.add("hide")
//                 }, 500)
//             }
        
//             closeProfile.addEventListener("click", closeModalProfile)
//         }

//     }


}

function openModalMessage () {
    modalMessage.classList.remove("hide")
    

    if(modalProfile.style.visibility = "visible") {

        if(modalNotification.style.visibility = "visible") {
            modalNotification.classList.add("hide")
            modalProfile.classList.add("hide")
        }
    }

    function closeModalMessage () {
        modalMessage.classList.add("hide")
        // console.log("click")
    }

    closeMessage.addEventListener("click", closeModalMessage)
}

function openModalNotification () {
    modalNotification.classList.remove("hide")

    function closeModalNotification () {
        modalNotification.classList.add("hide")
    }

    closeNotification.addEventListener("click", closeModalNotification)
}



buttonOpenProfile.addEventListener("click", openModalProfile)

buttonOpenMessage.addEventListener("click", openModalMessage)

buttonOpenNotifaction.addEventListener("click", openModalNotification)

// function stopLoader () { 
//     setTimeout(() => {
//         loader.classList.add("hide")
//     }, 5100)

// }

// window.addEventListener("load", stopLoader)
