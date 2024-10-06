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

const backToTopButton = document.getElementById("back-top");

// Show the button when the user scrolls down 200px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the button is clicked, scroll to the top of the page
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
});

// Get the button and submenu elements
const toggleButton = document.getElementById("open-submenu-btn");
const submenu = document.getElementById("submenu");
const icon = toggleButton.querySelector(".icon-plus");

// Add a click event listener to toggle the submenu
toggleButton.addEventListener("click", () => {
  // Toggle submenu visibility
  submenu.classList.toggle("active");

  // Toggle between "+" and "-" icon
  if (submenu.classList.contains("active")) {
    icon.textContent = "-"; // Change to minus icon
  } else {
    icon.textContent = "+"; // Change to plus icon
  }
});

//open sub-menu navigation desktop
const openSubMenuNav = document.querySelector(".sub-menu-opener");
const subMenu = document.getElementById("submenu");

openSubMenuNav.addEventListener("click", (e) => {
  // Toggle submenu visibility
  subMenu.classList.toggle("active");
  e.stopPropagation();
});
