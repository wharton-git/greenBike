// Fonction pour gérer la soumission du formulaire de création de compte
function setCookie (cname, cvalue, exdays) {
    var d =new Date()
    d.setTime(d.getTime() + (exdays * 60 * 60 * 24 *1000))

    var expire = "expires=" + d.toUTCString()

    document.cookie = cname + "=" + cvalue + ";" + expire + ";path=/";

}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    console.log('Creezz')

    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    // Stocker les informations du nouveau compte dans des cookies
    setCookie('username', newUsername, 30);
    setCookie('password', newPassword, 30);
    console.log('Cree')

    // Afficher un message de succès ou rediriger l'utilisateur vers la page de connexion
    alert('Compte créé avec succès. Vous pouvez maintenant vous connecter.');
    window.location.href = './../pages/accueil.html';
});