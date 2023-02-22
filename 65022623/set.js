document.addEventListener("DOMContentLoaded", function() {
  const fname = document.querySelector('.fname');
  const lname = document.querySelector('.lname');
  const gender = document.getElementById('lg');
  const dob = document.getElementsByName('name')[1];
  const table = document.getElementById('myTable');

  function validateForm(event) {
    if (fname.value.trim() === '' || lname.value.trim() === '' || gender.value === '' || dob.value === '') {
      event.preventDefault();
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else {
      event.preventDefault();
      const row = table.insertRow(-1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      cell1.innerHTML = fname.value;
      cell2.innerHTML = lname.value;
      cell3.innerHTML = gender.options[gender.selectedIndex].text;
      cell4.innerHTML = dob.value;
      fname.value = '';
      lname.value = '';
      gender.selectedIndex = 0;
      dob.value = '';
    }
  }

  fname.addEventListener('input', function() {
    if (fname.value.length > 0) {
      fname.classList.add('filled');
    } else {
      fname.classList.remove('filled');
    }
  });

  lname.addEventListener('input', function() {
    if (lname.value.length > 0) {
      lname.classList.add('filled');
    } else {
      lname.classList.remove('filled');
    }
  });

  document.querySelector('form').addEventListener('submit', validateForm);
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');
  const table = document.querySelector('table');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const fname = document.querySelector('.fname').value;
    const lname = document.querySelector('.lname').value;
    const gender = document.querySelector('#lg').value;
    const dob = document.querySelector('input[type="date"]').value;
    

    const row = table.insertRow(-1);
    const fnameCell = row.insertCell(0);
    const lnameCell = row.insertCell(1);
    const genderCell = row.insertCell(2);
    const dobCell = row.insertCell(3);
    
    fnameCell.innerHTML = fname;
    lnameCell.innerHTML = lname;
    genderCell.innerHTML = gender;
    dobCell.innerHTML = dob;
    
  
    form.reset();
  });
});

