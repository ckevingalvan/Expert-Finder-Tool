
function toggleCategorySection() {
  var coursesSection = document.getElementById("categoryOption");
  coursesSection.classList.toggle("hidden");
}



// dito yung para sa visibility nung data container
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const box = document.getElementById("dataContainer");

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", function() {
    // Check if there is at least one checked checkbox
    const isChecked = Array.from(checkboxes).some(cb => cb.checked);
    if (isChecked) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    } 
  });
});






