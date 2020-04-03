const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.modal__close-btn');



function removeModel(){
    modalContainer.classList.add('modal__remove');
}

closeBtn.addEventListener('click', removeModel)