function addressFunction()
{
    var checkbox = document.getElementById("same");

    var firstName00 = document.getElementById("firstName00");
    var lastName00 = document.getElementById("lastName00"); 
    var address00 = document.getElementById("address00"); 
    var gender00 = document.getElementById("gender00"); 
    var phone00 = document.getElementById("phone00"); 
    var year00 = document.getElementById("year00"); 

    var firstName01 = document.getElementById("firstName01");
    var lastName01 = document.getElementById("lastName01");
    var address01 = document.getElementById("address01");
    var gender01 = document.getElementById("gender01");
    var phone01 = document.getElementById("phone01");
    var year01 = document.getElementById("year01");

    if (checkbox.checked == true) {
        firstName01.value = firstName00.value;
        lastName01.value = lastName00.value;
        address01.value = address00.value;
        gender01.value = gender00.value;
        phone01.value = phone00.value;
        year01.value = year00.value;
    }
    else {
        firstName01.value = "";
        lastName01.value = "";
        address01.value = "";
        gender01.value = "";
        phone01.value = "";
        year01.value = "";
    }
}

function checkvalid() {

    var firstName00 = document.getElementById("firstName00");
    var lastName00 = document.getElementById("lastName00");
    var address00 = document.getElementById("address00");
    var gender00 = document.getElementById("gender00");
    var phone00 = document.getElementById("phone00");
    var year00 = document.getElementById("year00");

    var firstName01 = document.getElementById("firstName01");
    var lastName01 = document.getElementById("lastName01");
    var address01 = document.getElementById("address01");
    var gender01 = document.getElementById("gender01");
    var phone01 = document.getElementById("phone01");
    var year01 = document.getElementById("year01");

    if (!firstName.checkValidity()) {
        firstName.setCustomValidity("First Name can't be empty.");
        firstName.reportValidity();
    } else if (!lastName.checkValidity()) {
        firstName.setCustomValidity(" Last Name can't be empty.");
        firstName.reportValidity();
    }
}












      = document.getElementById("firstName00").value;
      = document.getElementById("lastName00").value;
      = document.getElementById("address00").value;
      = document.getElementById("gender00").value;
      = document.getElementById("phone00").value;
      = document.getElementById("year00").value;

        document.getElementById("firstName01").value = "";
        document.getElementById("lastName01").value = "";
        document.getElementById("address01").value = "";
        document.getElementById("gender01").value = "";
        document.getElementById("phone01").value = "";
        document.getElementById("year01").value = "";

}