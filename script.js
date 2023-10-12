function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = (document.getElementById('male').checked ? 'Male ' : '') + 
                 (document.getElementById('female').checked ? 'Female' : '');
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;

    if (firstName && lastName && dob && country && gender && profession && email && mobileNumber) {
        var popupContent = `<p><strong>First Name:</strong> ${firstName}</p>`;
        popupContent += `<p><strong>Last Name:</strong> ${lastName}</p>`;
        popupContent += `<p><strong>Date of Birth:</strong> ${dob}</p>`;
        popupContent += `<p><strong>Country:</strong> ${country}</p>`;
        popupContent += `<p><strong>Gender:</strong> ${gender}</p>`;
        popupContent += `<p><strong>Profession:</strong> ${profession}</p>`;
        popupContent += `<p><strong>Email:</strong> ${email}</p>`;
        popupContent += `<p><strong>Mobile Number:</strong> ${mobileNumber}</p>`;

        document.getElementById('popupContent').innerHTML = popupContent;
        document.getElementById('overlay').style.display = 'flex';
    } else {
        alert('Please fill in all fields.');
    }
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('surveyForm').reset();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}
