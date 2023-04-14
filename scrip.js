
// Define a function to show the project details when the user clicks on a project.
function showDetails(event) {
  // Get the clicked project element.
  const project = event.target.closest('.project');
  
  // If the project element exists, toggle its "active" class to show or hide the details.
  if (project) {
    project.classList.toggle('active');
  }
}

// Add an event listener to the document for click events.
document.addEventListener('click', showDetails);
