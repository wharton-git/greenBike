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
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('https://api-xeon.000webhostapp.com/users.php').then (response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    }).then (userData => {
        const userInfo = userData.find(user => user.login === username);
        console.log(userInfo)
        if (userInfo) {
            if (userInfo.password === password) {
                setCookie('username', username, 30);
                setCookie('password', password, 30);
                window.location.href = './pages/accueil.html';
            } else {
                alert("Mot de passe incorrect")
            }
        }
        else {
            alert("Utilisateur non trouvé")
        }
    })
});


// Fonction pour récupérer les données depuis l'API
function getJoursFromAPI() {
    fetch('http://localhost/Api/users.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Traitement des données récupérées (par exemple, affichage dans la console)
        console.log('Données récupérées depuis l\'API:', data);
        // Vous pouvez maintenant utiliser ces données dans votre application front-end
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

// Appel de la fonction pour récupérer les données
getJoursFromAPI();

