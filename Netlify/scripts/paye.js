const payeForm = document.getElementById('payeForm');
const mobile = document.getElementById('numero');

payeForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher le rechargement de la page
    var num = mobile.value

    window.location.href = "./../pages/scan.html"
});