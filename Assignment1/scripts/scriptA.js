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
    formData["title"] = document.getElementById("title").value;
    formData["description"] = document.getElementById("description").value;
    formData["dos"] = document.getElementById("dos").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.description;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dos;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("dos").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("description").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dos").value = selectedRow.cells[2].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.description;
    selectedRow.cells[2].innerHTML = formData.dos;

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
    var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (document.getElementById("title").value == "") {
        isValid = false;
        document.getElementById("titleValidationError").classList.remove("hide");
    } 
    else if (document.getElementById("title").value.length > 20 ) {
        isValid = false;
        document.getElementById("titleeoverflowError").classList.remove("hide");
    }
    else if (/\d/.test(document.getElementById("title").value) ) {
        isValid = false;
        document.getElementById("titlenumericError").classList.remove("hide");
        
    }
    else if (format.test(document.getElementById("title").value) ) {
        isValid = false;
        document.getElementById("titlespecialcharError").classList.remove("hide");
    }  
    else {
        isValid = true;
        if (!document.getElementById("titleValidationError").classList.contains("hide"))
            document.getElementById("titleValidationError").classList.add("hide");
            (!document.getElementById("titleeoverflowError").classList.contains("hide"))
            document.getElementById("titleeoverflowError").classList.add("hide");
            (!document.getElementById("titlenumericError").classList.contains("hide"))
            document.getElementById("titlenumericError").classList.add("hide");
            (!document.getElementById("titlespecialcharError").classList.contains("hide"))
            document.getElementById("titlespecialcharError").classList.add("hide");
    }
    return isValid;
}