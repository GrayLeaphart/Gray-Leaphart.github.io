function showForm() {
    var form = document.getElementById("vForm");
    form.style.display = "block";
}
function submitForm(event) {
    event.preventDefault();
    var form = document.getElementById("vForm");
    var successMessage = document.getElementById("SSubmit");
    form.style.display = "none"; 
    successMessage.style.display = "block"; 
}
window.onload = function() {
    var image = document.getElementById("slideImage");
    image.style.right = "50px";
}