var mdp = document.getElementById("newPassword");
var confMdp = document.getElementById("ConfPassword");


function setCookie (cname, cvalue, exdays) {
    var d =new Date()
    d.setTime(d.getTime() + (exdays * 60 * 60 * 24 *1000))

    var expire = "expires=" + d.toUTCString()

    document.cookie = cname + "=" + cvalue + ";" + expire + ";path=/";

}

function compare(a, b) {
    if (a === b) return true;
    else return false;
}

document.getElementById('name').addEventListener('input', function() {
    let username = document.getElementById('newUsername');
    let name = document.getElementById('name').value.trim();

        let firstWord = name.split(' ')[0];
        let lowercaseFirstWord = firstWord.toLowerCase();
        username.value = lowercaseFirstWord;

});

mdp.addEventListener('input', function() {
    if (compare(mdp.value, confMdp.value)) {
        confMdp.style.backgroundColor = "#90ee90";
    }else {
        confMdp.style.backgroundColor = "pink";
    }
})

confMdp.addEventListener('input', function() {
    if (compare(mdp.value, confMdp.value)) {
        confMdp.style.backgroundColor = "#90ee90";
    }else {
        confMdp.style.backgroundColor = "pink";
    }
})

async function searchIFexists(login) {
    try {
        const response = await fetch('https://api-xeon.000webhostapp.com/users.php');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        const userInfo = userData.find(user => user.login === login);
        return !!userInfo; // Convertit en un booléen (true/false)
    } catch (error) {
        console.error('Error fetching data:', error);
        return false; // En cas d'erreur, renvoie false
    }
}

document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    console.log('Creezz');

    if (compare(mdp.value, confMdp.value)) {
        const formData = {
            name : document.getElementById('name').value,
            email : document.getElementById('mail').value,
            login : document.getElementById('newUsername').value,
            password : document.getElementById('newPassword').value
        };

        const userExists = await searchIFexists(formData.login);

        if (!userExists) {
            // Effectuer la requête POST car l'utilisateur n'existe pas encore
            fetch('https://api-xeon.000webhostapp.com/users.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                alert(data.message);
                setCookie('username', newUsername, 30);
                setCookie('password', newPassword, 30);
                window.location.href = './../pages/accueil.html';
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Une erreur s\'est produite lors de l\'ajout de l\'utilisateur');
            });
        } else {
            alert('Un utilisateur avec le même LOGIN existe déjà !');
        }
    } else {
        alert('Les mots de passe ne correspondent pas');
    }
});



