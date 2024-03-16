const drop = document.getElementById('drop');
const dropMenu = document.getElementById('dropMenu');

console.log(drop);

drop.addEventListener('click', function() {
    console.log("Click Drop")
    console.log(drop.classList.contains("dropDisable"))
    if (drop.classList.contains('dropDisable') == true) {
        drop.classList.remove('dropDisable');
        drop.classList.add('dropEnable');
        dropMenu.classList.remove('hidden');
        dropMenu.classList.add('show');
        console.log("Disable niala")
    }else if (drop.classList.contains('dropEnable') == true) {
        drop.classList.remove('dropEnable');
        drop.classList.add('dropDisable');
        dropMenu.classList.remove('show');
        dropMenu.classList.add('hidden')
    }
})