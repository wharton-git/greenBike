const offre300 = document.getElementById("offre1")
const offre600 = document.getElementById("offre2")
const offre1000 = document.getAnimations("offre3")
const offre2000 = document.getAnimations("offre4")



offre300.addEventListener('click', function() {
    window.location.href = "./../pages/payement.html?oo=" + encodeURIComponent(300)
})

offre600.addEventListener('click', function() {
    window.location.href = "./../pages/payement.html?oo=" + encodeURIComponent(600)
})

offre1000.addEventListener('click', function() {
    window.location.href = "./../pages/payement.html?oo=" + encodeURIComponent(600)
})

offre2000.addEventListener('click', function() {
    window.location.href = "./../pages/payement.html?oo=" + encodeURIComponent(2000)
})