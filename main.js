// This controls the sideNav highlighting
// Grab all the buttons in container2 and store them in a collection called sideNavButtons
const sideNavButtons = Array.from(document.getElementById("container2").children);

sideNavButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove "active" class from all buttons
      sideNavButtons.forEach((btn) => btn.classList.remove('activeSNB'));
      // Add "active" class to the clicked button
      button.classList.add('activeSNB');
    });
  });