var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        // resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["locationType"] = document.getElementById("locationType").value;
    formData["latitude"] = document.getElementById("latitude").value;
    formData["longitude"] = document.getElementById("longitude").value;
    formData["locationName"] = document.getElementById("locationName").value;
    return formData;
}

function insertNewRecord(data) {
    var tbody = document.getElementById("tableList").getElementsByTagName('tbody')[0];
    let tr = document.createElement("TR");
    let cell1 = document.createElement("TD");
    cell1.innerHTML = data.locationType;
    let cell2 = document.createElement("TD");
    cell2.innerHTML = data.latitude
    let cell3 = document.createElement("TD");
    cell3.innerHTML = data.longitude
    let cell4 = document.createElement("TD");
    cell4.innerHTML = data.locationName

    let cell5 = document.createElement("TD");
    let ActionShow = document.createElement("A");
    ActionShow.innerHTML = "Show"
    // let ActionDelete = document.createElement("A");
    ActionShow.setAttribute("onClick","showOn(this)");
    ActionShow.setAttribute("class","location-show");
    cell5.append(ActionShow);

    // let cell5 = document.createElement("TD");
    let ActionEdit = document.createElement("A");
    ActionEdit.innerHTML = "Edit"
    ActionEdit.setAttribute("onClick","onEdit(this)");
    ActionEdit.setAttribute("class","location-edit");
    cell5.append(ActionEdit);

    let ActionDelete = document.createElement("A");
    ActionDelete.innerHTML = "Delete"
    ActionDelete.setAttribute("onClick","onDelete(this)");
    ActionDelete.setAttribute("class","location-delete");
    cell5.append(ActionDelete);
    
resetForm()
    tr.append(cell1);
    tr.append(cell2);
    tr.append(cell3);
    tr.append(cell4);
    tr.append(cell5);
    tbody.append(tr)
    const lat = document.getElementById('latitude').value
    // lat.innerHTML = 'latitude'
    const lon = document.getElementById('longitude').value
    // lon.innerHTML = 'longitude'

    }

function resetForm() {
    document.getElementById("locationType").value = "";
    document.getElementById("latitude").value = "";
    document.getElementById("longitude").value = "";
    document.getElementById("locationName").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("locationType").value = selectedRow.cells[0].innerHTML;
    document.getElementById("latitude").value = selectedRow.cells[1].innerHTML;
    document.getElementById("longitude").value = selectedRow.cells[2].innerHTML;
    document.getElementById("locationName").value = selectedRow.cells[3].innerHTML;
}
resetForm()

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.locationType;
    selectedRow.cells[1].innerHTML = formData.latitude;
    selectedRow.cells[2].innerHTML = formData.longitude;
    selectedRow.cells[3].innerHTML = formData.locationName;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("locationType").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
// Range f
r.oninput = c ;
function c(){
    this.value =this.value;
    d.innerText =this.value;

}

