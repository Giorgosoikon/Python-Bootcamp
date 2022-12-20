var selectedRow = null

// Main function //
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
// Code for reading the form //
function readFormData() {
    var formData = {};
    formData["coursetitle"] = document.getElementById("coursetitle").value;
    formData["courselanguage"] = document.getElementById("courselanguage").value;
    formData["description"] = document.getElementById("description").value;
    formData["type"] = document.getElementById("type").value;
    return formData;
}

// Inserting new record //
function insertNewRecord(data) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.coursetitle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.courselanguage;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.description;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.type;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

// Reset form to blank //
function resetForm() {
    document.getElementById("coursetitle").value = "";
    document.getElementById("courselanguage").value = "";
    document.getElementById("description").value = "";
    document.getElementById("type").value = "";
    selectedRow = null;
}

// Edit the value of the cell //
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("coursetitle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("courselanguage").value = selectedRow.cells[1].innerHTML;
    document.getElementById("description").value = selectedRow.cells[2].innerHTML;
    document.getElementById("type").value = selectedRow.cells[3].innerHTML;
}

// Update the value of the cell //
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.coursetitle;
    selectedRow.cells[1].innerHTML = formData.courselanguage;
    selectedRow.cells[2].innerHTML = formData.description;
    selectedRow.cells[3].innerHTML = formData.type;
}

// Delete an existing row //
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("List").deleteRow(row.rowIndex);
        resetForm();
    }
}

// Validations //
function validate() {
    isValid = true;
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // Empty input validation //
    if (document.getElementById("coursetitle").value == "") {
        isValid = false;
        document.getElementById("coursetitleValidationError").classList.remove("hide");
    }
    // Max characters permission //
    else if (document.getElementById("coursetitle").value.length > 10 ) {
        isValid = false;
        document.getElementById("coursetitleoverflowError").classList.remove("hide");
    }
    // Not a number validation //
    else if (/\d/.test(document.getElementById("coursetitle").value) ) {
        isValid = false;
        document.getElementById("coursetitlenumericError").classList.remove("hide");
    }
    // Not special characters validation //
    else if (format.test(document.getElementById("coursetitle").value) ) {
        isValid = false;
        document.getElementById("coursetitlespecialcharError").classList.remove("hide");
    }
    // Reseting(hide) the error pop-ups //
     else {
        isValid = true;
        if (!document.getElementById("coursetitleValidationError").classList.contains("hide"))
            document.getElementById("coursetitleValidationError").classList.add("hide");
            (!document.getElementById("coursetitleoverflowError").classList.contains("hide"))
            document.getElementById("coursetitleoverflowError").classList.add("hide");
            (!document.getElementById("coursetitlenumericError").classList.contains("hide"))
            document.getElementById("coursetitlenumericError").classList.add("hide");
            (!document.getElementById("coursetitlespecialcharError").classList.contains("hide"))
            document.getElementById("coursetitlespecialcharError").classList.add("hide");
            
    }
    return isValid;
}