var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["subject"] = document.getElementById("subject").value;
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.subject;  
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("subject").value = "";
    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("subject").value = selectedRow.cells[2].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.subject;
   
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("List").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (document.getElementById("firstname").value == "") {
        isValid = false;
        document.getElementById("firstnameValidationError").classList.remove("hide");
    } 
    else if (document.getElementById("firstname").value.length > 10 ) {
        isValid = false;
        document.getElementById("firstnameeoverflowError").classList.remove("hide");
    }
    else if (/\d/.test(document.getElementById("firstname").value) ) {
        isValid = false;
        document.getElementById("firstnamenumericError").classList.remove("hide");
        
    }
    else if (format.test(document.getElementById("firstname").value) ) {
        isValid = false;
        document.getElementById("firstnamespecialcharError").classList.remove("hide");

    }
    if (document.getElementById("lastname").value == "") {
        isValid = false;
        document.getElementById("lastnameValidationError").classList.remove("hide");
    } 
    else if (document.getElementById("lastname").value.length > 10 ) {
        isValid = false;
        document.getElementById("lastnameeoverflowError").classList.remove("hide");
    }
    else if (/\d/.test(document.getElementById("lastname").value) ) {
        isValid = false;
        document.getElementById("lastnamenumericError").classList.remove("hide");
        
    }
    else if (format.test(document.getElementById("lastname").value) ) {
        isValid = false;
        document.getElementById("lastnamespecialcharError").classList.remove("hide");

    }
    else {
        isValid = true;
        if (!document.getElementById("firstnameValidationError").classList.contains("hide"))
            document.getElementById("firstnameValidationError").classList.add("hide");
            (!document.getElementById("firstnameeoverflowError").classList.contains("hide"))
            document.getElementById("firstnameeoverflowError").classList.add("hide");
            (!document.getElementById("firstnamenumericError").classList.contains("hide"))
            document.getElementById("firstnamenumericError").classList.add("hide");
            (!document.getElementById("firstnamespecialcharError").classList.contains("hide"))
            document.getElementById("firstnamespecialcharError").classList.add("hide");
            
            (!document.getElementById("lastnameValidationError").classList.contains("hide"))
            document.getElementById("lastnameValidationError").classList.add("hide");
            (!document.getElementById("lastnameeoverflowError").classList.contains("hide"))
            document.getElementById("lastnameeoverflowError").classList.add("hide");
            (!document.getElementById("lastnamenumericError").classList.contains("hide"))
            document.getElementById("lastnamenumericError").classList.add("hide");
            (!document.getElementById("lastnamespecialcharError").classList.contains("hide"))
            document.getElementById("lastnamespecialcharError").classList.add("hide");
    }
    return isValid;
}