
document.getElementById('logoutBtn').addEventListener('click', function() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Rediriger l'utilisateur vers la page de connexion ou une autre page
    window.location.href = './../index.html';
})

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

var loggedInUser = getCookie('username');
if (loggedInUser === '') {
// Rediriger l'utilisateur vers la page de tableau de bord ou une autre page
    window.location.href = './../index.html';
}