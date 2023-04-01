const addFormButton = document.getElementById('add-form');
      const formsContainer = document.getElementById('educInfo-forms');
      let formCount = 1;

      addFormButton.addEventListener('click', () => {
        formCount++;
        const newForm = document.createElement('div');
        newForm.classList.add('form');
        newForm.innerHTML = `
          <label for="degree-${formCount}">Degree:</label>
          <div class="form-radio">
            <input type="radio" name="degree-${formCount}" id="bachelor-${formCount}" value="bachelor" checked>
            <label for="bachelor-${formCount}">Bachelor's</label>
          </div>
          <div class="form-radio">
            <input type="radio" name="degree-${formCount}" id="masteral-${formCount}" value="masteral">
            <labelfor="masteral-${formCount}">Masteral's</label>
</div>
<div class="form-radio">
<input type="radio" name="degree-${formCount}" id="doctoral-${formCount}" value="doctoral">
<label for="doctoral-${formCount}">Doctoral's</label>
</div>
<label for="studied-in-${formCount}">Studied in:</label>
<input type="text" name="studied-in-${formCount}" id="studied-in-${formCount}">
<label for="education-${formCount}">Education:</label>
<input type="text" name="education-${formCount}" id="education-${formCount}">
`;
formsContainer.appendChild(newForm);
});

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
