(() => {
  const refs = {
    openMobileBtn: document.querySelector("[data-modal-open]"),
    closeMobileBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openMobileBtn.addEventListener("click", toggleMobile);
  refs.closeMobileBtn.addEventListener("click", toggleMobile);

  function toggleMobile() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
