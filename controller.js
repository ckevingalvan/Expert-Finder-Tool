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

  /*Add image */
  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('circle').style.backgroundImage = `url(${event.target.result})`;
      document.getElementById('circle').classList.add('selected');
    };
    reader.readAsDataURL(file);
    }
    
    document.getElementById('circle').addEventListener('click', function(event) {
    if (event.target.id === 'remove') {
      document.getElementById('circle').style.backgroundImage = '';
      document.getElementById('circle').classList.remove('selected');
    } else {
      document.getElementById('file-input').click();
    }
    });


