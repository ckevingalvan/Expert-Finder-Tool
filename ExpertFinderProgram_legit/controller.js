function toggleGraduateOptions() {
    var graduateOptions = document.getElementById("graduate-options");
    var masterOptions = document.getElementById("master-options");
    if (graduateOptions.style.display === "none") {
      graduateOptions.style.display = "block";
      masterOptions.style.display = "block";
    } else {
      graduateOptions.style.display = "none";
      masterOptions.style.display = "none";
    }
  }

  function toggleMasterOptions() {
    var masterOptions = document.getElementById("master-options");
    if (masterOptions.style.display === "none") {
      masterOptions.style.display = "block";
    } else {
      masterOptions.style.display = "none";
    }
  }

  function toggleUndergraduateOptions() {
    var undergraduateOptions = document.getElementById("undergraduate-options");
    if (undergraduateOptions.style.display === "none") {
      undergraduateOptions.style.display = "block";
    } else {
      undergraduateOptions.style.display = "none";
    }
  }




