function setCookie (cname, cvalue, exdays) {
    var d =new Date()
    d.setTime(d.getTime() + (exdays * 60 * 60 * 24 *1000))

    var expire = "expires=" + d.toUTCString()

    document.cookie = cname + "=" + cvalue + ";" + expire + ";path=/";

}

function getCookie(cname) {
    var name = cname + "="
    var decodedcookie = decodeURIComponent(document.cookie)

    var ca = decodedcookie.split(";")

    for (var i=0; i<ca.length; i++) {
        var c = ca[i]

        while (c.charAt(0) == ' ' ) {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return ""
}

// Vérifier si l'utilisateur est déjà connecté
var loggedInUser = getCookie('username');
if (loggedInUser !== '') {
// Rediriger l'utilisateur vers la page de tableau de bord ou une autre page
    window.location.href = './../pages/accueil.html';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Vérifier les informations de connexion avec les données stockées dans le cookie
    var storedUsername = getCookie('username');
    var storedPassword = getCookie('password');

    if (username === storedUsername && password === storedPassword) {
    // Rediriger l'utilisateur vers la page de tableau de bord
    window.location.href = './pages/accueil.html';
    } else {
    alert("Utilisateur non trouvé")
    }
});
