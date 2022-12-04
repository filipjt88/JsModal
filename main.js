let modalBtn   = document.querySelector(".modal-btn");
let modal      = document.querySelector(".modal-overlay");
let closeBtn   = document.querySelector(".close-btn");


modalBtn.addEventListener("click", () => {
    modal.classList.add('open-modal');
});


closeBtn.addEventListener("click", () => {
    modal.classList.remove('open-modal');
});
