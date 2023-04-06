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


    // experience
    const addFormButton_ex = document.getElementById('experience-btn');
    const formsContainer1 = document.getElementById('experience-forms');
    let formCount1 = 1;

    addFormButton_ex.addEventListener('click', () => {
    formCount1++;
    const newForm1 = document.createElement('contactInfo-form');
    newForm1.classList.add('experience-form');
    newForm1.innerHTML = `
        <label for="job-title-${formCount1}">Job Title:</label>
        <input type="text" name="job-title-${formCount1}" id="job-title-${formCount1}">
        <label for="work-place-${formCount}">Work place:</label>
        <input type="text" name="work-place-${formCount1}" id="work-place-${formCount1}">
        `;
        formsContainer1.appendChild(newForm1);
        });

// Contact Info
const addFormButtonContactInfo = document.getElementById('contactInfo-btn');
      const formsContainer_contact = document.getElementById('contactInfo-forms');
      let formCount_contact = 1;

      addFormButtonContactInfo.addEventListener('click', () => {
        formCount_contact++;
        const newForm_contact = document.createElement('div-contactInfo');
        newForm_contact.classList.add('contactInfo-form');
        newForm_contact.innerHTML = `
          <label for="email-${formCount_contact}">Email:</label>
          <input type="text" name="email-${formCount_contact}" id="email-${formCount_contact}">
          <label for="cp-${formCount_contact}">Cellphone Number:</label>
          <input type="text" name="cp-${formCount_contact}" id="cp-${formCount_contact}">
          <label for="college-dept-${formCount_contact}">College Department:</label>
          <input type="text" name="college-dept-${formCount_contact}" id="college-dept-${formCount_contact}">
          `;
          formsContainer_contact.appendChild(newForm_contact);
});