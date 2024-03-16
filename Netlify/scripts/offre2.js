const montantOffre = document.getElementById('montantOffre');

const payeForm = document.getElementById('montantOffre');

console.log(montantOffre + "ito eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
console.log(payeForm + "ito eeeeeee")

montantOffre.addEventListener('click', function() {
    console.log("Clické")
})

var params = new URLSearchParams(window.location.search);
var montant = params.get("oo");
console.log(montant);

montantOffre.innerText = montant