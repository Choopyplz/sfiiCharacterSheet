// const grid = document.getElementById('grid');
// const selectedImage = document.getElementById('selectedImage');
// const imageIndexes = [ryuPS,hondaPS,blankaPS,guilePS];
// const selectedIndex = null;

// imageIndexes.forEach(i => {
//     const image = document.createElement('img');
//     image.src = `../assets/portraits/${i}.png`;
//     image.classList.add('gridImg');

//     image.addEventListener('click', () => {
        
//         selectedImage.src = `../assets/portraits/${i}.png`;
//     })

//     grid.appendChild(image);
// })

// Show Modal
const openModalButton = document.getElementById("open-modal");
const modalWindowOverlay = document.getElementById("modal-overlay");

const showModalWindow = () => {
    modalWindowOverlay.style.display = 'flex';
}
openModalButton.addEventListener("click", showModalWindow);


const closeModalButton = document.getElementById("close-modal");
const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none';
}
closeModalButton.addEventListener("click", hideModalWindow);


// Hide with click on overlay
const hideModalWindowOnBlur = (e) => {
    if(e.target === e.currentTarget) {
      console.log(e.target === e.currentTarget)
        hideModalWindow();
    }
}
modalWindowOverlay.addEventListener("click", hideModalWindowOnBlur)